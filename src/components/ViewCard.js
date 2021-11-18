import React from 'react';
import NewsModal from './NewsModal';

const ViewCard = ({currCard, samay, setOpenNews, openNews}) => {
    

    return (
        <>
        {currCard.map((item) => {
            return (
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
                    )
                })}
                {
                    openNews &&  <NewsModal setOpenNews={setOpenNews} openNews={openNews} />
                }
        </>
    )
}

export default ViewCard
