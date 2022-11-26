import "./App.css";
import { Header } from "./GiftComponent/Header/Header";
import { Footer } from "./GiftComponent/Footer.tsx/Footer";
import { FirstGift } from "./GiftComponent/FirstGift/FirstGift";
import { GiftBox } from "./GiftComponent/Box/GiftBox";
import { useEffect, useState } from "react";

function App() {
  const music = new Audio("./image/HappyBirthday-VA_9ey.mp3");
  const [open1, setOpen1] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);
  const [open3, setOpen3] = useState<boolean>(false);
  useEffect(() => {
    music.play();
  }, []);
  const switchGift1 = () => {
    setOpen1(!open1);
    setOpen2(false);
    setOpen3(false);
  };
  const switchGift2 = () => {
    setOpen1(false);
    setOpen2(!open2);
    setOpen3(false);
    alert("Quà này quà off tặng rùi thây -.- tham thế");
  };
  const switchGift3 = () => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(!open3);
    window.open(
      "https://drive.google.com/file/d/1cGwJRV7mIXnzpTi_3RsdHq0QLTGWGVRm/view?usp=sharing"
    );
  };
  return (
    <div>
      <Header />
      <div className="box-1" onClick={switchGift1}>
        <GiftBox />
      </div>
      <div className="box-2" onClick={switchGift2}>
        <GiftBox />
      </div>
      <div className="box-3" onClick={switchGift3}>
        <GiftBox />
      </div>
      <FirstGift isShown={open1} />
      <Footer />
      <audio src="./image/HappyBirthday-VA_9ey.mp3"></audio>
    </div>
  );
}

export default App;
