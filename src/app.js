import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/about';
import Portfolio from './pages/portfolio';


function App() {
  return (
    <div className="App container-fluid">
      <Header></Header>
      <Navbar></Navbar>
      <About></About>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}

export default App;
