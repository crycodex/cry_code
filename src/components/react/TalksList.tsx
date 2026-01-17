import TalkCard from './TalkCard';

interface Talk {
  id: string;
  title: string;
  event: string;
  location: string;
  date: string;
  type: 'attended' | 'speaker';
  description?: string;
  slidesUrl?: string;
  videoUrl?: string;
  attendees?: number;
}

interface TalksListProps {
  talks: Talk[];
}

export default function TalksList({ talks }: TalksListProps) {
  return (
    <div className="space-y-6">
      {talks.map((talk) => (
        <TalkCard key={talk.id} talk={talk} />
      ))}
    </div>
  );
}
