import { ExternalLink } from 'lucide-react';
import HolographicCard from './ui/holographic-card';

interface CertificationCardProps {
  certification: {
    id: string;
    title: string;
    issuer: string;
    date: string;
    credentialId?: string;
    url?: string;
    description?: string;
  };
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <HolographicCard className="p-6">
      <article className="flex flex-col h-full">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-black dark:text-white mb-2">
            {certification.title}
          </h2>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
            {certification.issuer}
          </p>
          {certification.description && (
            <p className="text-black/70 dark:text-white/70 mb-3">
              {certification.description}
            </p>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-black/60 dark:text-white/60 mt-auto">
          <div className="flex flex-wrap items-center gap-4">
            <span>{certification.date}</span>
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
              className="shrink-0 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-black dark:text-white" />
            </a>
          )}
        </div>
      </article>
    </HolographicCard>
  );
}
