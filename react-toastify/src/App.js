import "./styles.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default function App() {
  const notify = () => {
    toast("Basic notification!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000
    });
    toast.warn("Warn notification!", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: false
    });
    toast.success("Success notification!", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 3000
    });
    toast.info("Info notification!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000
    });
    toast.error("Error notification!", { position: toast.POSITION.TOP_LEFT });
    toast("Basic notification!", { position: toast.POSITION.TOP_RIGHT });
  };
  return (
    <div className="App">
      <button onClick={notify}>notify</button>
    </div>
  );
}
