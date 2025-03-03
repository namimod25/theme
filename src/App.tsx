import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./Componenst/Navbar";
import './styles/app.css';
import About from "./pages/about";
import Footer from "./Componenst/Footer";
import Contact from "./pages/Contact";
import Tech from "./pages/Tech";


const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<About />}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/tech" element={<Tech/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App
