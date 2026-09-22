'use client';
import React from 'react';

export default function PrintButton() {
  return (
    <button 
      onClick={() => window.print()} 
      className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:bg-blue-700 transition-colors"
    >
      Print to PDF Now
    </button>
  );
}
