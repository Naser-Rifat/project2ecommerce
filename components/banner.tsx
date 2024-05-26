// components/MacbookPro.tsx

import Image from 'next/image';
import React from 'react';
import mac from '../assets/mac.webp'

const Banner: React.FC = () => {
  return (
    <div className="bg-[#FDE7DA] p-6 rounded-lg flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-2">Macbook Pro</h2>
        <p className="text-lg">Apple M1 Max Chip, 32GB Unified Memory, 1TB SSD Storage</p>
        <button className="mt-4 px-6 py-3 after:content-['→'] bg-[#FF7A00] text-white font-bold rounded-sm hover:opacity-80">
          SHOP NOW
        </button>
      </div>
      <div className="relative">
        <Image src={mac} alt="Macbook Pro" className="w-48" />
        <div className="absolute border-4 border-white top-0 left-0 w-20 h-20 flex justify-center items-center bg-[#F8BDB3] text-lg font-bold p-2 rounded-full">
          $1999
        </div>
      </div>
    </div>
  );
}

export default Banner;
