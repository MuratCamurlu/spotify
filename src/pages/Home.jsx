import React from "react";
import Section from "../component/Section";

const Home = () => {
  const items = [
    {
      id: 1,
      title: "Deneme",
      description: "Denemefeefefef",
      image:
        "https://www.acibadem.com.tr/hayat/Images/YayinMakaleler/muzik-kalbin-de-gidasi_3238_1.jpg",
      src: "https://freesound.org/data/previews/612/612095_5674468-lq.mp3",
    },
    {
      id: 2,
      title: "Deneme",
      description: "Denemefeefefefef",
      image:
        "https://www.acibadem.com.tr/hayat/Images/YayinMakaleler/muzik-kalbin-de-gidasi_3238_1.jpg",
      src: "https://freesound.org/data/previews/612/612092_7037-lq.mp3",
    },
    {
      id: 3,
      title: "Deneme",
      description: "Denemeefefefef",
      image:
        "https://www.acibadem.com.tr/hayat/Images/YayinMakaleler/muzik-kalbin-de-gidasi_3238_1.jpg",
      src: "https://freesound.org/data/previews/612/612092_7037-lq.mp3",
    },
    {
      id: 4,
      title: "Deneme",
      description: "Denemeefefefef",
      image:
        "https://www.acibadem.com.tr/hayat/Images/YayinMakaleler/muzik-kalbin-de-gidasi_3238_1.jpg",
      src: "https://freesound.org/data/previews/612/612092_7037-lq.mp3",
    },
    {
      id: 5,
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
