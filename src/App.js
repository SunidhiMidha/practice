import logo from './logo.svg';
import './App.css';
import Counter from './CounterCustomHook/CounterUI';
import Pagination from './Pagination/Pagination';
import Password from './PasswordGenerator/Password';
import GridLights from './Grid Lights/GridLightClass';
import SelectableGrid from './SelectableGrid/SelectableGrid';
import UsingHook from './CustomHook/UsingHook';
import LazyComp from './Lazy/MainComponent';
import StarMain from './StarRating/StarMain';
import BishopAttack from './Chess/BishopAttack';
import Comments from './NestedComments/Comments';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/pagination/next" element={<Pagination/>}/>
          <Route path="/passwordGen" element={<Password/>}/>
          <Route path="/gridlLghts" element={<GridLights/>}/>
          <Route path="/selectableGrids" element={<SelectableGrid/>}/>
          <Route path="/hooks" element={<UsingHook/>}/>
          <Route path="/lazy" element={<LazyComp/>}/>
          <Route path="/star" element={<StarMain/>}/>
          <Route path="/bishop" element={<BishopAttack/>}/>
          <Route path="/comments" element={<Comments/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
