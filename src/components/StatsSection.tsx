import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Search, Zap, Users } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
  animatedValue: number;
}

const StatCard = ({ icon, value, label, delay, animatedValue }: StatCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setCurrentValue((prev) => {
            const increment = Math.ceil(animatedValue / 50);
            if (prev + increment >= animatedValue) {
              clearInterval(interval);
              return animatedValue;
            }
            return prev + increment;
          });
        }, 30);
        return () => clearInterval(interval);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, animatedValue, delay]);

  const formatValue = (val: number) => {
    if (value.includes('K+')) return `${(val / 1000).toFixed(0)}K+`;
    if (value.includes('%')) return `${val}%`;
    return val.toLocaleString();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="glass rounded-2xl p-8 text-center group hover-glow cursor-pointer"
    >
      <div className="mb-6 flex justify-center">
        <div className="w-16 h-16 bg-gradient-button rounded-2xl flex items-center justify-center glow-primary group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      
      <div className="mb-2">
        <span className="text-4xl font-bold text-gradient-primary">
          {formatValue(currentValue)}
        </span>
      </div>
      
      <p className="text-muted-foreground font-medium">{label}</p>
      
      {/* Animated border */}
      <div className="mt-6 h-1 bg-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : {}}
          transition={{ duration: 1.5, delay: delay / 1000 + 0.5 }}
          className="h-full bg-gradient-button"
        />
      </div>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary-foreground" />,
      value: "250K+",
      label: "Sequences Analyzed",
      animatedValue: 250000,
      delay: 200
    },
    {
      icon: <Search className="w-8 h-8 text-primary-foreground" />,
      value: "1,240",
      label: "Novel Species Found",
      animatedValue: 1240,
      delay: 400
    },
    {
      icon: <Zap className="w-8 h-8 text-primary-foreground" />,
      value: "94%",
      label: "Search Speed Improvement",
      animatedValue: 94,
      delay: 600
    },
    {
      icon: <Users className="w-8 h-8 text-primary-foreground" />,
      value: "64",
      label: "Active Users",
      animatedValue: 64,
      delay: 800
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Transforming <span className="text-gradient-hero">Marine Research</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform delivers unprecedented results in biodiversity analysis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={stat.delay}
              animatedValue={stat.animatedValue}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;