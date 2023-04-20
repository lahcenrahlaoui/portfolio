import { useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About from "./components/About";
function App() {
    const [theme, setTheme] = useState(false);

    const handleClick = () => {
        setTheme((state) => !state);
    };

    return (
        <div className={`app ${theme ? 'light' : '' } `}> 
            <Nav onClick={handleClick} theme={theme}/>
            <Hero />
            <Projects theme={theme}/>
            <About />
            <Footer theme={theme}/>
        </div>
    );
}

export default App;
