import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  title: '.title',
  counter: '.counter',
};

const trueDate = Date;

const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};


const mockDateSummerStart = '2020-06-18';
const mockDateSummerMid = '2020-08-10';
const mockDateSummerEnd = '2020-09-23';
const mockDateWinter = '2020-12-31';
const mockDateSpring = '2020-06-06';
const mockDateNextWinter = '2021-12-31';
const mockDateNextSpring = '2021-06-06';
const mockDateAnotherSpring = '2022-06-06';


describe('Component DaysToSummer', () => {

  it('should render without crashing', () => {
    const component = shallow (<DaysToSummer />);
    expect(component).toBeTruthy();
  });

  it('should render heading and counter', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.counter)).toEqual(true);
  });

  it('should render counter in spring', () => {
    global.Date = mockDate(mockDateSpring);
    const component = shallow(<DaysToSummer />);
    expect(component.find(select.counter).text()).toEqual('14 days to summer');
    global.Date = trueDate;
  });

  it('should render counter at start of summer', () => {
    global.Date = mockDate(mockDateSummerStart);
    const component = shallow(<DaysToSummer />);
    expect(component.find(select.counter).text()).toEqual('Only 1 day to summer');
    global.Date = trueDate;
  });

  it('should render counter at mid-summer', () => {
    global.Date = mockDate(mockDateSummerMid);
    const component = shallow(<DaysToSummer />);
    expect(component.find(select.counter).text()).toEqual('summer is now');
    global.Date = trueDate;
  });

  it('should render counter at end of summer', () => {
    global.Date = mockDate(mockDateSummerEnd);
    const component = shallow(<DaysToSummer />);
    expect(component.find(select.counter).text()).toEqual('270 days to summer of \'21');
    global.Date = trueDate;
  });

  it('should render counter in winter', () => {
    global.Date = mockDate(mockDateWinter);
    const component = shallow(<DaysToSummer />);
    expect(component.find(select.counter).text()).toEqual('171 days to summer of \'21');
    global.Date = trueDate;
  });

  it('should render counter in spring next year', () => {
    global.Date = mockDate(mockDateNextSpring);
    const component = shallow(<DaysToSummer />);
    expect(component.find(select.counter).text()).toEqual('14 days to summer');
    global.Date = trueDate;
  });

  it('should render counter in winter next year', () => {
    global.Date = mockDate(mockDateNextWinter);
    const component = shallow(<DaysToSummer />);
    expect(component.find(select.counter).text()).toEqual('171 days to summer of \'22');
    global.Date = trueDate;
  });

  it('should render counter in spring another year', () => {
    global.Date = mockDate(mockDateAnotherSpring);
    const component = shallow(<DaysToSummer />);
    expect(component.find(select.counter).text()).toEqual('14 days to summer');
    global.Date = trueDate;
  });

});
