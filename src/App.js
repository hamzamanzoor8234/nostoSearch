import "./App.css";
import SearchComponent from "./Components/SearchComponent/SearchComponent";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

function App() {
  return (
    <div className="App">
      <SearchComponent />
    </div>
  );
}

export default App;
