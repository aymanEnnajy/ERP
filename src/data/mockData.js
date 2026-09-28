// Mock Data for ERP System
// All data is realistic Arabic demo data

// ============ DASHBOARD ============
export const dashboardKPIs = [
  { id: 1, label: 'إجمالي المبيعات', value: 847520, formatted: '847,520', unit: 'ر.س', change: 12.5, trend: 'up' },
  { id: 2, label: 'إجمالي المشتريات', value: 523180, formatted: '523,180', unit: 'ر.س', change: -3.2, trend: 'down' },
  { id: 3, label: 'صافي الأرباح', value: 324340, formatted: '324,340', unit: 'ر.س', change: 18.7, trend: 'up' },
  { id: 4, label: 'المصروفات', value: 198750, formatted: '198,750', unit: 'ر.س', change: 5.1, trend: 'up' },
  { id: 5, label: 'العملاء', value: 1284, formatted: '1,284', unit: '', change: 8.3, trend: 'up' },
  { id: 6, label: 'الموردون', value: 186, formatted: '186', unit: '', change: 2.1, trend: 'up' },
  { id: 7, label: 'قيمة المخزون', value: 1250000, formatted: '1,250,000', unit: 'ر.س', change: -1.4, trend: 'down' },
];

export const salesChartData = [
  { month: 'يناير', sales: 65000, purchases: 42000, profit: 23000 },
  { month: 'فبراير', sales: 72000, purchases: 45000, profit: 27000 },
  { month: 'مارس', sales: 81000, purchases: 51000, profit: 30000 },
  { month: 'أبريل', sales: 69000, purchases: 38000, profit: 31000 },
  { month: 'مايو', sales: 95000, purchases: 55000, profit: 40000 },
  { month: 'يونيو', sales: 88000, purchases: 48000, profit: 40000 },
  { month: 'يوليو', sales: 102000, purchases: 62000, profit: 40000 },
  { month: 'أغسطس', sales: 93000, purchases: 53000, profit: 40000 },
  { month: 'سبتمبر', sales: 110000, purchases: 68000, profit: 42000 },
  { month: 'أكتوبر', sales: 98000, purchases: 58000, profit: 40000 },
  { month: 'نوفمبر', sales: 115000, purchases: 65000, profit: 50000 },
  { month: 'ديسمبر', sales: 125000, purchases: 72000, profit: 53000 },
];

export const salesByBranch = [
  { branch: 'الرياض', value: 385000 },
  { branch: 'جدة', value: 245000 },
  { branch: 'الدمام', value: 125000 },
  { branch: 'مكة', value: 92520 },
];

export const topProducts = [
  { name: 'لابتوب HP ProBook', sales: 156, revenue: 312000 },
  { name: 'طابعة Canon', sales: 234, revenue: 187200 },
  { name: 'شاشة Dell 27"', sales: 189, revenue: 170100 },
  { name: 'ماوس لاسلكي', sales: 567, revenue: 56700 },
  { name: 'لوحة مفاتيح ميكانيكية', sales: 345, revenue: 51750 },
];

export const inventoryStatus = [
  { name: 'متوفر', value: 1850, color: '#16A34A' },
  { name: 'مخزون منخفض', value: 245, color: '#D97706' },
  { name: 'نفد المخزون', value: 62, color: '#DC2626' },
];

// ============ PRODUCTS ============
export const categories = ['إلكترونيات', 'أثاث مكتبي', 'قرطاسية', 'معدات', 'خدمات', 'قطع غيار', 'مواد بناء'];
export const warehouses = ['المستودع الرئيسي - الرياض', 'مستودع جدة', 'مستودع الدمام', 'مستودع مكة'];
export const units = ['قطعة', 'كيلو', 'متر', 'لتر', 'علبة', 'كرتون', 'طن'];

