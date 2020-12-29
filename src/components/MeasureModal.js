import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class MeasureModal extends Component {
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
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  render() {
    return (
      <div>
        <a
          className="waves-effect waves-light btn modal-trigger"
          data-target="modal2"
        >
          CLICK TO FIND OUT MORE
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal2"
          className="modal"
        >
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
          <div className="modal-content">
            <h4>How is Wildlife affected by plastic pollution?</h4>
            <div className="pics">
                <img src="https://assets.tvm.com.mt/en/wp-content/uploads/sites/2/2019/06/plastik-fekruna.jpg" alt="Turtle"  width="500px" className="wwf"/>
                <img src="https://i.pinimg.com/originals/67/54/41/675441dad9649a91c3723b037f852733.jpg" alt="seal" width="500px" className="wwf"/>
                <img src="https://gcs.thesouthafrican.com/2019/03/5b5864d0-waters-3065288.jpg" alt="polar bear" width="550px" className="wwf"/>
            </div>
            <h3>Check out this National Geographic Website:</h3>
            <a href="https://www.nationalgeographic.com/animals/2019/12/whales-eating-plastic-pollution/#close" target="_blank">Go HERE</a>
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

export default MeasureModal;