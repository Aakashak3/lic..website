/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Phone, 
  Play, 
  Menu, 
  X,
  ChevronRight,
  MoreVertical,
  Shield,
  Smile,
  User,
  ArrowRight,
  Lock,
  ChevronDown,
  ShoppingCart,
  CheckCircle2,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Policy, Video, Submission } from './types';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Policies', href: '#policies' },
    { name: 'Videos', href: '#videos' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 md:px-8 py-3 ${
      scrolled ? 'top-4' : 'top-0'
    }`}>
      <div className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 rounded-2xl ${
        scrolled ? 'glass px-6 py-3 shadow-xl border-white/40' : 'bg-transparent py-4'
      }`}>
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-white p-1.5 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
            <img 
              src="/lic.png" 
              alt="LIC Logo" 
              className="h-8 md:h-10"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="hidden sm:block">
            <p className={`font-bold text-lg leading-tight transition-colors ${scrolled ? 'text-[#001D3D]' : 'text-white'}`}>
              Xavier A
            </p>
            <p className={`text-[10px] font-bold uppercase tracking-widest opacity-70 transition-colors ${scrolled ? 'text-[#001D3D]' : 'text-white'}`}>
              LIC Advisor
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`transition-all font-semibold relative group ${
                scrolled ? 'text-[#001D3D] hover:text-[#003566]' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFC300] transition-all duration-300 group-hover:w-full`}></span>
            </a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg ${
              scrolled ? 'bg-[#001D3D] text-white hover:bg-[#003566]' : 'bg-[#FFC300] text-[#001D3D] hover:bg-[#FFD60A]'
            }`}
          >
            Get Expert Advice
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-xl transition-colors ${scrolled ? 'text-[#001D3D] hover:bg-black/5' : 'text-white hover:bg-white/10'}`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden mt-4 mx-2"
          >
            <div className="glass rounded-2xl border-white/40 overflow-hidden shadow-2xl">
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold text-[#001D3D] hover:text-[#003566] transition-colors flex items-center justify-between group"
                  >
                    {link.name}
                    <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </a>
                ))}
                <div className="pt-4 mt-2 border-t border-[#001D3D]/10">
                  <button className="w-full bg-[#001D3D] text-white py-4 rounded-xl font-bold shadow-lg">
                    Contact Us Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FloatingButtons = () => {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/918838024747"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba5a] transition-colors"
      >
        <MessageCircle size={32} />
        <span className="absolute -top-2 -right-2 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-white text-[#25D366] text-[10px] font-bold items-center justify-center">1</span>
        </span>
      </motion.a>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-[100] p-4 glass border-t border-white/40">
        <motion.a
          href="#contact"
          whileTap={{ scale: 0.98 }}
          className="w-full premium-gradient text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl"
        >
          <Phone size={18} /> Get Free Consultation Now
        </motion.a>
      </div>
    </>
  );
};

