
import React from 'react';
//import styles from './OrderForm.scss';
import PropTypes from 'prop-types';
import {Row, Col, Grid} from 'react-flexbox-grid';
import PageTitle from '../../common/PageTitle/PageTitle.js';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import OrderOption from '../OrderOption/OrderOption.js';
import pricing from '../../../data/pricing.json';
import {formatPrice} from '../../../utils/formatPrice.js';
import {calculateTotal} from '../../../utils/calculateTotal.js';
import Button from '../../common/Button/Button';
import settings from '../../../data/settings';


const sendOrder = (options, cost, duration, participant,) => {
  const totalCost = formatPrice(calculateTotal(cost, options));



  if (options.name !== '' && options.name !=='What is your name?' && options.contact !== '' && options.contact !=='phone, email, etc.' && options['start-date'] !== ''){

    const payload = {
      ...options,
      totalCost,
      duration,
      participant,
    };

    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  }


  else {alert('please add name, contact and departure details');}


};

class OrderForm extends React.Component {

  static propTypes = {
    cost: PropTypes.node,
    options: PropTypes.any,
    setOrderOption: PropTypes.any,
    duration: PropTypes.any,
    participant: PropTypes.any,
  }

  render() {
    const {cost, options, duration, participant, setOrderOption} = this.props;
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
          <Button onClick={() => sendOrder(options, cost, duration, participant)}>Order now!</Button>
        </Row>
      </Grid>
    );
  }
}

export default OrderForm;
