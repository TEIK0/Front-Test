import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LiveAndJoin from './Components/LiveAndJoin/LiveAndJoin';
import Header from './Components/Header/Header';
import Countdown from './Components/Countdown/Countdown';
import LittleDescription from './Components/LittleDescription/LittleDescription';
import LearnMore from './Components/LearnMore/LearnMore';
import Creator from './Components/Creator/Creator';
import LatestVideos from './Components/LatestVideos/LatestVideos';
import JoinUs from './Components/JoinUs/JoinUs';
import AppSample from './Components/AppSample/AppSample';
import Products from './Components/Products/Products';
import Fotter from './Components/Fotter/Fotter';

function App() {
  return (
    <>
      <LiveAndJoin/>
      <Header/>
      <Countdown/>
      <LittleDescription/>
      <LearnMore/>
      <Creator/>
      <LatestVideos/>
      <JoinUs/>
      <AppSample/>
      <Products/>
      <Fotter/>
    </>
  );
}

export default App;
