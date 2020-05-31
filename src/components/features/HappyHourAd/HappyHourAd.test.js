import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

const mockProps = {
  titleText: 'Happy Hour in:',
  promoText: 'The time is now!',
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
    expect(promoTitle).toBeTruthy();
  });


});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if (args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }

  static now() {
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toContain(expectedDescription);

    global.Date = trueDate;
  });
};


const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
  it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
    jest.useFakeTimers();
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.promoDescription).text();
    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delaySeconds);
    global.Date = mockDate(newTime.getTime());

    jest.advanceTimersByTime(delaySeconds * 1000);

    expect(renderedTime).toContain(expectedDescription);

    global.Date = trueDate;
    jest.useRealTimers();
  });
};


describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
});


describe('Component HappyHourAd with mocked Date and delay', () => {
  checkDescriptionAfterTime('11:57:58', 2,'122');
  checkDescriptionAfterTime('11:59:59', 1, '1');
  checkDescriptionAfterTime('13:00:00', 60 * 60, 23 * 60 * 60 + '');
});

describe('Component HappyHourAd with mocked Date and description', () => {
  checkDescriptionAtTime('12:00:00', mockProps.promoText);
  checkDescriptionAtTime('12:30:15', mockProps.promoText);
  checkDescriptionAtTime('12:59:59', mockProps.promoText);
});

describe('Component HappyHourAd with mocked Date at time of promotion', () => {
  checkDescriptionAfterTime('11:57:58', 2,'122');
  checkDescriptionAfterTime('12:00:00', 1, mockProps.promoText);
});
