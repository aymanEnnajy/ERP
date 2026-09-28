import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, ShoppingCart, FileText, Users, Store,
  ShoppingBag, Truck, Package, Warehouse, ArrowLeftRight,
  ClipboardList, Activity, Calculator, BookOpen, BookMarked,
  Scale, Receipt, TrendingUp, Landmark, DollarSign, CreditCard,
  UserCheck, Clock, Wallet, CalendarDays, BadgeMinus,
  FolderKanban, Milestone, PiggyBank, HandCoins, ArrowUpFromLine,
  Building2, Percent, Move, Trash2, FileSignature, RefreshCcw,
  Wrench, Settings2, BarChart3, FileBarChart, UsersRound,
  Shield, MapPin, Settings, ChevronDown, X, Box
} from 'lucide-react';

const menuItems = [
  {
    group: 'الرئيسية',
    items: [
      { path: '/', label: 'لوحة التحكم', icon: LayoutDashboard },
    ]
  },
  {
    group: 'المبيعات',
    items: [
      { path: '/sales', label: 'المبيعات', icon: ShoppingCart },
      { path: '/invoices', label: 'الفواتير', icon: FileText },
      { path: '/customers', label: 'العملاء', icon: Users },
      { path: '/pos', label: 'نقاط البيع', icon: Store },
    ]
  },
  {
    group: 'المشتريات',
    items: [
      { path: '/purchases', label: 'المشتريات', icon: ShoppingBag },
      { path: '/purchase-invoices', label: 'فواتير الشراء', icon: FileText },
      { path: '/suppliers', label: 'الموردون', icon: Truck },
    ]
  },
  {
    group: 'المخزون',
    items: [
      { path: '/products', label: 'المنتجات', icon: Package },
      { path: '/warehouses', label: 'المستودعات', icon: Warehouse },
      { path: '/stock-transfers', label: 'تحويل المخزون', icon: ArrowLeftRight },
      { path: '/inventory-count', label: 'الجرد', icon: ClipboardList },
      { path: '/stock-movements', label: 'حركة الأصناف', icon: Activity },
    ]
  },
  {
    group: 'المحاسبة',
    items: [
      { path: '/accounting', label: 'لوحة المحاسبة', icon: Calculator },
      { path: '/chart-of-accounts', label: 'دليل الحسابات', icon: BookOpen },
      { path: '/journal-entries', label: 'القيود اليومية', icon: BookMarked },
      { path: '/general-ledger', label: 'دفتر الأستاذ', icon: BookOpen },
      { path: '/trial-balance', label: 'ميزان المراجعة', icon: Scale },
      { path: '/income-statement', label: 'قائمة الدخل', icon: Receipt },
      { path: '/balance-sheet', label: 'الميزانية', icon: Landmark },
      { path: '/cash-flow', label: 'التدفقات النقدية', icon: DollarSign },
      { path: '/taxes', label: 'الضرائب', icon: CreditCard },
    ]
  },
  {
    group: 'الموارد البشرية',
    items: [
      { path: '/employees', label: 'الموظفون', icon: UserCheck },
      { path: '/attendance', label: 'الحضور والانصراف', icon: Clock },
      { path: '/payroll', label: 'الرواتب', icon: Wallet },
      { path: '/leaves', label: 'الإجازات', icon: CalendarDays },
      { path: '/deductions', label: 'السلف والخصومات', icon: BadgeMinus },
    ]
  },
  {
    group: 'المشاريع',
    items: [
      { path: '/projects', label: 'المشاريع', icon: FolderKanban },
      { path: '/project-stages', label: 'المراحل', icon: Milestone },
      { path: '/project-budgets', label: 'الميزانيات', icon: PiggyBank },
      { path: '/project-expenses', label: 'المصاريف', icon: HandCoins },
      { path: '/project-revenue', label: 'الإيرادات', icon: ArrowUpFromLine },
    ]
  },
  {
    group: 'الأصول',
    items: [
      { path: '/fixed-assets', label: 'الأصول الثابتة', icon: Building2 },
      { path: '/depreciation', label: 'الإهلاك', icon: Percent },
      { path: '/asset-transfer', label: 'نقل الأصول', icon: Move },
      { path: '/asset-disposal', label: 'بيع / استبعاد الأصل', icon: Trash2 },
    ]
  },
  {
    group: 'الخدمات',
    items: [
      { path: '/contracts', label: 'العقود', icon: FileSignature },
      { path: '/subscriptions', label: 'الاشتراكات', icon: RefreshCcw },
      { path: '/work-orders', label: 'أوامر العمل', icon: Wrench },
      { path: '/maintenance', label: 'الصيانة', icon: Settings2 },
    ]
  },
  {
    group: 'التقارير',
    items: [
      { path: '/reports', label: 'مركز التقارير', icon: BarChart3 },
    ]
  },
  {
    group: 'الإدارة',
    items: [
      { path: '/users', label: 'المستخدمون', icon: UsersRound },
      { path: '/permissions', label: 'الصلاحيات', icon: Shield },
      { path: '/branches', label: 'الفروع', icon: MapPin },
      { path: '/settings', label: 'الإعدادات', icon: Settings },
    ]
  },
];

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState({});

  const toggleGroup = (group) => {
    setCollapsed(prev => ({ ...prev, [group]: !prev[group] }));
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={onClose} />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 right-0 h-full bg-white border-l border-gray-100 z-50 w-72 transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto ${
        isOpen ? 'translate-x-0 slide-in-left' : 'translate-x-full lg:translate-x-0'
      }`}>
        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-sm">
              <Box className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-gray-900 text-lg tracking-tight">نظام ERP</span>
          </div>
          <button onClick={onClose} className="lg:hidden p-2 rounded-xl hover:bg-gray-100">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="overflow-y-auto h-[calc(100%-5rem)] py-4 px-4 space-y-4">
          {menuItems.map((section) => (
            <div key={section.group} className="mb-2">
              <button
                onClick={() => toggleGroup(section.group)}
                className="w-full flex items-center justify-between px-3 py-2 text-[13px] font-bold text-gray-400 tracking-wider hover:text-gray-700 transition-colors"
              >
                {section.group}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${collapsed[section.group] ? '-rotate-90' : ''}`} />
              </button>
              
              {!collapsed[section.group] && (
                <div className="space-y-1 mt-1">
                  {section.items.map(item => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    return (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={onClose}
                        className={`flex items-center gap-3.5 px-4 py-2.5 rounded-xl text-[15px] transition-all duration-200 ${
                          isActive
                            ? 'bg-gray-900 text-white font-medium shadow-md shadow-gray-900/10'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium'
                        }`}
                      >
                        <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                        <span className="truncate">{item.label}</span>
                      </NavLink>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
