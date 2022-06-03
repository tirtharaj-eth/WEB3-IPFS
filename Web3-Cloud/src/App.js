// import logo from './beluga2.jpg';
import './App.css';

import ParticleBackground from './components/particleComponent';
// import Btn from "./buttonComponent"
// import Btn2 from "./button2Component"
import Appbar from './components/appbarComponent';
import Text from "./components/textComponent"
function App() {
  return ( 
    
    <div className="App">
      <Appbar/>
      <ParticleBackground/> 
     <Text/> 
     {/* <Btn/>
     <Btn2/> */}
     <ParticleBackground/> 
    
     </div>
    

       
    
    
  );
}

export default App;
