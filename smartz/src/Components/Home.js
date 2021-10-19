import React from 'react';
import '../index.css';
import Brand from './Brands';
import RangeUsage from './RangeUsage';
import Upcoming from './Upcoming';

function Home(){
return (
  <div>
      <Brand />
      <RangeUsage />
      <Upcoming  />
  </div>
)
}

export default Home;