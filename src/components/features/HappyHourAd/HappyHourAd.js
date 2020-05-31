import React from 'react';
//import ProtoTypes from 'prop-types';
import styles from './HappyHourAd.scss';


class HappyHourAd extends React.Component {

  render() {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>TEST</h3>
        <h4 className={styles.promoDescription}>test description</h4>
      </div>
    );
  }
}


export default HappyHourAd;
