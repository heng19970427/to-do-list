import * as enzyme from 'enzyme';
import * as React from 'react';
import ToDoList from './ToDoList';

it('test render correct num of item', () => {
  const list = enzyme.shallow(<ToDoList></ToDoList>);
  expect(list.find('.item').length).toBe(0);
});
