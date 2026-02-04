
import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Business' | 'Philanthropy' | 'Travel' | 'Events'>('All');

  const galleryItems = [
    { category: 'Business', url: 'https://picsum.photos/seed/biz-gal1/800/800', title: 'Boardroom Session' },
    { category: 'Philanthropy', url: 'https://picsum.photos/seed/phi-gal1/800/800', title: 'eFaculty Workshop' },
    { category: 'Travel', url: 'https://picsum.photos/seed/tra-gal1/800/800', title: 'Middle East Trade Visit' },
    { category: 'Events', url: 'https://picsum.photos/seed/eve-gal1/800/800', title: 'Tech Summit Keynote' },
    { category: 'Business', url: 'https://picsum.photos/seed/biz-gal2/800/800', title: 'MetaVolt Site Visit' },
    { category: 'Philanthropy', url: 'https://picsum.photos/seed/phi-gal2/800/800', title: 'Community Outreach' },
    { category: 'Travel', url: 'https://picsum.photos/seed/tra-gal2/800/800', title: 'European Markets' },
    { category: 'Events', url: 'https://picsum.photos/seed/eve-gal2/800/800', title: 'Award Recognition' },
  ];

  const filteredItems = filter === 'All' ? galleryItems : galleryItems.filter(item => item.category === filter);
  const categories: ('All' | 'Business' | 'Philanthropy' | 'Travel' | 'Events')[] = ['All', 'Business', 'Philanthropy', 'Travel', 'Events'];

  return (
    <div className="w-full pb-24">
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://i.ibb.co/zH5tcjvf/Usenobong-Ekponyoh.png')] bg-cover bg-[position:center_35%] opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Visual Journey</h1>
          <p className="text-blue-400 text-xl font-bold tracking-widest uppercase">Capturing Impact, Collaboration & Growth</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-start gap-4 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2 rounded-full font-bold transition-all ${
                  filter === cat ? 'bg-brand-blue text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, idx) => (
              <div key={idx} className="group relative aspect-square overflow-hidden rounded-2xl shadow-md cursor-pointer border border-slate-100">
                <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-left">
                  <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-1">{item.category}</span>
                  <h4 className="text-white font-bold">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
