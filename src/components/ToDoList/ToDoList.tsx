import React, { useEffect, useState } from 'react';
import { ItemLevel, ToDoItemProp } from '../../types';
import ToDoItem from '../ToDoItem/ToDoItem';
import './ToDoList.less';

import { Empty, Icon, Input, Select, Typography } from 'antd';
const { Option } = Select;

// tslint:disable-next-line:variable-name
const ToDoList: React.FC = () => {
  const itemsStr = localStorage.getItem('items') || '[]';
  const [items, setItems] = useState<ToDoItemProp[]>(JSON.parse(itemsStr));
  const [text, setText] = useState<string>('');
  const [level, setLevel] = useState<ItemLevel>(ItemLevel.Normal);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  });

  const handelDelete = (itemId: number) => {
    console.log(itemId);
    const itemIndex = items.findIndex(it => it.id === itemId);
    items.splice(itemIndex, 1);
    setItems([...items]);
  };

  const handelDone = (itemId: number) => {
    items.some((it) => {
      if (it.id === itemId) {
        it.done = !it.done;
        setItems([...items]);
        return true;
      }
      return false;
    });
  };

  const handelEdit = (itemId: number, text: string) => {
    items.some((it) => {
      if (it.id === itemId) {
        it.text = text;
        setItems([...items]);
        return true;
      }
      return false;
    });
  };

  const handelLevel = (itemId: number) => {
    items.some((it) => {
      if (it.id === itemId) {
        if (it.level === ItemLevel.Important) {
          it.level = ItemLevel.Normal;
        } else {
          it.level = ItemLevel.Important;
        }
        setItems([...items]);
        return true;
      }
      return false;
    });
  };

  const addNewItem = () => {
    if (text.trim() === '') return;
    const id = Date.now();
    const newItem: ToDoItemProp = {
      id,
      text,
      level,
      done: false,
    };
    setItems([...items, newItem]);
    setText('');
    setTimeout(() => {
      const lastItem = document.querySelector('.item:last-child');
      lastItem && lastItem.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handelTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handelLevelChange = (value: ItemLevel) => {
    setLevel(value);
  };

  const levelSelect = (
    <Select defaultValue={level} onChange={handelLevelChange} style={{ width: 100 }}>
      <Option value={ItemLevel.Normal}>Normal</Option>
      <Option value={ItemLevel.Important}>Important</Option>
    </Select>
  );

  return (
    <div className="container">
      <div className="list-container">
        {
          items.length === 0 ? <Empty description="Please add new TODO" /> :
            <ul className="item-list">
              {items.map(it =>
                <ToDoItem
                  key={it.id}
                  id={it.id}
                  text={it.text}
                  level={it.level}
                  done={it.done}
                  onDelete={handelDelete}
                  onDone={handelDone}
                  onLevel={handelLevel}
                  onEdit={handelEdit}
                />,
              )}
            </ul>
        }
      </div>
      <div className="item-new">
        <Input placeholder="input new TODO item"
          addonBefore={levelSelect}
          addonAfter={<Icon type="plus" onClick={addNewItem} />}
          onPressEnter={addNewItem}
          onChange={e => handelTextChange(e)}
          value={text}
          size="large"
        />
      </div>
    </div>

  );
};

export default ToDoList;
