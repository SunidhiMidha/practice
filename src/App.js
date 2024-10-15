import logo from './logo.svg';
import './App.css';
import Counter from './CounterCustomHook/CounterUI';
import Pagination from './Pagination/Pagination';
import Password from './PasswordGenerator/Password';
import GridLights from './Grid Lights/GridLightClass';
import SelectableGrid from './SelectableGrid/SelectableGrid';
import Polyfill from './Polyfills/Polyfill';


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

        {/* polyfills */}
        <Polyfill/>

      </header>
    </div>
  );
}

export default App;
