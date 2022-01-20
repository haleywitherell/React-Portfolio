import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';


function App() {
  return (
    <div className="App container-fluid">
      <Header></Header>
      <Navbar></Navbar>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
