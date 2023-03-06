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
    },
    {
      id: 2,
      title: "Deneme",
      description: "Denemefeefefefef",
      image:
        "https://www.acibadem.com.tr/hayat/Images/YayinMakaleler/muzik-kalbin-de-gidasi_3238_1.jpg",
    },
    {
      id: 3,
      title: "Deneme",
      description: "Denemeefefefef",
      image:
        "https://www.acibadem.com.tr/hayat/Images/YayinMakaleler/muzik-kalbin-de-gidasi_3238_1.jpg",
    },
    {
      id: 4,
      title: "Deneme",
      description: "Denemeefefefef",
      image:
        "https://www.acibadem.com.tr/hayat/Images/YayinMakaleler/muzik-kalbin-de-gidasi_3238_1.jpg",
    },
    {
      id: 5,
      title: "Deneme",
      description: "Denemeefefefef",
      image:
        "https://www.acibadem.com.tr/hayat/Images/YayinMakaleler/muzik-kalbin-de-gidasi_3238_1.jpg",
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
