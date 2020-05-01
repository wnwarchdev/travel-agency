import React from 'react';
//import styles from './OrderForm.scss';
import PropTypes from 'prop-types';
import {Row, Col, Grid} from 'react-flexbox-grid';
import PageTitle from '../../common/PageTitle/PageTitle.js';
import OrderSummary from '../OrderSummary/OrderSummary.js';

class OrderForm extends React.Component {

  static propTypes = {
    cost: PropTypes.node,
  }

  render() {
    const {cost} = this.props;
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <PageTitle text='Trip options' />
            <OrderSummary tripCost={cost} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default OrderForm;
