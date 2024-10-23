import React from 'react';
import { Shield, Smartphone, RefreshCw, Search } from 'lucide-react';

export default function Features() {
  const features = [
    {
      name: 'End-to-End Tracking',
      description: 'Track products from manufacturing to delivery with complete transparency and real-time updates.',
      icon: RefreshCw,
    },
    {
      name: 'NFC Authentication',
      description: 'Seamlessly verify product authenticity using NFC technology and your smartphone.',
      icon: Smartphone,
    },
    {
      name: 'Blockchain Security',
      description: 'Immutable records secured by blockchain technology ensure data integrity and trust.',
      icon: Shield,
    },
    {
      name: 'Instant Verification',
      description: 'Consumers can instantly verify product authenticity and view the complete supply chain journey.',
      icon: Search,
    },
  ];

  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A Better Way to Track Products
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive solution combines cutting-edge technology with ease of use.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}