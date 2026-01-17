import { Award, ExternalLink } from 'lucide-react';

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
    <article className="flex items-start gap-6 p-6 border border-black/10 dark:border-white/10 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-all group">
      <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
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
        <div className="flex flex-wrap items-center gap-4 text-sm text-black/60 dark:text-white/60">
          <span>{certification.date}</span>
          {certification.credentialId && (
            <span className="font-mono">ID: {certification.credentialId}</span>
          )}
        </div>
      </div>
      {certification.url && (
        <a
          href={certification.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <ExternalLink className="w-5 h-5 text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
        </a>
      )}
    </article>
  );
}
