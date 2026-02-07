'use client';

import React from 'react';
import { Mic, Podcast, UserCheck, Wrench } from 'lucide-react';
import { useLanguage } from '../../../hooks/useLanguage';
import { BentoCard, BentoGrid } from './bento-grid';

const TYPE_ICONS = {
  speaker: Mic,
  attended: UserCheck,
  workshop: Wrench,
  podcast: Podcast,
} as const;

const DEFAULT_IMAGES = [
  '/img/charlas/1.avif',
  '/img/charlas/2.jpeg',
  '/img/charlas/3.png',
  '/img/charlas/4.png',
  '/img/charlas/5.png',
  '/img/charlas/6.webp',
  '/img/charlas/7.png',
  '/img/charlas/8.png',
  '/img/charlas/9.png',
  '/img/charlas/10.png',
];

// Gap-free layout: 10 items in 4 rows × 3 cols (12 cells)
// 2 items span 2 cols each, 8 items span 1 col. Total: 2×2 + 8×1 = 12 ✓
const LAYOUT_CLASSES = [
  'lg:col-span-2 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-1 lg:row-span-1',
  'lg:col-span-2 lg:row-span-1',
];

interface TalkItem {
  id: string;
  title: string;
  event: string;
  date: string;
  url?: string;
  img?: string;
  type: 'attended' | 'speaker' | 'workshop' | 'podcast';
  span?: string;
}

interface TalksBentoGridProps {
  talks: TalkItem[];
}

export default function TalksBentoGrid({ talks }: TalksBentoGridProps) {
  const { translations } = useLanguage();

  const bentoCards = talks.map((talk, index) => {
    const imgSrc = talk.img ?? DEFAULT_IMAGES[index % DEFAULT_IMAGES.length];
    return {
      name: talk.title,
      description: `${talk.event} · ${talk.date}`,
      href: talk.url ?? '#',
      cta: translations.talks.viewAll,
      Icon: TYPE_ICONS[talk.type] ?? Mic,
      className: LAYOUT_CLASSES[index % LAYOUT_CLASSES.length],
      background: (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={imgSrc}
            alt=""
            className="absolute -right-20 -top-20 h-[140%] w-[140%] object-cover opacity-60"
          />
        </div>
      ),
    };
  });

  return (
    <BentoGrid className="lg:grid-rows-4">
      {bentoCards.map((card, index) => (
        <BentoCard key={talks[index].id} {...card} />
      ))}
    </BentoGrid>
  );
}
