
import React from 'react';
import { 
  Cpu, 
  Sprout, 
  Construction, 
  Droplets, 
  Zap, 
  Users, 
  Globe, 
  Lightbulb, 
  Shield, 
  TrendingUp 
} from 'lucide-react';

export const IMPACT_AREAS = [
  { 
    title: 'Technology', 
    description: 'Leading digital transformation through eFaculty ICT Centre.', 
    icon: <Cpu className="w-8 h-8 text-white" /> 
  },
  { 
    title: 'Agriculture', 
    description: 'Sustainable practices and food security initiatives.', 
    icon: <Sprout className="w-8 h-8 text-white" /> 
  },
  { 
    title: 'Construction', 
    description: 'Developing resilient infrastructure and modern living spaces.', 
    icon: <Construction className="w-8 h-8 text-white" /> 
  },
  { 
    title: 'Oil & Gas', 
    description: 'Navigating complex energy markets through Crud-Cellz.', 
    icon: <Droplets className="w-8 h-8 text-white" /> 
  },
  { 
    title: 'Energy', 
    description: 'Strategic energy solutions via MetaVolt Projects Ltd.', 
    icon: <Zap className="w-8 h-8 text-white" /> 
  },
];

export const VENTURES = [
  {
    name: 'eFaculty ICT Centre',
    role: 'Founder & CEO',
    description: 'A mission-driven organization dedicated to bridging the digital divide and driving inclusive economic growth through industry-relevant skills training.',
    focus: ['Data Science', 'Cybersecurity', 'Digital Marketing']
  },
  {
    name: 'Crud-Cellz',
    role: 'Managing Director',
    description: 'A strategic player in the oil and gas sector, focused on operational excellence and sustainable development.',
    focus: ['Energy Supply', 'Operational Strategy']
  },
  {
    name: 'MetaVolt Projects Ltd',
    role: 'Principal Partner',
    description: 'Leading high-impact projects in the energy and construction sectors across multiple regions.',
    focus: ['Project Management', 'Energy Solutions']
  },
  {
    name: 'Wintrade International',
    role: 'Founder',
    description: 'Driving international trade and sustainable enterprise development in global markets.',
    focus: ['International Trade', 'Agri-Business']
  }
];

export const BLOGS = [
  {
    id: '1',
    title: 'Digital Transformation in Traditional Industries',
    excerpt: 'How bridging the gap between legacy systems and modern tech drives resilience in Oil & Gas and Agriculture.',
    date: 'March 15, 2024',
    category: 'Innovation',
    image: 'https://picsum.photos/seed/tech1/800/450'
  },
  {
    id: '2',
    title: 'The Future of Agri-Tech in Africa',
    excerpt: 'Exploring the intersection of modern technology and sustainable farming practices for economic growth.',
    date: 'February 28, 2024',
    category: 'Agriculture',
    image: 'https://picsum.photos/seed/agri1/800/450'
  },
  {
    id: '3',
    title: 'Leadership: Balancing Profit with Purpose',
    excerpt: 'True entrepreneurship goes beyond profit—it is about making impact and fostering social responsibility.',
    date: 'January 10, 2024',
    category: 'Leadership',
    image: 'https://picsum.photos/seed/lead1/800/450'
  }
];

export const PHILANTHROPY_POINTS = [
  { title: 'Youth Empowerment', desc: 'Providing mentorship and digital skills to the next generation.' },
  { title: 'Community Growth', desc: 'Investing in underserved communities for sustainable development.' },
  { title: 'Digital Inclusion', desc: 'Bridging the tech divide for rural and low-income populations.' }
];
