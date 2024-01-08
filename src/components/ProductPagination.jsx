import React from 'react'
import products from './ProductList'
import PrevPageArr from '../assets/icons/prevPage.png'
import NextPageArr from '../assets/icons/nextPage.png'

function ProductPagination({totalPages, currentPage, setCurrentPage, setProdNum}) {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1)

  //changing setProdNum so that number of products on mobile match desktop
  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
    setProdNum(prevState => Math.max((prevState - 9), 9))
  }

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
    setProdNum(prevState => prevState + 9)
  }

  const setItemsForCurrPage = (page) => {
    setCurrentPage(prevState => page)
    setProdNum(prevState => Math.min(page * 9, products.length))
  }
  return (
    <div className='prod-pagination'>
      <div className="prevPage"
        onClick={prevPage}
      >
        <div className="prev-page-arr arr-container">
          <img src={PrevPageArr} alt="" />
        </div>
        <p>Previous</p>
      </div>
      <div className="pagination-container">
        {pageNumbers.map((page, index) => (
          <div 
            onClick={() => setItemsForCurrPage(page)} 
            className={`pagination-page ${currentPage === page ? 'active' : ''}`}
            key={index}
          >
            {page}
          </div>
        ))}
      </div>
      <div className="nextPage" 
        onClick={nextPage}
      >
        <p>Next</p>
        <div className="prev-page-arr arr-container">
          <img src={NextPageArr} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ProductPagination