export const products = [
  { id: 1, name: 'لابتوب HP ProBook 450', sku: 'ELC-001', barcode: '6281234567890', category: 'إلكترونيات', unit: 'قطعة', purchasePrice: 1800, salePrice: 2200, stock: 45, warehouse: 'المستودع الرئيسي - الرياض', status: 'active', minStock: 10, tax: 15 },
  { id: 2, name: 'شاشة Dell UltraSharp 27"', sku: 'ELC-002', barcode: '6281234567891', category: 'إلكترونيات', unit: 'قطعة', purchasePrice: 750, salePrice: 950, stock: 32, warehouse: 'المستودع الرئيسي - الرياض', status: 'active', minStock: 8, tax: 15 },
  { id: 3, name: 'طابعة Canon ImageRunner', sku: 'ELC-003', barcode: '6281234567892', category: 'إلكترونيات', unit: 'قطعة', purchasePrice: 650, salePrice: 850, stock: 18, warehouse: 'مستودع جدة', status: 'active', minStock: 5, tax: 15 },
  { id: 4, name: 'مكتب خشبي مع أدراج', sku: 'FRN-001', barcode: '6281234567893', category: 'أثاث مكتبي', unit: 'قطعة', purchasePrice: 1200, salePrice: 1650, stock: 12, warehouse: 'المستودع الرئيسي - الرياض', status: 'active', minStock: 3, tax: 15 },
  { id: 5, name: 'كرسي مكتب دوار', sku: 'FRN-002', barcode: '6281234567894', category: 'أثاث مكتبي', unit: 'قطعة', purchasePrice: 450, salePrice: 680, stock: 28, warehouse: 'مستودع جدة', status: 'active', minStock: 5, tax: 15 },
  { id: 6, name: 'ورق A4 - 5 رزم', sku: 'STN-001', barcode: '6281234567895', category: 'قرطاسية', unit: 'كرتون', purchasePrice: 55, salePrice: 75, stock: 150, warehouse: 'المستودع الرئيسي - الرياض', status: 'active', minStock: 30, tax: 15 },
  { id: 7, name: 'أقلام جاف أزرق (50 قلم)', sku: 'STN-002', barcode: '6281234567896', category: 'قرطاسية', unit: 'علبة', purchasePrice: 25, salePrice: 40, stock: 200, warehouse: 'المستودع الرئيسي - الرياض', status: 'active', minStock: 50, tax: 15 },
  { id: 8, name: 'ماوس لاسلكي Logitech', sku: 'ELC-004', barcode: '6281234567897', category: 'إلكترونيات', unit: 'قطعة', purchasePrice: 75, salePrice: 120, stock: 85, warehouse: 'مستودع الدمام', status: 'active', minStock: 20, tax: 15 },
  { id: 9, name: 'لوحة مفاتيح ميكانيكية', sku: 'ELC-005', barcode: '6281234567898', category: 'إلكترونيات', unit: 'قطعة', purchasePrice: 120, salePrice: 180, stock: 3, warehouse: 'المستودع الرئيسي - الرياض', status: 'low', minStock: 10, tax: 15 },
  { id: 10, name: 'كاميرا مراقبة HD', sku: 'ELC-006', barcode: '6281234567899', category: 'إلكترونيات', unit: 'قطعة', purchasePrice: 350, salePrice: 520, stock: 0, warehouse: 'مستودع جدة', status: 'out', minStock: 5, tax: 15 },
  { id: 11, name: 'خزانة ملفات معدنية', sku: 'FRN-003', barcode: '6281234567900', category: 'أثاث مكتبي', unit: 'قطعة', purchasePrice: 800, salePrice: 1100, stock: 7, warehouse: 'المستودع الرئيسي - الرياض', status: 'active', minStock: 3, tax: 15 },
  { id: 12, name: 'جهاز عرض Epson', sku: 'ELC-007', barcode: '6281234567901', category: 'إلكترونيات', unit: 'قطعة', purchasePrice: 2200, salePrice: 2850, stock: 5, warehouse: 'مستودع الدمام', status: 'active', minStock: 2, tax: 15 },
  { id: 13, name: 'هاتف مكتبي Cisco', sku: 'ELC-008', barcode: '6281234567902', category: 'إلكترونيات', unit: 'قطعة', purchasePrice: 450, salePrice: 620, stock: 22, warehouse: 'المستودع الرئيسي - الرياض', status: 'active', minStock: 5, tax: 15 },
  { id: 14, name: 'سبورة بيضاء 120×90', sku: 'STN-003', barcode: '6281234567903', category: 'قرطاسية', unit: 'قطعة', purchasePrice: 85, salePrice: 130, stock: 15, warehouse: 'مستودع جدة', status: 'active', minStock: 5, tax: 15 },
  { id: 15, name: 'حبر طابعة HP أصلي', sku: 'STN-004', barcode: '6281234567904', category: 'قرطاسية', unit: 'قطعة', purchasePrice: 180, salePrice: 250, stock: 2, warehouse: 'المستودع الرئيسي - الرياض', status: 'low', minStock: 10, tax: 15 },
];

// ============ CUSTOMERS ============
export const customers = [
  { id: 1, name: 'شركة الفيصل للتجارة', phone: '0551234567', email: 'info@alfaisal.sa', balance: 45200, totalPurchases: 285000, status: 'active', city: 'الرياض' },
  { id: 2, name: 'مؤسسة النور للمقاولات', phone: '0559876543', email: 'contact@alnoor.sa', balance: 12800, totalPurchases: 156000, status: 'active', city: 'جدة' },
  { id: 3, name: 'شركة الأمل للتقنية', phone: '0541112233', email: 'sales@alamal.sa', balance: 0, totalPurchases: 98500, status: 'active', city: 'الدمام' },
  { id: 4, name: 'مكتبة المعرفة', phone: '0567778899', email: 'info@maarifa.sa', balance: 3200, totalPurchases: 45000, status: 'active', city: 'الرياض' },
  { id: 5, name: 'شركة البناء الحديث', phone: '0533445566', email: 'info@bina.sa', balance: 67500, totalPurchases: 420000, status: 'active', city: 'مكة' },
  { id: 6, name: 'مصنع المتحدة للبلاستيك', phone: '0522334455', email: 'factory@muttahida.sa', balance: 8900, totalPurchases: 72000, status: 'active', city: 'الرياض' },
  { id: 7, name: 'شركة السلام للنقل', phone: '0577889900', email: 'info@salam-transport.sa', balance: 0, totalPurchases: 34000, status: 'inactive', city: 'جدة' },
  { id: 8, name: 'مجموعة الراشد', phone: '0544556677', email: 'info@alrashid.sa', balance: 125000, totalPurchases: 890000, status: 'active', city: 'الرياض' },
  { id: 9, name: 'شركة التميز للاستشارات', phone: '0588990011', email: 'consult@tamayoz.sa', balance: 15600, totalPurchases: 67000, status: 'active', city: 'الدمام' },
  { id: 10, name: 'مؤسسة العطاء', phone: '0566778899', email: 'info@ataa.sa', balance: 2100, totalPurchases: 28000, status: 'active', city: 'مكة' },
];

