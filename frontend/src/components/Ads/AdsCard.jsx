const AdsCard = () => {
  return (
    <div>
      <div className="w-full bg-[url(/img/ads2.jpg)] bg-cover  h-[200px] rounded-lg"></div>
      <h3>Bel maison 4 pieces, France</h3>
      <div className="flex justify-between items-center">
        <span className="font-bold">Hotel Neyer</span>
        <span>4.5</span>
      </div>
      <span>Du 4 mai - 9 mai</span>
      <span>180€/nuit</span>
    </div>
  );
};

export default AdsCard;
