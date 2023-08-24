import { useState } from "react";
import "../style.css";
import { useEffect } from "react";
import paintingImg from "../assets/painting.jpg";
const Lockscreen = ({ isActivePainting, deactivePainting, activePainting }) => {
  const [isLocked, setIsLocked] = useState(isActivePainting);

  useEffect(() => {
    setIsLocked(isActivePainting);
  }, [isActivePainting]);

  const deactivePaintingHandle = () => {
    deactivePainting();
  };

  return isLocked && activePainting ? (
    <div className="lockscreen">
      <div className="lockscreen-content">
        <button onClick={deactivePaintingHandle}>exit</button>
        <h3>
          {activePainting && activePainting.name.includes("rzezba") ? "Sculpture no. 1" : "Artwork no. " + activePainting.name.replace(/\D/g, "")}
        </h3>
        <h5>Author</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis tempus tempor. Cras neque lectus, ultricies et commodo a, congue sed
          purus. Quisque vulputate placerat pellentesque. Morbi pellentesque dapibus nisi, posuere elementum nisi condimentum quis. Nunc gravida
          ultrices dolor, a fermentum justo tempus vel. Nunc ultricies iaculis pulvinar. Nunc quis sollicitudin magna, non facilisis justo.
        </p>
        <img src={paintingImg} alt="painting" />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Lockscreen;
