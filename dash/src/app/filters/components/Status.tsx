'use client';

import { useState } from 'react';
import Image from "next/image";
import status from "../assets/status.png"

interface StatusProps {
  onAccess: () => void; // Define the expected function type
}

export default function Status({ onAccess }: StatusProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    if (!isDropdownOpen) {
      onAccess(); // Notify the parent only when opening
    }
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="mt-4">
      <button
        className={`w-full px-4 py-2 bg-gray-200 rounded-lg flex justify-between items-center ${
          isDropdownOpen ? 'text-black' : 'text-gray-500'
        }`}
        onClick={handleToggleDropdown}
      >
        <div className="flex items-center gap-2">
          <Image 
            src={status} 
            alt="logo" 
            width={24} 
            height={24}  
            className={isDropdownOpen ? 'opacity-100' : 'opacity-50 '}
          />
          <span>By Status</span>
        </div>
        <span className="font-bold text-gray-700 p-2 w-6">
          {isDropdownOpen ? '∧' : '∨'}
        </span>
      </button>
      {isDropdownOpen && (
        <div className="flex flex-col gap-2 mt-2 ml-4">
          {[
            'Upcoming',
            'Completed',
            'Cancelled',
            'Checked-in',
            'No show',
            'Confirmation Pending',
          ].map((status) => (
            <label key={status} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="peer hidden" />
              <div className="w-5 h-5 bg-gray-300 rounded-md flex items-center justify-center 
                peer-checked:before:content-['✔'] 
                peer-checked:before:text-black 
                peer-checked:before:font-light 
                peer-checked:before:text-lg 
                peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-transparent">
              </div>
              <span className="text-black">{status}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
