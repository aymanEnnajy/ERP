import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import { ToastProvider } from './hooks/useToast';

// Pages
import Dashboard from './pages/dashboard/Dashboard';
import Products from './pages/inventory/Products';
import Sales from './pages/sales/Sales';
import Purchases from './pages/purchases/Purchases';
import Accounting from './pages/accounting/Accounting';
import POS from './pages/pos/POS';
import Placeholder from './pages/Placeholder';

export default function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            
            {/* Sales */}
            <Route path="/sales" element={<Sales />} />
            <Route path="/invoices" element={<Placeholder title="الفواتير" description="إدارة فواتير المبيعات" />} />
            <Route path="/customers" element={<Placeholder title="العملاء" description="إدارة بيانات العملاء" />} />
            <Route path="/pos" element={<POS />} />

            {/* Purchases */}
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/purchase-invoices" element={<Placeholder title="فواتير الشراء" description="إدارة فواتير المشتريات" />} />
            <Route path="/suppliers" element={<Placeholder title="الموردون" description="إدارة بيانات الموردين" />} />

            {/* Inventory */}
            <Route path="/products" element={<Products />} />
            <Route path="/warehouses" element={<Placeholder title="المستودعات" description="إدارة المستودعات ومواقع التخزين" />} />
            <Route path="/stock-transfers" element={<Placeholder title="تحويل المخزون" description="عمليات نقل المخزون بين المستودعات" />} />
            <Route path="/inventory-count" element={<Placeholder title="الجرد" description="عمليات جرد وتسوية المخزون" />} />
            <Route path="/stock-movements" element={<Placeholder title="حركة الأصناف" description="تقارير حركة المنتجات" />} />

            {/* Accounting */}
            <Route path="/accounting" element={<Accounting />} />
            <Route path="/chart-of-accounts" element={<Placeholder title="دليل الحسابات" description="إدارة الدليل المحاسبي" />} />
            <Route path="/journal-entries" element={<Placeholder title="القيود اليومية" description="إدارة القيود المحاسبية" />} />
            <Route path="/general-ledger" element={<Placeholder title="دفتر الأستاذ" description="سجل حركات الحسابات" />} />
            <Route path="/trial-balance" element={<Placeholder title="ميزان المراجعة" description="تقرير الأرصدة المحاسبية" />} />
            <Route path="/income-statement" element={<Placeholder title="قائمة الدخل" description="تقرير الأرباح والخسائر" />} />
            <Route path="/balance-sheet" element={<Placeholder title="الميزانية" description="المركز المالي" />} />
            <Route path="/cash-flow" element={<Placeholder title="التدفقات النقدية" description="حركة النقد" />} />
            <Route path="/taxes" element={<Placeholder title="الضرائب" description="إدارة الإقرارات الضريبية" />} />

            {/* HR */}
            <Route path="/employees" element={<Placeholder title="الموظفون" description="إدارة بيانات الموظفين" />} />
            <Route path="/attendance" element={<Placeholder title="الحضور والانصراف" description="سجل دوام الموظفين" />} />
            <Route path="/payroll" element={<Placeholder title="الرواتب" description="إدارة مسيرات الرواتب" />} />
            <Route path="/leaves" element={<Placeholder title="الإجازات" description="طلبات ورصيد الإجازات" />} />
            <Route path="/deductions" element={<Placeholder title="السلف والخصومات" description="إدارة استقطاعات الموظفين" />} />

            {/* Projects */}
            <Route path="/projects" element={<Placeholder title="المشاريع" description="إدارة المشاريع الحالية" />} />
            <Route path="/project-stages" element={<Placeholder title="المراحل" description="مراحل ومهام المشاريع" />} />
            <Route path="/project-budgets" element={<Placeholder title="الميزانيات" description="ميزانيات المشاريع" />} />
            <Route path="/project-expenses" element={<Placeholder title="المصاريف" description="مصاريف المشاريع" />} />
            <Route path="/project-revenue" element={<Placeholder title="الإيرادات" description="إيرادات المشاريع ومستخلصاتها" />} />

            {/* Assets */}
            <Route path="/fixed-assets" element={<Placeholder title="الأصول الثابتة" description="سجل الأصول ومواقعها" />} />
            <Route path="/depreciation" element={<Placeholder title="الإهلاك" description="احتساب إهلاك الأصول" />} />
            <Route path="/asset-transfer" element={<Placeholder title="نقل الأصول" description="نقل العهد والأصول" />} />
            <Route path="/asset-disposal" element={<Placeholder title="استبعاد الأصل" description="بيع وإتلاف الأصول" />} />

            {/* Services */}
            <Route path="/contracts" element={<Placeholder title="العقود" description="إدارة عقود العملاء" />} />
            <Route path="/subscriptions" element={<Placeholder title="الاشتراكات" description="الاشتراكات الدورية" />} />
            <Route path="/work-orders" element={<Placeholder title="أوامر العمل" description="أوامر ومهام الصيانة" />} />
            <Route path="/maintenance" element={<Placeholder title="الصيانة" description="سجل أعمال الصيانة" />} />

            {/* Reports */}
            <Route path="/reports" element={<Placeholder title="مركز التقارير" description="التقارير الشاملة للنظام" />} />

            {/* Admin */}
            <Route path="/users" element={<Placeholder title="المستخدمون" description="إدارة حسابات المستخدمين" />} />
            <Route path="/permissions" element={<Placeholder title="الصلاحيات" description="إدارة مجموعات الصلاحيات" />} />
            <Route path="/branches" element={<Placeholder title="الفروع" description="إدارة بيانات فروع المنشأة" />} />
            <Route path="/settings" element={<Placeholder title="الإعدادات" description="إعدادات النظام العامة" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}
