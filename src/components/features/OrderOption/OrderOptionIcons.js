import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice.js';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({values, required, setOptionValue}) => (
  <div
    className={styles.component}
  >
    {required ? false || null : (
      <div
        onClick={() => setOptionValue('')}
        className={styles.icon }
      >
        <Icon name={'times-circle'}></Icon>NONE
      </div>
    )}

    {values.map(value => (
      <div
        key={value.id}
        value={value.id}
        onClick={() => (setOptionValue(value.id))}
        className={styles.icon }>

        <Icon name={value.icon}/>{value.name} ({formatPrice(value.price)})

      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.any,
  required: PropTypes.any,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.any,
};


export default OrderOptionIcons;
