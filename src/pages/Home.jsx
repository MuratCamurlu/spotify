import React from "react";
import Section from "../component/Section";

const Home = () => {
  const items = [
    {
      id: 1,
      artist: "Murat",
      title: "Deneme",
      description: "Denemefeefefef",
      image:
        "https://www.acibadem.com.tr/hayat/Images/YayinMakaleler/muzik-kalbin-de-gidasi_3238_1.jpg",
      src: "https://freesound.org/data/previews/612/612095_5674468-lq.mp3",
    },
    {
      id: 2,
      artist: "Büşra",
      title: "Deneme",
      description: "Denemefeefefefef",
      image:
        "https://img-s1.onedio.com/id-55c10ea31337126229e0759d/rev-0/w-620/f-jpg/s-294ae87a8fab62451625cd8794d2d9518e8864a2.jpg",
      src: "https://freesound.org/data/previews/612/612092_7037-lq.mp3",
    },
    {
      id: 3,
      artist: "Asya",
      title: "Deneme",
      description: "Denemeefefefef",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmSTQ3-d6L5v_GRxsskkU2zxnyiMce2p7LGFJ8a0Jelt-x15y18Ckk0nwOjXa9oGWcq5k&usqp=CAU",
      src: "https://freesound.org/data/previews/612/612092_7037-lq.mp3",
    },
    {
      id: 4,
      artist: "Hüseyin",
      title: "Deneme",
      description: "Denemeefefefef",
      image:
        "https://www.acibadem.com.tr/hayat/Images/YayinMakaleler/muzik-kalbin-de-gidasi_3238_1.jpg",
      src: "https://freesound.org/data/previews/612/612092_7037-lq.mp3",
    },
    {
      id: 5,
      artist: "Şahinde",
      title: "Deneme",
      description: "Denemeefefefef",
      image:
        "https://www.acibadem.com.tr/hayat/Images/YayinMakaleler/muzik-kalbin-de-gidasi_3238_1.jpg",
      src: "https://freesound.org/data/previews/612/612092_7037-lq.mp3",
    },
  ];
  return (
    <div className="d-flex flex-column gap-4">
      <Section items={items} more="/bbb" title={"Recently Played"} />
      <Section items={items} more="/bbb" title={"Shows to try"} />
      <Section items={items} more="/bbb" title={"Made for Murat Çamurlu"} />
    </div>
  );
};

export default Home;
