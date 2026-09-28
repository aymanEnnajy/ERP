import { useState } from 'react';
import { Search, ShoppingCart, Trash2, Plus, Minus, CreditCard, Banknote, X } from 'lucide-react';
import { products, posCategories } from '../../data/mockData';
import { useToast } from '../../hooks/useToast';

export default function POS() {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('الكل');
  const [search, setSearch] = useState('');
  const { addToast } = useToast();

  const filteredProducts = products.filter(p => {
    const matchCat = category === 'الكل' || p.category === category;
    const matchSearch = p.name.includes(search) || p.barcode.includes(search);
    return matchCat && matchSearch && p.status === 'active';
  });

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.qty + delta);
        return { ...item, qty: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.salePrice * item.qty), 0);
  const tax = subtotal * 0.15; // 15% VAT
  const total = subtotal + tax;

  const handleCheckout = (method) => {
    if (cart.length === 0) return;
    addToast(`تمت عملية الدفع بنجاح (${method}) - المبلغ: ${total.toLocaleString()} ر.س`, 'success');
    setCart([]);
  };

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col md:flex-row gap-4 -m-4 md:-m-6 p-4 md:p-6 bg-gray-50">
      
      {/* Products Grid */}
      <div className="flex-1 flex flex-col min-w-0 gap-4">
        {/* Search & Filter */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <input 
              type="text" 
              placeholder="البحث أو مسح الباركود..." 
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-4 pr-10 py-3 rounded-xl border-none shadow-sm outline-none"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {posCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-xl whitespace-nowrap font-medium text-sm transition-colors ${
                category === cat ? 'bg-black text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="flex-1 overflow-y-auto pr-2 pos-grid content-start">
          {filteredProducts.map(product => (
            <div 
              key={product.id}
              onClick={() => addToCart(product)}
              className="bg-white p-3 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow flex flex-col h-full border border-transparent hover:border-gray-200"
            >
              <div className="h-24 bg-gray-50 rounded-lg mb-3 flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-gray-300" />
              </div>
              <div className="mt-auto">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-tight mb-1">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{product.barcode}</p>
                <div className="font-bold text-gray-900">{product.salePrice.toLocaleString()} ر.س</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Sidebar */}
      <div className="w-full md:w-96 bg-white rounded-2xl shadow-sm flex flex-col shrink-0 overflow-hidden border border-gray-100">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            <h2 className="font-bold text-lg">سلة المشتريات</h2>
          </div>
          <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded-full">{cart.length}</span>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400">
              <ShoppingCart className="w-12 h-12 mb-2 opacity-20" />
              <p>السلة فارغة</p>
            </div>
          ) : (
            <div className="space-y-2">
              {cart.map(item => (
                <div key={item.id} className="p-3 bg-white border border-gray-100 rounded-xl flex gap-3">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 line-clamp-1">{item.name}</h4>
                    <p className="font-semibold text-gray-900 mt-1">{item.salePrice.toLocaleString()} ر.س</p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600 p-1">
                      <X className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                      <button onClick={() => updateQty(item.id, 1)} className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm"><Plus className="w-3 h-3" /></button>
                      <span className="text-sm font-medium w-4 text-center">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, -1)} className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm"><Minus className="w-3 h-3" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Totals & Checkout */}
        <div className="p-4 bg-gray-50 border-t border-gray-100">
          <div className="space-y-2 mb-4 text-sm">
            <div className="flex justify-between text-gray-600"><span>المجموع الفرعي</span><span>{subtotal.toLocaleString()} ر.س</span></div>
            <div className="flex justify-between text-gray-600"><span>الضريبة (15%)</span><span>{tax.toLocaleString()} ر.س</span></div>
            <div className="flex justify-between font-bold text-lg text-gray-900 pt-2 border-t border-gray-200"><span>الإجمالي</span><span>{total.toLocaleString()} ر.س</span></div>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <button 
              disabled={cart.length === 0}
              onClick={() => handleCheckout('نقدي')}
              className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Banknote className="w-5 h-5" /> نقدي
            </button>
            <button 
              disabled={cart.length === 0}
              onClick={() => handleCheckout('بطاقة')}
              className="flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <CreditCard className="w-5 h-5" /> بطاقة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
