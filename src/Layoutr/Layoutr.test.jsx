/* eslint-env jest */

import React from 'react';
import { shallow, mount } from 'enzyme';

import Layoutr from './Layoutr';

test('should be a div', () => {
  const wrapper = shallow(<Layoutr />);

  const type = wrapper.type();

  expect(type).toBe('div');
});

test('should match snapshot', () => {
  const wrapper = mount(<Layoutr />);

  expect(wrapper).toMatchSnapshot();
});

test('should have display flex', () => {
  const tree = shallow(<Layoutr />);

  expect(tree).toHaveStyleRule('display', 'flex');
});

test('should handle passed width', () => {
  const integerWidthWrapper = shallow(<Layoutr width={100} />);

  expect(integerWidthWrapper).toHaveStyleRule('width', '100px');
});
