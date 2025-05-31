import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Create page buttons
  const getPageButtons = () => {
    const buttons = [];
    const maxButtonsToShow = 5;
    
    // Always show first page
    buttons.push(
      <button
        key={1}
        onClick={() => onPageChange(1)}
        className={`px-3 py-1 rounded-md ${
          currentPage === 1 
            ? 'bg-slate-800 text-white' 
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        1
      </button>
    );

    // Calculate start and end pages to display
    let startPage = Math.max(2, currentPage - Math.floor(maxButtonsToShow / 2));
    let endPage = Math.min(totalPages - 1, startPage + maxButtonsToShow - 3);
    
    if (endPage - startPage < maxButtonsToShow - 3) {
      startPage = Math.max(2, endPage - (maxButtonsToShow - 3) + 1);
    }
    
    // Show ellipsis if needed before middle buttons
    if (startPage > 2) {
      buttons.push(
        <span key="ellipsis-1" className="px-2 py-1">
          ...
        </span>
      );
    }
    
    // Middle buttons
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-1 rounded-md ${
            currentPage === i 
              ? 'bg-slate-800 text-white' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {i}
        </button>
      );
    }
    
    // Show ellipsis if needed after middle buttons
    if (endPage < totalPages - 1) {
      buttons.push(
        <span key="ellipsis-2" className="px-2 py-1">
          ...
        </span>
      );
    }
    
    // Always show last page if there is more than one page
    if (totalPages > 1) {
      buttons.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`px-3 py-1 rounded-md ${
            currentPage === totalPages 
              ? 'bg-slate-800 text-white' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {totalPages}
        </button>
      );
    }
    
    return buttons;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center mt-6 space-x-1">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={16} />
      </button>
      
      <div className="flex items-center space-x-1">
        {getPageButtons()}
      </div>
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;