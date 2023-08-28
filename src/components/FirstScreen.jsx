const FirstScreen = ({ startWalkingCallback }) => {
  return (
    <div className="control-screen" onClick={() => startWalkingCallback()}>
      <button>Click to walk</button>
      <span>Move: WASD</span>
      <span>Look: Mouse</span>
      <button>
        <a href="https://unlabx.com/">Go Back</a>
      </button>
    </div>
  );
};

export default FirstScreen;
