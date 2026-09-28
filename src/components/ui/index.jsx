export function Button({ children, variant = 'primary', size = 'md', onClick, className = '', disabled = false, type = 'button', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap';
  
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800',
    secondary: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    success: 'bg-green-600 text-white hover:bg-green-700',
    ghost: 'text-gray-600 hover:bg-gray-100',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function Input({ label, id, error, className = '', ...props }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <label htmlFor={id} className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        id={id}
        className={`w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-gray-900 placeholder-gray-400 outline-none transition-colors ${
          error ? 'border-red-300 focus:border-red-500 ring-1 ring-red-500/20' : 'border-gray-200 focus:border-gray-400 focus:ring-4 focus:ring-gray-100'
        }`}
        {...props}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
}

export function Select({ label, id, options = [], error, className = '', ...props }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <label htmlFor={id} className="text-sm font-medium text-gray-700">{label}</label>}
      <select
        id={id}
        className={`w-full px-4 py-2.5 text-sm border rounded-xl bg-white text-gray-900 outline-none transition-colors ${
          error ? 'border-red-300 focus:border-red-500 ring-1 ring-red-500/20' : 'border-gray-200 focus:border-gray-400 focus:ring-4 focus:ring-gray-100'
        }`}
        {...props}
      >
        {options.map((opt) => (
          <option key={typeof opt === 'string' ? opt : opt.value} value={typeof opt === 'string' ? opt : opt.value}>
            {typeof opt === 'string' ? opt : opt.label}
          </option>
        ))}
      </select>
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
}

export function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-gray-100 text-gray-700',
    success: 'bg-green-50 text-green-700 border border-green-200',
    warning: 'bg-amber-50 text-amber-700 border border-amber-200',
    danger: 'bg-red-50 text-red-700 border border-red-200',
    info: 'bg-blue-50 text-blue-700 border border-blue-200',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

export function Card({ children, className = '', ...props }) {
  return (
    <div className={`bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  );
}

export function StatCard({ icon: Icon, label, value, unit = '', change, trend, iconBg = 'bg-gray-100' }) {
  return (
    <Card className="p-6 md:p-8">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-500 mb-3">{label}</p>
          <p className="text-3xl font-bold text-gray-900 truncate tracking-tight">
            {value} {unit && <span className="text-lg font-medium text-gray-400">{unit}</span>}
          </p>
        </div>
        <div className={`${iconBg} w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ms-4 shadow-sm`}>
          <Icon className="w-6 h-6 text-gray-600" />
        </div>
      </div>
      {change !== undefined && (
        <div className="mt-5 pt-4 border-t border-gray-50 flex items-center gap-2">
          <span className={`text-sm font-semibold flex items-center gap-0.5 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {trend === 'up' ? '↑' : '↓'} {Math.abs(change)}%
          </span>
          <span className="text-sm text-gray-400">مقارنة بالشهر السابق</span>
        </div>
      )}
    </Card>
  );
}

export function PageHeader({ title, description, children }) {
  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">{title}</h1>
          {description && <p className="text-base text-gray-500 mt-2">{description}</p>}
        </div>
        {children && <div className="flex items-center gap-3 flex-wrap">{children}</div>}
      </div>
    </div>
  );
}

export function EmptyState({ icon: Icon, title, description, action }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      {Icon && (
        <div className="bg-gray-100 p-4 rounded-2xl mb-4">
          <Icon className="w-8 h-8 text-gray-400" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      {description && <p className="text-sm text-gray-500 mb-4 max-w-sm">{description}</p>}
      {action}
    </div>
  );
}

export function SearchInput({ value, onChange, placeholder = 'بحث...' }) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full sm:w-72 pl-4 pr-11 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 outline-none focus:bg-white focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all"
      />
      <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  );
}

export function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div className="border-b border-gray-200 overflow-x-auto">
      <nav className="flex gap-0 -mb-px whitespace-nowrap">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-gray-900 text-gray-900'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span className="mr-2 text-xs bg-gray-100 px-2 py-0.5 rounded-full">{tab.count}</span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}
