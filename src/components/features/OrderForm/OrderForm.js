
import React from 'react';
//import styles from './OrderForm.scss';
import PropTypes from 'prop-types';
import {Row, Col, Grid} from 'react-flexbox-grid';
import PageTitle from '../../common/PageTitle/PageTitle.js';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import OrderOption from '../OrderOption/OrderOption.js';
import pricing from '../../../data/pricing.json';

class OrderForm extends React.Component {

  static propTypes = {
    cost: PropTypes.node,
    options: PropTypes.any,
    setOrderOption: PropTypes.any,
  }

  render() {
    const {cost, options, setOrderOption} = this.props;
    return (
      <Grid>
        <Row>
          {pricing.map((object) => (
            <Col md={4} key={object.id}>
              <OrderOption {...object} currentValue={options[object.id]} setOrderOption={setOrderOption}/>
            </Col>
          ))}
          <Col xs={12}>
            <PageTitle text='Trip options' />
            <OrderSummary cost={cost} options={options} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default OrderForm;
