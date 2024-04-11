import { SpinnerWrapper } from "./Spinner.styles";

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </SpinnerWrapper>
  );
};

export default Spinner;
