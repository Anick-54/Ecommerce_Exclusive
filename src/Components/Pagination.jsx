import React, { useState } from 'react';
import { Card4 } from './Card4';
import { useSelector } from 'react-redux'


export const Pagination = ({ itemsPerPage }) => {

  const getAllProducts = useSelector ((state) => state.allProducts.value);

  const items = getAllProducts || [];


  const [currentPage, setCurrentPage] = useState(1);

  const pageCount = Math.max(1, Math.ceil(items.length / itemsPerPage));

  const startOffset = (currentPage - 1) * itemsPerPage;
  const endOffset = startOffset + itemsPerPage;
  const currentItems = items.slice(startOffset, endOffset);

  const goToPage = (page) => {
    if (page < 1 || page > pageCount) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    const pages = [];
    const delta = 1;

    for (let i = 1; i <= pageCount; i++) {
      if (
        i === 1 ||
        i === pageCount ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }
    return pages;
  };

  return (
    <>
      <div className="lg:flex lg:flex-wrap pl-12 lg:pl-0 lg:justify-between">
        {currentItems.length > 0 ? (
          currentItems.map((item) => <Card4 key={item.id} item={item} />)
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>

      {pageCount > 1 && (
        <div className="flex items-center gap-2 mt-10 group ">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-black text-white rounded disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-800 transition"
          >
            &lt;
          </button>
          {getPageNumbers().map((page, index) =>
            page === '...' ? (
              <span key={`dots-${index}`} className="px-2 text-gray-400">
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded transition ${
                  currentPage === page
                    ? 'bg-black text-white'
                    : 'bg-white text-black border border-gray-300 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === pageCount}
            className="px-4 py-2 bg-black text-white rounded disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-800 transition"
          >
            &gt;
          </button>
        </div>
      )}
    </>
  );
};