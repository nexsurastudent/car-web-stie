import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { 
  FaUserAlt, 
  FaPlus, 
  FaHome, 
  FaCar, 
  FaTags, 
  FaFire, 
  FaInfoCircle, 
  FaPhoneAlt,
  FaChevronLeft
} from 'react-icons/fa';

const MobileMenu = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  // بستن خودکار منو هنگام تغییر صفحه
  useEffect(() => {
    setMenu(false);
  }, [location]);

  // جلوگیری از اسکرول شدن صفحه وقتی منو باز است
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menu]);

  const menuItems = [
    { title: 'صفحه اصلی', path: '/', icon: <FaHome /> },
    { title: 'موترها', path: '/cars', icon: <FaCar /> },
    { title: 'برندها', path: '/brands', icon: <FaTags /> },
    { title: 'پیشنهادات ویژه', path: '/offers', icon: <FaFire className="text-orange-400" />, badge: 'داغ' },
    { title: 'درباره ما', path: '/about', icon: <FaInfoCircle /> },
    { title: 'تماس با ما', path: '/contact', icon: <FaPhoneAlt /> },
  ];

  return (
    <div className="lg:hidden w-full relative z-50 font-Vazirmatn-Medium" dir="rtl">
      {/* نوار بالایی (Header Bar) */}
      <header className="w-full px-5 py-4 flex justify-between items-center bg-slate-900/90 backdrop-blur-md border-b border-white/10 shadow-lg">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" className="w-36 object-contain" alt="لوگوی آتومارت" />
        </Link>

        {/* دکمه همبرگری مدرن */}
        <button
          onClick={() => setMenu(true)}
          aria-label="باز کردن منو"
          className="p-2.5 rounded-xl bg-accent/15 text-accent border border-accent/30 hover:bg-accent hover:text-white transition-all duration-300 active:scale-95"
        >
          <HiMenuAlt3 className="text-3xl" />
        </button>
      </header>

      {/* پس‌زمینه تیره و بلور (Backdrop Overlay) */}
      <div
        onClick={() => setMenu(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          menu ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* منوی کشویی (Slide-out Drawer) */}
      <aside
        className={`fixed top-0 right-0 h-full w-[82%] max-w-sm bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white shadow-2xl border-l border-white/10 flex flex-col justify-between transition-transform duration-300 ease-out ${
          menu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* بخش بالایی منو: لوگو و دکمه بستن */}
        <div>
          <div className="p-5 flex justify-between items-center border-b border-white/10">
            <img src="/logo.png" className="w-32" alt="لوگوی آتومارت" />
            <button
              onClick={() => setMenu(false)}
              aria-label="بستن منو"
              className="p-2 rounded-full bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-gray-300 transition-colors"
            >
              <HiX className="text-2xl" />
            </button>
          </div>

          {/* لینک‌های منو */}
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className={`group flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'bg-accent text-white shadow-md shadow-accent/25'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span
                          className={`text-lg transition-transform duration-200 group-hover:scale-110 ${
                            isActive ? 'text-white' : 'text-accent'
                          }`}
                        >
                          {item.icon}
                        </span>
                        <span className="text-base">{item.title}</span>
                        {item.badge && (
                          <span className="text-[11px] bg-orange-500/20 text-orange-400 border border-orange-500/30 px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <FaChevronLeft
                        className={`text-xs transition-transform duration-200 ${
                          isActive
                            ? 'text-white'
                            : 'text-gray-500 group-hover:-translate-x-1 group-hover:text-white'
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* بخش پایینی منو: دکمه‌های ورود و ثبت‌نام */}
        <div className="p-5 border-t border-white/10 bg-white/[0.02]">
          <p className="text-xs text-gray-400 mb-3 text-center">
            به جمع خریداران و فروشندگان آتومارت بپیوندید
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/login"
              className="flex justify-center items-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm transition-all active:scale-95"
            >
              <FaUserAlt className="text-xs" />
              <span>ورود</span>
            </Link>
            <Link
              to="/register"
              className="flex justify-center items-center gap-2 py-3 px-4 rounded-xl bg-accent hover:bg-accent/90 text-white text-sm shadow-lg shadow-accent/30 transition-all active:scale-95"
            >
              <FaPlus className="text-xs" />
              <span>ثبت نام</span>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default MobileMenu;
