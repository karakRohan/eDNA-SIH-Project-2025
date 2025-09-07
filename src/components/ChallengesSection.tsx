import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";

const ChallengesSection = () => {
  const problems = [
    "Misclassifications of unknown species",
    "Underestimation of biodiversity",  
    "Long computational waiting times",
    "High memory requirements"
  ];

  const metrics = [
    { label: "Search Speed", value: "98.9% faster", color: "text-success" },
    { label: "Memory Usage", value: "77% reduction", color: "text-primary" },
    { label: "Accuracy", value: "99.7% maintained", color: "text-success" },
    { label: "Novel Discovery", value: "+240% improvement", color: "text-accent" }
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Addressing <span className="text-gradient-hero">Real-World Challenges</span>
          </h2>
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
            <span className="text-accent font-medium">Smart India Hackathon Problem Statement #25042</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center mr-4">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold">The Deep-Sea Database Problem</h3>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Traditional eDNA analysis relies heavily on reference databases like SILVA, 
              PR2, and NCBI, which are poorly represented for deep-sea organisms.
            </p>
            
            <div className="space-y-4">
              <p className="font-medium text-foreground mb-4">
                Existing pipelines (QIIME2, DADA2, mothur) struggle with novel taxa, leading to:
              </p>
              
              <div className="space-y-3">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-destructive rounded-full mr-3" />
                    <span className="text-muted-foreground">{problem}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 bg-accent/5 border border-accent/20 rounded-xl">
              <p className="text-sm text-accent font-medium">
                Our ZHNSW solution addresses all these challenges with minimal database dependency 
                while maintaining high accuracy and performance.
              </p>
            </div>
          </motion.div>

          {/* Performance Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-2xl font-bold">Performance Comparison</h3>
            </div>

            <div className="space-y-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">{metric.label}</span>
                    <span className={`font-bold text-lg ${metric.color}`}>
                      {metric.value}
                    </span>
                  </div>
                  
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-button rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex items-start space-x-3 p-4 bg-success/5 border border-success/20 rounded-xl">
              <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-success mb-1">Breakthrough Achievement</p>
                <p className="text-sm text-muted-foreground">
                  First AI-powered platform to achieve sub-second deep-sea eDNA analysis 
                  while discovering 1,240+ previously unknown species.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;