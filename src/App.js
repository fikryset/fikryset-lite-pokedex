import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from "./components/Navibar";
import PokemonList from "./components/PokemonList";
import { Container } from "react-bootstrap";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PokemonDetail from "./components/PokemonDetail";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Navibar />
        <Container>
          <Routes>
            <Route path="/" element={<PokemonList />}></Route>
            <Route path="/pokemon/:name" element={<PokemonDetail />}></Route>
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
