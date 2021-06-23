import axios from "axios";
import React from "react";
import ImageList from "./components/ImageList";
import Input from "./components/Input";

class App extends React.Component {
  state = {
    images: []
  };

  submitInput = async (inputText, e) => {
    e.preventDefault();

    const imagesResponse = await axios.get(
      "https://api.unsplash.com/search/photos",
      {
        params: {
          query: inputText
        },
        headers: {
          Authorization: "Client-ID RPRPeI_3ioY0Cw9Q6w3TMhQyE_BC9htXa3JmPrANI9k"
        }
      }
    );
    this.setState({ images: imagesResponse.data.results });
  };
  render() {
    console.log(this.state.images);
    return (
      <div>
        <Input submitInput={this.submitInput} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
