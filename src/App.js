import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";
import MainPage from "./components/MainPage";
import "antd/dist/antd.css";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <MainPage />
      </div>
    </ParallaxProvider>
  );
}

export default App;
