import "./App.scss";
import { Header, About, Skills, Projects } from "./sections";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Certificates from "./sections/Certificates/Certificates";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
