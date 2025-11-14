'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Dumbbell,
  UtensilsCrossed,
  Calendar,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Crown,
  ArrowRight,
  LogOut
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ViewWorkoutModal from '@/components/modals/ViewWorkoutModal';
import ViewDietModal from '@/components/modals/ViewDietModal';

export default function ClientDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [subscription, setSubscription] = useState<any>(null);
  const [workouts, setWorkouts] = useState<any[]>([]);
  const [diets, setDiets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isWorkoutModalOpen, setIsWorkoutModalOpen] = useState(false);
  const [isDietModalOpen, setIsDietModalOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // In production, get token from localStorage or cookies
      const token = localStorage.getItem('token');

      if (!token) {
        window.location.href = '/';
        return;
      }

      // Fetch user and subscription data
      const userRes = await fetch('/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const userData = await userRes.json();
      setUser(userData.user);
      setSubscription(userData.subscription);

      // Fetch workouts
      const workoutRes = await fetch('/api/workouts/my-workouts', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (workoutRes.ok) {
        const workoutData = await workoutRes.json();
        setWorkouts(workoutData.currentWorkouts);
      }

      // Fetch diets
      const dietRes = await fetch('/api/diets/my-diets', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (dietRes.ok) {
        const dietData = await dietRes.json();
        setDiets(dietData.currentDiets);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getDaysRemaining = (endDate: string) => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return diff;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy flex items-center justify-center">
        <div className="animate-pulse text-white text-xl">Loading...</div>
      </div>
    );
  }

  const isSubscriptionActive = subscription?.isActive;
  const currentWorkout = workouts[0];
  const currentDiet = diets[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-brand-navy/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Coach Himanshu"
              width={90}
              height={90}
              className="object-contain"
            />
          </Link>

          <div className="flex-1 text-center hidden md:block">
            <h1 className="text-xl lg:text-2xl font-bold text-white leading-tight">
              Welcome, {user?.name || 'Champion'}! 💪
            </h1>
            <p className="text-gray-300 text-xs lg:text-sm">Let's crush your fitness goals today</p>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-all flex-shrink-0"
          >
            <LogOut className="w-5 h-5" />
            <span className="hidden lg:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-28 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Welcome (shown only on small screens) */}
          <div className="md:hidden mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome, {user?.name || 'Champion'}! 💪
            </h1>
            <p className="text-gray-300">Let's crush your fitness goals today</p>
          </div>

        {/* Subscription Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`mb-8 p-6 rounded-2xl backdrop-blur-md border ${
            isSubscriptionActive
              ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30'
              : 'bg-gradient-to-r from-red-500/20 to-orange-500/20 border-red-500/30'
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              {isSubscriptionActive ? (
                <CheckCircle2 className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-8 h-8 text-red-400 mt-1 flex-shrink-0" />
              )}
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {isSubscriptionActive ? 'Active Subscription' : 'Subscription Expired'}
                </h3>
                <p className="text-gray-300 mb-2">
                  {isSubscriptionActive
                    ? `${subscription?.subscription?.plan?.name} Plan`
                    : subscription?.message || 'Please renew to continue'}
                </p>
                {isSubscriptionActive && subscription?.subscription?.endDate && (
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">
                      {getDaysRemaining(subscription.subscription.endDate)} days remaining
                    </span>
                  </div>
                )}
              </div>
            </div>
            {!isSubscriptionActive && (
              <Link
                href="/#plans"
                className="bg-brand-blue text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                Renew Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <Dumbbell className="w-6 h-6 text-purple-400" />
              </div>
              <Crown className="w-5 h-5 text-yellow-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{workouts.length}</h3>
            <p className="text-gray-400 text-sm">Active Workouts</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-500/20 rounded-xl">
                <UtensilsCrossed className="w-6 h-6 text-green-400" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{diets.length}</h3>
            <p className="text-gray-400 text-sm">Diet Plans</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-orange-500/20 rounded-xl">
                <Calendar className="w-6 h-6 text-orange-400" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">
              Week {currentWorkout?.weekNumber || 1}
            </h3>
            <p className="text-gray-400 text-sm">Current Week</p>
          </motion.div>
        </div>

        {/* Current Plans Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Current Workout */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Dumbbell className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Current Workout</h2>
              </div>
            </div>

            {currentWorkout ? (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {currentWorkout.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {currentWorkout.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>Week {currentWorkout.weekNumber}</span>
                  </div>
                  <div className="text-gray-400">
                    {getDaysRemaining(currentWorkout.endDate)} days left
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">
                    Exercises ({currentWorkout.exercises?.length || 0})
                  </h4>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {currentWorkout.exercises?.slice(0, 5).map((exercise: any, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                      >
                        <div>
                          <p className="text-white font-medium">{exercise.name}</p>
                          <p className="text-gray-400 text-xs">{exercise.day}</p>
                        </div>
                        <div className="text-gray-300 text-sm">
                          {exercise.sets && exercise.reps && `${exercise.sets}x${exercise.reps}`}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setIsWorkoutModalOpen(true)}
                  className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
                >
                  View Full Workout
                </button>
              </div>
            ) : (
              <div className="text-center py-12">
                <Dumbbell className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 mb-4">No active workout plan</p>
                <p className="text-gray-500 text-sm">
                  Your coach will assign a workout plan soon
                </p>
              </div>
            )}
          </motion.div>

          {/* Current Diet */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <UtensilsCrossed className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Current Diet</h2>
              </div>
            </div>

            {currentDiet ? (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {currentDiet.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {currentDiet.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>Week {currentDiet.weekNumber}</span>
                  </div>
                  {currentDiet.targetCalories && (
                    <div className="text-gray-400">
                      {currentDiet.targetCalories} cal/day
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">
                    Meals ({currentDiet.meals?.length || 0})
                  </h4>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {currentDiet.meals?.slice(0, 5).map((meal: any, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                      >
                        <div>
                          <p className="text-white font-medium">{meal.name}</p>
                          <p className="text-gray-400 text-xs">
                            {meal.mealType} • {meal.day}
                          </p>
                        </div>
                        {meal.calories && (
                          <div className="text-gray-300 text-sm">
                            {meal.calories} cal
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setIsDietModalOpen(true)}
                  className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all"
                >
                  View Full Diet Plan
                </button>
              </div>
            ) : (
              <div className="text-center py-12">
                <UtensilsCrossed className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 mb-4">No active diet plan</p>
                <p className="text-gray-500 text-sm">
                  Your coach will create a diet plan soon
                </p>
              </div>
            )}
          </motion.div>
        </div>
        </div>
      </div>

      {/* Modals */}
      <ViewWorkoutModal
        isOpen={isWorkoutModalOpen}
        onClose={() => setIsWorkoutModalOpen(false)}
        workout={currentWorkout}
      />
      <ViewDietModal
        isOpen={isDietModalOpen}
        onClose={() => setIsDietModalOpen(false)}
        diet={currentDiet}
      />
    </div>
  );
}
