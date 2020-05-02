import React from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

class OrderOptionDate extends React.Component {

  static propTypes = {
    currentValue: PropTypes.any,
    setOptionValue: PropTypes.any,
  }


  render() {
    const {currentValue, setOptionValue} = this.props;
    return (
      <DatePicker
        selected={currentValue}
        onChange={setOptionValue}
        className={styles.inputSmall}
        placeholderText={'departure'}
        dateFormat="dd/MM/yyyy"
        withPortal
      />
    );
  }
}

export default OrderOptionDate;
