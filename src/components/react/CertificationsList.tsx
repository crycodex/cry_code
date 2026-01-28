import CertificationCard from './CertificationCard';

interface Certification {
  id: string;
  title: string;
  issuer?: string;
  date?: string;
  credentialId?: string;
  url?: string;
  description?: string;
  icon?: string;
}

interface CertificationsListProps {
  certifications: Certification[];
}

export default function CertificationsList({ certifications }: CertificationsListProps) {
  return (
    <div className="space-y-6">
      {certifications.map((cert) => (
        <CertificationCard key={cert.id} certification={cert} />
      ))}
    </div>
  );
}
