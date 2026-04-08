"use client";
import { useCart } from "@/store/useCart";
import { motion } from "framer-motion";
import { Plus, Star, Heart } from "lucide-react";

export function ProductCard({ product }: { product: any }) {
  const addItem = useCart((state) => state.addItem);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
    >
      <button className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-400 hover:text-red-500 transition-colors">
        <Heart size={20} />
      </button>

      <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-[#f5f5f7]">
        <motion.img 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={product.image} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-6 px-2">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">{product.category}</span>
          <div className="flex items-center gap-1">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-bold text-gray-400">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-gray-800 leading-tight mb-4 group-hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center justify-between">
          <p className="text-2xl font-black text-gray-900">
            <span className="text-sm font-medium mr-1 text-gray-400">R$</span>
            {product.price.toFixed(2)}
          </p>
          
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => addItem(product)}
            className="bg-gray-900 text-white p-4 rounded-2xl hover:bg-indigo-600 transition-all shadow-lg shadow-gray-200"
          >
            <Plus size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}