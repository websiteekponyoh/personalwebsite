
import React from 'react';
import { Heart, Users, Lightbulb, Handshake, Quote } from 'lucide-react';

const Philanthropy: React.FC = () => {
  const impactImages = [
    "https://i.ibb.co/dwppLbDK/Whats-App-Image-2026-02-04-at-11-50-39-AM-1.jpg",
    "https://i.ibb.co/8LdjKpVc/Usenobong-Ekponyoh.jpg",
    "https://i.ibb.co/5WSTGx5K/Usenobong-Ekponyoh-1.jpg",
    "https://i.ibb.co/60MVh2xx/Usenobong-Ekponyoh-2.jpg"
  ];

  return (
    <div className="w-full pb-24">
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://i.ibb.co/zH5tcjvf/Usenobong-Ekponyoh.png')] bg-cover bg-[position:center_35%] opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-left">Social Impact</h1>
          <p className="text-blue-400 text-xl font-bold tracking-widest uppercase text-left">Building Communities & Empowering Youths</p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16 max-w-5xl">
            <Heart size={64} className="text-brand-blue mb-8 animate-pulse" />
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Philanthropic Vision</h2>
            <p className="text-slate-600 text-xl leading-relaxed italic border-l-4 border-brand-blue pl-6">
              "True entrepreneurship goes beyond profit—it is about making impact, creating lasting value, and fostering social responsibility. Our mission is to bridge the digital divide and drive inclusive economic growth."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10">
            <div className="space-y-8">
              <div className="flex gap-6 text-left">
                <div className="bg-blue-50 p-4 rounded-xl text-brand-blue shrink-0"><Users size={32} /></div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900 mb-2">Youth Empowerment</h3>
                  <p className="text-slate-600">Hands-on, industry-relevant training in Data Science, Cyber Security, and Digital Marketing at eFaculty ICT Centre.</p>
                </div>
              </div>
              <div className="flex gap-6 text-left">
                <div className="bg-blue-50 p-4 rounded-xl text-brand-blue shrink-0"><Lightbulb size={32} /></div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900 mb-2">Mentorship Programs</h3>
                  <p className="text-slate-600">Heart-centered leadership focused on guiding the next generation of African business leaders.</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex gap-6 text-left">
                <div className="bg-blue-50 p-4 rounded-xl text-brand-blue shrink-0"><Handshake size={32} /></div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900 mb-2">Community Development</h3>
                  <p className="text-slate-600">Investment in infrastructure and sustainable programs for underserved urban and rural communities.</p>
                </div>
              </div>
              <div className="flex gap-6 text-left">
                <div className="bg-blue-50 p-4 rounded-xl text-brand-blue shrink-0"><Quote size={32} /></div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900 mb-2">Advocacy for Digital Rights</h3>
                  <p className="text-slate-600">Championing the right to technology access and education for all social classes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-left mb-16">Testimonials & Impact Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-lg relative border border-slate-100 text-left">
              <Quote className="absolute top-6 right-6 text-brand-blue/10" size={80} />
              <p className="text-slate-600 italic mb-8 relative z-10">
                "The digital skills training at eFaculty changed my life. I went from being unemployed to a freelance data scientist working with international clients within 6 months."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                <div>
                  <p className="font-bold text-slate-900">Samuel K.</p>
                  <p className="text-xs text-slate-500">eFaculty Alumnus</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg relative border border-slate-100 text-left">
              <Quote className="absolute top-6 right-6 text-brand-blue/10" size={80} />
              <p className="text-slate-600 italic mb-8 relative z-10">
                "Usenobong's mentorship provided me with the clarity and courage to launch my own sustainable agri-business. His leadership philosophy is truly inspiring."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                <div>
                  <p className="font-bold text-slate-900">Chioma O.</p>
                  <p className="text-xs text-slate-500">Mentee & Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visualizing Our Impact - Updated with provided images */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-left">Visualizing Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactImages.map((src, idx) => (
              <div key={idx} className="aspect-[3/4] bg-slate-100 rounded-2xl overflow-hidden shadow-md group border border-slate-100">
                <img 
                  src={src} 
                  alt={`Impact Moment ${idx + 1}`} 
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Philanthropy;
