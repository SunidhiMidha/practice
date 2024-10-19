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


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* custom hook for increment decrement */}
        {/* <Counter/> */}

        {/* pagination */}
        {/* <Pagination/> */}

        {/* Password generator */}
        {/* <Password/> */}

        {/* 3*3 Grid Light */}
        {/* <GridLights/> */}

        {/* selectable grid */}
        {/* <SelectableGrid/> */}

        {/* custom hook */}
        {/* <UsingHook/> */}

        {/* <LazyComp/> */}

        {/* star rating with 3 states: empty, hover (light yellow) , selected (yellow)  */}
        <StarMain/>

      </header>
    </div>
  );
}

export default App;
