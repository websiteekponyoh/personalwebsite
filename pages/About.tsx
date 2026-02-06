
import React from 'react';
import { BookOpen, GraduationCap, Camera, FileText, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  const profileGallery = [
    "https://i.ibb.co/dwppLbDK/Whats-App-Image-2026-02-04-at-11-50-39-AM-1.jpg",
    "https://i.ibb.co/8LdjKpVc/Usenobong-Ekponyoh.jpg",
    "https://i.ibb.co/5WSTGx5K/Usenobong-Ekponyoh-1.jpg",
    "https://i.ibb.co/60MVh2xx/Usenobong-Ekponyoh-2.jpg"
  ];

  const academicResearch = [
    { title: "Seismic Data Analysis Research", link: "https://share.google/dF3iE9RlU88ZA3f95" },
    { title: "Source: IIARD", link: "https://share.google/BOH6pS3HjMHg2xOj6" },
    { title: "Strategic Innovation Case Study", link: "https://share.google/6r8MVrXURVvxLcVTY" },
    { title: "Sustainable Energy Analysis", link: "https://share.google/DzbxeJH7i3X52tugL" }
  ];

  return (
    <div className="w-full pb-24">
      {/* Header */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://i.ibb.co/zH5tcjvf/Usenobong-Ekponyoh.png')] bg-cover bg-[position:center_35%] opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in-up">About Usenobong</h1>
          <p className="text-blue-400 text-xl font-bold tracking-widest uppercase animate-fade-in-up delay-100">Journey, Vision, and Excellence</p>
        </div>
      </section>

      {/* Detailed Bio */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                  <img src="https://i.ibb.co/8LdjKpVc/Usenobong-Ekponyoh.jpg" alt="Usenobong" className="w-full h-full object-cover" />
                </div>

                {/* Education Section */}
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-left">
                  <h3 className="font-bold text-xl mb-6 text-slate-900 flex items-center">
                    <GraduationCap className="mr-2 text-brand-blue" /> Academic Core
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="font-bold text-slate-900">M.Sc. Exploration Geophysics</p>
                      <p className="text-sm text-slate-500">University of Port Harcourt, Nigeria</p>
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                      <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-4">Featured Contributions</p>
                      <ul className="space-y-3">
                        {academicResearch.map((res, i) => (
                          <li key={i}>
                            <a
                              href={res.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl hover:border-brand-blue transition-colors shadow-sm"
                            >
                              <span className="text-xs font-semibold text-slate-700">{res.title}</span>
                              <ExternalLink size={12} className="text-slate-400 group-hover:text-brand-blue" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 text-left">
              <h2 className="text-3xl font-bold mb-8 text-slate-900 flex items-center">
                <BookOpen className="mr-3 text-brand-blue" /> The Multi-Faceted Entrepreneur
              </h2>
              <div className="prose prose-lg text-slate-600 max-w-none space-y-6">
                <p>
                  Usenobong Ekponyoh is a dynamic, multifaceted entrepreneur and visionary business leader with a proven track record of launching, scaling, and sustaining ventures across multiple high-impact industries, including Technology, Agriculture, Construction, Oil & Gas, and Energy.
                </p>
                <p>
                  With over 12 years of professional experience, he is widely recognized for bridging the gap between traditional business models and modern innovation, combining operational strategy, digital transformation, and creative brand development to build resilient, future-ready enterprises.
                </p>
                <p>
                  Throughout his career, Usenobong has demonstrated a remarkable ability to identify market opportunities and transform them into profitable and sustainable ventures. His entrepreneurial journey reflects willpower, resilience, creativity, determination, courage, and an exceptional spirit of reinvention.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 pt-8">Leadership Philosophy</h3>
                <p>
                  Usenobong represents a rare tribe of integrity-driven, value-based entrepreneurs. While his business interests span multiple industries, his foundation remains deeply rooted in faith, purpose, and service. He believes that true entrepreneurship goes beyond profit—it is about making impact, creating lasting value, and fostering social responsibility.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  <div className="p-6 bg-slate-50 rounded-xl border-l-4 border-brand-blue">
                    <h4 className="font-bold text-slate-900 mb-2">Hard Work & Resilience</h4>
                    <p className="text-sm">The backbone of every successful venture and personal milestone.</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-xl border-l-4 border-brand-blue">
                    <h4 className="font-bold text-slate-900 mb-2">Continuous Learning</h4>
                    <p className="text-sm">Adapting to modern tech and shifting global market trends.</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-xl border-l-4 border-brand-blue">
                    <h4 className="font-bold text-slate-900 mb-2">Ethical Practices</h4>
                    <p className="text-sm">Building businesses on the solid ground of integrity and transparency.</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-xl border-l-4 border-brand-blue">
                    <h4 className="font-bold text-slate-900 mb-2">Service-Minded</h4>
                    <p className="text-sm">Investing in people and communities as a core business objective.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 pt-8">Personal Interests</h3>
                <p>
                  Outside the boardroom, Usenobong is deeply passionate about travel, art, health, and wellness, guided by the belief that personal well-being is essential for sustained professional excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center">
              <Camera className="mr-3 text-brand-blue" /> Visual Moments
            </h2>
            <p className="text-slate-500">Capturing the journey of excellence and impact.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {profileGallery.map((src, idx) => (
              <div key={idx} className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group border border-slate-100">
                <img
                  src={src}
                  alt={`Usenobong Ekponyoh Profile ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Professional Timeline</h2>
            <p className="text-slate-500">Over a decade of strategic evolution and growth.</p>
          </div>

          <div className="relative border-l-2 border-brand-blue/30 ml-4 max-w-4xl pb-10">
            {[
              { year: '2012', title: 'Beginning of Journey', desc: 'Started professional career focusing on technical excellence in geophysics.' },
              { year: '2015', title: 'Founding eFaculty ICT', desc: 'Launched eFaculty to address the digital skills gap in the region.' },
              { year: '2018', title: 'Strategic Diversification', desc: 'Expanded into Oil & Gas and Energy with Crud-Cellz and MetaVolt.' },
              { year: '2021', title: 'Global Expansion', desc: 'Facilitated partnerships across Africa, Europe, and the Middle East.' },
              { year: 'Present', title: 'Vision for the Future', desc: 'Focusing on strategic innovation and high-impact philanthropic work.' }
            ].map((item, idx) => (
              <div key={idx} className="mb-12 relative pl-8">
                <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-blue border-4 border-white shadow-sm z-10"></div>
                <div className="text-left">
                  <span className="text-brand-blue font-bold text-xl">{item.year}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
