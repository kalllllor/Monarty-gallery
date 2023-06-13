import {
  Html,
  useProgress,
} from "@react-three/drei";
import "./style.css";

function Loader({ children }) {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      wrapperClass="loading-bar"
      center
    >
      {Math.floor(progress)} % loaded
    </Html>
  );
}

export default Loader;
