import React from 'react';
import Reader from './Reader';
import Feedback from './Feedback';
const Modal = ({setOpenModal}) => {
    return (
        <div className="modalContainer" >
        <div className="boxmodal">
        <div className="modalsideContainer">
            <Reader />
            <Feedback />
        </div>
        <div className="formContainer">
        <div className="closebtn" onClick={()=>setOpenModal(false)}><i class="fas fa-times"></i></div>
        <h1>Thank you so much for taking the time!</h1>
        <p>Please provide the below details</p>
        <div className="inputContain">
        <div>
        <label>First Name</label>
        </div>
        <input type="text" placeholder="John" />
        </div>
        <div className="inputContain">
        <div>
        <label>Last Name</label>
        </div>
        <input type="text" placeholder="Doe" />
        </div>
            <div className="inputContain">
            <div>
            <label>Address</label>
            </div>
            <textarea type="text" placeholder="Enter your full Address"></textarea>
            </div>
                <div className="inputContain">
                <div>
                <label>Country</label>
                </div>
                <div className="country">
                <input type="text" placeholder="India" className="countryname" /><i class="fas fa-search"></i>
                </div>
                </div>
                    <div className="inputContain">
                    <div>
                    <label>EmailID</label>
                    </div>
                    <input type="email" placeholder="example@sample.com" />
                    <span> Please enter valid mail </span>
                    </div>
                    <div className="inputContain">
                    <div>
                    <label>Phone number</label>
                    </div>
                    <span className="countrycode"> 
                    <input type="number" placeholder="+91"  />
                    </span>
                    <span className="phoneNumber"> 
                    <input type="number" placeholder="1234567890" />
                    </span>
                    <span> Please enter valid Number </span>
                    </div>
                    <div className="btn2">
                    <button>Submit Feedback</button>
                    </div>
                    </div>
                    </div>
                    </div>
    )
}

export default Modal
