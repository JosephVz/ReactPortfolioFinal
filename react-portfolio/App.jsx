import styles from "./App.module.css";
import { About } from "./src/components/About/About";
import { Contact } from "./src/components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./src/components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;