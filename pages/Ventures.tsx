import React, { useState } from 'react';
import { VENTURES } from '../constants';
import { Zap, Shield, TrendingUp, Cpu, Droplets, Globe, Briefcase, ArrowRight, ChevronRight, X, Mail, Send } from 'lucide-react';

const Ventures: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mapping icons to ventures for a purely iconographic visual identity
  const getVentureIcon = (name: string) => {
    switch (name) {
      case 'eFaculty ICT Centre': return <Cpu className="text-white" size={32} />;
      case 'Crud-Cellz': return <Droplets className="text-white" size={32} />;
      case 'MetaVolt Projects Ltd': return <Zap className="text-white" size={32} />;
      case 'Wintrade International': return <Globe className="text-white" size={32} />;
      default: return <Briefcase className="text-white" size={32} />;
    }
  };

  return (
    <div className="w-full pb-24 bg-white">
      {/* Hero Section - Consistent with internal pages but customized for Ventures */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://i.ibb.co/zH5tcjvf/Usenobong-Ekponyoh.png')] bg-cover bg-[position:center_35%] opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="inline-block bg-brand-blue/30 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-6 animate-fade-in-up">
            Corporate Portfolio
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter animate-fade-in-up delay-100">
            Strategic <span className="text-blue-400">Ventures</span>
          </h1>
          <p className="text-slate-100 text-xl md:text-2xl max-w-3xl leading-relaxed animate-fade-in-up delay-200">
            A diversified ecosystem of high-impact enterprises driving innovation across Technology, Energy, and Global Trade.
          </p>
        </div>
      </section>

      {/* Main Portfolio Grid - No Images, only Icons and Typography */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VENTURES.map((venture, idx) => (
              <div
                key={idx}
                className="group relative bg-slate-50 border border-slate-100 p-10 md:p-14 rounded-[2.5rem] hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,28,143,0.1)] transition-all duration-500 text-left"
              >
                {/* Venture Icon Header */}
                <div className="flex items-center justify-between mb-10">
                  <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-500">
                    {getVentureIcon(venture.name)}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 px-4 py-2 rounded-full group-hover:bg-blue-50 group-hover:text-brand-blue transition-colors">
                    {venture.role}
                  </span>
                </div>

                {/* Venture Content */}
                <h2 className="text-3xl font-bold text-slate-900 mb-6 group-hover:text-brand-blue transition-colors">
                  {venture.name}
                </h2>
                <p className="text-lg leading-relaxed mb-10 min-h-[100px]">
                  {venture.description}
                </p>

                {/* Focus Areas - Clean Tags */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Key Focus Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {venture.focus.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-700 font-semibold text-sm group-hover:border-brand-blue/30 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Indicator */}
                <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-brand-blue font-bold text-sm">Strategic Enterprise</span>
                  <ChevronRight className="text-brand-blue animate-bounce-x" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Our Innovation <br />
                <span className="text-brand-blue">Methodology</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                Beyond capitalization, our approach to venture building is rooted in three non-negotiable pillars that ensure every company we lead remains future-ready.
              </p>
              <div className="w-20 h-1 bg-brand-blue"></div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Zap size={24} />,
                  title: 'Digital-First',
                  text: 'Leveraging data science and digital marketing to optimize operations and market reach.'
                },
                {
                  icon: <Shield size={24} />,
                  title: 'Resilience',
                  text: 'Focusing on ethical, sustainable practices that ensure long-term stability and social trust.'
                },
                {
                  icon: <TrendingUp size={24} />,
                  title: 'Expansion',
                  text: 'Continuous identification of market gaps across Africa, Europe, and the Middle East.'
                },
                {
                  icon: <Globe size={24} />,
                  title: 'Globalization',
                  text: 'Facilitating cross-border trade and partnerships that scale local value to global markets.'
                }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors text-left group">
                  <div className="text-brand-blue mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 p-12 md:p-20 rounded-[3rem] text-center border border-slate-100">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Let's Discuss Opportunities</h2>
            <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
              Looking for a strategic partner in energy, tech, agriculture, exploration, mining or international trade? Our portfolio is always open to high-value collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-brand-blue text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-blue-800 transition-all group"
              >
                Personal Inquiry <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Inquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-white w-full max-w-2xl rounded-3xl sm:rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden animate-in zoom-in-95 duration-300 max-h-[95vh] overflow-y-auto">
            <div className="bg-slate-900 p-6 sm:p-8 text-white flex justify-between items-center sticky top-0 z-20">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">Personal Inquiry</h3>
                <p className="text-blue-400 text-[10px] sm:text-sm font-medium mt-1 uppercase tracking-wider">Strategic Collaboration</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 sm:p-10">
              <form action="https://formspree.io/f/xeeljdlw" method="POST" className="space-y-4 sm:space-y-6">
                {/* Formspree Configuration */}
                <input type="hidden" name="_next" value="https://usenobong-ekponyoh.com/thank-you" />
                <input type="hidden" name="_subject" value="New Personal Inquiry" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company/Organization (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Your Inquiry</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-blue text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center hover:bg-blue-800 transition-all group"
                >
                  Send Inquiry <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ventures;
