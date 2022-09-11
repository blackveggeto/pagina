import {BrowserRouter, HashRouter,Routes, Route} from "react-router-dom"
import {Login} from './components/Login';

function App() {
  return (
    <main className="App">
      <HashRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
      </Routes>
      </HashRouter>
    </main>

  );
}

export default App;
