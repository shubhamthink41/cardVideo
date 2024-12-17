import { CardLoader } from "./components/card-loader/CardLoader";
import card1 from "./assets/card1.svg";
import card2 from "./assets/card2.svg";
import card3 from "./assets/card3.svg";
import card4 from "./assets/card4.svg";
import backgroundImage from "./assets/bgNew.jpg";
import logo from "./assets/Logo-Think41.svg";

function App() {
  return (
    <div
      className="min-h-screen bg-gray-900 flex flex-col gap-14 font-semibold text-white items-center justify-center p-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="text-7xl font-bowlby tracking-wider text-transparent bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 bg-clip-text">
        What's your PPMD type?
      </p>

      <div className="flex">
        <CardLoader front={card1} back={card2} />
        <CardLoader front={card3} back={card4} />
        <CardLoader front={card2} back={card1} />
        <CardLoader front={card4} back={card3} />
      </div>
      <p className="animate-bounce text-3xl tracking-wider font-bowlby text-transparent bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 bg-clip-text">
        Come and find out!
      </p>
      <img
        src={logo}
        alt="App Logo"
        className="absolute bottom-2  w-44 h-w-44"
      />
    </div>
  );
}

export default App;
