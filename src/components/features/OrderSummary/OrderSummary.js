import React from 'react';
import styles from './OrderSummary.scss';
//import PropTypes from 'prop-types';
//import {Row, Col, Grid} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import {calculateTotal} from '../../../utils/calculateTotal.js';
import {formatPrice} from '../../../utils/formatPrice.js';

class OrderSummary extends React.Component {

  static propTypes = {
    cost: PropTypes.node,
    options: PropTypes.any,
  }

  render() {
    const {cost, options} = this.props;
    return (
      <h2 className={styles.component}>
        Total:<strong>{calculateTotal(formatPrice(cost),options)}</strong>
      </h2>
    );
  }
}

export default OrderSummary;
