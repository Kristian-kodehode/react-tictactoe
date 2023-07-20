// import Board from "./Board";
import Game from "./Game";

const App = () => {
  return (
    <>
      <section>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </section>
      <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <Game />
      {/* <Board /> */}
    </>
  );
};

export default App;
