import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Bell, Search, User, LogOut, Settings, ChevronDown } from 'lucide-react';
import { notifications as notifData, currentUser } from '../../data/mockData';

export default function Header({ onMenuClick }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const notifRef = useRef(null);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const unreadCount = notifData.filter(n => !n.read).length;

  useEffect(() => {
    function handleClickOutside(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) setShowNotifications(false);
      if (profileRef.current && !profileRef.current.contains(e.target)) setShowProfile(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-6 md:px-8 sticky top-0 z-30">
      {/* Right side */}
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
          <Menu className="w-5 h-5 text-gray-600" />
        </button>

        {/* Desktop search */}
        <div className="hidden md:block relative">
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="بحث سريع..."
            className="w-80 pl-4 pr-11 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 outline-none focus:bg-white focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>

        {/* Mobile search toggle */}
        <button onClick={() => setShowSearch(!showSearch)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
          <Search className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Left side */}
      <div className="flex items-center gap-2">
        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => { setShowNotifications(!showNotifications); setShowProfile(false); }}
            className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Bell className="w-5 h-5 text-gray-600" />
            {unreadCount > 0 && (
              <span className="absolute top-1 left-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute left-0 top-12 w-80 bg-white rounded-xl border border-gray-100 shadow-xl z-50 fade-in">
              <div className="px-4 py-3 border-b border-gray-100">
                <h3 className="font-semibold text-sm text-gray-900">الإشعارات</h3>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifData.map(notif => (
                  <div
                    key={notif.id}
                    className={`px-4 py-3 border-b border-gray-50 hover:bg-gray-50 cursor-pointer ${!notif.read ? 'bg-blue-50/30' : ''}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                        notif.type === 'warning' ? 'bg-amber-500' :
                        notif.type === 'danger' ? 'bg-red-500' :
                        notif.type === 'success' ? 'bg-green-500' :
                        'bg-blue-500'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{notif.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5 truncate">{notif.message}</p>
                        <p className="text-[11px] text-gray-400 mt-1">{notif.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2 text-center border-t border-gray-100">
                <button className="text-xs font-medium text-gray-600 hover:text-gray-900">عرض جميع الإشعارات</button>
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => { setShowProfile(!showProfile); setShowNotifications(false); }}
            className="flex items-center gap-3 p-1.5 pr-3 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100"
          >
            <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-sm font-bold text-white">{currentUser.name.charAt(0)}</span>
            </div>
            <div className="hidden md:block text-right">
              <p className="text-sm font-semibold text-gray-900 leading-tight">{currentUser.name}</p>
              <p className="text-xs text-gray-500 mt-0.5">{currentUser.role}</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400 hidden md:block mr-1" />
          </button>

          {showProfile && (
            <div className="absolute left-0 top-12 w-56 bg-white rounded-xl border border-gray-100 shadow-xl z-50 fade-in">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">{currentUser.name}</p>
                <p className="text-xs text-gray-500">{currentUser.email}</p>
              </div>
              <div className="py-1">
                <button
                  onClick={() => { navigate('/profile'); setShowProfile(false); }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <User className="w-4 h-4" />
                  الملف الشخصي
                </button>
                <button
                  onClick={() => { navigate('/settings'); setShowProfile(false); }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <Settings className="w-4 h-4" />
                  الإعدادات
                </button>
                <hr className="my-1 border-gray-100" />
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50"
                >
                  <LogOut className="w-4 h-4" />
                  تسجيل الخروج
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile search bar */}
      {showSearch && (
        <div className="absolute top-16 right-0 left-0 bg-white border-b border-gray-100 p-4 md:hidden fade-in z-20">
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="بحث سريع..."
            className="w-full px-4 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 outline-none focus:bg-white focus:border-gray-300"
            autoFocus
          />
        </div>
      )}
    </header>
  );
}
