'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  Award,
  Users,
  Flame,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import PlanCard from '@/components/PlanCard';
import CheckoutDrawer from '@/components/CheckoutDrawer';
import { useCart } from '@/contexts/CartContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function Home() {
  const { addToCart } = useCart();

  const plans = [
    {
      id: 1,
      title: 'Kickstart Plan',
      duration: 'Month',
      price: '₹799',
      priceValue: 799,
      description: 'All Inclusive',
      features: [
        'Personalized workout plans',
        'Customized meal plans',
        'Daily progress tracking',
        '24/7 WhatsApp support',
        'Full video library access',
        'Monthly one-on-one consultations',
        'Supplement guidance',
        'Lifestyle coaching',
      ],
    },
    {
      id: 2,
      title: 'Consistency Plan',
      duration: '3 Months',
      price: '₹1,799',
      priceValue: 1799,
      description: 'All Inclusive',
      features: [
        'Personalized workout plans',
        'Customized meal plans',
        'Daily progress tracking',
        '24/7 WhatsApp support',
        'Full video library access',
        'Monthly one-on-one consultations',
        'Supplement guidance',
        'Lifestyle coaching',
      ],
      popular: true,
    },
    {
      id: 3,
      title: 'Strength Plan',
      duration: '6 Months',
      price: '₹2,999',
      priceValue: 2999,
      description: 'All Inclusive',
      features: [
        'Personalized workout plans',
        'Customized meal plans',
        'Daily progress tracking',
        '24/7 WhatsApp support',
        'Full video library access',
        'Monthly one-on-one consultations',
        'Supplement guidance',
        'Lifestyle coaching',
      ],
    },
    {
      id: 4,
      title: 'Mastery Plan',
      duration: '12 Months',
      price: '₹5,499',
      priceValue: 5499,
      description: 'All Inclusive',
      features: [
        'Personalized workout plans',
        'Customized meal plans',
        'Daily progress tracking',
        '24/7 WhatsApp support',
        'Full video library access',
        'Monthly one-on-one consultations',
        'Supplement guidance',
        'Lifestyle coaching',
      ],
    },
  ];

  const stats = [
    { value: '500+', label: 'Clients Transformed', icon: Users },
    { value: '5+', label: 'Years Experience', icon: Award },
    { value: '95%', label: 'Success Rate', icon: TrendingUp },
  ];

  const features = [
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Customized plans aligned with your specific fitness goals',
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Progress',
      description: 'Track metrics and visualize transformation with detailed analytics',
    },
    {
      icon: Flame,
      title: 'Expert Coaching',
      description: '5+ years of certified experience in fitness and nutrition',
    },
  ];

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navbar />

      <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 to-transparent pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div variants={itemVariants} className="mb-4 md:mb-6">
            <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-brand-blue/10 border border-brand-blue/30 rounded-full">
              <span className="flex items-center gap-2 text-brand-blue text-xs md:text-sm font-semibold">
                <Zap size={14} className="md:w-4 md:h-4" />
                Certified Fitness Expert
              </span>
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 leading-tight px-2"
          >
            <span className="text-white">Transform Your</span>
            <br />
            <span className="bg-gradient-to-r from-brand-blue to-brand-gold bg-clip-text text-transparent">
              Fitness Journey
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-4"
          >
            Get personalized training and nutrition guidance from a certified expert.
            Start your transformation with Coach Himanshu today.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4"
          >
            <a href="#plans" className="w-full sm:w-auto">
              <Button variant="primary" className="gap-2 w-full sm:w-auto justify-center">
                <span>Explore Plans</span>
                <ArrowRight size={18} className="md:w-5 md:h-5" />
              </Button>
            </a>
            <a href="/dashboard" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto justify-center">View Dashboard</Button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 px-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 md:p-8 bg-brand-navy-light border border-brand-navy-light/50 rounded-xl md:rounded-2xl hover:border-brand-blue/30 transition-all duration-300"
            >
              <stat.icon className="text-brand-blue mx-auto mb-3 md:mb-4" size={28} />
              <div className="text-3xl md:text-4xl font-bold text-brand-gold mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-20 px-6 bg-brand-navy-light/30 border-y border-brand-navy-light/20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white">
              Why Choose Coach Himanshu?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the difference with personalized coaching tailored to
              your unique goals and lifestyle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 bg-brand-navy-light border border-brand-navy-light/50 rounded-2xl hover:border-brand-blue/30 hover:bg-brand-navy-light/80 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6"
                >
                  <feature.icon className="text-brand-blue" size={28} />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="plans" className="py-16 md:py-32 px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-20 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-white">
              Choose Your Plan
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Select the perfect package for your fitness goals. All plans
              include personalized guidance and 24/7 support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                viewport={{ once: true }}
              >
                <PlanCard {...plan} onAddToCart={addToCart} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 border-t border-brand-navy-light/20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-bold mb-6 text-white"
          >
            Ready to Start Your Transformation?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 mb-10"
          >
            Join hundreds of satisfied clients who have achieved their fitness
            goals with expert coaching and personalized support.
          </motion.p>
          <motion.div variants={itemVariants}>
            <a href="/login">
              <Button variant="primary" className="gap-2">
                <span>Get Started Today</span>
                <ArrowRight size={20} />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />

      {/* Checkout Drawer */}
      <CheckoutDrawer />
    </div>
  );
}
