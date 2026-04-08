"use client";
import { useCart } from "@/store/useCart";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2 } from "lucide-react";

export function CartDrawer() {
  const { cart, isCartOpen, toggleCart, removeItem, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />
          <motion.div 
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <ShoppingBag /> Seu Carrinho
              </h2>
              <button onClick={toggleCart} className="p-2 hover:bg-gray-100 rounded-full"><X /></button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4">
              {cart.length === 0 && <p className="text-center text-gray-500 mt-10">Carrinho vazio...</p>}
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 bg-gray-50 p-3 rounded-2xl">
                  <img src={item.image} className="w-20 h-20 object-cover rounded-xl" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <p className="text-indigo-600 font-bold">R$ {item.price.toFixed(2)}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-500 font-medium">Qtd: {item.quantity}</span>
                      <button onClick={() => removeItem(item.id)} className="text-red-500"><Trash2 size={16}/></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-6 mt-4">
              <div className="flex justify-between text-xl font-bold mb-4">
                <span>Total:</span>
                <span>R$ {totalPrice().toFixed(2)}</span>
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-200">
                Finalizar Compra
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}