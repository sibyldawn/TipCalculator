import React from 'react';
import App from './App';
import Enzyme,{ shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({adapter : new EnzymeAdapter() });

it('renders without issues', () => {
  const wrapper = shallow(<App/>);
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1)
})

it('matches the snapshot',() => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot();
})
