import { Button } from "@/components/ui/button";
import { Upload, Play, Menu, Sun, Moon, LogIn, UserPlus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Analysis", href: "#analysis" },
    { label: "Download", href: "#download" },
    { label: "Settings", href: "#settings" },
    { label: "Help", href: "#help" },
    { label: "About", href: "#about" },
  ];

  useEffect(() => {
    // Set initial dark mode on mount
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="glass-nav fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="flex items-center space-x-3"
        >
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-button rounded-xl flex items-center justify-center">
              <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full glow-accent animate-pulse-glow"></div>
          </div>
          <span className="text-xl font-bold text-gradient-primary">DeepSea eDNA</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
            >
              {item.label}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-button group-hover:w-full transition-all duration-300"></div>
            </motion.a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <Button 
            variant="outline" 
            size="icon" 
            onClick={toggleTheme}
            className="btn-glass hidden sm:flex"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>

          {/* Upload Button - Hidden on mobile */}
          <Button variant="default" className="btn-primary hidden lg:flex items-center space-x-2">
            <Upload className="w-4 h-4" />
            <span>Upload Sample</span>
          </Button>
          
          {/* Demo Button - Hidden on small screens */}
          <Button variant="outline" className="btn-glass hidden md:flex items-center space-x-2">
            <Play className="w-4 h-4" />
            <span>Demo</span>
          </Button>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" className="btn-glass">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button variant="default" className="btn-primary">
              <UserPlus className="w-4 h-4 mr-2" />
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="outline" 
            size="icon" 
            className="md:hidden btn-glass"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-border/20"
          >
            <div className="px-6 py-4 space-y-4">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              {/* Mobile Action Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border/20">
                <Button 
                  variant="outline" 
                  className="btn-glass justify-start"
                  onClick={toggleTheme}
                >
                  {isDarkMode ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </Button>
                
                <Button variant="outline" className="btn-glass justify-start">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Sample
                </Button>
                
                <Button variant="outline" className="btn-glass justify-start">
                  <Play className="w-4 h-4 mr-2" />
                  View Demo
                </Button>
                
                <Button variant="outline" className="btn-glass justify-start">
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button>
                
                <Button variant="default" className="btn-primary justify-start">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Sign Up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;