// ============ SUPPLIERS ============
export const suppliers = [
  { id: 1, name: 'شركة HP السعودية', phone: '0112345678', email: 'orders@hp-sa.com', balance: 32000, totalPurchases: 520000, status: 'active', city: 'الرياض' },
  { id: 2, name: 'مصنع الأثاث المتميز', phone: '0126543210', email: 'sales@furniture-sa.com', balance: 15800, totalPurchases: 180000, status: 'active', city: 'جدة' },
  { id: 3, name: 'موردون القرطاسية المتحدة', phone: '0131234567', email: 'supply@stationery.sa', balance: 4500, totalPurchases: 95000, status: 'active', city: 'الرياض' },
  { id: 4, name: 'شركة Dell الشرق الأوسط', phone: '0119876543', email: 'orders@dell-me.com', balance: 78000, totalPurchases: 650000, status: 'active', city: 'الرياض' },
  { id: 5, name: 'مؤسسة التوريدات العامة', phone: '0125551234', email: 'info@general-supply.sa', balance: 0, totalPurchases: 42000, status: 'active', city: 'الدمام' },
  { id: 6, name: 'شركة كانون العربية', phone: '0114445566', email: 'sales@canon-ar.com', balance: 22000, totalPurchases: 310000, status: 'active', city: 'الرياض' },
  { id: 7, name: 'مصنع البلاستيك الوطني', phone: '0137778899', email: 'factory@national-plastic.sa', balance: 5200, totalPurchases: 68000, status: 'inactive', city: 'جدة' },
  { id: 8, name: 'شركة الإمداد للتوريدات', phone: '0118889900', email: 'supply@imdad.sa', balance: 11500, totalPurchases: 145000, status: 'active', city: 'الرياض' },
];

// ============ SALES / INVOICES ============
export const sales = [
  { id: 1, invoiceNumber: 'INV-2024-001', customer: 'شركة الفيصل للتجارة', date: '2024-03-15', branch: 'الرياض', total: 24500, paid: 24500, paymentStatus: 'paid', status: 'completed', items: [
    { product: 'لابتوب HP ProBook 450', qty: 5, price: 2200, total: 11000 },
    { product: 'شاشة Dell UltraSharp 27"', qty: 10, price: 950, total: 9500 },
    { product: 'ماوس لاسلكي Logitech', qty: 20, price: 120, total: 2400 },
    { product: 'لوحة مفاتيح ميكانيكية', qty: 10, price: 180, total: 1800 },
  ]},
  { id: 2, invoiceNumber: 'INV-2024-002', customer: 'مؤسسة النور للمقاولات', date: '2024-03-16', branch: 'جدة', total: 18200, paid: 12000, paymentStatus: 'partial', status: 'completed', items: [
    { product: 'مكتب خشبي مع أدراج', qty: 4, price: 1650, total: 6600 },
    { product: 'كرسي مكتب دوار', qty: 8, price: 680, total: 5440 },
    { product: 'خزانة ملفات معدنية', qty: 4, price: 1100, total: 4400 },
    { product: 'سبورة بيضاء 120×90', qty: 6, price: 130, total: 780 },
  ]},
  { id: 3, invoiceNumber: 'INV-2024-003', customer: 'شركة الأمل للتقنية', date: '2024-03-18', branch: 'الدمام', total: 8450, paid: 8450, paymentStatus: 'paid', status: 'completed', items: [
    { product: 'جهاز عرض Epson', qty: 2, price: 2850, total: 5700 },
    { product: 'هاتف مكتبي Cisco', qty: 3, price: 620, total: 1860 },
    { product: 'ماوس لاسلكي Logitech', qty: 5, price: 120, total: 600 },
  ]},
  { id: 4, invoiceNumber: 'INV-2024-004', customer: 'مكتبة المعرفة', date: '2024-03-20', branch: 'الرياض', total: 5750, paid: 0, paymentStatus: 'unpaid', status: 'completed', items: [
    { product: 'ورق A4 - 5 رزم', qty: 50, price: 75, total: 3750 },
    { product: 'أقلام جاف أزرق (50 قلم)', qty: 30, price: 40, total: 1200 },
    { product: 'حبر طابعة HP أصلي', qty: 4, price: 250, total: 1000 },
  ]},
  { id: 5, invoiceNumber: 'INV-2024-005', customer: 'شركة البناء الحديث', date: '2024-03-22', branch: 'مكة', total: 67200, paid: 67200, paymentStatus: 'paid', status: 'completed', items: [
    { product: 'لابتوب HP ProBook 450', qty: 15, price: 2200, total: 33000 },
    { product: 'شاشة Dell UltraSharp 27"', qty: 15, price: 950, total: 14250 },
    { product: 'طابعة Canon ImageRunner', qty: 5, price: 850, total: 4250 },
    { product: 'هاتف مكتبي Cisco', qty: 20, price: 620, total: 12400 },
  ]},
  { id: 6, invoiceNumber: 'INV-2024-006', customer: 'مصنع المتحدة للبلاستيك', date: '2024-03-25', branch: 'الرياض', total: 3480, paid: 3480, paymentStatus: 'paid', status: 'completed', items: [
    { product: 'ورق A4 - 5 رزم', qty: 20, price: 75, total: 1500 },
    { product: 'حبر طابعة HP أصلي', qty: 5, price: 250, total: 1250 },
    { product: 'سبورة بيضاء 120×90', qty: 4, price: 130, total: 520 },
  ]},
  { id: 7, invoiceNumber: 'INV-2024-007', customer: 'مجموعة الراشد', date: '2024-03-28', branch: 'الرياض', total: 125000, paid: 80000, paymentStatus: 'partial', status: 'completed', items: [
    { product: 'لابتوب HP ProBook 450', qty: 30, price: 2200, total: 66000 },
    { product: 'شاشة Dell UltraSharp 27"', qty: 30, price: 950, total: 28500 },
    { product: 'كرسي مكتب دوار', qty: 30, price: 680, total: 20400 },
    { product: 'مكتب خشبي مع أدراج', qty: 5, price: 1650, total: 8250 },
  ]},
  { id: 8, invoiceNumber: 'INV-2024-008', customer: 'شركة التميز للاستشارات', date: '2024-04-01', branch: 'الدمام', total: 9850, paid: 9850, paymentStatus: 'paid', status: 'completed', items: [
    { product: 'لابتوب HP ProBook 450', qty: 3, price: 2200, total: 6600 },
    { product: 'ماوس لاسلكي Logitech', qty: 10, price: 120, total: 1200 },
    { product: 'لوحة مفاتيح ميكانيكية', qty: 10, price: 180, total: 1800 },
  ]},
  { id: 9, invoiceNumber: 'INV-2024-009', customer: 'مؤسسة العطاء', date: '2024-04-03', branch: 'مكة', total: 4200, paid: 4200, paymentStatus: 'paid', status: 'cancelled', items: [
    { product: 'طابعة Canon ImageRunner', qty: 3, price: 850, total: 2550 },
    { product: 'حبر طابعة HP أصلي', qty: 6, price: 250, total: 1500 },
  ]},
  { id: 10, invoiceNumber: 'INV-2024-010', customer: 'شركة الفيصل للتجارة', date: '2024-04-05', branch: 'الرياض', total: 15600, paid: 0, paymentStatus: 'unpaid', status: 'completed', items: [
    { product: 'جهاز عرض Epson', qty: 4, price: 2850, total: 11400 },
    { product: 'كاميرا مراقبة HD', qty: 8, price: 520, total: 4160 },
  ]},
];