const StatsSection = () => {
  const stats = [
    { label: "Happy Families", value: "2,000+", icon: Smile },
    { label: "Claims Settled", value: "99.2%", icon: CheckCircle2 },
    { label: "Years Excellence", value: "6+", icon: Shield }
  ];

  return (
    <div className="relative z-20 -mt-12 max-w-7xl mx-auto px-4 md:px-8">
      <div className="glass rounded-[2rem] border-white/40 shadow-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-6 group">
            <div className="w-16 h-16 bg-[#001D3D] rounded-2xl flex items-center justify-center text-[#FFC300] shadow-lg group-hover:scale-110 transition-transform">
              <stat.icon size={32} />
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[#001D3D]">{stat.value}</p>
              <p className="text-sm font-bold text-[#4A4A4A] uppercase tracking-widest">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = ({ onSecureFuture, onGetQuote }: { onSecureFuture: () => void, onGetQuote: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center premium-gradient overflow-hidden pt-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] bg-[#FFC300] rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.15, 0.05],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-[10%] -left-[5%] w-[600px] h-[600px] bg-[#CAF0F8] rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 space-y-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFC300] text-sm font-bold tracking-wider uppercase mb-6 shadow-xl">
              Official LIC Insurance Advisor
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.1] mb-6">
              LIC Life Insurance in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC300] to-[#FFD60A]">Nagapattinam, Tamil Nadu</span>
            </h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Looking for a trusted LIC insurance agent in Nagapattinam, Tamil Nadu? We help families choose the right LIC life insurance plan like Term Plan, Jeevan Anand, Pension schemes and child plans. Compare plans and get free expert advice in Tamil or English.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center lg:justify-start gap-6"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,195,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onSecureFuture}
              className="accent-gradient text-[#001D3D] px-10 py-4 rounded-2xl font-extrabold shadow-2xl flex items-center gap-2 group transition-all"
            >
              Protect My Family <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onGetQuote}
              className="px-10 py-4 rounded-2xl font-extrabold text-white border-2 border-white/30 backdrop-blur-md hover:border-white/60 transition-all flex items-center gap-2"
            >
              <Phone size={20} /> Request Callback
            </motion.button>
          </motion.div>

          {/* Quick Trust Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-4"
          >
            <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
              <CheckCircle2 size={16} className="text-[#FFC300]" /> Govt. Guaranteed
            </div>
            <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
              <CheckCircle2 size={16} className="text-[#FFC300]" /> 24/7 Support
            </div>
            <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
              <CheckCircle2 size={16} className="text-[#FFC300]" /> Tax Benefits
            </div>
          </motion.div>
        </div>

        <div className="flex-1 relative w-full max-w-2xl lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="relative p-4 glass border-white/40 rounded-[2.5rem] shadow-2xl overflow-hidden group">
              <img 
                src="/family.png" 
                alt="Happy Family" 
                loading="lazy"
                className="rounded-[2rem] w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Floating Stat Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-8 left-8 glass px-6 py-4 rounded-2xl flex items-center gap-4 border-white/60 shadow-2xl"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <Shield size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#001D3D] uppercase opacity-60">Protection Status</p>
                  <p className="font-bold text-[#001D3D]">100% Guaranteed</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PolicyCard: React.FC<{ policy: Policy, onInterested: (title: string) => void }> = ({ policy, onInterested }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.4 } }}
      className="glass rounded-3xl p-6 border-white/40 flex flex-col group transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(0,29,61,0.15)]"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="bg-white/50 p-2 rounded-xl shadow-inner">
          <Shield className="text-[#001D3D]" size={20} />
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#001D3D]/40">Status</span>
          <span className="text-[10px] font-bold text-green-600 flex items-center gap-1">
            <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span> Active
          </span>
        </div>
      </div>

      <h3 className="text-lg font-extrabold text-[#001D3D] mb-3 group-hover:text-[#003566] transition-colors leading-tight">
        {policy.title}
      </h3>
      
      {policy.image && (
        <div className="mb-6 overflow-hidden rounded-2xl bg-white/30 border border-white/40 relative group-hover:border-[#FFC300]/50 group-hover:shadow-xl transition-all duration-500">
          <img 
            src={policy.image} 
            alt={policy.title} 
            loading="lazy"
            className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FFC300]/0 to-[#FFC300]/0 group-hover:from-[#FFC300]/5 group-hover:to-transparent transition-all duration-500"></div>
        </div>
      )}

      <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6 flex-grow font-medium group-hover:text-[#1A1A1A] transition-colors">
        {policy.description}
      </p>

      {(policy.term || policy.maturity) && (
        <div className="grid grid-cols-2 gap-3 mb-6">
          {policy.term && (
            <div className="bg-white/50 rounded-xl p-3 border border-white/60">
              <p className="text-[10px] font-extrabold text-[#001D3D] uppercase tracking-widest mb-1">Term</p>
              <p className="text-[13px] font-bold text-[#001D3D]/80">{policy.term}</p>
            </div>
          )}
          {policy.maturity && (
            <div className="bg-white/50 rounded-xl p-3 border border-white/60">
              <p className="text-[10px] font-extrabold text-[#001D3D] uppercase tracking-widest mb-1">Maturity</p>
              <p className="text-[13px] font-bold text-[#001D3D]/80 truncate">{policy.maturity.split(' ')[0]} Returns</p>
            </div>
          )}
        </div>
      )}

      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onInterested(policy.title)}
        className="w-full bg-[#001D3D] text-white py-3 rounded-xl font-bold hover:bg-[#003566] transition-all shadow-[0_8px_20px_rgba(0,29,61,0.1)] flex items-center justify-center gap-2 text-sm"
      >
        Plan Details <ChevronRight size={16} />
      </motion.button>
    </motion.div>
  );
};

const PolicyInterestForm = ({ 
  policyName, 
  onClose, 
  onSubmit 
}: { 
  policyName: string, 
  onClose: () => void, 
  onSubmit: (submission: Omit<Submission, 'id' | 'timestamp'>) => void 
}) => {
  const [beneficiary, setBeneficiary] = useState<'child' | 'parent'>('child');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Form fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [policyType, setPolicyType] = useState('Endowment');
  const [term, setTerm] = useState('15 Years');
  const [goal, setGoal] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch("https://script.google.com/macros/s/AKfycbzLWR3pDQ21K0QhHeMFhRD6XNXYbQwAVglqvY4UhkuRhnbIjih2KhD9iI5LbOrnU9F9/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "formType": "Policy Interest",
          "Policy Name": policyName,
          "Name": name,
          "Phone": phone,
          "Policy Type": policyType,
          "Term": term,
          "Beneficiary": beneficiary,
          "Goal": goal
        })
      });

      setIsSuccess(true);
      setTimeout(onClose, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#001D3D]/80 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        className="glass rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] w-full max-w-2xl overflow-hidden relative border-white/20"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-[#001D3D]/50 hover:text-[#001D3D] z-10 p-2 hover:bg-black/5 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="premium-gradient p-8 text-white flex items-center gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <motion.div 
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="accent-gradient p-4 rounded-2xl shadow-xl"
          >
            <Shield className="text-[#001D3D]" size={32} />
          </motion.div>
          <div>
            <h2 className="text-2xl font-bold">Plan Your Legacy</h2>
            <p className="text-sm text-white/60 font-medium tracking-wide">Secure Future • Guaranteed Protection</p>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-8 md:p-12">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-inner">
                  <CheckCircle2 size={56} />
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-[#001D3D] mb-2">Success!</h3>
                  <p className="text-[#4A4A4A] max-w-xs font-medium">
                    We've received your interest in <span className="text-[#001D3D] font-bold">{policyName}</span>. 
                    Xavier A will reach out shortly.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                {/* Selected Policy Display */}
                <div className="bg-[#CAF0F8]/30 p-5 rounded-2xl border border-[#CAF0F8] flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-[#001D3D]/50 uppercase tracking-widest mb-1">Inquiry for</p>
                    <p className="text-xl font-extrabold text-[#001D3D]">{policyName}</p>
                  </div>
                  <div className="bg-white/80 px-3 py-1.5 rounded-lg text-[10px] font-extrabold text-[#001D3D] shadow-sm uppercase tracking-wider">
                    Govt. Guaranteed
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-[#001D3D] uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter Name"
                      className="w-full bg-white border-2 border-transparent rounded-2xl px-5 py-4 text-sm font-semibold text-[#001D3D] focus:border-[#FFC300] focus:ring-4 focus:ring-[#FFC300]/10 outline-none transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-[#001D3D] uppercase tracking-widest ml-1">Phone Number</label>
                    <div className="flex gap-3">
                      <div className="bg-white rounded-2xl px-4 py-4 flex items-center gap-2 text-sm font-bold text-[#001D3D] shadow-sm">
                        +91
                      </div>
                      <input 
                        required
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="1234567890"
                        className="flex-1 bg-white border-2 border-transparent rounded-2xl px-5 py-4 text-sm font-semibold text-[#001D3D] focus:border-[#FFC300] focus:ring-4 focus:ring-[#FFC300]/10 outline-none transition-all shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-[#001D3D] uppercase tracking-widest ml-1">Policy Category</label>
                    <div className="relative">
                      <select 
                        value={policyType}
                        onChange={(e) => setPolicyType(e.target.value)}
                        className="w-full bg-white border-2 border-transparent rounded-2xl px-5 py-4 text-sm font-semibold text-[#001D3D] focus:border-[#FFC300] focus:ring-4 focus:ring-[#FFC300]/10 outline-none appearance-none cursor-pointer shadow-sm"
                      >
                        <option>Endowment</option>
                        <option>Money Back</option>
                        <option>Term Assurance</option>
                        <option>Whole Life</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-[#001D3D]/40 pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-[#001D3D] uppercase tracking-widest ml-1">Planned Term</label>
                    <div className="relative">
                      <select 
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className="w-full bg-white border-2 border-transparent rounded-2xl px-5 py-4 text-sm font-semibold text-[#001D3D] focus:border-[#FFC300] focus:ring-4 focus:ring-[#FFC300]/10 outline-none appearance-none cursor-pointer shadow-sm"
                      >
                        <option>10 Years</option>
                        <option>15 Years</option>
                        <option>20 Years</option>
                        <option>25+ Years</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-[#001D3D]/40 pointer-events-none" size={18} />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-[#001D3D] uppercase tracking-widest ml-1">Who is this for?</label>
                  <div className="grid grid-cols-2 gap-6">
                    <motion.button 
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setBeneficiary('child')}
                      className={`flex items-center justify-center gap-3 p-5 rounded-2xl border-2 transition-all shadow-sm ${beneficiary === 'child' ? 'border-[#FFC300] bg-[#FFC300]/5 text-[#001D3D]' : 'border-transparent bg-white text-gray-400'}`}
                    >
                      <Smile size={20} />
                      <span className="text-sm font-bold">Child Education/Marriage</span>
                    </motion.button>
                    <motion.button 
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setBeneficiary('parent')}
                      className={`flex items-center justify-center gap-3 p-5 rounded-2xl border-2 transition-all shadow-sm ${beneficiary === 'parent' ? 'border-[#FFC300] bg-[#FFC300]/5 text-[#001D3D]' : 'border-transparent bg-white text-gray-400'}`}
                    >
                      <User size={20} />
                      <span className="text-sm font-bold">Retirement/Self</span>
                    </motion.button>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 pt-4">
                  <button 
                    type="button"
                    onClick={onClose}
                    className="flex-1 py-4 font-bold text-gray-400 hover:text-[#001D3D] transition-colors"
                  >
                    Discard
                  </button>
                  <motion.button 
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-[2] premium-gradient text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-2xl ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-[0_15px_30px_rgba(0,29,61,0.3)]'}`}
                  >
                    {isSubmitting ? (
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>Get Personalized Proposal <ArrowRight size={20} /></>
                    )}
                  </motion.button>
                </div>

                <div className="flex items-center justify-center gap-3 text-[10px] text-[#001D3D]/30 font-bold uppercase tracking-widest">
                  <Lock size={12} />
                  Privacy Guaranteed • IRDAI Regulated
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

const VideoCard: React.FC<{ title: string, thumbnail: string, category: string, url?: string }> = ({ title, thumbnail, category, url }) => {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div 
      onClick={handleClick}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-[2.5rem] bg-[#001D3D] aspect-video cursor-pointer shadow-2xl border border-white/10"
    >
      <img 
        src={thumbnail} 
        alt={title} 
        loading="lazy"
        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      
      {/* Overlay Details */}
      <div className="absolute inset-0 flex flex-col justify-between p-8">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 glass border-white/40 rounded-xl flex items-center justify-center p-2">
              <img src="/lic.png" className="h-5" alt="LIC" referrerPolicy="no-referrer" />
            </div>
            <span className="text-white text-[10px] font-extrabold uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
              {category}
            </span>
          </div>
          <button className="text-white/50 hover:text-white transition-colors">
            <MoreVertical size={20} />
          </button>
        </div>
        
        <div className="flex flex-col items-center justify-center absolute inset-0">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 glass border-white/60 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-[#FFC300] transition-all duration-500"
          >
            <Play fill="currentColor" className="text-white group-hover:text-[#001D3D] ml-1" size={28} />
          </motion.div>
        </div>

        <div className="z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h4 className="text-white font-extrabold text-xl leading-tight drop-shadow-lg">{title}</h4>
          <p className="text-white/60 text-xs font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Click to watch presentation
          </p>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10">
        <div className="w-0 group-hover:w-1/3 h-full bg-[#FFC300] transition-all duration-[3000ms] ease-out"></div>
      </div>
    </motion.div>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch("https://script.google.com/macros/s/AKfycbzLWR3pDQ21K0QhHeMFhRD6XNXYbQwAVglqvY4UhkuRhnbIjih2KhD9iI5LbOrnU9F9/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "formType": "Contact Form",
          "Name": formData.name,
          "Phone": formData.phone,
          "Message": formData.message
        })
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="premium-gradient text-white py-24 md:py-32 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFC300] opacity-[0.05] blur-[100px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#CAF0F8] opacity-[0.05] blur-[100px] -ml-64 -mb-64"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#FFC300] font-extrabold uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Get in Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-white"
          >
            Ready to Secure <br /> Your Future?
          </motion.h2>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-24 items-start">
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-12"
          >
            <div className="group flex items-start gap-6">
              <div className="w-16 h-16 glass border-white/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#FFC300] transition-all duration-500 group-hover:rotate-6">
                <MessageCircle className="text-white group-hover:text-[#001D3D]" size={28} />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-[#FFC300] uppercase tracking-widest mb-2">Direct WhatsApp</h4>
                <a 
                  href="https://wa.me/918838024747" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl md:text-2xl font-bold hover:text-[#FFC300] transition-colors"
                >
                  +91 8838024747
                </a>
                <p className="text-white/40 text-sm mt-2 font-medium italic">Instant response available 24/7</p>
              </div>
            </div>

            <div className="group flex items-start gap-6">
              <div className="w-16 h-16 glass border-white/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#FFC300] transition-all duration-500 group-hover:rotate-6">
                <Mail className="text-white group-hover:text-[#001D3D]" size={28} />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-[#FFC300] uppercase tracking-widest mb-2">Email Inquiry</h4>
                <a 
                  href="mailto:xavierajohn234@gmail.com"
                  className="text-xl md:text-2xl font-bold hover:text-[#FFC300] transition-colors"
                >
                  xavierajohn234@gmail.com
                </a>
                <p className="text-white/40 text-sm mt-2 font-medium italic">Professional policy advice</p>
              </div>
            </div>

            <div className="group flex items-start gap-6">
              <div className="w-16 h-16 glass border-white/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#FFC300] transition-all duration-500 group-hover:rotate-6">
                <MapPin className="text-white group-hover:text-[#001D3D]" size={28} />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-[#FFC300] uppercase tracking-widest mb-2">Visit Office</h4>
                <p className="text-lg md:text-xl font-bold leading-relaxed text-white/80">
                  Serving Nagapattinam & Tamil Nadu<br />
                  Licensed LIC Consultant • Home Visit Available
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-8 glass p-12 rounded-[2.5rem] border-white/20 py-24 shadow-2xl"
                >
                  <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center shadow-xl">
                    <CheckCircle2 size={56} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold text-white mb-3">Message Sent Successfully!</h3>
                    <p className="text-white/60 max-w-sm mx-auto font-medium leading-relaxed">
                      Thank you for reaching out. Xavier A will personally review your inquiry and get back to you within 24 hours.
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#FFC300] font-extrabold uppercase tracking-widest text-sm hover:underline"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass rounded-[2.5rem] border-white/20 shadow-2xl overflow-hidden"
                >
                  <div className="bg-[#001D3D] p-8 text-white">
                    <h3 className="text-xl font-bold">Inquiry Form</h3>
                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mt-1">Get a response within 24 hours</p>
                  </div>
                  
                  <div className="p-8 md:p-10 space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[11px] font-bold text-[#001D3D] uppercase tracking-widest ml-1">Your Full Name</label>
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter Name"
                          className="w-full bg-white border-2 border-[#001D3D]/5 rounded-xl px-6 py-4 focus:outline-none focus:border-[#FFC300] focus:bg-white transition-all font-bold text-[#001D3D] placeholder:text-gray-500 shadow-sm"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[11px] font-bold text-[#001D3D] uppercase tracking-widest ml-1">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="1234567890"
                          className="w-full bg-white border-2 border-[#001D3D]/5 rounded-xl px-6 py-4 focus:outline-none focus:border-[#FFC300] focus:bg-white transition-all font-bold text-[#001D3D] placeholder:text-gray-500 shadow-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[11px] font-bold text-[#001D3D] uppercase tracking-widest ml-1">How can we help?</label>
                      <textarea 
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your requirements..."
                        className="w-full bg-white border-2 border-[#001D3D]/5 rounded-xl px-6 py-4 focus:outline-none focus:border-[#FFC300] focus:bg-white transition-all font-bold text-[#001D3D] placeholder:text-gray-500 shadow-sm resize-none"
                      ></textarea>
                    </div>
                    <motion.button 
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full accent-gradient text-[#001D3D] py-5 rounded-2xl font-extrabold text-lg shadow-xl flex items-center justify-center gap-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-6 h-6 border-2 border-[#001D3D]/30 border-t-[#001D3D] rounded-full"
                        />
                      ) : (
                        <>Send Your Message <ArrowRight size={20} /></>
                      )}
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  const [selectedPolicy, setSelectedPolicy] = useState<string | null>(null);

  // Data State with initial values
  const [policies] = useState<Policy[]>([
    {
      id: '1',
      title: "ILU PACKAGE (3-in-1)",
      description: "Prosperity, Protection & Pension - A comprehensive combo of Index Plus, Lakshya, and Umang for a complete financial shield.",
      term: "25 Years",
      maturity: "Tax-Free Maturity + Life Cover + Pension",
      isHidden: false,
      image: "/two.png"
    },
    {
      id: '2',
      title: "LIC AMRITBAAL",
      description: "Child Future Guaranteed Plan. Secure your child's dreams for higher education and foreign studies with guaranteed returns.",
      term: "5-25 Years",
      maturity: "₹50 Lakh Lump Sum or ₹11 Lakh/Year Payout",
      isHidden: false,
      image: "/amritbaal.jpg"
    },
    {
      id: '3',
      title: "LIC BIMA KAVACH",
      description: "100 Year Term Plan. Lifetime insurance for a secured family future with flexible payment options and large sum assured.",
      term: "Up to 100 Years",
      maturity: "Sum Assured ₹2 Crore",
      isHidden: false,
      image: "/bima_kavach.jpg"
    },
    {
      id: '4',
      title: "LIC NIVESH PLUS",
      description: "Double your investment in just 5 years. A single premium, market-linked plan with life cover.",
      term: "5 - 25 Years",
      maturity: "Market-Linked Returns + Life Cover",
      isHidden: false,
      image: "/four.png"
    },
    {
      id: '5',
      title: "NEW JEEVAN ANAND",
      description: "A combination of protection and savings. Provides financial support for the family throughout the life of the policyholder.",
      term: "15 - 35 Years",
      maturity: "Maturity Benefit + Lifetime Risk Cover",
      isHidden: false,
      image: "/five.png"
    },
    {
      id: '6',
      title: "LIC INDEX PLUS",
      description: "Fast forward your investment returns with this unit-linked plan offering life cover and market growth.",
      term: "10 - 25 Years",
      maturity: "Unit Fund Value + Refund of Mortality Charges",
      isHidden: false,
      image: "/sixes.png"
    },
    {
      id: '7',
      title: "AMRITBAAL (Children's Plan)",
      description: "Specially designed to meet the educational and other needs of children with guaranteed additions.",
      term: "5 - 25 Years",
      maturity: "Guaranteed Maturity for Child's Future",
      isHidden: false,
      image: "/sevan.png"
    },
    {
      id: '8',
      title: "LIC JEEVAN UTSAV",
      description: "Whole life insurance with lifetime guaranteed returns and flexible benefit options.",
      term: "Whole Life",
      maturity: "Lifetime Guaranteed Income / Flexi Income",
      isHidden: false,
      image: "/eight.png"
    },
    {
      id: '9',
      title: "NEW JEEVAN SHANTI",
      description: "A single premium deferred annuity plan with guaranteed pension rates from 6.76% to 10.63%.",
      term: "Single Premium",
      maturity: "Guaranteed Monthly Pension for Life",
      isHidden: false,
      image: "/nine.png"
    }
  ]);

  const [videos] = useState<Video[]>(() => {
    const saved = localStorage.getItem('lic_videos');
    if (saved) return JSON.parse(saved);
    return [
      {
        id: 'new-1',
        title: "Best 5 LIC Policies in 2025 - Expert Comparison & New Updates",
        thumbnail: "https://img.youtube.com/vi/RqFOd0SX2hk/maxresdefault.jpg",
        category: "Top Policies 2025",
        url: "https://youtu.be/RqFOd0SX2hk?si=vH_EUTNRFPR4_gar"
      },
      {
        id: 'new-2',
        title: "Is LIC Policy Worth It? Jeevan Anand Plan Explained in Detail",
        thumbnail: "https://img.youtube.com/vi/kwkrJAZJbys/maxresdefault.jpg",
        category: "Policy Analysis",
        url: "https://youtu.be/kwkrJAZJbys?si=LAG78cRcts8WixkP"
      },
    ];
  });

  const handleInterested = (title: string) => {
    setSelectedPolicy(title);
  };

  const handlePolicySubmit = (submission: any) => {
    // Already handled in the component
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#1A1A1A] selection:bg-[#FFC300]/30 selection:text-[#001D3D] overflow-x-hidden">
      <Navbar />
      
      <AnimatePresence>
        {selectedPolicy && (
          <PolicyInterestForm 
            policyName={selectedPolicy} 
            onClose={() => setSelectedPolicy(null)}
            onSubmit={handlePolicySubmit}
          />
        )}
      </AnimatePresence>

      <main>
        <Hero 
          onSecureFuture={() => document.getElementById('policies')?.scrollIntoView({ behavior: 'smooth' })}
          onGetQuote={() => handleInterested('General Quote')}
        />

        <StatsSection />

        {/* About Us Section */}
        <section id="about" className="py-24 md:py-32 px-4 md:px-8 relative">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex-1 relative"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#FFC300] to-[#FFD60A] rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative glass p-4 rounded-[2.5rem] border-white/60 shadow-2xl overflow-hidden">
                  <img 
                    src="/sir.png" 
                    alt="Xavier A - Insurance Advisor" 
                    loading="lazy"
                    className="rounded-[2rem] w-full object-cover object-top aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-10 right-10 glass px-6 py-4 rounded-2xl border-white/40 shadow-xl">
                    <p className="text-[10px] font-extrabold text-[#001D3D]/40 uppercase tracking-widest mb-1">Experience</p>
                    <p className="text-xl font-extrabold text-[#001D3D]">6+ Years</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex-1 space-y-10"
            >
              <div>
                <span className="text-[#FFC300] font-extrabold uppercase tracking-[0.3em] text-xs mb-4 block">Meet Your Advisor</span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#001D3D] leading-tight mb-8">
                  Best LIC Insurance Agent in <br />
                  <span className="text-gradient">Nagapattinam</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-xl text-[#4A4A4A] leading-relaxed font-medium">
                    “I am Xavier, providing professional LIC insurance services in <span className="text-[#001D3D] font-bold">Nagapattinam and across Tamil Nadu</span> with 6 years of expertise.”
                  </p>
                  <p className="text-lg text-[#4A4A4A]/80 leading-relaxed font-medium">
                    We are a licensed LIC insurance consultant in Nagapattinam, helping families choose the right LIC policy for protection, child education and retirement. Home visit consultation is available upon request.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <h4 className="text-2xl font-extrabold text-[#001D3D] mb-1">250</h4>
                  <p className="text-xs font-bold text-[#4A4A4A]/60 uppercase tracking-widest">Policies Managed</p>
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold text-[#001D3D] mb-1">93%</h4>
                  <p className="text-xs font-bold text-[#4A4A4A]/60 uppercase tracking-widest">Client Satisfaction</p>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#001D3D] text-white px-10 py-5 rounded-2xl font-bold shadow-[0_20px_50px_rgba(0,29,61,0.15)] hover:bg-[#003566] transition-all flex items-center gap-3 text-lg"
              >
                Schedule a Consultation <ArrowRight size={22} />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Featured Policies */}
        <section id="policies" className="py-24 md:py-32 bg-[#F1F5F9] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#F8FAFC] to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="text-center mb-20">
              <span className="text-[#FFC300] font-extrabold uppercase tracking-[0.3em] text-xs mb-4 block">Exclusive Plans</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#001D3D]">Popular LIC Plans in Nagapattinam</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {policies.filter(p => !p.isHidden).map((policy) => (
                <PolicyCard 
                  key={policy.id} 
                  policy={policy}
                  onInterested={handleInterested}
                />
              ))}
            </div>
          </div>
        </section>
        {/* Correct Structure: Why Choose Us & Process */}
        <section className="py-24 bg-[#001D3D] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC300] opacity-[0.05] blur-[100px] -mr-48 -mt-48"></div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="text-[#FFC300] font-bold uppercase tracking-widest text-sm mb-4 block">Our Process</span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">3 Simple Steps to Secure Your Future</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#FFC300] text-[#001D3D] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl">1</div>
                <h3 className="text-xl font-bold">Free Consultation</h3>
                <p className="text-white/60">Connect with Xavier A for a personalized plan analysis in Nagapattinam.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#FFC300] text-[#001D3D] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl">2</div>
                <h3 className="text-xl font-bold">Plan Comparison</h3>
                <p className="text-white/60">Compare the best LIC policies like Term Plans and Jeevan Anand side-by-side.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#FFC300] text-[#001D3D] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl">3</div>
                <h3 className="text-xl font-bold">Paperless Onboarding</h3>
                <p className="text-white/60">Get your policy processed digitally with zero hassle and full support.</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#FFC300] text-[#001D3D] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white transition-all shadow-2xl"
              >
                Start Your Journey Now
              </button>
            </div>
          </div>
        </section>


        {/* Policy Videos */}
        {/* Local SEO Content Sections */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Term Plan SEO */}
              <div className="space-y-8">
                <h2 className="text-3xl font-extrabold text-[#001D3D]">LIC Term Plan in Nagapattinam – Affordable Life Cover</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#001D3D]">Why choose LIC Term Plan?</h3>
                  <p className="text-gray-600">Low premium, high cover, and tax benefits under 80C & 10(10D). It is the best choice for family protection and the purest form of life insurance for family security in Nagapattinam.</p>
                  
                  <h3 className="text-xl font-bold text-[#001D3D]">How much cover do you need?</h3>
                  <p className="text-gray-600">Simple calculator-style approach: It is recommended to have a cover that is 10–15 times your yearly income (Income x 15 + Loan amount).</p>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleInterested('Term Plan Quote')}
                  className="bg-[#001D3D] text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2"
                >
                  Compare Term Plans Now → WhatsApp for Inquiry <ArrowRight size={18} />
                </motion.button>
              </div>

              {/* Jeevan Anand SEO */}
              <div className="space-y-8">
                <h2 className="text-3xl font-extrabold text-[#001D3D]">LIC Jeevan Anand Policy in Nagapattinam</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#001D3D]">Plan Benefits</h3>
                  <p className="text-gray-600">Survival benefit, maturity benefit, and death benefit are provided. This plan is highly suitable for child education and marriage planning. LIC Jeevan Anand provides lifelong risk cover even after maturity.</p>
                  
                  <div className="overflow-x-auto rounded-2xl border border-gray-100 mt-4">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="p-4 font-extrabold">Feature</th>
                          <th className="p-4 font-extrabold">Term Plan</th>
                          <th className="p-4 font-extrabold">Jeevan Anand</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        <tr>
                          <td className="p-4 font-medium">Premium</td>
                          <td className="p-4 text-gray-500">Low</td>
                          <td className="p-4 text-gray-500">Higher</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium">Maturity</td>
                          <td className="p-4 text-gray-500">No payout</td>
                          <td className="p-4 text-gray-500">Yes (Lump sum)</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium">Best for</td>
                          <td className="p-4 text-gray-500">Pure protection</td>
                          <td className="p-4 text-gray-500">Savings + Protection</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleInterested('Jeevan Anand Details')}
                  className="bg-[#FFC300] text-[#001D3D] px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg"
                >
                  Apply Jeevan Anand <ArrowRight size={18} />
                </motion.button>
              </div>
            </div>

            <div className="mt-24 grid md:grid-cols-2 gap-12 text-left">
              <div className="bg-[#F8FAFC] p-8 rounded-[2rem] border border-gray-100">
                <h3 className="text-xl font-bold text-[#001D3D] mb-4">LIC Policy Surrender in Nagapattinam</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Need to surrender your LIC policy or check its surrender value? We provide professional assistance in Nagapattinam for policy surrenders, loan applications, and maturity claims. Visit us for a hassle-free experience.
                </p>
              </div>
              <div className="bg-[#F8FAFC] p-8 rounded-[2rem] border border-gray-100">
                <h3 className="text-xl font-bold text-[#001D3D] mb-4">Family Protection Plan Tamil Nadu</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Secure your family's financial future with our customized protection plans. We analyze your needs to suggest the best LIC term plans and endowment policies suitable for residents of Tamil Nadu.
                </p>
              </div>
            </div>

            <div className="mt-24 text-center space-y-8 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#001D3D]">How to Buy LIC Policy Online / Offline?</h2>
              <p className="text-lg text-gray-600">
                You can easily take a policy from Nagapattinam. We help you compare plans online and apply through a paperless process. Offline home visits are also available. Secure your family with the help of the best LIC insurance agent in Nagapattinam.
              </p>
              
              <div className="mt-16 text-left space-y-8">
                <h2 className="text-3xl font-extrabold text-[#001D3D] text-center">Frequently Asked Questions (Nagapattinam LIC)</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
                    <h4 className="font-bold text-[#001D3D] mb-2">LIC office address in Nagapattinam?</h4>
                    <p className="text-base text-gray-600">Our advisor, Xavier A, provides home services for Nagapattinam and surrounding areas across Tamil Nadu.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
                    <h4 className="font-bold text-[#001D3D] mb-2">How to claim LIC maturity in Nagapattinam?</h4>
                    <p className="text-base text-gray-600">We provide full support for document collection and processing for policy maturity claims.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
                    <h4 className="font-bold text-[#001D3D] mb-2">Is home visit available for LIC policy?</h4>
                    <p className="text-base text-gray-600">Yes, we will visit your location in Nagapattinam to explain the plans and complete the process.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
                    <h4 className="font-bold text-[#001D3D] mb-2">Best LIC child plan for education?</h4>
                    <p className="text-base text-gray-600">LIC Amritbaal and Jeevan Tarun plans are excellent options for child education.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-extrabold text-[#001D3D]">Free LIC Consultation in Nagapattinam</h2>
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="https://wa.me/918838024747" 
                  className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-xl hover:bg-[#20ba5a] transition-all"
                >
                  <MessageCircle size={24} /> WhatsApp Inquiry (Message us on WhatsApp)
                </a>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#001D3D] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-xl hover:bg-[#003566] transition-all"
                >
                  <Mail size={24} /> Get Free Quote (Plan Comparison Form)
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="videos" className="py-24 md:py-32 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-[#FFC300] font-extrabold uppercase tracking-[0.3em] text-xs mb-4 block">Education Portal</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#001D3D]">Policy Masterclass & Video Guides</h2>
                <p className="text-gray-500 mt-4 font-medium italic">"Watch and understand why millions trust LIC for their life goals."</p>
              </div>
              <button className="text-[#001D3D] font-bold border-b-2 border-[#FFC300] pb-1 hover:text-[#003566] transition-colors flex items-center gap-2">
                Browse All Guides <ChevronRight size={18} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {videos.map((video) => (
                <VideoCard 
                  key={video.id} 
                  title={video.title} 
                  thumbnail={video.thumbnail} 
                  category={video.category} 
                  url={video.url}
                />
              ))}
            </div>
          </div>
        </section>


        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-[#000F1F] text-white py-16 px-4 border-t border-white/5 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FFC300] opacity-[0.02] blur-[80px]"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-white p-1.5 rounded-xl">
                  <img src="/lic.png" alt="LIC" className="h-8" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl font-extrabold">Xavier A</h3>
              </div>
              <p className="text-white/40 font-medium max-w-sm leading-relaxed">
                Authorized LIC Insurance Advisor dedicated to providing expert financial guidance and secure life insurance solutions for families across India.
              </p>
            </div>
            <div>
              <h4 className="text-[#FFC300] font-extrabold uppercase tracking-widest text-xs mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm font-bold text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Advisor</a></li>
                <li><a href="#policies" className="hover:text-white transition-colors">Latest Policies</a></li>
                <li><a href="#videos" className="hover:text-white transition-colors">Knowledge Base</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#FFC300] font-extrabold uppercase tracking-widest text-xs mb-6">Support</h4>
              <ul className="space-y-4 text-sm font-bold text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li className="flex items-center gap-2 text-green-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Online Now
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold text-white/20 uppercase tracking-widest">
              <a href="https://akwithai.blog/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                © 2026 AK with AI. Developed by AK with AI.
              </a>
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Shield size={20} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Mail size={20} /></a>
              <a href="https://wa.me/918838024747" target="_blank" className="text-white/40 hover:text-[#FFC300] transition-colors"><MessageCircle size={20} /></a>
            </div>
          </div>
        </div>
      </footer>

      <FloatingButtons />
    </div>
  );
}
