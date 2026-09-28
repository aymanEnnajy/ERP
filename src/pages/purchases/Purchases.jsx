import { useState } from 'react';
import { Eye, Download, Search, Truck, ShoppingBag, FileText, CheckCircle } from 'lucide-react';
import { PageHeader, Button, Badge, SearchInput, Card, StatCard } from '../../components/ui';
import { DataTable } from '../../components/tables/DataTable';
import { purchases } from '../../data/mockData';
import { useToast } from '../../hooks/useToast';

const paymentStatusMap = {
  paid: { label: 'مدفوع', variant: 'success' },
  partial: { label: 'مدفوع جزئياً', variant: 'warning' },
  unpaid: { label: 'غير مدفوع', variant: 'danger' }
};

const statusMap = {
  received: { label: 'مستلم', variant: 'success' },
  shipped: { label: 'مشحون', variant: 'warning' },
  ordered: { label: 'تم الطلب', variant: 'info' },
  pending: { label: 'قيد الانتظار', variant: 'default' }
};

export default function Purchases() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const { addToast } = useToast();

  const totalPurchases = purchases.reduce((sum, p) => sum + p.total, 0);
  const receivedCount = purchases.filter(p => p.status === 'received').length;

  const filtered = purchases.filter(p => {
    const matchSearch = !search || p.poNumber.includes(search) || p.supplier.includes(search);
    const matchStatus = !statusFilter || p.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const columns = [
    { key: 'poNumber', label: 'رقم الطلب', render: (v) => <span className="font-medium text-gray-900">{v}</span> },
    { key: 'supplier', label: 'المورد' },
    { key: 'date', label: 'التاريخ' },
    { key: 'warehouse', label: 'المستودع' },
    { key: 'total', label: 'الإجمالي', render: (v) => <span className="font-semibold">{v.toLocaleString()} ر.س</span> },
    { key: 'paymentStatus', label: 'حالة الدفع', render: (v) => {
      const s = paymentStatusMap[v];
      return <Badge variant={s.variant}>{s.label}</Badge>;
    }},
    { key: 'status', label: 'حالة الطلب', render: (v) => {
      const s = statusMap[v];
      return <Badge variant={s.variant}>{s.label}</Badge>;
    }},
    { key: 'actions', label: 'إجراءات', sortable: false, render: () => (
      <button onClick={() => addToast('عرض تفاصيل الطلب - عرض تجريبي')} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500">
        <Eye className="w-4 h-4" />
      </button>
    )},
  ];

  return (
    <div>
      <PageHeader title="المشتريات" description="إدارة طلبات الشراء والموردين">
        <Button variant="secondary" onClick={() => addToast('تصدير البيانات - عرض تجريبي', 'info')}>
          <Download className="w-4 h-4" /> تصدير
        </Button>
      </PageHeader>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard icon={ShoppingBag} label="إجمالي المشتريات" value={totalPurchases.toLocaleString()} unit="ر.س" />
        <StatCard icon={FileText} label="عدد الطلبات" value={purchases.length} />
        <StatCard icon={CheckCircle} label="طلبات مستلمة" value={receivedCount} />
        <StatCard icon={Truck} label="قيد الشحن" value={purchases.length - receivedCount} />
      </div>

      {/* Filters */}
      <Card className="p-4 mb-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <SearchInput value={search} onChange={e => setSearch(e.target.value)} placeholder="بحث برقم الطلب أو المورد..." />
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white outline-none">
            <option value="">جميع الحالات</option>
            <option value="received">مستلم</option>
            <option value="shipped">مشحون</option>
            <option value="ordered">تم الطلب</option>
            <option value="pending">قيد الانتظار</option>
          </select>
        </div>
      </Card>

      <Card>
        <DataTable columns={columns} data={filtered} />
      </Card>
    </div>
  );
}
