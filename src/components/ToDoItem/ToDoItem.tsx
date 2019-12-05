import React, { useState } from 'react';
import { ItemLevel, ToDoItemProp } from '../../types';
import './ToDoItem.less';

import { Icon, Input, Popconfirm } from 'antd';
const { TextArea } = Input;

// tslint:disable-next-line:variable-name
const ToDoItem: React.FC<ToDoItemProp> = (props) => {

  const [editable, setEditable] = useState(false);

  let itemClass;
  let textClass;
  if (props.level === ItemLevel.Normal) {
    itemClass = 'normal';
  } else if (props.level === ItemLevel.Important) {
    itemClass = 'important';
  }
  textClass = props.done ? ' done' : '';

  const toggleDone = () => {
    props.onDone && props.onDone(props.id);
  };

  const deleteItem = () => {
    props.onDelete && props.onDelete(props.id);
  };

  return (
        <div className={`item ${itemClass}`}>
            <Icon type="check-circle" theme="filled" className="icon"
                style={{ paddingLeft: '10px', color: props.done ? 'green' : 'gray' }}
                onClick={() => toggleDone()} />
            <div className="content"
                onClick={() => !props.done && setEditable(true)}
                onMouseLeave={() => setEditable(false)}>
                <div className={`text ${textClass}`} hidden={editable}>{props.text}</div>
                <TextArea
                    autoSize={true} value={props.text} hidden={!editable}
                    onChange={e => props.onEdit && props.onEdit(props.id, e.target.value)}/>
            </div>
            <div className="opts">
                <Icon type="heart" theme="filled" className="icon"
                    style={{ paddingRight: '10px', color: props.level === ItemLevel.Important ? 'red' : 'gray' }}
                    onClick={() => props.onLevel && props.onLevel(props.id)} />
                <Popconfirm placement="left" title="Are you sure delete this item?"
                            onConfirm={deleteItem}>
                    <Icon type="delete" theme="filled" className="icon"
                        style={{ paddingRight: '10px', color: 'black' }}/>
                </Popconfirm>
            </div>
        </div>
  );
};

export default ToDoItem;
