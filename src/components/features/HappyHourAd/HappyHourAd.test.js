import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

const mockProps = {
  titleText: 'Happy Hour',
  promoText: 'Get the offer at: ',
};

describe('Component HappyHourAd', () => {

  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it('should render heading and description', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });

  it('should render heading and description with props', () => {
    const component = shallow(<HappyHourAd />);
    const renderTitle = component.find(select.title).text();
    const promoTitle = component.find(select.promoDescription).text();
    expect(renderTitle).toEqual(mockProps.titleText);
    expect(promoTitle).toEqual(mockProps.promoText);
  });


});
