import { motion } from "framer-motion";
import { Layers, Zap, Microscope } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  metrics?: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, metrics, delay }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="glass rounded-3xl p-8 hover-glow group cursor-pointer"
    >
      <div className="mb-6">
        <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center glow-accent group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-gradient-accent">{title}</h3>
      
      <p className="text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>
      
      {metrics && (
        <div className="p-4 bg-background/30 rounded-xl border border-accent/20">
          <p className="text-sm text-accent font-medium">{metrics}</p>
        </div>
      )}
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Layers className="w-8 h-8 text-accent-foreground" />,
      title: "Zonal Partitioning",
      description: "Intelligent division of billion-scale datasets into manageable zones, dynamically reducing search complexity and memory usage.",
      metrics: "90% reduction in computational overhead",
      delay: 0.2
    },
    {
      icon: <Zap className="w-8 h-8 text-accent-foreground" />,
      title: "Lightning-Fast Search",
      description: "98.9% faster than traditional exhaustive search methods while maintaining 99.7% accuracy through smart zone selection algorithms.",
      metrics: "Sub-second query response time",
      delay: 0.4
    },
    {
      icon: <Microscope className="w-8 h-8 text-accent-foreground" />,
      title: "Novel Species Discovery",
      description: "Advanced algorithms to identify taxonomy previously unknown deep-sea species, filling critical gaps in marine biodiversity databases.",
      metrics: "1,240+ new species catalogued",
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Revolutionary <span className="text-gradient-hero">ZHNSW Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Solving the database limitation problem in deep-sea biodiversity research
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              metrics={feature.metrics}
              delay={feature.delay}
            />
          ))}
        </div>

        {/* Connecting Lines */}
        <div className="hidden lg:block absolute top-1/2 left-1/4 w-1/2 h-px bg-gradient-to-r from-accent/20 via-primary/40 to-accent/20 transform -translate-y-1/2" />
      </div>
    </section>
  );
};

export default FeaturesSection;