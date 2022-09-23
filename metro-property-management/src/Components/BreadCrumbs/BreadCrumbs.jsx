import React  from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import styles from './BreadCrumbs.module.css'
import rightCaret from '../../images/right-caret.svg'
import leftCaret from '../../images/left-caret.svg'
import line from '../../images/line.svg'
import { useNavigate } from 'react-router-dom';

const Breadcrumbs = () => {
    const navigate = useNavigate();
    const breadcrumbs = useBreadcrumbs();

    const handleClick = () => {
      console.log('click')
      navigate('/Home')
    }

    return (
      <div className={styles.container}>
        <div onClick={handleClick} className={styles.back}><img id={styles.caret} src={leftCaret} alt="" /><span>Back to refine search |</span></div>
        {breadcrumbs.slice(0,-1).map(({breadcrumb}) => 
          <div className={styles.crumb}><span>{breadcrumb}</span><img id={styles.caret} src={rightCaret} alt="" /></div>
          )}
        <div className={styles.crumb}><strong>{breadcrumbs[breadcrumbs.length-1].breadcrumb}</strong></div>
      </div>
    );
  }
export default Breadcrumbs