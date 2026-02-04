
import React from 'react';
import { Globe, Building2, Coins, Rocket, Map } from 'lucide-react';

const Investments: React.FC = () => {
  return (
    <div className="w-full pb-24">
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://i.ibb.co/zH5tcjvf/Usenobong-Ekponyoh.png')] bg-cover bg-[position:center_35%] opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Investments & Global Reach</h1>
          <p className="text-blue-400 text-xl font-bold tracking-widest uppercase">Strategic Portfolio & International Alliances</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-left">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Investment Philosophy</h2>
            <p className="text-slate-600 text-xl leading-relaxed border-l-4 border-brand-blue pl-6">
              "Focused on building a robust and resilient investment portfolio aligned with long-term value creation. We prioritize innovation, scalability, and ethical impact across all assets."
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow text-left">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-brand-blue">
                <Rocket size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Startups & Innovation</h3>
              <p className="text-slate-500 mb-6">Early-stage funding for high-potential tech startups bridging industry gaps in Africa and beyond.</p>
              <ul className="text-sm text-slate-600 space-y-2 font-medium">
                <li>• Fintech & Payments</li>
                <li>• Agri-Tech Solutions</li>
                <li>• Ed-Tech Platforms</li>
              </ul>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow text-left">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-brand-blue">
                <Building2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Real Estate</h3>
              <p className="text-slate-500 mb-6">Strategic holdings in commercial and residential properties across key emerging markets.</p>
              <ul className="text-sm text-slate-600 space-y-2 font-medium">
                <li>• Urban Commercial Hubs</li>
                <li>• Strategic Industrial Land</li>
                <li>• Sustainable Housing</li>
              </ul>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow text-left">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-brand-blue">
                <Coins size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Digital Assets</h3>
              <p className="text-slate-500 mb-6">Navigating the future of finance through diversified cryptocurrency and blockchain investments.</p>
              <ul className="text-sm text-slate-600 space-y-2 font-medium">
                <li>• Bitcoin & Ethereum</li>
                <li>• Blockchain Infrastructure</li>
                <li>• DeFi Participation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-left">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue px-4 py-1.5 rounded-full text-xs font-bold uppercase mb-6 tracking-wider">
                <Map size={14} /> International Footprint
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Navigating Complex International Markets</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                His work has facilitated partnerships and collaborations across Africa, Europe, and the Middle East, showcasing his ability to manage cross-border relationships and execute high-level negotiations on a global scale.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-blue/10 p-3 rounded-lg text-brand-blue"><Globe size={24} /></div>
                  <span className="font-bold text-slate-800">Africa: Core Operations & Agri-Impact</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-brand-blue/10 p-3 rounded-lg text-brand-blue"><Globe size={24} /></div>
                  <span className="font-bold text-slate-800">Europe: Tech Alliances & Energy Partnerships</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-brand-blue/10 p-3 rounded-lg text-brand-blue"><Globe size={24} /></div>
                  <span className="font-bold text-slate-800">Middle East: Trade & Strategic Logistics</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
                <img 
                  src="https://i.ibb.co/dwppLbDK/Whats-App-Image-2026-02-04-at-11-50-39-AM-1.jpg" 
                  alt="Usenobong Ekponyoh Global Reach" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <h4 className="font-bold text-3xl drop-shadow-lg">Strategic<br/>Reach</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investments;
