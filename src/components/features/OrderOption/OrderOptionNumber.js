import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice.js';

const OrderOptionNumber = ({currentValue, price, setOptionValue, limits}) => (
  <div className={styles.number}>
    <input
      type="number"
      className= {styles.inputSmall}
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
      min={limits.min}
      max={limits.max}
      required
    >
    </input>
    x{formatPrice(price)}
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.any,
  limits: PropTypes.any,
  price: PropTypes.any,
};



export default OrderOptionNumber;
