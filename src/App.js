import logo from './logo.svg';
import './App.css';
import Counter from './CounterCustomHook/CounterUI';
import Pagination from './Pagination/Pagination';
import Password from './PasswordGenerator/Password';
import GridLights from './Grid Lights/GridLightClass';
import SelectableGrid from './SelectableGrid/SelectableGrid';
import UsingHook from './CustomHook/UsingHook';
import LazyComp from './Lazy/MainComponent';


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

        <LazyComp/>

      </header>
    </div>
  );
}

export default App;
