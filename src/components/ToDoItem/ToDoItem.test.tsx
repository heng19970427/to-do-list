import { Icon } from 'antd';
import * as enzyme from 'enzyme';
import * as React from 'react';
import { ItemLevel } from '../../types';
import ToDoItem from './ToDoItem';

it('render the correct text of item', () => {
  const item = enzyme.shallow(<ToDoItem id={Date.now()}
                                        text="test"
                                        level={ItemLevel.Important}
                                        done={false}/>);
  expect(item.find('.text').text()).toEqual('test');
});

it('render the correct level of item', () => {
  const item = enzyme.shallow(<ToDoItem id={Date.now()}
                                        text="test"
                                        level={ItemLevel.Important}
                                        done={false}/>);
  expect(
        item.find(Icon).get(1).props,
        ).toHaveProperty('style.color', 'red');
});

it('render the correct done state(true) of item', () => {
  const item = enzyme.shallow(<ToDoItem id={Date.now()}
                                        text="test"
                                        level={ItemLevel.Important}
                                        done={true}/>);
  expect(
        item.find('.content > .text').hasClass('done'),
        ).toBe(true);
});

it('render the correct done state(false) of item', () => {
  const item = enzyme.shallow(<ToDoItem id={Date.now()}
                                        text="test"
                                        level={ItemLevel.Important}
                                        done={false}/>);
  expect(
        item.find('.content > .text').hasClass('done'),
        ).toBe(false);
});
