import { useState } from "react";
import "../style.css";
import { useEffect } from "react";

const Lockscreen = ({
  isActivePainting,
  deactivePainting,
  activePainting,
}) => {
  const [isLocked, setIsLocked] = useState(
    isActivePainting
  );

  useEffect(() => {
    setIsLocked(isActivePainting);
  }, [isActivePainting]);

  const deactivePaintingHandle = () => {
    deactivePainting();
  };

  return isLocked && activePainting ? (
    <div className="lockscreen">
      <div className="lockscreen-content">
        <button onClick={deactivePaintingHandle}>
          exit
        </button>
        {activePainting && activePainting.name}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Lockscreen;
