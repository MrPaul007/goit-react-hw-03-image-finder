import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

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
        // const {src, alt} = this.props.data;
        return (
            createPortal(
                (
                 <div className="Overlay" onClick={handleClose}>
                     <div className="Modal">
                         {this.props.children}
                     </div>
                 </div>
                ),
                modalRoot
            )
        )
    }
}

Modal.propTypes = {
    close: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
};

export default Modal;