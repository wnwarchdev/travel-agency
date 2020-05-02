import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux';


const mapStateToProps = (state) => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = arg => ({
  setOrderOption: (object) =>
    arg(setOrderOption(object)),
});


export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
