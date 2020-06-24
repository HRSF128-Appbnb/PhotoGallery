import React from 'react';
import App from '../client/src/components/App.jsx';
import {shallow, mount, render} from 'enzyme';

describe('<App /> rendering', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it(`should check 'componentDidMount'`, () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getPhotos');
    instance.componentDidMount();
    expect(instance.getPhotos).toHaveBeenCalledTimes(1);
  });

  it(`should check pictures to not be empty`, () => {
    const instance = wrapper.instance();
    expect(instance.state.homeActive).toEqual(true);
  })

});