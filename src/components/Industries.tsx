import React from 'react';
import { Wine, ShoppingBag } from 'lucide-react';

export default function Industries() {
  return (
    <div id="industries" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Industries</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tailored Solutions for Your Industry
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
            <div className="relative bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Wine className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Luxury Goods</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Protect your brand value and ensure authenticity for high-end products. 
                    Perfect for watches, jewelry, and designer items.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <ShoppingBag className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Food Industry</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Ensure food safety and traceability from farm to table. 
                    Perfect for premium food products and organic produce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}