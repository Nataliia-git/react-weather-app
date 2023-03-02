import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <SearchEngine defaultCity="Male" />
      <footer>
        This app was coded by Nataliia Zazerina and is{" "}
        <a
          href="https://github.com/Nataliia-git/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}

export default App;
