import React from 'react';
import View from './View';
// import { Switch, Route } from 'react-router';
import { Routes ,Route } from 'react-router-dom';
const ViewToggle = () => {
    return (
        <>
        <Routes>
      <Route exact path="/" component ={View} />
      </Routes>
          </>  
        
    )
}

export default ViewToggle
{state.map((item)=>{
    return(
        // <div className="verticalCardContainer">

        <div className="verticalCard">
        <div className="verticalCardContainer">
        <img src="images/p1.jpg" alt="not available" />
        <div className="headingnews">
        <h3>{item.title}</h3>
        <p>  {item.body} </p>
        <p>{samay} GMT</p>
        </div>
        </div>
        </div>
        // </div>

)
})}
