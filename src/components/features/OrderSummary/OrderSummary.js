import React from 'react';
import styles from './OrderSummary.scss';
//import PropTypes from 'prop-types';
//import {Row, Col, Grid} from 'react-flexbox-grid';

class OrderSummary extends React.Component {

  render() {
    return (
      <h2 className={styles.component}>
        Total:<strong>$88.999</strong>
      </h2>
    );
  }
}

export default OrderSummary;
