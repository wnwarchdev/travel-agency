import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionTextarea = ({setOptionValue, defaultValue}) => (
  <div className={styles.component}>
    <textarea
      className={styles.input}
      placeholder={defaultValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
      required
      maxLength='45'
    />
  </div>
);

OrderOptionTextarea.propTypes = {
  defaultValue: PropTypes.any,
  setOptionValue: PropTypes.any,
};


export default OrderOptionTextarea;
