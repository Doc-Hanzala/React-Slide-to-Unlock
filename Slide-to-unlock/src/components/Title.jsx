const Title = ({ text, showLock }) => {
  return <h2>{showLock? "press the lock":"slide to unlock"}</h2>;
};

export default Title;
