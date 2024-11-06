import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import { Brain, Cpu, Network, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Explorando el futuro de
              <span className="text-purple-600"> Inteligencia artificial</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Descubra el revolucionario mundo de la IA y su impacto en la tecnología, la sociedad y nuestro futuro.
            </p>
            <div className="flex justify-center gap-4">
              {[
                { icon: Brain, text: 'Overview' },
                { icon: Cpu, text: 'Machine Learning' },
                { icon: Network, text: 'Neural Networks' },
                { icon: Sparkles, text: 'Applications' }
              ].map(({ icon: Icon, text }) => (
                <button
                  key={text}
                  onClick={() => document.getElementById(text.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-purple-600"
                >
                  <Icon className="h-5 w-5" />
                  <span>{text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <Section
        id="overview"
        title="The Evolution of AI"
        description="Artificial Intelligence has transformed from a concept into a reality that shapes our daily lives. From simple automation to complex decision-making systems, AI continues to push the boundaries of what's possible in technology."
        imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
      />

      <Section
        id="machine-learning"
        title="Machine Learning Revolution"
        description="Machine Learning algorithms enable computers to learn from data and improve their performance without explicit programming. This technology powers everything from recommendation systems to autonomous vehicles."
        imageUrl="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80"
        reverse
      />

      <Section
        id="neural-networks"
        title="Deep Neural Networks"
        description="Inspired by the human brain, neural networks process information through interconnected layers of artificial neurons, enabling complex pattern recognition and problem-solving capabilities."
        imageUrl="https://images.unsplash.com/photo-1676277791608-ac54525aa94d?auto=format&fit=crop&q=80"
      />

      <Section
        id="applications"
        title="Real-World Applications"
        description="AI applications span across industries, from healthcare and finance to entertainment and education. These technologies are revolutionizing how we work, live, and interact with the world around us."
        imageUrl="https://images.unsplash.com/photo-1677442136472-ae394ad81866?auto=format&fit=crop&q=80"
        reverse
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <Brain className="h-8 w-8 text-purple-400" />
            <span className="ml-2 text-xl font-bold">AI Vision</span>
          </div>
          <p className="text-center text-gray-400 mt-4">
            Explorando las fronteras de la inteligencia artificial
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;