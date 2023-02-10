import "./App.scss";
import { Header, About, Skills, Projects, Footer } from "./sections";
import Navbar from "./components/Navbar/Navbar";
import Certificates from "./sections/Certificates/Certificates";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Footer />
    </div>
  );
}

export default App;
