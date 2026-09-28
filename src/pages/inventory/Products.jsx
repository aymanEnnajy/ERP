import { useState } from 'react';
import { Plus, Download, Eye, Pencil, Trash2, Package } from 'lucide-react';
import { PageHeader, Button, Badge, SearchInput, Card } from '../../components/ui';
import { Modal } from '../../components/ui/Modal';
import { DataTable } from '../../components/tables/DataTable';
import { products as initialProducts, categories, warehouses, units } from '../../data/mockData';
import { useToast } from '../../hooks/useToast';

export default function Products() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [warehouseFilter, setWarehouseFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const { addToast } = useToast();

  const [form, setForm] = useState({
    name: '', sku: '', barcode: '', category: categories[0], unit: units[0],
    purchasePrice: '', salePrice: '', tax: '15', minStock: '', warehouse: warehouses[0]
  });

  const filtered = products.filter(p => {
    const matchSearch = !search || p.name.includes(search) || p.sku.includes(search) || p.barcode.includes(search);
    const matchCat = !categoryFilter || p.category === categoryFilter;
    const matchWh = !warehouseFilter || p.warehouse === warehouseFilter;
    const matchStatus = !statusFilter || p.status === statusFilter;
    return matchSearch && matchCat && matchWh && matchStatus;
  });

  const statusMap = { active: { label: 'متوفر', variant: 'success' }, low: { label: 'مخزون منخفض', variant: 'warning' }, out: { label: 'نفد', variant: 'danger' } };

  const columns = [
    { key: 'name', label: 'المنتج', render: (v) => <span className="font-medium text-gray-900">{v}</span> },
    { key: 'sku', label: 'SKU' },
    { key: 'barcode', label: 'الباركود' },
    { key: 'category', label: 'الفئة' },
    { key: 'unit', label: 'الوحدة' },
    { key: 'purchasePrice', label: 'سعر الشراء', render: (v) => `${v.toLocaleString()} ر.س` },
    { key: 'salePrice', label: 'سعر البيع', render: (v) => `${v.toLocaleString()} ر.س` },
    { key: 'stock', label: 'المخزون', render: (v, row) => (
      <span className={`font-semibold ${row.status === 'out' ? 'text-red-600' : row.status === 'low' ? 'text-amber-600' : 'text-gray-900'}`}>{v}</span>
    )},
    { key: 'warehouse', label: 'المستودع' },
    { key: 'status', label: 'الحالة', render: (v) => {
      const s = statusMap[v] || { label: v, variant: 'default' };
      return <Badge variant={s.variant}>{s.label}</Badge>;
    }},
    { key: 'actions', label: 'إجراءات', sortable: false, render: (_, row) => (
      <div className="flex items-center gap-1">
        <button onClick={(e) => { e.stopPropagation(); addToast('عرض تفاصيل المنتج - عرض تجريبي'); }} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500"><Eye className="w-4 h-4" /></button>
        <button onClick={(e) => { e.stopPropagation(); handleEdit(row); }} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500"><Pencil className="w-4 h-4" /></button>
        <button onClick={(e) => { e.stopPropagation(); handleDelete(row.id); }} className="p-1.5 rounded-lg hover:bg-red-50 text-red-500"><Trash2 className="w-4 h-4" /></button>
      </div>
    )},
  ];

  const handleEdit = (product) => {
    setEditingProduct(product);
    setForm({
      name: product.name, sku: product.sku, barcode: product.barcode, category: product.category,
      unit: product.unit, purchasePrice: product.purchasePrice, salePrice: product.salePrice,
      tax: product.tax, minStock: product.minStock, warehouse: product.warehouse
    });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    addToast('تم حذف المنتج بنجاح', 'success');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.sku) {
      addToast('يرجى ملء الحقول المطلوبة', 'error');
      return;
    }
    if (editingProduct) {
      setProducts(prev => prev.map(p => p.id === editingProduct.id ? { ...p, ...form, purchasePrice: Number(form.purchasePrice), salePrice: Number(form.salePrice) } : p));
      addToast('تم تعديل المنتج بنجاح', 'success');
    } else {
      const newProduct = { id: Date.now(), ...form, purchasePrice: Number(form.purchasePrice), salePrice: Number(form.salePrice), stock: 0, status: 'active' };
      setProducts(prev => [newProduct, ...prev]);
      addToast('تم إضافة المنتج بنجاح', 'success');
    }
    setShowModal(false);
    setEditingProduct(null);
    setForm({ name: '', sku: '', barcode: '', category: categories[0], unit: units[0], purchasePrice: '', salePrice: '', tax: '15', minStock: '', warehouse: warehouses[0] });
  };

  const openAddModal = () => {
    setEditingProduct(null);
    setForm({ name: '', sku: '', barcode: '', category: categories[0], unit: units[0], purchasePrice: '', salePrice: '', tax: '15', minStock: '', warehouse: warehouses[0] });
    setShowModal(true);
  };

  return (
    <div>
      <PageHeader title="المنتجات" description="إدارة المنتجات والمخزون">
        <Button variant="secondary" onClick={() => addToast('تصدير البيانات - عرض تجريبي', 'info')}>
          <Download className="w-4 h-4" /> تصدير
        </Button>
        <Button onClick={openAddModal}>
          <Plus className="w-4 h-4" /> إضافة منتج
        </Button>
      </PageHeader>

      {/* Filters */}
      <Card className="p-4 mb-4">
        <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
          <SearchInput value={search} onChange={e => setSearch(e.target.value)} placeholder="بحث بالاسم أو SKU أو الباركود..." />
          <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)} className="px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white outline-none">
            <option value="">جميع الفئات</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={warehouseFilter} onChange={e => setWarehouseFilter(e.target.value)} className="px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white outline-none">
            <option value="">جميع المستودعات</option>
            {warehouses.map(w => <option key={w} value={w}>{w}</option>)}
          </select>
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white outline-none">
            <option value="">جميع الحالات</option>
            <option value="active">متوفر</option>
            <option value="low">مخزون منخفض</option>
            <option value="out">نفد</option>
          </select>
        </div>
      </Card>

      {/* Table */}
      <Card>
        <DataTable columns={columns} data={filtered} />
      </Card>

      {/* Add/Edit Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={editingProduct ? 'تعديل المنتج' : 'إضافة منتج جديد'} size="lg">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">اسم المنتج *</label>
              <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-gray-400" required />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">SKU *</label>
              <input value={form.sku} onChange={e => setForm({...form, sku: e.target.value})} className="px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-gray-400" required />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">الباركود</label>
              <input value={form.barcode} onChange={e => setForm({...form, barcode: e.target.value})} className="px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-gray-400" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">الفئة</label>
              <select value={form.category} onChange={e => setForm({...form, category: e.target.value})} className="px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-gray-400">
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">الوحدة</label>
              <select value={form.unit} onChange={e => setForm({...form, unit: e.target.value})} className="px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-gray-400">
                {units.map(u => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">سعر الشراء</label>
              <input type="number" value={form.purchasePrice} onChange={e => setForm({...form, purchasePrice: e.target.value})} className="px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-gray-400" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">سعر البيع</label>
              <input type="number" value={form.salePrice} onChange={e => setForm({...form, salePrice: e.target.value})} className="px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-gray-400" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">الضريبة (%)</label>
              <input type="number" value={form.tax} onChange={e => setForm({...form, tax: e.target.value})} className="px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-gray-400" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">الحد الأدنى للمخزون</label>
              <input type="number" value={form.minStock} onChange={e => setForm({...form, minStock: e.target.value})} className="px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-gray-400" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">المستودع</label>
              <select value={form.warehouse} onChange={e => setForm({...form, warehouse: e.target.value})} className="px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-gray-400">
                {warehouses.map(w => <option key={w} value={w}>{w}</option>)}
              </select>
            </div>
          </div>
          <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100">
            <Button type="submit">{editingProduct ? 'حفظ التعديلات' : 'إضافة المنتج'}</Button>
            <Button variant="secondary" onClick={() => setShowModal(false)}>إلغاء</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
