import { useEffect, useRef, useState } from "react";
import "./App.css";
function App() {
  const appRef = useRef();
  const popRef = useRef();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const app = appRef.current;
    const popUp = popRef.current;

    const onMouseDown = () => {
      app.addEventListener("mousemove", onMouseMove);
    };

    const onMouseUp = () => {
      app.removeEventListener("mousemove", onMouseMove);
    };

    const onMouseMove = (e) => {
      popUp.style.top = `${e.clientY}px`;
      popUp.style.left = `${e.clientX}px`;
    };

    if (isClicked) {
      popUp.addEventListener("mousedown", onMouseDown);
      popUp.addEventListener("onclick", onMouseDown);
      popUp.addEventListener("mouseup", onMouseUp);
    }
  }, [isClicked]);

  return (
    <div className="App" ref={appRef}>
      <section className="save-section bg-white">
        <button className="btn-save" onClick={() => setIsClicked(true)}>
          Save
        </button>
      </section>
      <main className="bg-white main">
        <section className="main-sections">
          <section className="left">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </section>
          <section className="middle"></section>
          <section className="right"></section>
        </section>
      </main>
      {isClicked && (
        <div className="pop-up" ref={popRef}>
          <div className="text-end">
            <button
              className="btn-close"
              onClick={() => setIsClicked(false)}
            ></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