// ============ PURCHASES ============
export const purchases = [
  { id: 1, poNumber: 'PO-2024-001', supplier: 'شركة HP السعودية', date: '2024-03-10', warehouse: 'المستودع الرئيسي - الرياض', total: 90000, paymentStatus: 'paid', status: 'received' },
  { id: 2, poNumber: 'PO-2024-002', supplier: 'مصنع الأثاث المتميز', date: '2024-03-12', warehouse: 'مستودع جدة', total: 36000, paymentStatus: 'paid', status: 'received' },
  { id: 3, poNumber: 'PO-2024-003', supplier: 'موردون القرطاسية المتحدة', date: '2024-03-14', warehouse: 'المستودع الرئيسي - الرياض', total: 12500, paymentStatus: 'partial', status: 'received' },
  { id: 4, poNumber: 'PO-2024-004', supplier: 'شركة Dell الشرق الأوسط', date: '2024-03-18', warehouse: 'المستودع الرئيسي - الرياض', total: 75000, paymentStatus: 'unpaid', status: 'pending' },
  { id: 5, poNumber: 'PO-2024-005', supplier: 'شركة كانون العربية', date: '2024-03-20', warehouse: 'مستودع الدمام', total: 32500, paymentStatus: 'paid', status: 'received' },
  { id: 6, poNumber: 'PO-2024-006', supplier: 'مؤسسة التوريدات العامة', date: '2024-03-25', warehouse: 'مستودع جدة', total: 8200, paymentStatus: 'paid', status: 'received' },
  { id: 7, poNumber: 'PO-2024-007', supplier: 'شركة الإمداد للتوريدات', date: '2024-04-01', warehouse: 'المستودع الرئيسي - الرياض', total: 45000, paymentStatus: 'partial', status: 'shipped' },
  { id: 8, poNumber: 'PO-2024-008', supplier: 'شركة HP السعودية', date: '2024-04-05', warehouse: 'مستودع الدمام', total: 120000, paymentStatus: 'unpaid', status: 'ordered' },
];

// ============ ACCOUNTING ============
export const chartOfAccounts = [
  { id: '1', code: '1000', name: 'الأصول', type: 'assets', parent: null, level: 0, children: [
    { id: '1-1', code: '1100', name: 'الأصول المتداولة', type: 'assets', parent: '1', level: 1, children: [
      { id: '1-1-1', code: '1110', name: 'النقد والبنوك', type: 'assets', parent: '1-1', level: 2, balance: 485000 },
      { id: '1-1-2', code: '1120', name: 'حسابات القبض', type: 'assets', parent: '1-1', level: 2, balance: 267300 },
      { id: '1-1-3', code: '1130', name: 'المخزون', type: 'assets', parent: '1-1', level: 2, balance: 1250000 },
      { id: '1-1-4', code: '1140', name: 'مصاريف مقدمة', type: 'assets', parent: '1-1', level: 2, balance: 35000 },
    ]},
    { id: '1-2', code: '1200', name: 'الأصول الثابتة', type: 'assets', parent: '1', level: 1, children: [
      { id: '1-2-1', code: '1210', name: 'المباني', type: 'assets', parent: '1-2', level: 2, balance: 2500000 },
      { id: '1-2-2', code: '1220', name: 'المعدات والآلات', type: 'assets', parent: '1-2', level: 2, balance: 850000 },
      { id: '1-2-3', code: '1230', name: 'الأثاث والتجهيزات', type: 'assets', parent: '1-2', level: 2, balance: 120000 },
      { id: '1-2-4', code: '1240', name: 'مجمع الإهلاك', type: 'assets', parent: '1-2', level: 2, balance: -450000 },
    ]},
  ]},
  { id: '2', code: '2000', name: 'الخصوم', type: 'liabilities', parent: null, level: 0, children: [
    { id: '2-1', code: '2100', name: 'الخصوم المتداولة', type: 'liabilities', parent: '2', level: 1, children: [
      { id: '2-1-1', code: '2110', name: 'حسابات الدفع', type: 'liabilities', parent: '2-1', level: 2, balance: 168500 },
      { id: '2-1-2', code: '2120', name: 'مصاريف مستحقة', type: 'liabilities', parent: '2-1', level: 2, balance: 45000 },
      { id: '2-1-3', code: '2130', name: 'ضريبة القيمة المضافة', type: 'liabilities', parent: '2-1', level: 2, balance: 72000 },
    ]},
    { id: '2-2', code: '2200', name: 'الخصوم طويلة الأجل', type: 'liabilities', parent: '2', level: 1, children: [
      { id: '2-2-1', code: '2210', name: 'قروض طويلة الأجل', type: 'liabilities', parent: '2-2', level: 2, balance: 500000 },
    ]},
  ]},
  { id: '3', code: '3000', name: 'حقوق الملكية', type: 'equity', parent: null, level: 0, children: [
    { id: '3-1', code: '3100', name: 'رأس المال', type: 'equity', parent: '3', level: 1, balance: 3000000 },
    { id: '3-2', code: '3200', name: 'الأرباح المحتجزة', type: 'equity', parent: '3', level: 1, balance: 846800 },
    { id: '3-3', code: '3300', name: 'أرباح العام الحالي', type: 'equity', parent: '3', level: 1, balance: 324340 },
  ]},
  { id: '4', code: '4000', name: 'الإيرادات', type: 'revenue', parent: null, level: 0, children: [
    { id: '4-1', code: '4100', name: 'إيرادات المبيعات', type: 'revenue', parent: '4', level: 1, balance: 847520 },
    { id: '4-2', code: '4200', name: 'إيرادات الخدمات', type: 'revenue', parent: '4', level: 1, balance: 125000 },
    { id: '4-3', code: '4300', name: 'إيرادات أخرى', type: 'revenue', parent: '4', level: 1, balance: 18500 },
  ]},
  { id: '5', code: '5000', name: 'المصروفات', type: 'expenses', parent: null, level: 0, children: [
    { id: '5-1', code: '5100', name: 'تكلفة المبيعات', type: 'expenses', parent: '5', level: 1, balance: 523180 },
    { id: '5-2', code: '5200', name: 'رواتب وأجور', type: 'expenses', parent: '5', level: 1, balance: 85000 },
    { id: '5-3', code: '5300', name: 'إيجارات', type: 'expenses', parent: '5', level: 1, balance: 36000 },
    { id: '5-4', code: '5400', name: 'مصاريف إدارية', type: 'expenses', parent: '5', level: 1, balance: 22500 },
    { id: '5-5', code: '5500', name: 'مصاريف تشغيلية', type: 'expenses', parent: '5', level: 1, balance: 15000 },
  ]},
];

