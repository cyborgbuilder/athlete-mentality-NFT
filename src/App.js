import './App.css';
import Detail from './components/Detail';
import Home from './components/Home';
import ImageSlider from './components/ImageSlider'
import BackPage from './components/BackPage';
import RdMap from './components/RdMap';
import FooterCm from './components/FooterCm';
import Team from './components/Team';
import NotJust from './components/NotJust';
import Bussiness from './components/Bussiness';
import TeamTwo from './components/TeamTwo';


function App() {
  return (
    <div className="App">
      <Home />
      <Detail />
      <Bussiness /> 
      <RdMap />
      {/* <NotJust /> */}
      <ImageSlider />
      {/* <TeamTwo /> */}
      <BackPage />
      <FooterCm />
      
     
      
      
   
      
    </div>
  );
}

export default App;
