import { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
    componentDidMount() {
        document.addEventListener("keydown", this.handleClose);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleClose);
    }

    handleClose = (e) => {
        if(e.target === e.currentTarget) {
            this.props.close();
            return;
        }
        if (e.code === "Escape") {
            this.props.close();
        }
    }

    render() {
        const {handleClose} = this;
        const {src, alt} = this.props.data;
        return (
            createPortal(
                (
                 <div className="Overlay" onClick={handleClose}>
                     <div className="Modal">
                         <img src={src} alt={alt} />
                     </div>
                 </div>
                ),
                modalRoot
            )
        )
    }
}

export default Modal;