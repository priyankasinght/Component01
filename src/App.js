import BasicInfo from "./Resume/BasicInfo";
import Experience from "./Resume/Experience";
import Skills from "./Resume/Skills";
import Hobbies from "./Resume/Hobbies";

function App() {
  return (
    <div className="App">
      <BasicInfo/>
      <Experience/>
      <Skills/>
      <Hobbies/>
    </div>
  );
}

export default App;
