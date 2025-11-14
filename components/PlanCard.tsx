'use client';

import { motion } from 'framer-motion';
import Button from './Button';
import { Check, Crown, Sparkles } from 'lucide-react';

interface PlanCardProps {
  id: number;
  title: string;
  duration: string;
  price: string;
  priceValue: number;
  description: string;
  features: string[];
  popular?: boolean;
  onAddToCart?: (plan: {
    id: number;
    name: string;
    price: number;
    duration: string;
    features: string[];
  }) => void;
}

export default function PlanCard({
  id,
  title,
  duration,
  price,
  priceValue,
  description,
  features,
  popular = false,
  onAddToCart,
}: PlanCardProps) {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({
        id,
        name: title,
        price: priceValue,
        duration,
        features,
      });
    }
  };
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -12 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative rounded-2xl overflow-hidden group ${
        popular ? 'shadow-2xl shadow-brand-gold/20' : 'shadow-xl shadow-black/30'
      }`}
    >
      {/* Animated gradient border for popular plan */}
      {popular && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gold via-yellow-400 to-brand-gold bg-[length:200%_100%] animate-shimmer" />
          <div className="absolute inset-[2px] bg-brand-navy rounded-2xl" />
        </>
      )}

      {/* Popular badge */}
      {popular && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="bg-gradient-to-r from-brand-gold via-yellow-400 to-brand-gold px-6 py-2 rounded-b-xl shadow-lg">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-brand-navy" />
              <span className="text-brand-navy font-bold text-xs uppercase tracking-wider">
                Most Popular
              </span>
              <Sparkles size={14} className="text-brand-navy" />
            </div>
          </div>
        </motion.div>
      )}

      <div
        className={`relative p-6 md:p-8 h-full flex flex-col ${
          popular
            ? 'bg-gradient-to-br from-[#1a2332] via-brand-navy to-[#0f1419]'
            : 'bg-gradient-to-br from-brand-navy-light/80 to-brand-navy/60 backdrop-blur-sm'
        } border ${
          popular ? 'border-transparent' : 'border-white/5'
        }`}
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-gold/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-brand-blue/5 to-transparent rounded-full blur-3xl" />

        {/* Crown icon for popular */}
        {popular && (
          <div className="absolute top-6 right-6 text-brand-gold opacity-20 group-hover:opacity-40 transition-opacity">
            <Crown size={40} />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className={`mb-6 ${popular ? 'pt-6' : ''}`}>
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2 tracking-tight">
              {title}
            </h3>
            <p className="text-gray-400 text-sm mb-6">{description}</p>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${
                  popular
                    ? 'from-brand-gold via-yellow-300 to-brand-gold'
                    : 'from-gray-200 to-gray-400'
                } bg-clip-text text-transparent`}>
                  {price}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">
                  / {duration.toLowerCase()}
                </span>
                {popular && (
                  <span className="px-2 py-0.5 bg-brand-gold/10 text-brand-gold text-xs rounded-full border border-brand-gold/20">
                    Best Value
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="flex-1 mb-6">
            <ul className="space-y-3.5">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 group/item"
                >
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                    popular
                      ? 'bg-brand-gold/20 text-brand-gold border border-brand-gold/30'
                      : 'bg-brand-green/20 text-brand-green border border-brand-green/30'
                  }`}>
                    <Check size={12} className="font-bold" />
                  </div>
                  <span className="text-gray-300 text-sm leading-relaxed group-hover/item:text-white transition-colors">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant={popular ? 'primary' : 'secondary'}
              className={`w-full justify-center text-base font-semibold py-4 rounded-xl transition-all duration-300 ${
                popular
                  ? 'bg-gradient-to-r from-brand-gold via-yellow-400 to-brand-gold hover:shadow-xl hover:shadow-brand-gold/30 text-brand-navy'
                  : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white'
              }`}
              onClick={handleAddToCart}
            >
              {popular ? 'Get Started Now' : 'Get Started'}
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