export const journalEntries = [
  { id: 1, entryNumber: 'JE-001', date: '2024-03-15', description: 'تسجيل مبيعات نقدية', debit: 24500, credit: 24500, status: 'posted' },
  { id: 2, entryNumber: 'JE-002', date: '2024-03-16', description: 'شراء بضاعة من المورد', debit: 36000, credit: 36000, status: 'posted' },
  { id: 3, entryNumber: 'JE-003', date: '2024-03-18', description: 'دفع إيجار المكتب', debit: 12000, credit: 12000, status: 'posted' },
  { id: 4, entryNumber: 'JE-004', date: '2024-03-20', description: 'تحصيل فاتورة عميل', debit: 18200, credit: 18200, status: 'posted' },
  { id: 5, entryNumber: 'JE-005', date: '2024-03-22', description: 'صرف رواتب الموظفين', debit: 85000, credit: 85000, status: 'posted' },
  { id: 6, entryNumber: 'JE-006', date: '2024-03-25', description: 'دفع فاتورة كهرباء', debit: 3500, credit: 3500, status: 'posted' },
  { id: 7, entryNumber: 'JE-007', date: '2024-03-28', description: 'إيراد خدمات استشارية', debit: 15000, credit: 15000, status: 'draft' },
  { id: 8, entryNumber: 'JE-008', date: '2024-04-01', description: 'شراء أصل ثابت - طابعة', debit: 8500, credit: 8500, status: 'posted' },
];

export const trialBalance = [
  { account: 'النقد والبنوك', code: '1110', debit: 485000, credit: 0 },
  { account: 'حسابات القبض', code: '1120', debit: 267300, credit: 0 },
  { account: 'المخزون', code: '1130', debit: 1250000, credit: 0 },
  { account: 'مصاريف مقدمة', code: '1140', debit: 35000, credit: 0 },
  { account: 'المباني', code: '1210', debit: 2500000, credit: 0 },
  { account: 'المعدات والآلات', code: '1220', debit: 850000, credit: 0 },
  { account: 'الأثاث والتجهيزات', code: '1230', debit: 120000, credit: 0 },
  { account: 'مجمع الإهلاك', code: '1240', debit: 0, credit: 450000 },
  { account: 'حسابات الدفع', code: '2110', debit: 0, credit: 168500 },
  { account: 'مصاريف مستحقة', code: '2120', debit: 0, credit: 45000 },
  { account: 'ضريبة القيمة المضافة', code: '2130', debit: 0, credit: 72000 },
  { account: 'قروض طويلة الأجل', code: '2210', debit: 0, credit: 500000 },
  { account: 'رأس المال', code: '3100', debit: 0, credit: 3000000 },
  { account: 'الأرباح المحتجزة', code: '3200', debit: 0, credit: 846800 },
  { account: 'إيرادات المبيعات', code: '4100', debit: 0, credit: 847520 },
  { account: 'إيرادات الخدمات', code: '4200', debit: 0, credit: 125000 },
  { account: 'تكلفة المبيعات', code: '5100', debit: 523180, credit: 0 },
  { account: 'رواتب وأجور', code: '5200', debit: 85000, credit: 0 },
  { account: 'إيجارات', code: '5300', debit: 36000, credit: 0 },
  { account: 'مصاريف إدارية', code: '5400', debit: 22500, credit: 0 },
  { account: 'مصاريف تشغيلية', code: '5500', debit: 15000, credit: 0 },
];

