import { CrowdCanvas } from './ui/crowd-canvas.tsx';

const PEEP_BASE = '/img/peeps/Bust';
const PEEP_IDS = Array.from({ length: 105 }, (_, i) => i + 1);

const peepSources = PEEP_IDS.map((id) => `${PEEP_BASE}/peep-${id}.png`);

export default function CrowdSection() {
  return (
    <section className="relative h-100 w-full overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      <CrowdCanvas sources={peepSources} peepHeight={250} />
    </section>
  );
}
