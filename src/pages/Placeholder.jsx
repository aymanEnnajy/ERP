import { Settings, Construction } from 'lucide-react';
import { PageHeader, EmptyState } from '../components/ui';

export default function Placeholder({ title, description }) {
  return (
    <div>
      <PageHeader title={title} description={description} />
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-12 mt-6">
        <EmptyState
          icon={Construction}
          title="قيد التطوير"
          description="هذه الصفحة قيد التطوير حالياً وستكون متاحة في الإصدار القادم."
        />
      </div>
    </div>
  );
}
