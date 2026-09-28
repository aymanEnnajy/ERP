import {
  DollarSign, ShoppingCart, TrendingUp, TrendingDown,
  Users, Truck, Package
} from 'lucide-react';
import { Card, StatCard, PageHeader } from '../../components/ui';
import { dashboardKPIs, salesChartData, salesByBranch, topProducts, inventoryStatus } from '../../data/mockData';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, Legend, AreaChart, Area
} from 'recharts';

const kpiIcons = [DollarSign, ShoppingCart, TrendingUp, TrendingDown, Users, Truck, Package];

export default function Dashboard() {
  return (
    <div>
      <PageHeader title="لوحة التحكم" description="نظرة عامة على أداء الأعمال" />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {dashboardKPIs.map((kpi, i) => (
          <StatCard
            key={kpi.id}
            icon={kpiIcons[i] || DollarSign}
            label={kpi.label}
            value={kpi.formatted}
            unit={kpi.unit}
            change={kpi.change}
            trend={kpi.trend}
          />
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {/* Sales Overview */}
        <Card className="p-4 md:p-5">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">نظرة عامة على المبيعات</h3>
          <div className="h-64 md:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesChartData}>
                <defs>
                  <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#111111" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#111111" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#6B7280' }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#6B7280' }} tickLine={false} axisLine={false} tickFormatter={v => `${(v/1000).toFixed(0)}k`} />
                <Tooltip
                  contentStyle={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: '8px', fontSize: '12px', direction: 'rtl' }}
                  formatter={(value) => [`${value.toLocaleString()} ر.س`]}
                />
                <Area type="monotone" dataKey="sales" stroke="#111111" strokeWidth={2} fill="url(#salesGrad)" name="المبيعات" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Purchases Overview */}
        <Card className="p-4 md:p-5">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">المبيعات مقابل المشتريات</h3>
          <div className="h-64 md:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesChartData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#6B7280' }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#6B7280' }} tickLine={false} axisLine={false} tickFormatter={v => `${(v/1000).toFixed(0)}k`} />
                <Tooltip
                  contentStyle={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: '8px', fontSize: '12px', direction: 'rtl' }}
                  formatter={(value) => [`${value.toLocaleString()} ر.س`]}
                />
                <Bar dataKey="sales" fill="#111111" radius={[4, 4, 0, 0]} name="المبيعات" />
                <Bar dataKey="purchases" fill="#D1D5DB" radius={[4, 4, 0, 0]} name="المشتريات" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {/* Profit/Loss */}
        <Card className="p-4 md:p-5">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">الأرباح الشهرية</h3>
          <div className="h-60 md:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#6B7280' }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 10, fill: '#6B7280' }} tickLine={false} axisLine={false} tickFormatter={v => `${(v/1000).toFixed(0)}k`} />
                <Tooltip
                  contentStyle={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: '8px', fontSize: '12px', direction: 'rtl' }}
                  formatter={(value) => [`${value.toLocaleString()} ر.س`]}
                />
                <Line type="monotone" dataKey="profit" stroke="#16A34A" strokeWidth={2} dot={{ r: 3 }} name="صافي الربح" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Sales by Branch */}
        <Card className="p-4 md:p-5">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">المبيعات حسب الفرع</h3>
          <div className="h-60 md:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={salesByBranch}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {salesByBranch.map((entry, i) => (
                    <Cell key={i} fill={['#111111', '#6B7280', '#9CA3AF', '#D1D5DB'][i]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: '8px', fontSize: '12px', direction: 'rtl' }}
                  formatter={(value) => [`${value.toLocaleString()} ر.س`]}
                />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  formatter={(value, entry) => <span className="text-xs text-gray-600 mr-1">{entry.payload.branch}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Inventory Status */}
        <Card className="p-4 md:p-5">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">حالة المخزون</h3>
          <div className="h-60 md:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={inventoryStatus}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {inventoryStatus.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: '8px', fontSize: '12px', direction: 'rtl' }}
                  formatter={(value, name, props) => [`${value}`, props.payload.name]}
                />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  formatter={(value, entry) => <span className="text-xs text-gray-600 mr-1">{entry.payload.name}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Top Products & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Top Products */}
        <Card className="p-4 md:p-5">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">أكثر المنتجات مبيعاً</h3>
          <div className="space-y-3">
            {topProducts.map((product, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-[11px] font-bold text-gray-500 shrink-0">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                  <p className="text-xs text-gray-500">{product.sales} وحدة</p>
                </div>
                <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">{product.revenue.toLocaleString()} ر.س</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Sales by Branch Bar */}
        <Card className="p-4 md:p-5">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">أداء الفروع</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesByBranch} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 11, fill: '#6B7280' }} tickLine={false} axisLine={false} tickFormatter={v => `${(v/1000).toFixed(0)}k`} />
                <YAxis dataKey="branch" type="category" tick={{ fontSize: 12, fill: '#374151' }} tickLine={false} axisLine={false} width={60} />
                <Tooltip
                  contentStyle={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: '8px', fontSize: '12px', direction: 'rtl' }}
                  formatter={(value) => [`${value.toLocaleString()} ر.س`, 'المبيعات']}
                />
                <Bar dataKey="value" fill="#111111" radius={[0, 4, 4, 0]} barSize={28} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
