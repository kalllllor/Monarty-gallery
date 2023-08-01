import { useState } from "react";
import "../style.css";
import { useEffect } from "react";
import paintingImg from "../assets/painting.jpg";
const Lockscreen = ({ isActivePainting, deactivePainting, activePainting }) => {
  const [isLocked, setIsLocked] = useState(isActivePainting);

  useEffect(() => {
    setIsLocked(isActivePainting);
    console.log(activePainting);
  }, [isActivePainting]);

  const deactivePaintingHandle = () => {
    deactivePainting();
  };

  return isLocked && activePainting ? (
    <div className="lockscreen">
      <div className="lockscreen-content">
        <button onClick={deactivePaintingHandle}>exit</button>
        <h3>
          {activePainting && activePainting.name.includes("rzezba") ? "sculpture no. 1" : "painting no. " + activePainting.name.replace(/\D/g, "")}
        </h3>
        <img src={paintingImg} alt="painting" />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Lockscreen;
