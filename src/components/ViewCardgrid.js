import React from 'react';
import NewsModal from './NewsModal';

const ViewCardgrid = ({currCard, samay, openNews,setOpenNews }) => {
    return (
        <div className="gridCard">
        {currCard.map((item) => {
            return (
                <div className="gridCard1" onClick={()=>setOpenNews(true)}>
                    <div className="gridCardContainer">
                    <div className="headinggrid">
                    <div  className="main" >
                    <h3>{item.title}</h3>
                    <p>  {item.body} </p>
                    <p className="time">{samay} GMT</p>
                    </div>
                    </div>
                    <img src="images/p1.jpg" alt="not available" />
                    </div>
                </div>
            )
        })}
        {
            openNews &&  <NewsModal setOpenNews={setOpenNews} openNews={openNews} />
        }
        </div>
    )
}

export default ViewCardgrid
