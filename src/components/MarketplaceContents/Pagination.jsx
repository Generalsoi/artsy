import React from "react";

export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginateFront,
  paginateBack,
  currentPage,
}) => {
  return (
    <div className="py-2 px-4 md:px-20 font-satoshi">
      <div>
        <nav
          className="relative z-0 flex items-center justify-between shadow-sm "
          aria-label="Pagination"
        >
          <button
            onClick={() => {
              paginateBack();
            }}
            className="relative inline-flex items-center px-5 py-2 rounded-xl border border-gray-300 bg-white text-sm font-bold text-gray-500 hover:bg-gray-50"
          >
            <span>Previous</span>
          </button>

          <button
            onClick={() => {
              paginateFront();
            }}
            className="relative inline-flex items-center px-5 py-2 rounded-xl border border-gray-300 bg-white text-sm font-bold text-gray-500 hover:bg-gray-50"
          >
            <span>Next</span>
          </button>
        </nav>
      </div>
    </div>
  );
};
