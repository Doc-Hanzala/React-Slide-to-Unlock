const Slider = ({handleInput}) => {
  return <input onInput={handleInput} className="slider" type="range" min="0" max="100"  />;
};

export default Slider;
