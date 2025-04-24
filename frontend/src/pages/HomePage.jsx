import { useState } from "react";
import AdsCard from "../components/Ads/AdsCard";

function HomePage() {
  return (
    <>
      <div>
        <h1 className="text-[69px]">
          Réservez votre séjour en toute simplicité
        </h1>
        <h2>
          Des tarifs avantageux, des services personnalisés et un accompagnement
          dédié pour une expérience de voyage unique.
        </h2>
      </div>
      <div>
        <h2>Les HOT ONES</h2>
        <div className="flex gap-3">
          <AdsCard />
          <AdsCard />
          <AdsCard />
          <AdsCard />
        </div>
      </div>
    </>
  );
}

export default HomePage;
