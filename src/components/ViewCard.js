import React, { useState } from 'react';
import NewsModal from './NewsModal';

const ViewCard = ({currCard, samay, setOpenNews, openNews}) => {

    const [state, setState] = useState(currCard)
      
    const deleteItem = (asb)=>{
        const dataremain = currCard.filter((currelem)=>{
                return currelem !== asb
        })
        setState(dataremain)
    }

    return (
        <>
        {state.map((item) => {
            return (
                <div className="deleteitem">
                <div className="verticalCard" onClick={()=>setOpenNews(true)}>
                <div className="verticalCardContainer">
                <img src="images/p1.jpg" alt="not available" />
                <div className="headingnews">
                <h3>{item.title}</h3>
                <p>  {item.body} </p>
                <p className="time">{samay} GMT</p>
                </div>
                </div>
                </div>
                <div><i class="fas fa-times" onClick={()=>deleteItem(item)}></i></div>
                </div>
                    )
                })}
                {
                    openNews &&  <NewsModal setOpenNews={setOpenNews} openNews={openNews} />
                }
        </>
    )
}

export default ViewCard
