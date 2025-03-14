import NavBar from "../../components/NavBar/NavBar";
import Avisos from "../../components/Avisos/Avisos";
import Graficos from "../../components/Graficos/Graficos";
import './Home.scss'

function Home() {
  return (
    <container>
      <NavBar />
      <Graficos/>
      <Avisos />
    </container>
  );
}

export default Home;