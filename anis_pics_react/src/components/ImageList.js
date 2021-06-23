import React from "react";
import "./ImageList.css";
class ImageList extends React.Component {
  render() {
    const imageList = this.props.images.map((image) => {
      return <img src={image.urls.regular} key={image.id} />;
    });
    return <div className="image-box">{imageList}</div>;
  }
}

export default ImageList;
