import Gnb from "./components/layout/Gnb";
import Hero from "./components/layout/sections/Hero";
import About from "./components/layout/sections/About"
import Skills from "./components/layout/sections/Skills"
import Project from "./components/layout/sections/Projects"
import Overview from "./components/layout/sections/Overview"
import Career from "./components/layout/sections/Career"

/* app.tsx에서는 각각 내용이 담긴 파일들을 불러와 구조를 조립함*/
function App(){
  return(
    <>
      <Gnb />
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Overview />
        <Career />
      </main>
    </>
  );
}

export default App; 