import React, { useEffect, useState } from "react";

function ExampleFC() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");

  //On every render
  useEffect(() => {
    console.log("I re-render");
  });

  //Only render 1 time - componentDidMount
  useEffect(() => {
    console.log("The component Mounted");
  }, []);

  //Only render when dependancy change - componentDidUpdate
  useEffect(() => {
    // console.log(`The Object changed!: ${name}`);
  }, [name]);

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      //when component unmount, this cleanup code runs
      window.addEventListener("resize", updateWindowWidth);
    };
  }, []);
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  return (
    <div className="Hook">
      <center>
        <h1>The Effect Hook</h1>
        <h2>The Window width is:{windowWidth}</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a Name"
        />
      </center>
    </div>
  );
}

export default ExampleFC;
