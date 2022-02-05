import React from 'react';
import Mystyle from './Events.module.css'

const Events = () => {
  return (
    <div>
      EVENTS PAGE
      <div className="container">
        <img src="./images/eventsTemp.jpg" class="img-fluid" alt="..." />
      </div>

      <button className={Mystyle.wave}>click me</button>
    </div>
  )
};

export default Events;
