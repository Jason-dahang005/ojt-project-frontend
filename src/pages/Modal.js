import React from "react";
import "./Modal.css";


function Modal({closeModal}) {

    return(
        
        <div className="modalBackground" >
            <div className="modalContainer" >
                <div className="titleCloseBtn" >
                    <button onClick={() => closeModal(false)} > X </button>
                </div>
                <div className="title">
                    <h1>Are You Sure Want To Continue?</h1>
                </div>
                <div className="body">
                    <p>
                        The nxt page is awesome! you should move forward
                    </p>
                </div>
                <div className="footer">
                    <button onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
                    <button id ="confirmBtn">Confirm</button>
                </div>
            </div>
        </div>

    );
}

export default Modal;