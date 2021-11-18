import React from 'react'

const NewsModal = ({openNews,setOpenNews}) => {
    return (
        <div className="newspic" onClick={()=>setOpenNews(!openNews)}>
            <img src="images/news.jpg" alt="not found" />
        </div>
    )
}

export default NewsModal
