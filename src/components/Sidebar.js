import React from 'react';
import Reader from './Reader';
import View from './View';
import Feedback from './Feedback';

const Sidebar = ({setView,view}) => {
    return (
        <div className="sidebar">
           <Reader/> 
           <View setView = {setView} view={view} />
           <Feedback />
        </div>
    )
}

export default Sidebar
