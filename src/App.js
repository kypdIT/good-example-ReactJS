import logo from "./logo.svg";
import "./App.css";
import { useState, useCallback, useMemo } from "react";

//component Example
import PropsEx from "./Props/PropsEx";
import CounterFC from "./StateHook/CounterFC";
import CounterCL from "./StateHook/CounterCL";
import ExampleFC from "./useEffect/ExampleFC";
import ExampleCL from "./useEffect/ExampleCL";
import Clock from "./useEffect/Clock";
import Hero from "./ReactMemo/Hero";
import Exusecallback from "./useCallback/ExuseCallback";
import MagicBox from "./MagicBox/index";
import searchDebounce from "./useEffect/searchDebounce";

function App() {
  // for useEffect
  // const [showClock, setShowClock] = useState(true);

  // for useEffect debounce
  // function handleFilterChange(newFilter) {
  //   console.log("New filter", newFilter);
  // }

  // for Memo
  // const [count, setCount] = useState(0);
  //case 2. doc cu the trong component con
  // const handleHeroClick = () => {};

  // Ve co ban useCalback va useMemo giong nhau nhung useCB tra ve mot function con useMM tra ve 1 bo du lieu
  // for useCallback - vi depenancy rong nen neu prop cua ExuseCallback khong thay doi thi component se khong rerender
  // const handleChartTypeChange = useCallback((type) => {}, []);
  //for useMemo
  // const data = useMemo(() => [{}, {}, {}], []);

  return (
    <div className="App">
      {/* Props Example */}
      {/* <PropsEx name="Echo" description="Amazon AI Voice" price={59.99} />
      <PropsEx
        name="iPhone 13 Pro Max"
        description="Amazon AI Voice"
        price={1299.99}
      />
      <PropsEx name="iMAC" description="Amazon AI Voice" price={5999.99} /> */}

      {/* useState Example */}
      {/* <CounterFC /> */}
      {/* <CounterCL /> */}

      {/* useEffect Example */}
      {/* <ExampleFC /> */}
      {/* <ExampleCL /> */}
      {/* {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide clock</button> */}
      {/* <searchDebounce onSubmit={handleFilterChange} /> */}

      {/* Memo Example */}
      {/* <p>{count}</p> */}
      {/* <button onClick={() => setCount(count + 1)}>+</button> */}
      {/* Case 1 */}
      {/* <Hero name="Iron Man" /> */}
      {/* Case 2 */}
      {/* <Hero name="Thor" onClick={handleHeroClick} /> */}

      {/* useCallback Example */}
      {/* <Exusecallback onTypeChange={handleChartTypeChange} /> */}

      {/* useMemo Example */}
      {/* <ExuseMemo data={data} /> */}

      {/* Custom Hook */}
      {/* <h1>MagicBox</h1>
      <MagicBox /> */}
    </div>
  );
}

export default App;
