// src/pages/RoomDetails.jsx
import React, { useEffect } from "react";

export default function RoomDetailsPage() {
  const dataImg = [
    { id: 1, src: "image1.jpg", alt: "Image 1" },
    { id: 2, src: "image2.jpg", alt: "Image 2" },
    { id: 3, src: "image3.jpg", alt: "Image 3" },
    { id: 4, src: "image4.jpg", alt: "Image 4" },
    { id: 5, src: "image5.jpg", alt: "Image 5" },
  ];

  const [proposedPrice, setProposedPrice] = React.useState(0.0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      userId: 11,
      roomId: 1,
      checkIn: "2025-04-28",
      checkOut: "2025-04-30",
      totalPrice: proposedPrice.toString(),
      status: "pending",
      createdAt: "2025-04-26T11:00:00+00:00",
      updatedAt: "2025-04-26T11:00:00+00:00",
    };

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Reservation created successfully:", result);
    } catch (error) {
      console.error("Error creating reservation:", error);
    }
  };

  return (
    <div className="w-full">
      <img
        src="/img/hotelRoom1.jpg"
        alt="hotel room"
        className="w-full rounded-lg shadow-md/30 mt-4"
      />
      <h1 className="font-bold text-[20.48px] text-center mt-6">
        Bel Maison 4 pieces, France
      </h1>
      <div className="flex flex-nowrap justify-center items-center gap-3 text-[10.51px]">
        <img
          src="/img/Vector.png"
          alt="!"
          className="object-contain w-3 mb-1"
        />
        <h3 className="font-light">3 places de la vilette, 75160</h3>
      </div>
      <h3 className="font-light text-center text-[10.51px] mb-3">
        Chambre double - 2 lits - 1 douche - all inclusives
      </h3>

      <hr className="w-[85%] m-auto border-[#DADADA] border-[1.13px] mb-3" />

      <div className="flex flex-none place-content-between w-[90%] m-auto font-bold text-[12.75px]">
        <div>Gallerie photos</div>
        <div className="flex flex-nowrap gap-3">
          Tout voir
          <img src="/img/fleche.png" alt="" className="object-contain" />
        </div>
      </div>

      <div
        className="flex flex-nowrap overflow-x-scroll scroll-smooth ml-3 mt-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {dataImg.map((img) => (
          <img
            key={img.id}
            src="/img/hotelRoom1.jpg"
            alt={img.alt}
            className="rounded-lg shadow-lg w-[133px] h-[105px] object-cover mx-3"
          />
        ))}
      </div>

      <div className="ml-[5%] font-bold text-[12.75px] mt-6">
        Equipements proposé
      </div>

      <div className="ml-[10%] gap-3 flex flex-col py-5 text-[8.8px]">
        <div className="flex flex-nowrap gap-8 items-center">
          <img src="/img/home.png" alt="" />
          <div>Chambre DOUBLE</div>
        </div>
        <div className="flex flex-nowrap gap-8 items-center">
          <img src="/img/search.png" alt="" />
          <div>Neue Montreal</div>
        </div>
        <div className="flex flex-nowrap gap-8 items-center">
          <img src="/img/search.png" alt="" />
          <div>Neue Montreal</div>
        </div>
      </div>

      <div className="text-[#7F3A65] w-[90%] m-auto text-center text-[11px] border border-[#7F3A65] rounded-xl h-[32.174560546875] py-2 font-semibold">
        Voir tout les équipements...
      </div>

      <hr className="w-[85%] m-auto border-[#DADADA] border-[1.13px] my-5" />

      <p className="w-[90%] m-auto text-[11px]">
        Le Lorem Ipsum est simplement du faux texte employé dans la composition
        et la mise en page avant impression. Le Lorem Ipsum est le faux texte
        standard de l'imprimerie depuis les années 1500, quand un imprimeur
        anonyme assembla ensemble des morceaux de texte pour réaliser un livre
        spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles,
        mais s'est aussi adapté à la bureautique informatique, sans que son
        contenu n'en soit modifié. Il a été popularisé dans les années 1960
        grâce à la vente de feuilles Letraset contenant des passages du Lorem
        Ipsum, et, plus récemment, par son inclusion dans des applications de
        mise en page de texte, comme Aldus PageMaker.
      </p>

      <div
        className="w-full h-[6%] max-h-[7rem] sticky bottom-0 flex flex-nowrap items-center justify-center gap-2 bg-white"
        style={{
          boxShadow:
            "0 -5px 5px 3px rgba(0,0,0,0.08), 0 -4px 6px -4px rgba(0,0,0,0.1)",
        }}
      >
        <div className="flex flex-col items-center justify-center w-[40%]">
          <div className="text-[15.41px] font-bold text-[#484C52]">
            215€/ par nuit
          </div>
          <div className="text-[8.48px]">8 - 13 mai</div>
        </div>
        <button
          className="cursor-pointer w-[60%] text-[11px] bg-amber-700 h-8 rounded-lg mr-5 text-white font-semibold"
          style={{
            background: "linear-gradient(to right, #7F3A65, #E569B6)",
          }}
          onClick={() => document.getElementById("offer-modal").showModal()}
        >
          Reserver
        </button>
      </div>

      <dialog id="offer-modal" className="modal">
        <div className="modal-box">
          <div className="flex items-center flex-col">
            <h3 className="mb-6 text-secondary-yellow">
              Prix public conseillé : 156€
            </h3>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col items-center gap-4"
            >
              <h3 className="font-bold text-xl mb-1">Votre offre</h3>
              <div class="form-control w-full max-w-xs">
                <label class="font-semibold text-2xl input input-lg rounded-lg input-bordered w-full flex items-center gap-2">
                  €
                  <input
                    className="font-semibold text-2xl"
                    type="number"
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    class="grow"
                    onChange={(e) => setProposedPrice(e.target.value)}
                  />
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-lg w-full bg-main text-white mt-3 rounded-lg"
              >
                Envoyer
              </button>
            </form>
            <form method="dialog" className="w-full">
              <button className="btn btn-lg rounded-lg  w-full mt-2">
                Annuler
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
