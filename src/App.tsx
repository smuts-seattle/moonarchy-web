import "./App.css";
import Background from "./background/Background";
import Live from "./live/Live";
import NavigationBar from "./navigation/NavigationBar";
import Sources from "./sources/Sources";
import Game from "./game/Game";

function App() {
  return (
    <div id="app-home">
      <Background />
      <NavigationBar />
      <Sources />
      <Live />
      <Game />
    </div>
  );
}

export default App;
