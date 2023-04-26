import logo from "./logo.svg";
import "./App1.css";
import ProfileCard from "./Component/profilecard/profilecard";
import Sundar from "./Sundar.png";
import Ratan from "./Ratan.jpg";
import Elon from "./Elon.jpg";




function App() {
  return (
    <div>
      <header>

        <ProfileCard
          imageSrc={Sundar}
          name="Sundar Pichai"
          designation="CEO of Google"
          jobDescription="Sundar Pichai is an Indian-American business executive. He is the CEO of Google"
        />

        <ProfileCard
          imageSrc={Ratan}
          name="Ratan Tata"
          designation="Businessman"
          jobDescription="Ratan Naval Tata is an Indian industrialist, philanthropist and former chairman of Tata Sons."
        />

        <ProfileCard
          imageSrc={Elon}
          name="Elon Musk"
          designation="CEO and Chief engineer of SpaceX"
          jobDescription="Elon Musk is a business magnate and investor. He is the founder, CEO and chief engineer of SpaceX"
        />
      </header>
    </div>
  );
}

export default App;
