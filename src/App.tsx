import { Button, Icon, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import './App.less';
import ToDoList from './components/ToDoList/ToDoList';
const { Title } = Typography;

// tslint:disable-next-line:variable-name
const App: React.FC = () => {
  const [isFirstUse, setIsFirst] = useState(localStorage.getItem('isFirst') === '1');

  useEffect(() => {
    isFirstUse ? localStorage.setItem('isFirst', '1') : localStorage.setItem('isFirst', '0');
  });

  return (
    <div className="App">
      <header className="header">
        <div className="bg"></div>
        <Title level={3} style={{ marginBottom: 0, color: 'azure' }}>ToDoList</Title>
        <span style={{ fontSize: '0.7rem' }}>author: 衡玉良</span>
      </header>
      <div className="tip" hidden={isFirstUse}>
        <div className="content">
          <p>Usage：</p>
          <p><Icon type="check-circle" theme="filled" style={{ color: 'gray' }}
            className="icon" /> undone</p>
          <p><Icon type="check-circle" theme="filled" style={{ color: 'green' }}
            className="icon" /> done</p>
          <p><Icon type="heart" theme="filled" style={{ color: 'red' }}
            className="icon" /> important</p>
          <p><Icon type="heart" theme="filled" style={{ color: 'gray' }}
            className="icon" /> normal</p>
          <p><Icon type="delete" theme="filled" style={{ color: 'black' }}
            className="icon" /> click to delete</p>
          <Button onClick={() => setIsFirst(true)} type="primary">Got it!</Button>
        </div>
      </div>
      <div className="list">
        <ToDoList />
      </div>
    </div>
  );
};

export default App;
