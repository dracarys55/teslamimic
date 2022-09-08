import React from 'react';
import ClickButton from '../components/ClickButton';

const buttons = [
  {
    key: '1',
    name: 'Custom Order',
    link: '/test',
    style: 'black',
  },
  {
    key: '2',
    name: 'Existing Invertory',
    link: '/testing',
    style: 'white',
  },
];
const HomePage = () => {
  return (
    <div className='homepage'>
      <h1>Model 3</h1>
      <p>
        Order Online for <span>Touchless Delivery</span>
      </p>
      <div className='clickButtonSection'>
        {buttons.map((button) => {
          return <ClickButton {...button} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
