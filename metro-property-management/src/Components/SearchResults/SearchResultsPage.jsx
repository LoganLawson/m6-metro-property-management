import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './SearchResultsPage.module.css'

import quickSortArray from './quickSortArray.js'
import Navbar from '../Header/Navbar';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import SearchTags from './Searchtags/SearchTags';
import SearchBar from './SearchBar/SearchBar';
import SearchResultsSection from './SearchResultsSection/SearchResultsSection'
import NearbyPropertiesSection from './NearbyPropertiesSection/NearbyPropertiesSection'
import Footer from '../Footer/Footer'

import leftCaret from '../../images/left-caret.svg'
import rightCaret from '../../images/right-caret.svg'

function SearchResults() {
  const [searchTags, setSearchTags] = React.useState([])
  const [properties, setProperties] = React.useState([])
  const [error, setError] = React.useState(null);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  // Invoke when user click to request another page.
  const itemsPerPage = 9
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % properties.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  React.useEffect(() => {
    axios.get('http://localhost:3005/properties/').then((response) => {
      setProperties(response.data)
      // console.log(response.data)
    }).catch(error => {
      setError(error);
    });
  }, []);
  if (error) return `Error: ${error.message}`;

  const sort = (e) => {
    e.preventDefault();
    console.log('unsorted')
    console.log(properties)
    console.log('sorted');
    setProperties(quickSortArray(properties, 'title'))
  }
  // console.log(properties)
  return (
    <>
      <div className={styles['header']}>
        <Navbar />
      </div>
      <Breadcrumbs />
      <div className={styles['search']}>
        <SearchBar locationTags={['Auckland']} />
        <SearchTags className={styles['dark-tags']} tags={['sick', 'dope', 'really nice', 'house']} />
      </div>
      <div className={styles['results-1']}>
        <SearchResultsSection 
          properties={properties} 
          onPageCountChange={(e) => setPageCount(e)} 
          itemsPerPage={itemsPerPage}
          itemOffset={itemOffset}
          />
      </div>
      <div className={styles['nearby']}>
        <NearbyPropertiesSection properties={properties} />
      </div>
      <ReactPaginate previousLabel={<img src={leftCaret} alt='' />}
        nextLabel={<><span>Next</span><img src={rightCaret} alt='' /></>}
        pageCount={pageCount}
        breakLabel={'...'}
        pageRangeDisplayed={4}
        marginPagesDisplayed={0}
        onPageChange={handlePageClick}
        containerClassName={styles["pagination"]}
        previousLinkClassName={styles["pagination__link"]}
        nextLinkClassName={styles["pagination__link"]}
        pageClassName={styles["pagination__"]}
        pageLinkClassName={styles["pagination__link--numbers"]}
        disabledClassName={styles["pagination__link--disabled"]}
        activeClassName={styles["pagination__link--active"]}
      />
      <div className={styles['footer']}>
        <Footer />
      </div>
    </>
  )
};

export default SearchResults