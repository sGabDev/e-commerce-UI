"use client";
import { ProductCard } from "@/components/ProductCard";
import { CartDrawer } from "@/components/CartDrawer";
import { PRODUCTS, CATEGORIES, TESTIMONIALS } from "@/data/mock";
import { useCart } from "@/store/useCart";
import { 
  ShoppingBag, Search, ArrowRight, ShieldCheck, Truck, 
  RotateCcw, Star, Globe, Share2, MessageCircle, Zap, Menu, 
  CheckCircle2, CreditCard, ChevronRight, Play
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const { toggleCart, cart } = useCart();
  const [activeCat, setActiveCat] = useState("Todos");
  const [showFeedback, setShowFeedback] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (cart.length > 0) {
      setShowFeedback(true);
      const timer = setTimeout(() => setShowFeedback(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [cart.length]);

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#1d1d1f] selection:bg-indigo-600 selection:text-white">
      <CartDrawer />
      
      <AnimatePresence>
        {showFeedback && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-10 left-1/2 z-[100] bg-zinc-900 text-white px-6 py-4 rounded-3xl shadow-2xl flex items-center gap-4 border border-white/10"
          >
            <div className="bg-green-500 p-1 rounded-full"><CheckCircle2 size={16}/></div>
            <span className="text-sm font-bold tracking-tight">Item adicionado à sua sacola Posei!</span>
            <button onClick={toggleCart} className="text-indigo-400 font-black text-xs uppercase tracking-widest ml-4">Ver Sacola</button>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-zinc-100 h-20 px-8">
        <div className="max-w-[1800px] mx-auto h-full flex items-center justify-between">
          <div className="flex items-center gap-20">
            <h1 className="text-2xl font-black tracking-tighter uppercase italic">Posei<span className="text-indigo-600">.</span></h1>
            <nav className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
              {["Coleções", "Inovação", "Sustentabilidade", "Suporte"].map(item => (
                <a key={item} href="#" className="hover:text-black transition-all hover:translate-y-[-1px]">{item}</a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-8 mr-8 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
              <span className="flex items-center gap-2"><Globe size={14}/> PT-BR</span>
              <span className="flex items-center gap-2 font-bold text-zinc-900 leading-none">Minha Conta</span>
            </div>
            <button onClick={toggleCart} className="group relative bg-zinc-950 text-white p-4 rounded-2xl hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-100">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 w-6 h-6 bg-indigo-500 border-4 border-white rounded-full text-[9px] flex items-center justify-center font-black">
                {cart.length}
              </span>
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative h-[92vh] flex items-center overflow-hidden bg-white">
          <div className="max-w-[1800px] mx-auto px-10 w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span className="flex items-center gap-3 text-indigo-600 font-black tracking-[0.4em] text-[10px] uppercase mb-8">
                <div className="w-12 h-[2px] bg-indigo-600"></div> Drop 01 Outono 24
              </span>
              <h2 className="text-[100px] xl:text-[150px] font-black tracking-tighter leading-[0.8] mb-12">
                Puro<br/><span className="text-zinc-200">Refino.</span>
              </h2>
              <div className="flex flex-wrap gap-8 items-center">
                <button className="bg-zinc-950 text-white px-14 py-7 rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-indigo-600 transition-all shadow-2xl shadow-indigo-200">
                  Explorar Catálogo
                </button>
                <button className="flex items-center gap-4 font-black uppercase tracking-widest text-[10px] group">
                  <div className="w-16 h-16 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white transition-all">
                    <Play size={20} fill="currentColor" />
                  </div>
                  Ver Manifesto
                </button>
              </div>
            </motion.div>
          </div>
          <div className="absolute right-0 top-0 w-full lg:w-[55%] h-full">
            <div className="relative h-full w-full">
              <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2000" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent"></div>
            </div>
          </div>
        </section>

        <div className="bg-zinc-950 py-20">
          <div className="max-w-[1800px] mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { val: "50k+", lab: "Clientes Felizes" },
              { val: "24h", lab: "Envio Médio" },
              { val: "4.9/5", lab: "Avaliação Loja" },
              { val: "100%", lab: "Originalidade" },
            ].map((stat, i) => (
              <div key={i} className="text-center border-r border-zinc-800 last:border-none">
                <div className="text-4xl font-black text-white tracking-tighter mb-2">{stat.val}</div>
                <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{stat.lab}</div>
              </div>
            ))}
          </div>
        </div>

        <section className="max-w-[1800px] mx-auto px-10 py-32">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-zinc-100 rounded-[4rem] p-20 flex flex-col justify-end h-[600px] relative overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-700">
               <Zap className="absolute top-20 left-20 text-indigo-600 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all" size={100} />
               <h3 className="text-6xl font-black tracking-tighter mb-6 relative z-10">Tecnologia<br/>Vestível.</h3>
               <p className="text-zinc-500 font-bold max-w-sm relative z-10">Onde o silício encontra o algodão premium. Nossa linha inteligente redefine a utilidade.</p>
               <img src="https://images.unsplash.com/photo-1526170315873-3a9861ea438a?q=80&w=800" className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-10 mix-blend-multiply group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="space-y-8">
              <div className="bg-indigo-600 rounded-[4rem] p-12 text-white h-[284px] flex flex-col justify-between group cursor-pointer shadow-lg shadow-indigo-100">
                <Truck size={40} className="group-hover:translate-x-5 transition-transform" />
                <h4 className="text-3xl font-black tracking-tighter uppercase italic leading-none">Logística<br/>Global.</h4>
              </div>
              <div className="bg-white border-2 border-zinc-100 rounded-[4rem] p-12 h-[284px] flex flex-col justify-between hover:border-indigo-600 transition-all cursor-pointer">
                <ShieldCheck size={40} className="text-indigo-600" />
                <h4 className="text-3xl font-black tracking-tighter uppercase leading-none text-zinc-900">Segurança<br/>PoseiShield.</h4>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1800px] mx-auto px-10 py-20">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
            <div>
              <h2 className="text-7xl font-black tracking-tighter italic mb-4">A Vitrine.</h2>
              <p className="text-zinc-400 font-bold max-w-md">Uma seleção rigorosa dos itens que definem a estética PoseiShop nesta temporada.</p>
            </div>
            <div className="flex bg-zinc-100 p-2 rounded-[2rem] border border-zinc-200 shadow-sm overflow-x-auto no-scrollbar">
              {CATEGORIES.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`px-10 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap ${
                    activeCat === cat ? "bg-white text-zinc-950 shadow-md" : "text-zinc-400 hover:text-zinc-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {PRODUCTS.filter(p => activeCat === "Todos" || p.category === activeCat).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="bg-white py-40 border-y border-zinc-100">
          <div className="max-w-[1800px] mx-auto px-10">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-black tracking-tighter italic uppercase mb-4">Vozes da Comunidade</h2>
              <div className="flex justify-center gap-1 text-indigo-600"><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/></div>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {TESTIMONIALS.map((t, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-zinc-50 p-12 rounded-[3.5rem] border border-zinc-100 hover:bg-white transition-all shadow-sm hover:shadow-2xl hover:shadow-indigo-50"
                >
                  <p className="text-xl font-bold italic mb-10 text-zinc-600">"{t.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center font-black text-indigo-600">{t.name[0]}</div>
                    <div>
                      <div className="font-black text-sm uppercase tracking-widest">{t.name}</div>
                      <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-[1800px] mx-auto px-10 py-32">
          <div className="bg-zinc-950 rounded-[5rem] p-24 text-center relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none italic mb-12">O Clube Posei<br/><span className="text-indigo-600">Esperando por você.</span></h2>
                <div className="max-w-xl mx-auto flex flex-col md:flex-row gap-4">
                  <input type="email" placeholder="Digite seu e-mail" className="flex-1 bg-zinc-900 border-none rounded-3xl px-8 py-5 text-white font-bold outline-none focus:ring-4 ring-indigo-600/20" />
                  <button className="bg-white text-zinc-950 px-12 py-5 rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-indigo-600 hover:text-white transition-all">Entrar no Clube</button>
                </div>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-[150px] rounded-full"></div>
          </div>
        </section>
      </main>

      <footer className="bg-white pt-40 pb-20 px-10 border-t border-zinc-100">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-20 mb-40">
            <div className="col-span-2 lg:col-span-2">
              <h2 className="text-4xl font-black tracking-tighter uppercase italic mb-10">PoseiShop<span className="text-indigo-600">.</span></h2>
              <p className="text-zinc-400 text-lg font-bold max-w-sm mb-12 leading-relaxed italic">Construindo a nova era do varejo digital. Onde o design encontra a performance.</p>
              <div className="flex gap-4">
                {[Share2, Globe, MessageCircle].map((Icon, i) => (
                  <button key={i} className="p-5 bg-zinc-50 rounded-3xl hover:bg-zinc-950 hover:text-white transition-all"><Icon size={20}/></button>
                ))}
              </div>
            </div>
            <div className="space-y-10">
              <h4 className="font-black text-xs uppercase tracking-[0.3em] text-zinc-300">Explorar</h4>
              <nav className="flex flex-col gap-6 font-bold text-sm text-zinc-500">
                <a href="#" className="hover:text-indigo-600">Lançamentos</a>
                <a href="#" className="hover:text-indigo-600">Coleções</a>
                <a href="#" className="hover:text-indigo-600">Sobre nós</a>
              </nav>
            </div>
            <div className="space-y-10">
              <h4 className="font-black text-xs uppercase tracking-[0.3em] text-zinc-300">Suporte</h4>
              <nav className="flex flex-col gap-6 font-bold text-sm text-zinc-500">
                <a href="#" className="hover:text-indigo-600">Fale Conosco</a>
                <a href="#" className="hover:text-indigo-600">Trocas e Devoluções</a>
                <a href="#" className="hover:text-indigo-600">FAQ</a>
              </nav>
            </div>
            <div className="col-span-2 space-y-10">
               <h4 className="font-black text-xs uppercase tracking-[0.3em] text-zinc-300">Métodos de Pagamento</h4>
               <div className="flex gap-4 opacity-30 grayscale hover:grayscale-0 transition-all">
                  <CreditCard size={32} />
                  <Zap size={32} />
                  <div className="text-2xl font-black italic">PIX</div>
               </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 border-t border-zinc-100 pt-10 gap-8">
            <span>© 2024 PoseiShop Global Group Ltd.</span>
            <div className="flex gap-12">
              <span className="hover:text-indigo-600 cursor-pointer">Privacidade</span>
              <span className="hover:text-indigo-600 cursor-pointer">Termos de Uso</span>
              <span className="hover:text-indigo-600 cursor-pointer">Acessibilidade</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}