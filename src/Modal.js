import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: true,
      startingTop: "2%",
      endingTop: "10%"
    };
    //this was something I got from looking up a blog post. Need to know how to do this with functional component
    M.Modal.init(this.Modal, options);
  }

  render() {
    return (
      <div>
        <a
          className="waves-effect waves-light btn modal-trigger"
          data-target="modal1"
        >
          CLICK TO FIND OUT MORE
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >

          <div className="modal-content">
            <h4>How long does it take for plastic to decompose?</h4>
            <img src="https://www.wwf.org.au/Images/UserUploadedImages/408/img-lifecycle-of-plastics-infographic-1000px.jpg" alt="WWF Lifecycle of Plastics" width="1000px" className="wwf"/>
          </div>
          <div className="modal-footer">
            <a className="modal-close waves-effect waves-green btn-flat">
              I see
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
