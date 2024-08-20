import "./App.css";
import Background from "./background/Background";
import Live from "./live/Live";
import NavigationBar from "./navigation/NavigationBar";
import Sources from "./sources/Sources";

function App() {
  return (
    <div id="app-home">
      <Background />
      <NavigationBar />
      <Sources />
      <Live />
    </div>
  );
}

export default App;
