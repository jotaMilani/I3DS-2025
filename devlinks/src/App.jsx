import Perfil from "./components/perfil/perfil";
import Switch from "./components/switch/switch";
import Links from "./components/links/Links";
import fotoLight from "./img/romero2.gif";
import fotoDark from "./img/romero.gif";
import "./App.css";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Rodape from "./Rodape/Rodape";
import { useState } from "react";
const App = () => {
  const [isLight, setIsLight] = useState(true);

  const troca = () => {
    setIsLight(!isLight);
  };

  return (
    <div id="App" className={isLight ? "light" : ""}>
     <Perfil fotoPerfil={isLight ? fotoLight : fotoDark}>
        @Milani
      </Perfil>
      <Switch troca={troca} isLight={isLight} />
      <ul>
        <Links link={"https://github.com/jotaMilani"}>GitHub</Links>
        <Links link={"https://www.instagram.com/"}>Instagram</Links>
        <Links link={"https://store.steampowered.com/login/?l=portuguese"}>
          Steam
        </Links>
        <Links link={"https://discord.com/"}>Discord</Links>
      </ul>

      <div id="socialLinks">
        <SocialLinks
          link={"https://github.com/jotaMilani"}
          icon={"logo-github"}
        />
        <SocialLinks
          link={"https://www.instagram.com/"}
          icon={"logo-instagram"}
        />
        <SocialLinks
          link={"https://store.steampowered.com/login/?l=portuguese"}
          icon={"logo-steam"}
        />
        <SocialLinks link={"https://discord.com/"} icon={"logo-discord"} />
      </div>

      <Rodape>@milani</Rodape>
    </div>
  );
};

export default App;
