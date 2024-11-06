import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

export default function Section({ id, title, description, imageUrl, reverse = false }: SectionProps) {
  return (
    <div id={id} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
          </div>
          <div className="flex-1">
            <img
              src={imageUrl}
              alt={title}
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}