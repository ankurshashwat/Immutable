import "./App.css";
import Navbar from "../components/Navbar";
import AddFir from "./pages/AddFir";
import FetchFir from "./pages/FetchFir";
import Login from "./pages/Login";
import UploadEvidence from "./pages/UploadEvidence";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <AddFir />
      <FetchFir />
      <UploadEvidence />
    </div>
  );
}

export default App;
