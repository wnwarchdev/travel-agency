import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice.js';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionsCheckboxes = ({values, currentValue, setOptionValue}) => (
  <div
    className={styles.checkboxes}
  >


    {values.map(value => (
      <label
        key={value.id}
      >
        <input
          type='checkbox'
          value={value.id}
          checked={currentValue.includes(value.id)}
          onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
        >
        </input>
        {value.name} ({formatPrice(value.price)})
      </label>
    ))}
  </div>
);

OrderOptionsCheckboxes.propTypes = {
  values: PropTypes.any,
  required: PropTypes.any,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.any,
};


export default OrderOptionsCheckboxes;
