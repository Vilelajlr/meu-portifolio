import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/layout/Header';


function App() {
  return (

    <Router>

      <Header />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/sobre" element={<h1>Sobre</h1>} />
        <Route path="/projeto" element={<h1>Projeto</h1>} />
        <Route path="/contato" element={<h1>Contato</h1>} />
      </Routes>




    </Router>
   
  );
}



export default App;
