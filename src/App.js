import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './components/pages/homepage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Homepage />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
