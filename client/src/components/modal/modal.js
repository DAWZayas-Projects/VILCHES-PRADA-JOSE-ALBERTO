import React from 'react'
import './modal.css'

const modal = ({ handleClose, show, children }) => {
    const showHideClassname = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassname}>
            <section className="modal-main">
                {children}
                <button type="button" className="btn btn-danger" onClick={handleClose}>Enable</button>
            </section>
        </div>
    )
}

export default modal