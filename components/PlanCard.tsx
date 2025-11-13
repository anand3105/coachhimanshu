'use client';

import { motion } from 'framer-motion';
import Button from './Button';
import { Check, Crown } from 'lucide-react';

interface PlanCardProps {
  title: string;
  duration: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export default function PlanCard({
  title,
  duration,
  price,
  description,
  features,
  popular = false,
}: PlanCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -12 }}
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
        popular ? 'ring-2 ring-brand-gold' : ''
      }`}
    >
      {popular && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-transparent pointer-events-none" />
      )}

      <div
        className={`p-8 ${
          popular
            ? 'bg-gradient-to-br from-brand-navy-light to-brand-navy'
            : 'bg-brand-navy-light'
        } border ${
          popular ? 'border-brand-gold/30' : 'border-brand-navy-light/50'
        } relative`}
      >
        {popular && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="absolute -top-3 -right-3 bg-brand-gold text-brand-navy p-2 rounded-full"
          >
            <Crown size={20} />
          </motion.div>
        )}

        <div className="mb-8">
          <h3 className="text-white text-2xl font-bold mb-3">{title}</h3>
          <p className="text-brand-gray-dark text-sm mb-6">{description}</p>

          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-brand-gold text-5xl font-bold">{price}</span>
            <span className="text-brand-gray-dark text-base">
              / {duration.toLowerCase()}
            </span>
          </div>
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check
                size={20}
                className="text-brand-green mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-300 text-sm leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <Button
          variant={popular ? 'primary' : 'secondary'}
          className="w-full justify-center"
        >
          Get Started
        </Button>
      </div>
    </motion.div>
  );
}
