import { useState } from "react";
import Slider from "./components/Slider";
import Title from "./components/Title";
import { AiFillLock } from "react-icons/ai";
import lockScreen from "./img/lockScreen.jpg";
import homeScreen from "./img/homeScreen.jpg";

function App() {
  // setting up the states
  const [showLock, setShowLock] = useState(false);
  const [ui, setUi] = useState({
    uiBg: `url(${lockScreen}) center/cover no-repeat`,
  });

  // setting up events

  const handleLockScreen = (e) => {
    const value = e.target.value;
    if (value > 99 || value == 0) {
      setShowLock(true);
      setUi({
        uiBg: `url(${homeScreen}) center/cover no-repeat`,
      });
    }
  };

  const handleUnlockScreen = () => {
    setShowLock(false);
    setUi({
      uiBg: `url(${lockScreen}) center/cover no-repeat`,
    });
  };

  return (
    <section>
      <Title text={"Slide to Unlock"} showLock={showLock} />
      <div style={{ background: ui.uiBg }} className="container">
        <div className="screen">
          <h2 className={`unlock ${showLock ? "black" : "white"}  `}>
            {showLock ? "Lock the screen" : "unlock the screen"}
          </h2>
          <div className="footer">
            {showLock ? (
              <AiFillLock className="icon" onClick={handleUnlockScreen} />
            ) : (
              <Slider handleInput={handleLockScreen} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
