'use client';

import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';

interface CrowdCanvasProps {
  sources: string[];
  peepHeight?: number;
}

const randomRange = (min: number, max: number) =>
  min + Math.random() * (max - min);
const randomIndex = (arr: unknown[]) => (randomRange(0, arr.length) | 0);
const removeFromArray = <T,>(arr: T[], i: number) => arr.splice(i, 1)[0];
const removeItemFromArray = <T,>(arr: T[], item: T) =>
  removeFromArray(arr, arr.indexOf(item));
const removeRandomFromArray = <T,>(arr: T[]) =>
  removeFromArray(arr, randomIndex(arr));
const getRandomFromArray = <T,>(arr: T[]) => arr[randomIndex(arr) | 0];

type Peep = {
  image: HTMLImageElement;
  width: number;
  height: number;
  x: number;
  y: number;
  anchorY: number;
  scaleX: number;
  walk: gsap.core.Timeline | null;
  render: (ctx: CanvasRenderingContext2D) => void;
};

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load: ${src}`));
    img.src = src;
  });
}

export const CrowdCanvas = ({
  sources,
  peepHeight = 80,
}: CrowdCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !sources.length) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const stage = { width: 0, height: 0 };
    const allPeeps: Peep[] = [];
    const availablePeeps: Peep[] = [];
    const crowd: Peep[] = [];

    const resetPeep = (p: Peep) => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      const offsetY = 100 - 250 * gsap.parseEase('power2.in')(Math.random());
      const startY = stage.height - p.height + offsetY;
      let startX: number;
      let endX: number;

      if (direction === 1) {
        startX = -p.width;
        endX = stage.width;
        p.scaleX = 1;
      } else {
        startX = stage.width + p.width;
        endX = 0;
        p.scaleX = -1;
      }

      p.x = startX;
      p.y = startY;
      p.anchorY = startY;
      return { startX, startY, endX };
    };

    const normalWalk = (peep: Peep, props: { startX: number; startY: number; endX: number }) => {
      const { startY, endX } = props;
      const xDuration = 10;
      const yDuration = 0.25;

      const tl = gsap.timeline();
      tl.timeScale(randomRange(0.5, 1.5));
      tl.to(peep, { duration: xDuration, x: endX, ease: 'none' }, 0);
      tl.to(
        peep,
        {
          duration: yDuration,
          repeat: xDuration / yDuration,
          yoyo: true,
          y: startY - 10,
        },
        0,
      );
      return tl;
    };

    const createPeep = (img: HTMLImageElement): Peep => {
      const aspect = img.naturalWidth / img.naturalHeight;
      const height = peepHeight;
      const width = height * aspect;

      const peep: Peep = {
        image: img,
        width,
        height,
        x: 0,
        y: 0,
        anchorY: 0,
        scaleX: 1,
        walk: null,
        render(c) {
          c.save();
          c.translate(peep.x, peep.y);
          c.scale(peep.scaleX, 1);
          c.drawImage(peep.image, 0, 0, peep.width, peep.height);
          c.restore();
        },
      };
      return peep;
    };

    const addPeepToCrowd = () => {
      const peep = removeRandomFromArray(availablePeeps);
      const props = resetPeep(peep);
      const walk = normalWalk(peep, props);
      walk.eventCallback('onComplete', () => {
        removeItemFromArray(crowd, peep);
        availablePeeps.push(peep);
        addPeepToCrowd();
      });
      peep.walk = walk;
      crowd.push(peep);
      crowd.sort((a, b) => a.anchorY - b.anchorY);
      return peep;
    };

    const removePeepFromCrowd = (peep: Peep) => {
      removeItemFromArray(crowd, peep);
      availablePeeps.push(peep);
    };

    const initCrowd = () => {
      while (availablePeeps.length) {
        const p = addPeepToCrowd();
        if (p.walk) p.walk.progress(Math.random());
      }
    };

    const render = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(devicePixelRatio, devicePixelRatio);
      crowd.forEach((p) => p.render(ctx));
      ctx.restore();
    };

    const resize = () => {
      if (!canvas) return;
      stage.width = canvas.clientWidth;
      stage.height = canvas.clientHeight;
      canvas.width = stage.width * devicePixelRatio;
      canvas.height = stage.height * devicePixelRatio;

      crowd.forEach((p) => {
        if (p.walk) p.walk.kill();
      });
      crowd.length = 0;
      availablePeeps.length = 0;
      availablePeeps.push(...allPeeps);
      initCrowd();
    };

    const init = () => {
      resize();
      gsap.ticker.add(render);
    };

    Promise.all(sources.map(loadImage))
      .then((images) => {
        images.forEach((img) => allPeeps.push(createPeep(img)));
        availablePeeps.push(...allPeeps);
        init();
      })
      .catch((err) => {
        console.warn('CrowdCanvas: failed to load peep images', err);
      });

    const handleResize = () => {
      if (allPeeps.length) resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      gsap.ticker.remove(render);
      crowd.forEach((p) => {
        if (p.walk) p.walk.kill();
      });
    };
  }, [sources, peepHeight]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute bottom-0 h-full w-full"
    />
  );
};
