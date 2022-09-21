import React  from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import styles from './BreadCrumbs.module.css'
import rightCaret from '../../images/right-caret.svg'

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();
    console.log('crumbs', breadcrumbs[breadcrumbs.length-1])
    return (
      <div className={styles.container}>
        {breadcrumbs.slice(0,-1).map(({breadcrumb}) => 
          <div className={styles.crumb}><span>{breadcrumb}</span><img id={styles.caret} src={rightCaret} alt="" /></div>
          )}
        <div className={styles.crumb}><strong>{breadcrumbs[breadcrumbs.length-1].breadcrumb}</strong></div>
      </div>
    );
  }
export default Breadcrumbs