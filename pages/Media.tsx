
import React from 'react';
import { BLOGS } from '../constants';
import { PlayCircle, Mic, Newspaper, Calendar, BookOpen, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Media: React.FC = () => {
  const researchProjects = [
    {
      title: "Advanced Seismic Data Analysis in Exploration Geophysics",
      link: "https://share.google/MklCywIZWRHJRY9gM",
      type: "Research Project",
      focus: "Technical Geoscience"
    },
    {
      title: "Strategic Business Innovation & Digital Transformation Case Study",
      link: "https://share.google/6r8MVrXURVvxLcVTY",
      type: "White Paper",
      focus: "Strategic Leadership"
    },
    {
      title: "Sustainable Energy Solutions for Emerging Markets",
      link: "https://share.google/DzbxeJH7i3X52tugL",
      type: "Analysis Report",
      focus: "Energy & Sustainability"
    }
  ];

  return (
    <div className="w-full pb-24">
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://i.ibb.co/zH5tcjvf/Usenobong-Ekponyoh.png')] bg-cover bg-[position:center_35%] opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Media & Insights</h1>
          <p className="text-blue-400 text-xl font-bold tracking-widest uppercase">Thought Leadership & Global Conversations</p>
        </div>
      </section>

      {/* Research Projects Section - NEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 flex items-center">
              <BookOpen className="mr-3 text-brand-blue" /> Research & Academic Contributions
            </h2>
            <p className="text-slate-500 text-lg max-w-3xl">
              Showcasing technical research and strategic analyses that bridge the gap between geophysics, energy, and business innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchProjects.map((project, idx) => (
              <a 
                key={idx} 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:bg-brand-blue hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="bg-brand-blue/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <ExternalLink className="text-brand-blue group-hover:text-white" size={20} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue group-hover:text-blue-200 mb-2 block">
                  {project.type} • {project.focus}
                </span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-4 leading-tight">
                  {project.title}
                </h3>
                <div className="flex items-center text-sm font-bold text-slate-400 group-hover:text-white/80">
                  Access Full Project <PlayCircle size={14} className="ml-2" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/Insights section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-bold text-slate-900 text-left">Latest Insights</h2>
            <Link to="/blog" className="hidden md:flex text-brand-blue font-bold items-center hover:underline">
              View All Blog Posts <Calendar className="ml-2" size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOGS.map(blog => (
              <div key={blog.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 text-left">
                <div className="aspect-video relative overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-brand-blue text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{blog.category}</div>
                </div>
                <div className="p-8">
                  <span className="text-slate-400 text-sm font-medium mb-3 block">{blog.date}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors leading-snug">{blog.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <Link to="/blog" className="text-brand-blue font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                    Read Full Article <PlayCircle size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking & Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="text-left">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center justify-start">
                <Mic className="mr-3 text-brand-blue" /> Speaking Engagements
              </h2>
              <div className="space-y-6">
                {[
                  { event: 'Global Tech Summit 2024', location: 'Dubai, UAE', topic: 'Digital Inclusion in Emerging Economies' },
                  { event: 'African Enterprise Forum', location: 'Lagos, Nigeria', topic: 'Resilient Diversification Strategies' },
                  { event: 'Future Energy Conference', location: 'London, UK', topic: 'Sustainable Infrastructure in Construction' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-6 items-center text-left">
                    <div className="bg-brand-blue/5 p-4 rounded-xl text-brand-blue shrink-0"><Calendar size={24} /></div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.event}</h4>
                      <p className="text-sm text-slate-500 mb-1">{item.location}</p>
                      <p className="text-sm font-medium text-brand-blue">Topic: {item.topic}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-left">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center justify-start">
                <Newspaper className="mr-3 text-brand-blue" /> Press Mentions
              </h2>
              <div className="space-y-6">
                 <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-left">
                    <p className="text-slate-600 italic mb-6">
                      "Ekponyoh's eFaculty ICT Centre is setting a new standard for private-sector driven educational initiatives in West Africa."
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900 uppercase text-sm tracking-widest">Business Day Africa</span>
                      <span className="text-xs text-slate-400">June 2023</span>
                    </div>
                 </div>
                 <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-left">
                    <p className="text-slate-600 italic mb-6">
                      "Bridging traditional geophysics with modern tech entrepreneurship: The story of Usenobong Ekponyoh."
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900 uppercase text-sm tracking-widest">Global Leadership Digest</span>
                      <span className="text-xs text-slate-400">Nov 2023</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
