import React, { useState } from 'react';
import Modal from './Modal';

const Feedback = () => {
     
    const [openModal, setOpenModal] = useState(false)

    return (
        <>
        <div className="viewcontainer">
        <h3>Have a feedback?</h3>
        
        <button className="btn" onClick = {()=>setOpenModal(!openModal)}>We are listeningu</button>
        
        </div>
        {openModal && <Modal setOpenModal={setOpenModal} /> }
        </>
    )
}

export default Feedback
