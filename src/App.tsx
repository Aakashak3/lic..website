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
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Policy, Video, Submission } from './types';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Policies', href: '#policies' },
    { name: 'Videos', href: '#videos' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#002B5B] text-white px-4 py-3 md:px-8 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-white p-1 rounded">
            <img 
              src="/lic.png" 
              alt="LIC Logo" 
              className="h-8 md:h-10"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-[#F2C94C] transition-colors font-medium relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F2C94C] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#002B5B] border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg hover:text-[#F2C94C]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onSecureFuture, onGetQuote }: { onSecureFuture: () => void, onGetQuote: () => void }) => {
  return (
    <section className="relative bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold text-[#002B5B] leading-tight"
          >
            Secure Your Future <br />
            <span className="text-[#002B5B]">with Trusted Insurance</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-gray-600 max-w-lg"
          >
            Get personalized LIC policies for your family's financial security. 
            Plan ahead for a better tomorrow.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onSecureFuture}
              className="bg-[#F2C94C] text-[#002B5B] px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-[#e5be45] transition-all"
            >
              Secure Your Future
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
              whileTap={{ scale: 0.95 }}
              onClick={onGetQuote}
              className="border-2 border-gray-300 text-[#002B5B] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
        <div className="flex-1 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10"
          >
            <img 
              src="/family.png" 
              alt="Happy Family" 
              className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          {/* Decorative elements */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 -right-10 w-40 h-40 bg-[#F2C94C]/20 rounded-full blur-3xl -z-0"
          ></motion.div>
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#002B5B]/10 rounded-full blur-3xl -z-0"
          ></motion.div>
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
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all flex flex-col text-center"
    >
      {/* Title ABOVE the image */}
      <h3 className="text-xl font-bold text-[#002B5B] mb-4">{policy.title}</h3>
      
      {policy.image && (
        <div className="mb-4 overflow-hidden rounded-xl bg-gray-50 border border-gray-100">
          <img 
            src={policy.image} 
            alt={policy.title} 
            className="w-full h-auto object-contain max-h-[500px] mx-auto hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      {/* Interested button BELOW the image */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onInterested(policy.title)}
        className="w-full bg-[#F2C94C] text-[#002B5B] py-3 rounded-lg font-bold hover:bg-[#e5be45] transition-colors shadow-md mb-6"
      >
        Interested
      </motion.button>

      {policy.description && (
        <p className="text-sm text-gray-500 mb-4 flex-grow">
          {policy.description}
        </p>
      )}

      {(policy.term || policy.maturity) && (
        <div className="space-y-1 text-left inline-block mx-auto">
          {policy.term && (
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
              <span className="w-1.5 h-1.5 bg-[#F2C94C] rounded-full"></span>
              Term: {policy.term}
            </div>
          )}
          {policy.maturity && (
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
              <span className="w-1.5 h-1.5 bg-[#F2C94C] rounded-full"></span>
              {policy.maturity}
            </div>
          )}
        </div>
      )}
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
      const response = await fetch("https://script.google.com/macros/s/AKfycbwaPLwjpHJxy77T7Nkh-PqZXMDObCCrlar3Fi02jhESUNCuezKFhVMuf9RjmaDojOP6/exec", {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: { 
          "Content-Type": "application/json",
        },
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

      // With no-cors, we can't check response.ok, but if it doesn't throw, it's usually sent
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white z-10 p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="bg-[#001D3D] p-6 text-white flex items-center gap-4">
          <motion.div 
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-[#F2C94C] p-3 rounded-lg"
          >
            <Shield className="text-[#001D3D]" size={24} />
          </motion.div>
          <div>
            <h2 className="text-xl font-bold">Legacy Assurance Portal</h2>
            <p className="text-xs text-gray-400">Government Guaranteed Protection</p>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-8 space-y-6">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-4"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12 }}
                  className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center"
                >
                  <CheckCircle2 size={48} />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#002B5B]">Request Submitted!</h3>
                <p className="text-gray-600 max-w-xs">
                  Xavier A will contact you shortly to discuss the <span className="font-bold">{policyName}</span> plan.
                </p>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Selected Policy Display */}
                <div className="bg-[#F8F9FA] p-3 rounded-lg border-l-4 border-[#F2C94C]">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Selected Policy</p>
                  <p className="text-lg font-bold text-[#002B5B]">{policyName}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#002B5B] uppercase tracking-wider">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full legal name"
                      className="w-full bg-[#E9ECEF] border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#F2C94C] outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#002B5B] uppercase tracking-wider">Contact Number</label>
                    <div className="flex gap-2">
                      <div className="bg-[#E9ECEF] rounded-lg px-3 py-3 flex items-center gap-2 text-sm font-bold text-gray-600 cursor-pointer hover:bg-[#dee2e6] transition-colors">
                        +91 <ChevronDown size={14} />
                      </div>
                      <input 
                        required
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="80567 39438"
                        className="flex-1 bg-[#E9ECEF] border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#F2C94C] outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#002B5B] uppercase tracking-wider">Policy Type</label>
                    <div className="relative">
                      <select 
                        value={policyType}
                        onChange={(e) => setPolicyType(e.target.value)}
                        className="w-full bg-[#E9ECEF] border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#F2C94C] outline-none appearance-none cursor-pointer"
                      >
                        <option>Endowment</option>
                        <option>Money Back</option>
                        <option>Term Assurance</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#002B5B] uppercase tracking-wider">Policy Term / Year</label>
                    <div className="relative">
                      <select 
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className="w-full bg-[#E9ECEF] border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#F2C94C] outline-none appearance-none cursor-pointer"
                      >
                        <option>10 Years</option>
                        <option>15 Years</option>
                        <option>20 Years</option>
                        <option>25 Years</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-[#002B5B] uppercase tracking-wider">Beneficiary Focus</label>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.button 
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setBeneficiary('child')}
                      className={`flex items-center justify-center gap-3 p-4 rounded-lg border-2 transition-all ${beneficiary === 'child' ? 'border-[#F2C94C] bg-white shadow-md' : 'border-transparent bg-[#F1F3F5] text-gray-500'}`}
                    >
                      <Smile size={20} className={beneficiary === 'child' ? 'text-[#002B5B]' : 'text-gray-400'} />
                      <span className="text-sm font-bold">For Child</span>
                    </motion.button>
                    <motion.button 
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setBeneficiary('parent')}
                      className={`flex items-center justify-center gap-3 p-4 rounded-lg border-2 transition-all ${beneficiary === 'parent' ? 'border-[#F2C94C] bg-white shadow-md' : 'border-transparent bg-[#F1F3F5] text-gray-500'}`}
                    >
                      <User size={20} className={beneficiary === 'parent' ? 'text-[#002B5B]' : 'text-gray-400'} />
                      <span className="text-sm font-bold">For Parent</span>
                    </motion.button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#002B5B] uppercase tracking-wider">Primary Goal</label>
                  <textarea 
                    rows={3}
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    placeholder="What are you looking to achieve? (e.g. Higher Education, Retirement, Wealth Creation)"
                    className="w-full bg-[#E9ECEF] border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#F2C94C] outline-none resize-none transition-all"
                  ></textarea>
                </div>

                <div className="flex gap-4 pt-4">
                  <button 
                    type="button"
                    onClick={onClose}
                    className="flex-1 py-4 font-bold text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <motion.button 
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-[2] bg-[#001D3D] text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#002B5B]'}`}
                  >
                    {isSubmitting ? (
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>Submit Request <ArrowRight size={18} /></>
                    )}
                  </motion.button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 font-medium">
                  <Lock size={10} />
                  Your information is securely encrypted and held in strict confidence.
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

const VideoCard: React.FC<{ title: string, thumbnail: string, category: string }> = ({ title, thumbnail, category }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-gray-900 aspect-video cursor-pointer"
    >
      <img 
        src={thumbnail} 
        alt={title} 
        className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
              <img src="/lic.png" className="h-4" alt="LIC" referrerPolicy="no-referrer" />
            </div>
            <span className="text-white text-xs font-medium">{category}</span>
          </div>
          <button className="text-white opacity-70 hover:opacity-100">
            <MoreVertical size={20} />
          </button>
        </div>
        
        <div className="flex flex-col items-center justify-center absolute inset-0">
          <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play fill="white" className="text-white ml-1" size={24} />
          </div>
        </div>

        <div className="z-10">
          <h4 className="text-white font-bold text-lg leading-tight">{title}</h4>
        </div>
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
      const response = await fetch("https://script.google.com/macros/s/AKfycbwaPLwjpHJxy77T7Nkh-PqZXMDObCCrlar3Fi02jhESUNCuezKFhVMuf9RjmaDojOP6/exec", {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "formType": "Contact Form",
          "Name": formData.name,
          "Phone": formData.phone,
          "Message": formData.message
        })
      });

      // With no-cors, we can't check response.ok, but if it doesn't throw, it's usually sent
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#002B5B] text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Contact Us
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="flex items-start gap-5">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 bg-[#F2C94C] rounded-full flex items-center justify-center shrink-0"
              >
                <MessageCircle className="text-[#002B5B]" />
              </motion.div>
              <div>
                <h4 className="text-lg font-bold text-[#F2C94C]">WhatsApp</h4>
                <a 
                  href="https://wa.me/918838024747" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl hover:text-[#F2C94C] transition-colors"
                >
                  +91 8838024747
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 bg-[#F2C94C] rounded-full flex items-center justify-center shrink-0"
              >
                <Mail className="text-[#002B5B]" />
              </motion.div>
              <div>
                <h4 className="text-lg font-bold text-[#F2C94C]">Email</h4>
                <p className="text-xl">xavier@lic.com</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 bg-[#F2C94C] rounded-full flex items-center justify-center shrink-0"
              >
                <MapPin className="text-[#002B5B]" />
              </motion.div>
              <div>
                <h4 className="text-lg font-bold text-[#F2C94C]">Office Address</h4>
                <p className="text-xl leading-relaxed">
                  32, VOC Street, L/G Floor, Kasi Arcade Annexe,<br />
                  Kaikankuppam, Alwarthirunagar, Chennai – 600087
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6 bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 py-16"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12 }}
                    className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center"
                  >
                    <CheckCircle2 size={48} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-gray-300 max-w-xs">
                    Thank you for reaching out. Xavier A will get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#F2C94C] font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6 bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#F2C94C] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Phone Number"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#F2C94C] transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Message</label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your Message"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#F2C94C] transition-colors resize-none"
                    ></textarea>
                  </div>
                  <motion.button 
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-[#F2C94C] text-[#002B5B] py-4 rounded-xl font-bold text-lg hover:bg-[#e5be45] transition-all shadow-lg flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 border-2 border-[#002B5B]/30 border-t-[#002B5B] rounded-full"
                      />
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
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

  // Data State with initial values - Fixed for client
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
        id: '1',
        title: "Understanding LIC Policies",
        thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
        category: "Understanding LIC Policies"
      },
      {
        id: '2',
        title: "Benefits of Term insurance",
        thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
        category: "Benefits of Term insurance"
      }
    ];
  });

  const handleInterested = (title: string) => {
    setSelectedPolicy(title);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#F2C94C] selection:text-[#002B5B] overflow-x-hidden">
      <Navbar />
      
      <AnimatePresence>
        {selectedPolicy && (
          <PolicyInterestForm 
            policyName={selectedPolicy} 
            onClose={() => setSelectedPolicy(null)} 
            onSubmit={() => {}}
          />
        )}
      </AnimatePresence>

      <main className="pt-16 md:pt-20">
        <Hero 
          onSecureFuture={() => document.getElementById('policies')?.scrollIntoView({ behavior: 'smooth' })}
          onGetQuote={() => handleInterested('General Quote')}
        />

        {/* About Us Section */}
        <section id="about" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="flex-1"
            >
              <img 
                src="/sir.png" 
                alt="Xavier A - Insurance Advisor" 
                className="rounded-3xl shadow-xl w-full object-cover object-top aspect-[4/5] transition-transform duration-500 hover:scale-[1.01]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] mb-6">About Us</h2>
              <p className="text-xl text-gray-700 leading-relaxed font-medium mb-8">
                “I am Xavier, residing in Valasaravakkam, and working as an Insurance Advisor with 6 years of experience. I have built a strong reputation by maintaining excellent relationships with my clients and delivering consistent performance. I am here to guide you towards the best solutions to enjoy a secure and happy retirement.”
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#002B5B] text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-[#001f42] transition-all flex items-center gap-2"
              >
                Contact Me <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Featured Policies */}
        <section id="policies" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#002B5B] mb-12"
          >
            Future Policies
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policies.filter(p => !p.isHidden).map((policy) => (
              <PolicyCard 
                key={policy.id} 
                policy={policy}
                onInterested={handleInterested}
              />
            ))}
          </div>
        </section>

        {/* Policy Videos */}
        <section id="videos" className="py-20 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center text-[#002B5B] mb-12"
            >
              Policy Videos
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video) => (
                <VideoCard 
                  key={video.id} 
                  title={video.title} 
                  thumbnail={video.thumbnail} 
                  category={video.category} 
                />
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-[#001D3D] text-white py-8 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400">
            © 2024 LIC Agent | <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms of Use</a>
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/918838024747" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-white/20 transition-all cursor-pointer"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              WhatsApp Online
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
