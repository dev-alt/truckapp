import Truck from "./Truck";

import Home from "./Home";

import Nav from "./Nav";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import data from "./data.json";





function App() {

  return (

    <Router>

      <Nav data={data} />



      <Routes>
      <Route path="/" element={<Home />} />


        {
          data.map(
            truck => (
              <Route key={truck.model}

                path={`/${truck.model}`}

                element={<Truck truck={truck} />}
              />
            ))
        }
      </Routes>
    </Router>
  );
}

export default App;