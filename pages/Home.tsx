
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Globe, Award, Heart } from 'lucide-react';
import { IMPACT_AREAS, VENTURES, BLOGS } from '../constants';

const Home: React.FC = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Trigger the image slide-in after the text has had time to establish
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-900 overflow-hidden">

        {/* Animated Hero Image Layer - Shifted right on desktop */}
        <div
          className={`absolute inset-0 bg-[url('https://i.ibb.co/Y7mvYjr8/Usenobong-Ekponyoh-3.png')] bg-cover bg-center md:bg-right transition-all duration-[1500ms] cubic-bezier(0.22, 1, 0.36, 1) ${showImage ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
        ></div>

        {/* Permanent Gradient Layer for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/60 to-transparent z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 w-full">
          <div className="max-w-4xl text-left">
            <h1 className="text-white text-4xl md:text-9xl font-extrabold mb-4 leading-[0.9] tracking-tighter opacity-0 animate-fade-in-up">
              Usenobong <br />
              <span className="text-blue-400">Ekponyoh</span>
            </h1>
            <p className="text-blue-400 text-sm md:text-2xl font-bold mb-8 tracking-widest uppercase drop-shadow-lg opacity-0 animate-fade-in-up delay-100">
              Entrepreneur | Investor | Strategic Innovator
            </p>
            <p className="text-slate-100 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl drop-shadow-lg opacity-0 animate-fade-in-up delay-200">
              Building resilient, future-ready enterprises across Technology, Agriculture, Construction, and Energy.
              Bridging the gap between traditional business models and modern innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start opacity-0 animate-fade-in-up delay-300">
              <Link to="/about" className="bg-brand-blue text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20 group">
                Explore My Story <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
                Let's Collaborate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-slate-900 text-3xl md:text-5xl font-bold mb-4">Core Areas of Impact</h2>
            <div className="w-24 h-1 bg-brand-blue mb-6"></div>
            <p className="text-slate-600 max-w-2xl text-lg text-left">
              Strategic leadership and operational excellence across high-impact global industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {IMPACT_AREAS.map((area, idx) => (
              <div key={idx} className="group p-8 bg-slate-50 rounded-2xl hover:bg-brand-blue transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-2">
                <div className="bg-brand-blue w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-white text-left">{area.title}</h3>
                <p className="text-slate-600 group-hover:text-white/80 text-sm leading-relaxed text-left">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Short Bio / Credibility */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/5] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://i.ibb.co/8LdjKpVc/Usenobong-Ekponyoh.jpg" alt="Usenobong Ekponyoh" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block max-w-[280px]">
                <div className="text-brand-blue font-bold text-4xl mb-1">12+</div>
                <div className="text-slate-500 font-medium leading-tight text-left">Years of Strategic Business Leadership</div>
              </div>
            </div>
            <div className="lg:w-1/2 text-left">
              <h2 className="text-slate-900 text-4xl font-bold mb-6 text-left">Bridging Tradition & Innovation</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed text-left">
                Usenobong Ekponyoh is a multifaceted entrepreneur with a proven track record of launching and scaling ventures in strategic sectors. As founder & CEO of Crud Cellz, eFaculty ICT Centre, MetaVolt Project Ltd, he drives digital transformation and inclusive economic growth.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed text-left">
                His leadership reflects a rare blend of operational strategy, creative brand development, and a deep commitment to sustainable business practices rooted in integrity and service.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="text-brand-blue"><Award size={32} /></div>
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900">Proven Results</h4>
                    <p className="text-sm text-slate-500">12+ years of professional experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-brand-blue"><Globe size={32} /></div>
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900">Global Reach</h4>
                    <p className="text-sm text-slate-500">Africa, Europe, Middle East</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="text-brand-blue font-bold flex items-center hover:underline justify-start group">
                View Detailed Biography <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Ventures */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="text-left">
              <h2 className="text-slate-900 text-4xl font-bold mb-4">Featured Ventures</h2>
              <p className="text-slate-500 text-lg text-left">Leading enterprises across diverse strategic sectors.</p>
            </div>
            <Link to="/ventures" className="hidden md:flex text-brand-blue font-bold items-center hover:underline">
              All Ventures <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VENTURES.slice(0, 2).map((venture, idx) => (
              <div key={idx} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 group transition-all text-left">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors text-left">{venture.name}</h3>
                  <span className="bg-blue-100 text-brand-blue text-xs font-bold px-3 py-1 rounded-full uppercase">{venture.role}</span>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed text-left">
                  {venture.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8 justify-start">
                  {venture.focus.map((f, i) => (
                    <span key={i} className="bg-white border border-slate-200 text-slate-500 text-xs px-3 py-1 rounded-md font-medium">{f}</span>
                  ))}
                </div>
                <Link to="/ventures" className="text-slate-900 font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform justify-start">
                  View Case Study <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] p-12 md:p-20 text-left shadow-2xl border border-slate-100">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 max-w-3xl text-left">Ready to Build the Future Together?</h2>
            <p className="text-slate-500 text-lg md:text-xl mb-12 max-w-2xl text-left">
              Whether you are looking for strategic investment, mentorship, or a potential business partnership, let's explore how we can create lasting value.
            </p>
            <div className="flex flex-col sm:flex-row justify-start gap-6">
              <Link to="/contact" className="bg-brand-blue text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/10">
                Get In Touch
              </Link>
              <Link to="/investments" className="bg-slate-100 text-slate-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-200 transition-all">
                Investment Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