// ============ HR ============
export const employees = [
  { id: 1, employeeId: 'EMP-001', name: 'أحمد محمد العلي', department: 'تقنية المعلومات', position: 'مدير تقنية المعلومات', branch: 'الرياض', salary: 18000, status: 'active', joinDate: '2020-01-15', phone: '0551234567', email: 'ahmed@company.sa' },
  { id: 2, employeeId: 'EMP-002', name: 'فاطمة عبدالله السعيد', department: 'المالية', position: 'محاسبة أولى', branch: 'الرياض', salary: 12000, status: 'active', joinDate: '2019-06-01', phone: '0559876543', email: 'fatima@company.sa' },
  { id: 3, employeeId: 'EMP-003', name: 'خالد إبراهيم الحربي', department: 'المبيعات', position: 'مدير مبيعات', branch: 'جدة', salary: 15000, status: 'active', joinDate: '2021-03-10', phone: '0541112233', email: 'khaled@company.sa' },
  { id: 4, employeeId: 'EMP-004', name: 'نورة سعد القحطاني', department: 'الموارد البشرية', position: 'أخصائية موارد بشرية', branch: 'الرياض', salary: 10000, status: 'active', joinDate: '2022-01-20', phone: '0567778899', email: 'noura@company.sa' },
  { id: 5, employeeId: 'EMP-005', name: 'محمد عبدالرحمن الشمري', department: 'المستودعات', position: 'مشرف مستودع', branch: 'الدمام', salary: 8500, status: 'active', joinDate: '2020-09-05', phone: '0533445566', email: 'mohammed@company.sa' },
  { id: 6, employeeId: 'EMP-006', name: 'سارة يوسف الدوسري', department: 'المبيعات', position: 'مندوبة مبيعات', branch: 'الرياض', salary: 7500, status: 'active', joinDate: '2023-02-15', phone: '0522334455', email: 'sara@company.sa' },
  { id: 7, employeeId: 'EMP-007', name: 'عبدالله محمد الغامدي', department: 'تقنية المعلومات', position: 'مطور برمجيات', branch: 'الرياض', salary: 14000, status: 'active', joinDate: '2021-07-01', phone: '0577889900', email: 'abdullah@company.sa' },
  { id: 8, employeeId: 'EMP-008', name: 'ريم أحمد الزهراني', department: 'المالية', position: 'محاسبة', branch: 'جدة', salary: 9000, status: 'onleave', joinDate: '2022-04-10', phone: '0544556677', email: 'reem@company.sa' },
  { id: 9, employeeId: 'EMP-009', name: 'عمر حسن المالكي', department: 'المشتريات', position: 'مسؤول مشتريات', branch: 'الرياض', salary: 9500, status: 'active', joinDate: '2021-11-20', phone: '0588990011', email: 'omar@company.sa' },
  { id: 10, employeeId: 'EMP-010', name: 'هدى خالد العتيبي', department: 'خدمة العملاء', position: 'ممثلة خدمة عملاء', branch: 'مكة', salary: 7000, status: 'inactive', joinDate: '2022-08-01', phone: '0566778899', email: 'huda@company.sa' },
];

export const attendance = [
  { id: 1, employee: 'أحمد محمد العلي', date: '2024-04-01', checkIn: '08:02', checkOut: '17:05', status: 'present' },
  { id: 2, employee: 'فاطمة عبدالله السعيد', date: '2024-04-01', checkIn: '07:55', checkOut: '16:58', status: 'present' },
  { id: 3, employee: 'خالد إبراهيم الحربي', date: '2024-04-01', checkIn: '08:35', checkOut: '17:10', status: 'late' },
  { id: 4, employee: 'نورة سعد القحطاني', date: '2024-04-01', checkIn: '08:00', checkOut: '17:00', status: 'present' },
  { id: 5, employee: 'محمد عبدالرحمن الشمري', date: '2024-04-01', checkIn: null, checkOut: null, status: 'absent' },
  { id: 6, employee: 'سارة يوسف الدوسري', date: '2024-04-01', checkIn: '07:50', checkOut: '17:02', status: 'present' },
  { id: 7, employee: 'عبدالله محمد الغامدي', date: '2024-04-01', checkIn: '08:15', checkOut: '17:30', status: 'present' },
  { id: 8, employee: 'ريم أحمد الزهراني', date: '2024-04-01', checkIn: null, checkOut: null, status: 'leave' },
];

export const payroll = [
  { id: 1, employee: 'أحمد محمد العلي', employeeId: 'EMP-001', basicSalary: 18000, allowances: 4500, deductions: 1800, netSalary: 20700, status: 'paid', month: 'مارس 2024' },
  { id: 2, employee: 'فاطمة عبدالله السعيد', employeeId: 'EMP-002', basicSalary: 12000, allowances: 3000, deductions: 1200, netSalary: 13800, status: 'paid', month: 'مارس 2024' },
  { id: 3, employee: 'خالد إبراهيم الحربي', employeeId: 'EMP-003', basicSalary: 15000, allowances: 3750, deductions: 1500, netSalary: 17250, status: 'paid', month: 'مارس 2024' },
  { id: 4, employee: 'نورة سعد القحطاني', employeeId: 'EMP-004', basicSalary: 10000, allowances: 2500, deductions: 1000, netSalary: 11500, status: 'pending', month: 'مارس 2024' },
  { id: 5, employee: 'محمد عبدالرحمن الشمري', employeeId: 'EMP-005', basicSalary: 8500, allowances: 2125, deductions: 850, netSalary: 9775, status: 'paid', month: 'مارس 2024' },
  { id: 6, employee: 'سارة يوسف الدوسري', employeeId: 'EMP-006', basicSalary: 7500, allowances: 1875, deductions: 750, netSalary: 8625, status: 'pending', month: 'مارس 2024' },
  { id: 7, employee: 'عبدالله محمد الغامدي', employeeId: 'EMP-007', basicSalary: 14000, allowances: 3500, deductions: 1400, netSalary: 16100, status: 'paid', month: 'مارس 2024' },
  { id: 8, employee: 'ريم أحمد الزهراني', employeeId: 'EMP-008', basicSalary: 9000, allowances: 2250, deductions: 900, netSalary: 10350, status: 'paid', month: 'مارس 2024' },
];

