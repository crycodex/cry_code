import { Icon } from '@iconify/react';
import { Award, ExternalLink } from 'lucide-react';
import HolographicCard from './ui/holographic-card';

interface CertificationCardProps {
  certification: {
    id: string;
    title: string;
    issuer?: string;
    date?: string;
    credentialId?: string;
    url?: string;
    description?: string;
    icon?: string;
  };
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <HolographicCard className="p-6">
      <article className="flex flex-col h-full holographic-card-content">
        <div className="flex-1">
          <div className="flex items-start gap-3 mb-3">
            <div className="shrink-0 p-2 rounded-lg bg-black/5 dark:bg-white/10">
              {certification.icon ? (
                <Icon icon={certification.icon} className="w-5 h-5 text-black dark:text-white" />
              ) : (
                <Award className="w-5 h-5 text-black dark:text-white" />
              )}
            </div>
            <h2 className="text-xl font-bold line-clamp-2 flex-1 pt-0.5">
              {certification.title}
            </h2>
          </div>
          {certification.issuer && (
            <p className="certification-issuer font-medium mb-2">
              {certification.issuer}
            </p>
          )}
          {certification.description && (
            <p className="mb-3">
              {certification.description}
            </p>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm mt-auto">
          <div className="flex flex-wrap items-center gap-4">
            {certification.date && <span>{certification.date}</span>}
            {certification.credentialId && (
              <span className="font-mono">ID: {certification.credentialId}</span>
            )}
          </div>
          {certification.url && (
            <a
              href={certification.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${certification.title} certification`}
              className="shrink-0 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-300"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </article>
    </HolographicCard>
  );
}
