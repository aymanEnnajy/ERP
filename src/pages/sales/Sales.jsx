import { useState } from 'react';
import { Eye, Download, Filter } from 'lucide-react';
import { PageHeader, Button, Badge, SearchInput, Card, StatCard } from '../../components/ui';
import { DataTable } from '../../components/tables/DataTable';
import { sales } from '../../data/mockData';
import { useToast } from '../../hooks/useToast';
import { ShoppingCart, DollarSign, CreditCard, CheckCircle } from 'lucide-react';

const paymentStatusMap = { paid: { label: 'مدفوع', variant: 'success' }, partial: { label: 'مدفوع جزئياً', variant: 'warning' }, unpaid: { label: 'غير مدفوع', variant: 'danger' } };
const statusMap = { completed: { label: 'مكتمل', variant: 'success' }, cancelled: { label: 'ملغي', variant: 'danger' }, draft: { label: 'مسودة', variant: 'default' } };

export default function Sales() {
  const [search, setSearch] = useState('');
  const [paymentFilter, setPaymentFilter] = useState('');
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const { addToast } = useToast();

  const totalSales = sales.reduce((sum, s) => sum + s.total, 0);
  const totalPaid = sales.reduce((sum, s) => sum + s.paid, 0);
  const paidCount = sales.filter(s => s.paymentStatus === 'paid').length;
  const unpaidCount = sales.filter(s => s.paymentStatus === 'unpaid').length;

  const filtered = sales.filter(s => {
    const matchSearch = !search || s.invoiceNumber.includes(search) || s.customer.includes(search);
    const matchPayment = !paymentFilter || s.paymentStatus === paymentFilter;
    return matchSearch && matchPayment;
  });

  const columns = [
    { key: 'invoiceNumber', label: 'رقم الفاتورة', render: (v) => <span className="font-medium text-gray-900">{v}</span> },
    { key: 'customer', label: 'العميل' },
    { key: 'date', label: 'التاريخ' },
    { key: 'branch', label: 'الفرع' },
    { key: 'total', label: 'الإجمالي', render: (v) => <span className="font-semibold">{v.toLocaleString()} ر.س</span> },
    { key: 'paymentStatus', label: 'حالة الدفع', render: (v) => {
      const s = paymentStatusMap[v];
      return <Badge variant={s.variant}>{s.label}</Badge>;
    }},
    { key: 'status', label: 'حالة الفاتورة', render: (v) => {
      const s = statusMap[v] || { label: v, variant: 'default' };
      return <Badge variant={s.variant}>{s.label}</Badge>;
    }},
    { key: 'actions', label: 'إجراءات', sortable: false, render: (_, row) => (
      <button onClick={(e) => { e.stopPropagation(); setSelectedInvoice(row); }} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500">
        <Eye className="w-4 h-4" />
      </button>
    )},
  ];

  return (
    <div>
      <PageHeader title="المبيعات" description="إدارة المبيعات والفواتير">
        <Button variant="secondary" onClick={() => addToast('تصدير البيانات - عرض تجريبي', 'info')}>
          <Download className="w-4 h-4" /> تصدير
        </Button>
      </PageHeader>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard icon={ShoppingCart} label="إجمالي المبيعات" value={totalSales.toLocaleString()} unit="ر.س" />
        <StatCard icon={DollarSign} label="المحصّل" value={totalPaid.toLocaleString()} unit="ر.س" />
        <StatCard icon={CheckCircle} label="فواتير مدفوعة" value={paidCount} />
        <StatCard icon={CreditCard} label="فواتير غير مدفوعة" value={unpaidCount} />
      </div>

      {/* Filters */}
      <Card className="p-4 mb-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <SearchInput value={search} onChange={e => setSearch(e.target.value)} placeholder="بحث برقم الفاتورة أو العميل..." />
          <select value={paymentFilter} onChange={e => setPaymentFilter(e.target.value)} className="px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white outline-none">
            <option value="">جميع حالات الدفع</option>
            <option value="paid">مدفوع</option>
            <option value="partial">مدفوع جزئياً</option>
            <option value="unpaid">غير مدفوع</option>
          </select>
        </div>
      </Card>

      <Card>
        <DataTable columns={columns} data={filtered} onRowClick={setSelectedInvoice} />
      </Card>

      {/* Invoice Details Modal */}
      {selectedInvoice && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[5vh] modal-overlay">
          <div className="fixed inset-0 bg-black/40" onClick={() => setSelectedInvoice(null)} />
          <div className="relative bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[85vh] overflow-y-auto modal-content">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-semibold">تفاصيل الفاتورة {selectedInvoice.invoiceNumber}</h2>
              <button onClick={() => setSelectedInvoice(null)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400">✕</button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div><p className="text-xs text-gray-500">العميل</p><p className="text-sm font-medium">{selectedInvoice.customer}</p></div>
                <div><p className="text-xs text-gray-500">التاريخ</p><p className="text-sm font-medium">{selectedInvoice.date}</p></div>
                <div><p className="text-xs text-gray-500">الفرع</p><p className="text-sm font-medium">{selectedInvoice.branch}</p></div>
                <div><p className="text-xs text-gray-500">حالة الدفع</p><Badge variant={paymentStatusMap[selectedInvoice.paymentStatus].variant}>{paymentStatusMap[selectedInvoice.paymentStatus].label}</Badge></div>
              </div>
              
              <h3 className="text-sm font-semibold mb-3">بنود الفاتورة</h3>
              <div className="overflow-x-auto">
                <table className="data-table">
                  <thead><tr><th>المنتج</th><th>الكمية</th><th>السعر</th><th>الإجمالي</th></tr></thead>
                  <tbody>
                    {selectedInvoice.items?.map((item, i) => (
                      <tr key={i}><td>{item.product}</td><td>{item.qty}</td><td>{item.price.toLocaleString()} ر.س</td><td className="font-semibold">{item.total.toLocaleString()} ر.س</td></tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-gray-200"><td colSpan="3" className="text-left font-bold py-3 px-4">الإجمالي</td><td className="font-bold py-3 px-4">{selectedInvoice.total.toLocaleString()} ر.س</td></tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
