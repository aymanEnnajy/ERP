import { useState } from 'react';
import { Download, Calculator, BookOpen, Scale, Receipt, Folder } from 'lucide-react';
import { PageHeader, Button, Card, Tabs } from '../../components/ui';
import { chartOfAccounts, journalEntries, trialBalance } from '../../data/mockData';
import { DataTable } from '../../components/tables/DataTable';

export default function Accounting() {
  const [activeTab, setActiveTab] = useState('journal');

  const tabs = [
    { id: 'journal', label: 'القيود اليومية' },
    { id: 'accounts', label: 'دليل الحسابات' },
    { id: 'trial_balance', label: 'ميزان المراجعة' },
  ];

  const journalColumns = [
    { key: 'entryNumber', label: 'رقم القيد', render: (v) => <span className="font-medium">{v}</span> },
    { key: 'date', label: 'التاريخ' },
    { key: 'description', label: 'البيان' },
    { key: 'debit', label: 'مدين', render: (v) => <span className="text-gray-900">{v.toLocaleString()}</span> },
    { key: 'credit', label: 'دائن', render: (v) => <span className="text-gray-900">{v.toLocaleString()}</span> },
    { key: 'status', label: 'الحالة', render: (v) => (
      <span className={`px-2 py-1 rounded text-xs ${v === 'posted' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
        {v === 'posted' ? 'مُرحل' : 'مسودة'}
      </span>
    )},
  ];

  const trialBalanceColumns = [
    { key: 'code', label: 'رمز الحساب', render: (v) => <span className="font-mono text-gray-500">{v}</span> },
    { key: 'account', label: 'اسم الحساب', render: (v) => <span className="font-medium">{v}</span> },
    { key: 'debit', label: 'مدين', render: (v) => v > 0 ? v.toLocaleString() : '-' },
    { key: 'credit', label: 'دائن', render: (v) => v > 0 ? v.toLocaleString() : '-' },
  ];

  const AccountNode = ({ account, padding = 0 }) => (
    <div className="border-b border-gray-50 last:border-0">
      <div 
        className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 cursor-pointer"
        style={{ paddingRight: `${padding * 1.5 + 1}rem` }}
      >
        <div className="flex items-center gap-3">
          {account.children ? <Folder className="w-4 h-4 text-gray-400" /> : <BookOpen className="w-4 h-4 text-gray-300" />}
          <span className="font-mono text-xs text-gray-500">{account.code}</span>
          <span className={account.children ? 'font-semibold text-gray-900' : 'text-gray-700'}>{account.name}</span>
        </div>
        {account.balance !== undefined && (
          <span className="text-sm font-medium">{Math.abs(account.balance).toLocaleString()} ر.س</span>
        )}
      </div>
      {account.children && account.children.map(child => (
        <AccountNode key={child.id} account={child} padding={padding + 1} />
      ))}
    </div>
  );

  return (
    <div>
      <PageHeader title="المحاسبة المالية" description="إدارة الحسابات، القيود، والتقارير المالية">
        <Button variant="secondary"><Download className="w-4 h-4" /> تصدير التقرير</Button>
      </PageHeader>

      <Card className="mb-6">
        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      </Card>

      {activeTab === 'journal' && (
        <Card>
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-semibold text-gray-900">القيود اليومية</h3>
            <Button size="sm">إضافة قيد جديد</Button>
          </div>
          <DataTable columns={journalColumns} data={journalEntries} />
        </Card>
      )}

      {activeTab === 'accounts' && (
        <Card>
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-900">دليل الحسابات</h3>
          </div>
          <div className="flex flex-col">
            {chartOfAccounts.map(account => (
              <AccountNode key={account.id} account={account} />
            ))}
          </div>
        </Card>
      )}

      {activeTab === 'trial_balance' && (
        <Card>
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-semibold text-gray-900">ميزان المراجعة</h3>
            <span className="text-sm text-gray-500">للفترة المنتهية في 31 مارس 2024</span>
          </div>
          <DataTable columns={trialBalanceColumns} data={trialBalance} sortable={false} />
          <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center font-bold text-lg">
            <span>الإجمالي</span>
            <div className="flex gap-16 pr-8">
              <span>{trialBalance.reduce((sum, item) => sum + item.debit, 0).toLocaleString()}</span>
              <span>{trialBalance.reduce((sum, item) => sum + item.credit, 0).toLocaleString()}</span>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
