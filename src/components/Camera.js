import React from "react";
import CameraPhoto, { FACING_MODES } from "jslib-html5-camera-photo";

export default class Camera extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.cameraPhoto = null;
    this.videoRef = React.createRef();
    this.state = {
      dataUri: "",
    };
  }

  componentDidMount() {
    // We need to instantiate CameraPhoto inside componentDidMount because we
    // need the refs.video to get the videoElement so the component has to be
    // mounted.
    this.cameraPhoto = new CameraPhoto(this.videoRef.current);
    this.startCamera(FACING_MODES.ENVIRONMENT, { width: 500, height: 500 });
  }

  startCamera(idealFacingMode, idealResolution) {
    this.cameraPhoto
      .startCamera(idealFacingMode, idealResolution)
      .then(() => {
        console.log("camera is started !");
      })
      .catch((error) => {
        console.error("Camera not started!", error);
      });
  }

  takePhoto() {
    const config = {
      sizeFactor: 1,
    };

    let dataUri = this.cameraPhoto.getDataUri(config);
    this.setState({ dataUri });
    this.props.photo(dataUri);
  }

  stopCamera() {
    this.cameraPhoto
      .stopCamera()
      .then(() => {
        console.log("Camera stoped!");
      })
      .catch((error) => {
        console.log("No camera to stop!:", error);
      });
  }

  render() {
    return (
      <div className="Camera">
        {this.state.dataUri === "" ? (
          <video ref={this.videoRef} autoPlay="true" />
        ) : (
          <img alt="imgCamera" src={this.state.dataUri} />
        )}
        <button
          className="take-photo-button"
          onClick={() => {
            this.takePhoto();
          }}
        >
          Take photo
        </button>
      </div>
    );
  }
}
