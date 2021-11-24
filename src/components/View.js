import React,{useState} from 'react';

const View = ({setView,view}) => {
    const [isActive, setActive] = useState(false);
    return (
        <>
        <div className="viewcontainer">
        <h3>View Toggle</h3>
        <ul  className="viewicons" onClick={()=>setActive(!isActive)} >
            <li className={!isActive ? "toggleclass2" : null}>
            <i className="fas fa-th" onClick={()=>setView(!view)}></i>
            </li>
            <li className={isActive ? "toggleclass" : null}>
            <i className="fas fa-bars" onClick={()=>setView(!view)}></i>
            </li>
        </ul>
    </div>
        </>
    )
}

export default View
