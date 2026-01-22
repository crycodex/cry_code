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
      <article className="flex flex-col h-full holographic-card-content">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">
            {certification.title}
          </h2>
          <p className="certification-issuer font-medium mb-2">
            {certification.issuer}
          </p>
          {certification.description && (
            <p className="mb-3">
              {certification.description}
            </p>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm mt-auto">
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
