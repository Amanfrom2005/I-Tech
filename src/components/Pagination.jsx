import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange,
  maxVisiblePages = 5,
  showFirstLast = true,
  showPrevNext = true,
  showPageInfo = true,
  className = ''
}) => {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const pages = [];
    let startPage, endPage;

    if (totalPages <= maxVisiblePages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const maxVisibleBeforeCurrent = Math.floor(maxVisiblePages / 2);
      const maxVisibleAfterCurrent = Math.ceil(maxVisiblePages / 2) - 1;

      if (currentPage <= maxVisibleBeforeCurrent) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else if (currentPage + maxVisibleAfterCurrent >= totalPages) {
        startPage = totalPages - maxVisiblePages + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - maxVisibleBeforeCurrent;
        endPage = currentPage + maxVisibleAfterCurrent;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  const PageButton = ({ page, active, onClick }) => (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`w-10 h-10 rounded-md flex items-center justify-center ${
        active 
          ? 'bg-primary text-white shadow-md' 
          : 'text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300'
      }`}
    >
      {page}
    </motion.button>
  );

  const NavButton = ({ onClick, disabled, children }) => (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.1 }}
      whileTap={{ scale: disabled ? 1 : 0.9 }}
      className={`p-2 rounded-md ${
        disabled 
          ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed' 
          : 'text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300'
      }`}
    >
      {children}
    </motion.button>
  );

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 ${className}`}>
      {showPageInfo && (
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Page {currentPage} of {totalPages}
        </div>
      )}

      <div className="flex items-center gap-1">
        {showFirstLast && (
          <NavButton 
            onClick={() => onPageChange(1)} 
            disabled={currentPage === 1}
            aria-label="First page"
          >
            <ChevronsLeft size={18} />
          </NavButton>
        )}

        {showPrevNext && (
          <NavButton 
            onClick={() => onPageChange(currentPage - 1)} 
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <ChevronLeft size={18} />
          </NavButton>
        )}

        {visiblePages[0] > 1 && (
          <>
            <PageButton 
              page={1} 
              active={currentPage === 1}
              onClick={() => onPageChange(1)}
            />
            {visiblePages[0] > 2 && (
              <span className="w-10 h-10 flex items-center justify-center text-gray-500">
                ...
              </span>
            )}
          </>
        )}

        {visiblePages.map(page => (
          <PageButton
            key={page}
            page={page}
            active={currentPage === page}
            onClick={() => onPageChange(page)}
          />
        ))}

        {visiblePages[visiblePages.length - 1] < totalPages && (
          <>
            {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
              <span className="w-10 h-10 flex items-center justify-center text-gray-500">
                ...
              </span>
            )}
            <PageButton 
              page={totalPages} 
              active={currentPage === totalPages}
              onClick={() => onPageChange(totalPages)}
            />
          </>
        )}

        {showPrevNext && (
          <NavButton 
            onClick={() => onPageChange(currentPage + 1)} 
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <ChevronRight size={18} />
          </NavButton>
        )}

        {showFirstLast && (
          <NavButton 
            onClick={() => onPageChange(totalPages)} 
            disabled={currentPage === totalPages}
            aria-label="Last page"
          >
            <ChevronsRight size={18} />
          </NavButton>
        )}
      </div>
    </div>
  );
};

export default Pagination;