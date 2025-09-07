import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Zap, Database, Search } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-gradient-accent text-accent-foreground border-accent/20 mb-6 px-4 py-2 text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Revolutionary AI-driven Platform
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Deep-Sea eDNA{" "}
                <span className="text-gradient-hero">
                  Biodiversity Explorer
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Revolutionary AI-driven platform using Zonal HNSW algorithm to identify 
              taxonomy and assess biodiversity from environmental DNA datasets. Discover 
              the unknown depths of marine life with unprecedented speed and accuracy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="btn-primary text-lg px-8 py-4 hover-glow">
                <Database className="w-5 h-5 mr-2" />
                Analyze eDNA Now
              </Button>
              
              <Button size="lg" variant="outline" className="btn-glass text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Video Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 shadow-card hover-scale cursor-pointer group">
              <div className="aspect-video bg-gradient-primary rounded-2xl relative overflow-hidden">
                {/* Video Thumbnail Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex justify-between items-start">
                    <Badge className="bg-background/20 text-foreground border-border/20">
                      Live Demo
                    </Badge>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Duration</div>
                      <div className="text-lg font-semibold">2:45</div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <motion.div
                      className="w-20 h-20 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">Revolutionary ZHNSW Technology</h3>
                    <p className="text-sm text-muted-foreground">
                      Solving the database limitation problem in deep-sea biodiversity research
                    </p>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-accent-glow"
            >
              <Search className="w-8 h-8 text-accent-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;