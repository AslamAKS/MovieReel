import WelcomeScreen from "./Pages/WelcomeScreen";
import HomeScreen from "./Pages/HomeScreen";
import Registration from './Components/UserAccount/Registration';
import Login from './Components/UserAccount/Login'
import Popular from './Pages/Movies/Popular'
import Trending from './Pages/Movies/Trending'
import Upcoming from './Pages/Movies/Upcoming'
import TopRated from './Pages/Movies/TopRated'
import OnTheAir from "./Pages/Tv/OnTheAir";
import TodayTrending from "./Pages/Tv/TodayTrending";
import TopRatedTV from "./Pages/Tv/TopRated";
import { Route, Routes } from 'react-router-dom'
import PlayMovie from "./Pages/PlayMovie";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WelcomeScreen />} />
        <Route path="/signup" element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/homescreen' element={<HomeScreen />} />
        <Route exact path='/homescreen/trending' element={<Trending />} />
        <Route exact path='/homescreen/popular' element={<Popular />} />
        <Route exact path='/homescreen/upcoming' element={<Upcoming />} />
        <Route exact path='/homescreen/toprated' element={<TopRated />} />
        <Route exact path="/homescreen/playvideo" element={<PlayMovie/>}/>
        <Route exact path="/homescreen/tv_ontheair" element={<OnTheAir/>}/>
        <Route exact path="/homescreen/tv_trending_today" element={<TodayTrending/>}/>
        <Route exact path="/homescreen/tv_toprated" element={<TopRatedTV/>}/>
      </Routes>
    </div>
  );
}

export default App;
