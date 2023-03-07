import "./App.scss";
import { Header, About, Skills } from "./sections";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Certificates from "./sections/Certificates/Certificates";
import Contact from "./sections/Contact/Contact";
import Projects2 from "./sections/Projects/Projects2";
import { useThemeContext } from "./context/ThemeProvider";

function App() {
  const { theme } = useThemeContext();
  console.log(theme);
  return (
    <div className={theme === "light" ? "app" : "app-dark"}>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects2 />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
