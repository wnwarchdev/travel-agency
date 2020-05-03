import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';


describe('Component TripSummary', () => {

  it('01:should generate link', () => { //test 01
    const testValue = 'testString';
    const testLink = '/trip/testString';

    const component = shallow(<TripSummary id={testValue} image={'placeholder'} name={'placeholder'} cost={'placeholder'} days={1} tags={['placeholder']}/>);

    expect(component.find('Link').prop('to')).toEqual(testLink);
  });//end

  it('02:should have valid attrs: src, alt', () => {  //test 02
    const testSrc = 'testString';
    const testAlt = 'testString';

    const component = shallow(<TripSummary id={'placeholder'} image={testSrc} name={testAlt} cost={'placeholder'} days={1} tags={['placeholder']}/>);

    expect(component.find('img').prop('src')).toEqual(testSrc);
    expect(component.find('img').prop('alt')).toEqual(testAlt);
  });//end

  it('03:should render props: name, cost, days', () => {  //test 03
    const testName = 'testString';
    const testCost = 'testString';
    const testDays = 123;

    const component = shallow(<TripSummary id={'placeholder'} image={'placeholder'} name={testName} cost={testCost} days={testDays} tags={['placeholder']}/>);
    //console.log(component.debug());

    expect(component.find('.title').text()).toEqual(testName);
    expect(component.find('.details').text()).toEqual(testDays+' daysfrom '+testCost); //w sumie lepiej wskazac na pierwszys i ostatni element w stringu


  });//end

  it('04:should have props', () => {  //test 04
    const testName = 'testString';
    const testCost = 'testString';
    const testImage = 'testString';
    const testId = 'testString';
    const testDays = 123;
    const testTags = [123];

    const component = shallow(<TripSummary id={testId} image={testImage} name={testName} cost={testCost} days={testDays} tags={testTags}/>);

    expect(component).toBeTruthy();
  });//end

  it('05:should have tags with corresponding numbers', () => {//test 05
    const testTags = ['1','2','3'];

    const component = shallow(<TripSummary id={'placeholder'} image={'placeholder'} name={'placeholder'} cost={'placeholder'} days={1} tags={testTags} />);

    expect(component.find('.tag').at(0).text()).toBe(testTags[0]);
    expect(component.find('.tag').at(1).text()).toBe(testTags[1]);
    expect(component.find('.tag').at(2).text()).toBe(testTags[2]);

  });//end




}); //end describe
