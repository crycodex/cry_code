import { useState, useRef, useEffect } from 'react';
import { Search, X, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { Icon } from '@iconify/react';
import { getTechnologyIcon } from '../../utils/technology-icons';
import type { ProjectCategory } from '../../data/projects';
import type { Translations } from '../../utils/i18n';
import { cn } from '../../lib/utils';

interface CategoryOption {
  value: ProjectCategory | 'all';
  label: string;
  icon: string;
}

interface ProjectsFilterProps {
  translations: Translations;
  searchQuery: string;
  selectedCategory: ProjectCategory | 'all';
  selectedTechnologies: string[];
  allTechnologies: string[];
  resultsCount: number;
  onSearchChange: (query: string) => void;
  onCategoryChange: (category: ProjectCategory | 'all') => void;
  onTechnologyToggle: (tech: string) => void;
  onClearFilters: () => void;
}

const CATEGORY_ICONS: Record<string, string> = {
  all: 'lucide:layout-grid',
  mobile: 'lucide:smartphone',
  web: 'lucide:globe',
  backend: 'lucide:server',
  design: 'lucide:palette',
  ar: 'lucide:scan-face',
};

export default function ProjectsFilter({
  translations,
  searchQuery,
  selectedCategory,
  selectedTechnologies,
  allTechnologies,
  resultsCount,
  onSearchChange,
  onCategoryChange,
  onTechnologyToggle,
  onClearFilters,
}: ProjectsFilterProps) {
  const [isTechDropdownOpen, setIsTechDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = translations.projects;
  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'all' || selectedTechnologies.length > 0;

  const categories: CategoryOption[] = [
    { value: 'all', label: t.filterAll, icon: CATEGORY_ICONS.all },
    { value: 'mobile', label: t.filterMobile, icon: CATEGORY_ICONS.mobile },
    { value: 'web', label: t.filterWeb, icon: CATEGORY_ICONS.web },
    { value: 'backend', label: t.filterBackend, icon: CATEGORY_ICONS.backend },
    { value: 'design', label: t.filterDesign, icon: CATEGORY_ICONS.design },
    { value: 'ar', label: t.filterAR, icon: CATEGORY_ICONS.ar },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsTechDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="mb-10 space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40 dark:text-white/40" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t.searchPlaceholder}
          className="w-full pl-12 pr-12 py-3.5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-900 text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-base"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4 text-black/50 dark:text-white/50" />
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => onCategoryChange(cat.value)}
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
              selectedCategory === cat.value
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                : 'bg-black/5 dark:bg-white/10 text-black/70 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/15'
            )}
          >
            <Icon icon={cat.icon} className="w-4 h-4" />
            {cat.label}
          </button>
        ))}
      </div>

      {/* Technology Filter Dropdown + Results Count */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Technology Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsTechDropdownOpen(!isTechDropdownOpen)}
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all',
              selectedTechnologies.length > 0
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300'
                : 'border-black/10 dark:border-white/10 bg-white dark:bg-gray-900 text-black/70 dark:text-white/70 hover:border-black/20 dark:hover:border-white/20'
            )}
          >
            <SlidersHorizontal className="w-4 h-4" />
            {t.techFilterLabel}
            {selectedTechnologies.length > 0 && (
              <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full bg-blue-600 text-white">
                {selectedTechnologies.length}
              </span>
            )}
            <ChevronDown className={cn('w-4 h-4 transition-transform', isTechDropdownOpen && 'rotate-180')} />
          </button>

          {isTechDropdownOpen && (
            <div className="absolute z-50 mt-2 w-80 max-h-72 overflow-y-auto rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-900 shadow-xl p-3">
              <div className="flex flex-wrap gap-1.5">
                {allTechnologies.map((tech) => {
                  const isSelected = selectedTechnologies.includes(tech);
                  const iconId = getTechnologyIcon(tech);
                  return (
                    <button
                      key={tech}
                      onClick={() => onTechnologyToggle(tech)}
                      className={cn(
                        'inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium transition-all',
                        isSelected
                          ? 'bg-blue-600 text-white'
                          : 'bg-black/5 dark:bg-white/10 text-black/70 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/15'
                      )}
                    >
                      <Icon icon={iconId} className="w-3.5 h-3.5 shrink-0" />
                      {tech}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Results Count + Clear */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-black/50 dark:text-white/50">
            <span className="font-semibold text-black dark:text-white">{resultsCount}</span>{' '}
            {t.resultsCount}
          </span>
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-950/50 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              {t.clearFilters}
            </button>
          )}
        </div>
      </div>

      {/* Active Technology Tags */}
      {selectedTechnologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedTechnologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300"
            >
              <Icon icon={getTechnologyIcon(tech)} className="w-3.5 h-3.5 shrink-0" />
              {tech}
              <button
                onClick={() => onTechnologyToggle(tech)}
                className="ml-0.5 p-0.5 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900 transition-colors"
                aria-label={`Remove ${tech}`}
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
