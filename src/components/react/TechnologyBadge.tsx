import { Icon } from '@iconify/react';
import { getTechnologyIcon } from '../../utils/technology-icons';
import { cn } from '../../lib/utils';

interface TechnologyBadgeProps {
  name: string;
  className?: string;
  iconClassName?: string;
}

export default function TechnologyBadge({ name, className, iconClassName }: TechnologyBadgeProps) {
  const iconId = getTechnologyIcon(name);

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2 py-1 text-xs font-medium bg-black/5 dark:bg-white/10 text-black dark:text-white rounded-full',
        className
      )}
    >
      <Icon icon={iconId} className={cn('size-3.5 shrink-0', iconClassName)} aria-hidden />
      <span className="truncate">{name}</span>
    </span>
  );
}