export const leaves = [
  { id: 1, employee: 'ريم أحمد الزهراني', type: 'إجازة سنوية', startDate: '2024-04-01', endDate: '2024-04-10', days: 10, status: 'approved' },
  { id: 2, employee: 'أحمد محمد العلي', type: 'إجازة مرضية', startDate: '2024-03-25', endDate: '2024-03-27', days: 3, status: 'approved' },
  { id: 3, employee: 'خالد إبراهيم الحربي', type: 'إجازة سنوية', startDate: '2024-04-15', endDate: '2024-04-22', days: 7, status: 'pending' },
  { id: 4, employee: 'سارة يوسف الدوسري', type: 'إجازة طارئة', startDate: '2024-04-05', endDate: '2024-04-06', days: 2, status: 'approved' },
  { id: 5, employee: 'نورة سعد القحطاني', type: 'إجازة سنوية', startDate: '2024-05-01', endDate: '2024-05-15', days: 15, status: 'pending' },
  { id: 6, employee: 'عمر حسن المالكي', type: 'إجازة زواج', startDate: '2024-04-20', endDate: '2024-04-24', days: 5, status: 'approved' },
];

// ============ PROJECTS ============
export const projects = [
  { id: 1, name: 'تطوير نظام إدارة المخزون', client: 'شركة الفيصل للتجارة', startDate: '2024-01-15', endDate: '2024-06-30', budget: 250000, revenue: 300000, expenses: 180000, progress: 72, status: 'active', manager: 'أحمد محمد العلي' },
  { id: 2, name: 'تجهيز مكاتب فرع جدة', client: 'مؤسسة النور للمقاولات', startDate: '2024-02-01', endDate: '2024-04-30', budget: 150000, revenue: 175000, expenses: 142000, progress: 95, status: 'active', manager: 'خالد إبراهيم الحربي' },
  { id: 3, name: 'نظام نقاط البيع', client: 'شركة الأمل للتقنية', startDate: '2024-03-01', endDate: '2024-08-31', budget: 180000, revenue: 220000, expenses: 85000, progress: 45, status: 'active', manager: 'عبدالله محمد الغامدي' },
  { id: 4, name: 'صيانة البنية التحتية', client: 'شركة البناء الحديث', startDate: '2023-11-01', endDate: '2024-02-28', budget: 95000, revenue: 95000, expenses: 88000, progress: 100, status: 'completed', manager: 'محمد عبدالرحمن الشمري' },
  { id: 5, name: 'تدريب الموظفين على النظام', client: 'مجموعة الراشد', startDate: '2024-04-01', endDate: '2024-05-15', budget: 45000, revenue: 55000, expenses: 12000, progress: 20, status: 'active', manager: 'نورة سعد القحطاني' },
];

// ============ FIXED ASSETS ============
export const fixedAssets = [
  { id: 1, name: 'مبنى المقر الرئيسي', category: 'مباني', purchaseDate: '2018-01-15', purchaseValue: 2500000, currentValue: 2250000, depreciationRate: 5, annualDepreciation: 125000, accumulatedDepreciation: 250000, branch: 'الرياض', status: 'active' },
  { id: 2, name: 'سيارة تويوتا كامري', category: 'سيارات', purchaseDate: '2022-06-10', purchaseValue: 120000, currentValue: 96000, depreciationRate: 20, annualDepreciation: 24000, accumulatedDepreciation: 24000, branch: 'الرياض', status: 'active' },
  { id: 3, name: 'خادم Dell PowerEdge', category: 'معدات تقنية', purchaseDate: '2023-01-20', purchaseValue: 85000, currentValue: 72250, depreciationRate: 25, annualDepreciation: 21250, accumulatedDepreciation: 12750, branch: 'الرياض', status: 'active' },
  { id: 4, name: 'نظام تكييف مركزي', category: 'تجهيزات', purchaseDate: '2019-03-05', purchaseValue: 180000, currentValue: 135000, depreciationRate: 10, annualDepreciation: 18000, accumulatedDepreciation: 45000, branch: 'جدة', status: 'active' },
  { id: 5, name: 'أثاث مكتبي كامل', category: 'أثاث', purchaseDate: '2021-08-15', purchaseValue: 95000, currentValue: 71250, depreciationRate: 10, annualDepreciation: 9500, accumulatedDepreciation: 23750, branch: 'الرياض', status: 'active' },
  { id: 6, name: 'طابعة صناعية كبيرة', category: 'معدات', purchaseDate: '2020-04-20', purchaseValue: 45000, currentValue: 27000, depreciationRate: 20, annualDepreciation: 9000, accumulatedDepreciation: 18000, branch: 'الدمام', status: 'active' },
  { id: 7, name: 'سيارة نقل هيونداي', category: 'سيارات', purchaseDate: '2021-11-10', purchaseValue: 95000, currentValue: 57000, depreciationRate: 20, annualDepreciation: 19000, accumulatedDepreciation: 38000, branch: 'جدة', status: 'sold' },
];

// ============ SERVICES & CONTRACTS ============
export const contracts = [
  { id: 1, contractNumber: 'CNT-001', customer: 'شركة الفيصل للتجارة', type: 'عقد صيانة', startDate: '2024-01-01', endDate: '2024-12-31', value: 48000, status: 'active' },
  { id: 2, contractNumber: 'CNT-002', customer: 'مؤسسة النور للمقاولات', type: 'عقد خدمات', startDate: '2024-03-01', endDate: '2025-02-28', value: 72000, status: 'active' },
  { id: 3, contractNumber: 'CNT-003', customer: 'شركة البناء الحديث', type: 'عقد دعم فني', startDate: '2024-02-15', endDate: '2024-08-14', value: 36000, status: 'active' },
  { id: 4, contractNumber: 'CNT-004', customer: 'مجموعة الراشد', type: 'عقد اشتراك', startDate: '2023-06-01', endDate: '2024-05-31', value: 24000, status: 'expiring' },
  { id: 5, contractNumber: 'CNT-005', customer: 'شركة الأمل للتقنية', type: 'عقد صيانة', startDate: '2023-01-01', endDate: '2023-12-31', value: 30000, status: 'expired' },
  { id: 6, contractNumber: 'CNT-006', customer: 'شركة التميز للاستشارات', type: 'عقد خدمات استشارية', startDate: '2024-04-01', endDate: '2024-09-30', value: 60000, status: 'active' },
];

