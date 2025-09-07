import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "DeepSea eDNA Explorer",
      items: [
        "AI-driven platform for identifying taxonomy and",
        "assessing biodiversity from environmental datasets",
        "using the revolutionary ZHNSW algorithm.",
        "",
        "© Smart India Hackathon"
      ]
    },
    {
      title: "Organization", 
      items: [
        "Ministry of Earth Sciences (MoES)",
        "Ind. Inst. Marine Sciences and Ecology (ICIMAR)",
        "",
        "Problem Statement ID: 25042"
      ]
    },
    {
      title: "Technology",
      items: [
        "• Zonal HNSW Algorithm",
        "• Deep Learning Classification", 
        "• Real-time Biodiversity Analysis",
        "• Advanced Data Visualization"
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Contact" },
  ];

  return (
    <footer className="relative py-16 px-6 mt-20">
      {/* Glass Background */}
      <div className="absolute inset-0 glass" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-gradient-primary mb-4">
                {section.title}
              </h4>
              <div className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <p
                    key={itemIndex}
                    className={`text-sm ${
                      item ? 'text-muted-foreground' : ''
                    } leading-relaxed`}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3"
          >
            <div className="w-8 h-8 bg-gradient-button rounded-lg flex items-center justify-center">
              <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
            </div>
            <span className="text-sm text-muted-foreground">
              Powered by Advanced AI & Marine Science
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 glass rounded-xl flex items-center justify-center hover-glow transition-all duration-300 group"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
            
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span>View Documentation</span>
              <ExternalLink className="w-3 h-3" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;