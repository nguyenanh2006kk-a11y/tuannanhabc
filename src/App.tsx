/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  ChevronRight, 
  Star, 
  Clock, 
  CheckCircle2,
  Menu,
  X,
  User,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  Search,
  ShoppingCart,
  Globe,
  Bike
} from 'lucide-react';

// --- Components ---

const Header = () => {
  return (
    <header className="bg-white">
      {/* Top Utility Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center">
            <img 
              src="https://thepizzacompany.vn/static/media/logo.3c6838b0.png" 
              alt="The Pizza Company Logo" 
              className="h-16 md:h-20" 
              referrerPolicy="no-referrer"
            />
            <div className="hidden sm:flex flex-col ml-4 border-l pl-4 border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <Phone size={12} className="text-gray-600" />
                </div>
                <span className="text-3xl md:text-4xl font-black italic tracking-tighter text-gray-800">
                  1900 <span className="text-pizza-red">6066</span>
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="h-[2px] w-full bg-pizza-green" />
                <span className="text-[9px] uppercase font-black tracking-widest text-gray-500 whitespace-nowrap">Giao hàng nhanh</span>
                <div className="h-[2px] w-full bg-pizza-red" />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex gap-2">
            <a href="#Pizza" className="bg-pizza-red text-white px-6 py-2.5 rounded-full flex items-center gap-2 font-black text-sm shadow-lg shadow-pizza-red/20 transition-transform hover:scale-105">
              <Bike size={18} /> ĐẶT GIAO HÀNG
            </a>
            <a href="#Pizza" className="bg-gray-100 text-gray-700 px-6 py-2.5 rounded-full flex items-center gap-2 font-black text-sm transition-transform hover:scale-105">
              <ShoppingBag size={18} /> ĐẶT ĐẾN LẤY
            </a>
          </div>
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Nhập địa chỉ của bạn" 
              className="bg-gray-50 border border-gray-200 rounded-full px-10 py-2.5 w-72 focus:outline-none focus:ring-2 focus:ring-pizza-green/20 transition-all"
            />
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-pizza-green" size={18} />
          </div>
          <div className="flex items-center gap-4 border-l pl-6">
            <button className="flex items-center gap-2 font-bold text-gray-700 hover:text-pizza-green transition-colors">
              <User size={20} />
              <span className="text-sm">Đăng nhập</span>
            </button>
            <div className="flex items-center gap-1">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2000px-Flag_of_Vietnam.svg.png" alt="VN" className="w-6 h-4 object-cover rounded-sm shadow-sm" />
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 text-pizza-green">
          <Menu size={32} />
        </button>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-pizza-green sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-1">
            <a href="#" className="flex-shrink-0 lg:hidden">
              <img 
                src="https://thepizzacompany.vn/static/media/logo.3c6838b0.png" 
                alt="Logo" 
                className="h-10 brightness-0 invert" 
                referrerPolicy="no-referrer"
              />
            </a>
            <div className="hidden lg:block flex-shrink-0 mr-4">
              <img 
                src="https://thepizzacompany.vn/static/media/logo.3c6838b0.png" 
                alt="Logo" 
                className="h-12 brightness-0 invert" 
                referrerPolicy="no-referrer"
              />
            </div>
            {[
              "Khuyến mãi", "Pizza", "Gà Ngon Vibe", "Nui Bỏ Lò", "Mỳ Ý", "Khai vị", "Salad", "Thức uống", "Chất Vibe"
            ].map((item, i) => (
              <a 
                key={i} 
                href={`#${item}`} 
                className={`px-5 py-3 text-white font-black text-[13px] uppercase tracking-wider whitespace-nowrap hover:bg-white/10 transition-colors ${i === 0 ? 'bg-white/20' : ''}`}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center ml-4">
            <button className="bg-white text-pizza-green px-5 py-2 rounded-full flex items-center gap-2 font-black text-sm shadow-lg my-2 transition-transform hover:scale-105">
              <ShoppingCart size={20} />
              <span className="hidden sm:inline">GIỎ HÀNG</span>
              <span className="bg-pizza-red text-white w-6 h-6 rounded-full flex items-center justify-center text-[11px]">0</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

const ComboBanner = () => {
  return (
    <section className="bg-pizza-gray py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden bg-pizza-green shadow-2xl flex flex-col lg:flex-row min-h-[500px]">
          {/* Checkerboard Border Top */}
          <div className="absolute top-0 left-0 right-0 h-6 checkerboard-pattern opacity-30 z-20" />
          
          {/* Left Side: Combo Info */}
          <div className="flex-1 p-10 md:p-16 relative z-10 flex flex-col justify-center text-white">
            <div className="flex items-center gap-6 mb-10">
              <img 
                src="https://thepizzacompany.vn/static/media/logo.3c6838b0.png" 
                alt="Logo" 
                className="h-16 brightness-0 invert" 
                referrerPolicy="no-referrer"
              />
              <div className="h-12 w-px bg-white/30" />
              <div className="flex flex-col">
                <span className="text-3xl font-black italic leading-none tracking-tighter">1900 6066</span>
                <span className="text-[11px] uppercase font-black tracking-[0.3em] text-pizza-yellow">Giao hàng nhanh</span>
              </div>
            </div>

            <div className="relative mb-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute -top-8 -left-4 bg-pizza-red text-white px-6 py-2 rounded-full font-black text-sm -rotate-6 shadow-xl z-20"
              >
                COMBO MỚI
              </motion.div>
              <h2 className="text-7xl md:text-9xl font-black leading-none tracking-tighter italic uppercase">
                BỘ ĐÔI <br />
                <span className="text-pizza-yellow">NHƯ Ý</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[2rem] flex flex-col items-center min-w-[140px] shadow-xl">
                <span className="text-[11px] font-black uppercase tracking-widest mb-1">Combo 1</span>
                <span className="text-3xl font-black text-pizza-yellow">169.000đ</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[2rem] flex flex-col items-center min-w-[140px] shadow-xl">
                <span className="text-[11px] font-black uppercase tracking-widest mb-1">Combo 2</span>
                <span className="text-3xl font-black text-pizza-yellow">169.000đ</span>
              </div>
            </div>

            <a href="#Pizza" className="bg-pizza-red hover:bg-white hover:text-pizza-red text-white px-12 py-5 rounded-full font-black text-2xl transition-all shadow-2xl shadow-pizza-red/40 self-start transform hover:scale-105 active:scale-95">
              ĐẶT HÀNG NGAY
            </a>
          </div>

          {/* Right Side: Food Image */}
          <div className="flex-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20 z-10" />
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1200" 
              alt="Premium Salmon Pizza" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Checkerboard Border Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-6 checkerboard-pattern opacity-30 z-20" />
            
            {/* Floating Badge */}
            <div className="absolute top-1/2 right-10 -translate-y-1/2 bg-pizza-yellow text-pizza-green p-8 rounded-full shadow-2xl border-8 border-pizza-green z-20 hidden xl:block">
              <div className="text-center font-black leading-none">
                <span className="text-sm uppercase block mb-1">Hương vị</span>
                <span className="text-4xl italic">NHƯ Ý</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PromotionGrid = () => {
  const promos = [
    { title: "Bộ Đôi Như Ý", price: "169.000đ", img: "https://images.unsplash.com/photo-1593504049359-7b7d92c7185d?auto=format&fit=crop&q=80&w=800", tag: "HOT" },
    { title: "Hồi Về Nhà", price: "569.000đ", img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=800", tag: "NEW" },
    { title: "Sen 679", price: "679.000đ", img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=800", tag: "BEST" },
    { title: "Đắp Vị Thương", price: "889.000đ", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800", tag: "PRO" }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h3 className="text-pizza-green font-black text-xl uppercase tracking-widest mb-2">Ưu đãi đặc biệt</h3>
          <h2 className="text-5xl font-black text-gray-900 italic">KHUYẾN MÃI <span className="text-pizza-red">HOT</span></h2>
        </div>
        <button className="text-pizza-green font-black flex items-center gap-2 hover:gap-4 transition-all group">
          XEM TẤT CẢ <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {promos.map((promo, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="bg-white rounded-[2.5rem] overflow-hidden shadow-pizza border border-gray-100 group cursor-pointer"
          >
            <div className="relative h-64 overflow-hidden">
              <img src={promo.img} alt={promo.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute top-4 left-4 bg-pizza-red text-white px-4 py-1 rounded-full font-black text-[10px] tracking-widest shadow-lg">
                {promo.tag}
              </div>
            </div>
            <div className="p-8 text-center">
              <h4 className="text-xl font-black text-gray-800 mb-2 group-hover:text-pizza-green transition-colors">{promo.title}</h4>
              <p className="text-pizza-red font-black text-2xl mb-6">{promo.price}</p>
              <a href="#Pizza" className="w-full py-4 bg-pizza-green text-white rounded-2xl font-black text-sm hover:bg-pizza-red transition-all shadow-lg shadow-pizza-green/20 flex items-center justify-center gap-2">
                <ShoppingCart size={18} /> CHỌN NGAY
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const OrderSection = () => {
  const [size, setSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', note: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const prices = { 'S': 199000, 'M': 289000, 'L': 379000 };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="Pizza" className="py-20 bg-pizza-gray px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-pizza-green p-8 text-white text-center relative">
            <div className="absolute top-0 left-0 right-0 h-2 checkerboard-pattern opacity-20" />
            <h2 className="text-4xl font-black italic tracking-tighter">ĐẶT HÀNG NGAY</h2>
            <p className="font-bold text-pizza-yellow uppercase tracking-widest text-sm">Giao hàng tận nơi trong 30 phút</p>
          </div>

          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
            {/* Product Selection */}
            <div className="space-y-8">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-pizza-gray group">
                <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800" alt="Pizza" className="w-full h-80 object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="bg-pizza-red px-4 py-1 rounded-full font-black text-xs uppercase tracking-widest mb-2 inline-block">Đặc sản</span>
                  <h3 className="text-3xl font-black italic">Pizza Cá Hồi Hạt Sen</h3>
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-black text-gray-700 uppercase tracking-widest text-xs">Chọn kích thước bánh</p>
                <div className="grid grid-cols-3 gap-3">
                  {['S', 'M', 'L'].map(s => (
                    <button 
                      key={s} 
                      onClick={() => setSize(s)}
                      className={`py-4 rounded-2xl border-2 font-black transition-all ${size === s ? 'border-pizza-green bg-pizza-green text-white shadow-lg' : 'border-gray-100 bg-gray-50 text-gray-400 hover:border-pizza-green/30'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <span className="font-bold text-gray-500">Số lượng:</span>
                <div className="flex items-center gap-4">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center font-black text-pizza-green">-</button>
                  <span className="font-black text-xl w-8 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center font-black text-pizza-green">+</button>
                </div>
              </div>

              <div className="pt-6 border-t flex justify-between items-center">
                <span className="font-bold text-gray-400">Tổng cộng:</span>
                <span className="text-3xl font-black text-pizza-red">{(prices[size as keyof typeof prices] * quantity).toLocaleString('vi-VN')}đ</span>
              </div>
            </div>

            {/* Form */}
            <div className="bg-pizza-gray/50 p-8 rounded-[2rem] border border-gray-100">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-gray-500 tracking-widest">Họ tên khách hàng</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-pizza-green/20"
                        placeholder="Nhập họ tên"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-gray-500 tracking-widest">Số điện thoại</label>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-pizza-green/20"
                        placeholder="Nhập số điện thoại"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-gray-500 tracking-widest">Địa chỉ giao hàng</label>
                      <input 
                        required
                        type="text" 
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-pizza-green/20"
                        placeholder="Số nhà, tên đường..."
                      />
                    </div>
                    <button 
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full py-5 bg-pizza-red hover:bg-pizza-green text-white rounded-2xl font-black text-xl transition-all shadow-xl shadow-pizza-red/20 disabled:opacity-50"
                    >
                      {isSubmitting ? "ĐANG XỬ LÝ..." : "XÁC NHẬN ĐẶT HÀNG"}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-10"
                  >
                    <div className="w-20 h-20 bg-pizza-green text-white rounded-full flex items-center justify-center mb-6 shadow-xl">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-black text-pizza-green mb-2">ĐẶT HÀNG THÀNH CÔNG!</h3>
                    <p className="text-gray-500 font-medium">Chúng tôi sẽ liên hệ với bạn ngay.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-pizza-green py-16 px-4 text-white">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
      <div className="col-span-2">
        <img src="https://thepizzacompany.vn/static/media/logo.3c6838b0.png" alt="Logo" className="h-16 brightness-0 invert mb-6" />
        <p className="text-white/70 max-w-sm font-medium leading-relaxed">
          The Pizza Company - Chuỗi nhà hàng Pizza phong cách Ý hàng đầu Việt Nam. Cam kết mang đến hương vị tuyệt hảo và dịch vụ tận tâm.
        </p>
      </div>
      <div>
        <h4 className="font-black text-pizza-yellow uppercase tracking-widest mb-6">Liên hệ</h4>
        <div className="flex items-center gap-3 text-2xl font-black italic mb-4">
          <Phone size={24} />
          <span>1900 6066</span>
        </div>
        <p className="text-white/60 text-sm">Hỗ trợ khách hàng 24/7</p>
      </div>
      <div>
        <h4 className="font-black text-pizza-yellow uppercase tracking-widest mb-6">Theo dõi</h4>
        <div className="flex gap-4">
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">FB</div>
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">IG</div>
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">TT</div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-xs font-bold uppercase tracking-widest">
      © 2024 The Pizza Company Vietnam. All rights reserved.
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-pizza-green selection:text-white">
      <Header />
      <main>
        <ComboBanner />
        <PromotionGrid />
        <OrderSection />
      </main>
      <Footer />

      {/* Floating Logo on the Left */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed left-6 bottom-10 z-40 hidden xl:block"
      >
        <a href="#" className="group relative block">
          <div className="absolute inset-0 bg-pizza-green rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
          <img 
            src="https://thepizzacompany.vn/static/media/logo.3c6838b0.png" 
            alt="Floating Logo" 
            className="h-20 w-20 object-contain relative z-10 drop-shadow-2xl transform group-hover:scale-110 transition-transform" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute -top-2 -right-2 bg-pizza-red text-white text-[10px] font-black px-2 py-1 rounded-full shadow-lg">
            1900 6066
          </div>
        </a>
      </motion.div>
    </div>
  );
}