export const workOrders = [
  { id: 1, orderNumber: 'WO-001', customer: 'شركة الفيصل للتجارة', service: 'صيانة خادم', date: '2024-03-20', assignedTo: 'أحمد محمد العلي', priority: 'high', status: 'completed' },
  { id: 2, orderNumber: 'WO-002', customer: 'مؤسسة النور للمقاولات', service: 'تركيب شبكة', date: '2024-03-25', assignedTo: 'عبدالله محمد الغامدي', priority: 'medium', status: 'inprogress' },
  { id: 3, orderNumber: 'WO-003', customer: 'شركة البناء الحديث', service: 'إصلاح طابعة', date: '2024-04-01', assignedTo: 'محمد عبدالرحمن الشمري', priority: 'low', status: 'pending' },
  { id: 4, orderNumber: 'WO-004', customer: 'مجموعة الراشد', service: 'ترقية نظام', date: '2024-04-03', assignedTo: 'أحمد محمد العلي', priority: 'high', status: 'pending' },
];

// ============ NOTIFICATIONS ============
export const notifications = [
  { id: 1, title: 'مخزون منخفض', message: 'المنتج "لوحة مفاتيح ميكانيكية" أقل من الحد الأدنى', type: 'warning', time: 'منذ 5 دقائق', read: false },
  { id: 2, title: 'فاتورة مستحقة', message: 'فاتورة INV-2024-004 مستحقة السداد', type: 'danger', time: 'منذ 15 دقيقة', read: false },
  { id: 3, title: 'عقد على وشك الانتهاء', message: 'عقد CNT-004 ينتهي خلال 30 يوماً', type: 'warning', time: 'منذ ساعة', read: false },
  { id: 4, title: 'طلب شراء جديد', message: 'تم إنشاء طلب شراء PO-2024-008', type: 'info', time: 'منذ ساعتين', read: true },
  { id: 5, title: 'طلب إجازة جديد', message: 'خالد إبراهيم الحربي طلب إجازة سنوية', type: 'info', time: 'منذ 3 ساعات', read: true },
  { id: 6, title: 'تم استلام بضاعة', message: 'تم استلام طلب الشراء PO-2024-005', type: 'success', time: 'منذ 5 ساعات', read: true },
  { id: 7, title: 'نفاد مخزون', message: 'المنتج "كاميرا مراقبة HD" نفد من المخزون', type: 'danger', time: 'أمس', read: true },
];

// ============ USER ============
export const currentUser = {
  name: 'عبدالرحمن الأحمدي',
  email: 'admin@erp-system.sa',
  role: 'مدير النظام',
  branch: 'الرياض',
  avatar: null,
};

// ============ BRANCHES ============
export const branches = [
  { id: 1, name: 'الرياض', manager: 'عبدالرحمن الأحمدي', employees: 45, status: 'active' },
  { id: 2, name: 'جدة', manager: 'خالد إبراهيم الحربي', employees: 28, status: 'active' },
  { id: 3, name: 'الدمام', manager: 'محمد عبدالرحمن الشمري', employees: 15, status: 'active' },
  { id: 4, name: 'مكة', manager: 'هدى خالد العتيبي', employees: 10, status: 'active' },
];

// ============ WAREHOUSES DETAIL ============
export const warehouseDetails = [
  { id: 1, name: 'المستودع الرئيسي - الرياض', location: 'الرياض - المنطقة الصناعية', manager: 'محمد عبدالرحمن الشمري', totalProducts: 892, totalValue: 750000, lowStock: 15, capacity: '85%' },
  { id: 2, name: 'مستودع جدة', location: 'جدة - ميناء جدة الإسلامي', manager: 'سعد الحربي', totalProducts: 456, totalValue: 320000, lowStock: 8, capacity: '62%' },
  { id: 3, name: 'مستودع الدمام', location: 'الدمام - المنطقة الحرة', manager: 'عمر المالكي', totalProducts: 345, totalValue: 125000, lowStock: 5, capacity: '45%' },
  { id: 4, name: 'مستودع مكة', location: 'مكة المكرمة - العزيزية', manager: 'فهد القرشي', totalProducts: 164, totalValue: 55000, lowStock: 3, capacity: '30%' },
];

export const stockMovements = [
  { id: 1, date: '2024-04-05', product: 'لابتوب HP ProBook 450', type: 'صادر', quantity: 5, warehouse: 'المستودع الرئيسي - الرياض', reference: 'INV-2024-010' },
  { id: 2, date: '2024-04-04', product: 'شاشة Dell UltraSharp 27"', type: 'وارد', quantity: 20, warehouse: 'المستودع الرئيسي - الرياض', reference: 'PO-2024-007' },
  { id: 3, date: '2024-04-03', product: 'طابعة Canon ImageRunner', type: 'تحويل', quantity: 3, warehouse: 'مستودع جدة → مستودع الدمام', reference: 'TR-001' },
  { id: 4, date: '2024-04-02', product: 'ورق A4 - 5 رزم', type: 'صادر', quantity: 30, warehouse: 'المستودع الرئيسي - الرياض', reference: 'INV-2024-009' },
  { id: 5, date: '2024-04-01', product: 'كرسي مكتب دوار', type: 'وارد', quantity: 15, warehouse: 'مستودع جدة', reference: 'PO-2024-006' },
  { id: 6, date: '2024-03-30', product: 'ماوس لاسلكي Logitech', type: 'صادر', quantity: 10, warehouse: 'مستودع الدمام', reference: 'INV-2024-008' },
];

// ============ POS CATEGORIES ============
export const posCategories = ['الكل', 'إلكترونيات', 'أثاث مكتبي', 'قرطاسية', 'معدات'];
