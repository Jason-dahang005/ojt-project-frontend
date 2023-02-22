import { useState } from 'react'
import Modal from '../pages/Modal'

function TheContents() {
    const [openModal, setOpenModal,exampleModalLg] = useState(false);

        const style1 = {
            "width" : "auto",
            "height" : "40px",
            "display" : "flex",
            "justifyContent" : "center",
        }
        const btnStyle = {
            "borderRadius" : "25px",
            "border" : "2px solid black",
            "backgroundColor" : "#dddddd",
            "padding" : "0 2rem",
            "display": "flex",
        }

        return(
            <div style={style1}>
                <div className="Modal">
                    {/* <button style={btnStyle} className="openModalBtn" onClick={() => {setOpenModal(true);}}><AiOutlinePlusCircle/>Create Organization</button> */}
                    <button type="button"className="openModalBtn" onClick={() => {setOpenModal(true);}}  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalLg">Create Organization</button>
                    {openModal && <Modal closeModal={setOpenModal}/>}
                </div>
            </div>  
            
        )
  
}

export default TheContents;