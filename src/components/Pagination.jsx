export default function Pagination({ currentPageNum, setCurrentPageNum, totalPages }) {
  // Function to generate page numbers with ellipsis
  const getPageNumbers = () => {
    const maxVisiblePages = 5; // Show maximum 5 page numbers (can be adjusted)
    const pages = [];
    
    // Always show first page
    pages.push(1);
    
    // Calculate start and end pages
    let startPage = Math.max(2, currentPageNum - 2);
    let endPage = Math.min(totalPages - 1, currentPageNum + 2);
    
    // Adjust if we're near the start
    if (currentPageNum <= 3) {
      endPage = Math.min(5, totalPages - 1);
    }
    
    // Adjust if we're near the end
    if (currentPageNum >= totalPages - 2) {
      startPage = Math.max(totalPages - 4, 2);
    }
    
    // Add left ellipsis if needed
    if (startPage > 2) {
      pages.push('...');
    }
    
    // Add middle pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    // Add right ellipsis if needed
    if (endPage < totalPages - 1) {
      pages.push('...');
    }
    
    // Always show last page if there's more than 1 page
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
      <button
        onClick={() => setCurrentPageNum((prev) => Math.max(prev - 1, 1))}
        disabled={currentPageNum === 1}
        className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors duration-200"
      >
        Previous
      </button>

      <div className="flex gap-2">
        {pageNumbers.map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' ? setCurrentPageNum(page) : null}
            disabled={page === '...'}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 min-w-[40px] ${
              currentPageNum === page 
                ? "bg-blue-500 text-white" 
                : typeof page === 'number' 
                  ? "bg-gray-700 text-white hover:bg-gray-600" 
                  : "bg-transparent text-gray-400 cursor-default"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => setCurrentPageNum((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPageNum === totalPages}
        className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors duration-200"
      >
        Next
      </button>
    </div>
  )
}