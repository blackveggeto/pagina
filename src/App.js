import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Login} from './components/Login';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Login}/>
      </Routes>
      </BrowserRouter>
    </main>

  );
}

export default App;
