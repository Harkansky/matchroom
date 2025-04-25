import { useEffect, useState } from "react"
import AdsCard from "../components/Ads/AdsCard"
import Footer from "../components/Footer/Footer"

function HomePage() {
    const [hotels, setHotels] = useState([])

    const fetchAPI = async () => {
        const response = await fetch("/api/hotels")

        const data = await response.json()
        console.log(data)
        setHotels(data)
    }

    useEffect(() => {
        fetchAPI()
    }, [])

    return (
        <>
            <div>
                <div className="flex flex-col bg-[url(/img/home-main.jpg)] min-h-[600px] bg-cover bg-[0%_70%] text-white p-8 text-center my-4 rounded-lg mb-16 justify-center">
                    <div className="max-w-[700px] mx-auto">
                        <h1 className="text-4xl md:text-[69px] font-normal leading-none mb-8 ">
                            Réservez votre séjour en toute simplicité
                        </h1>
                        <h2 className="text-lg md:text-[20px] ">
                            Des tarifs avantageux, des services personnalisés et un accompagnement dédié pour une
                            expérience de voyage unique.
                        </h2>

                        <form className="mt-9 flex flex-col  gap-6 text-black">
                            <div className="flex flex-col md:flex-row gap-2 justify-center">
                                <div className="w-full md:w-1/4 flex gap-1">
                                    <input
                                        type="text"
                                        placeholder="Où allez-vous ?"
                                        className="input md:input-lg md:text-base rounded-lg w-full"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-2 md:gap-1">
                                    <input
                                        type="date"
                                        placeholder="Arrivée"
                                        className="input md:input-lg md:text-base rounded-lg w-full md:w-1/2"
                                    />
                                    <input
                                        type="date"
                                        placeholder="Départ"
                                        className="input md:input-lg md:text-base rounded-lg w-full md:w-1/2"
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className=" bg-main border-main   rounded-lg shadow-xl text-white btn md:btn-lg md:text-base"
                                >
                                    <span>Trouver un match</span>
                                    <span className="ml-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 22"
                                            fill="none"
                                        >
                                            <g clip-path="url(#clip0_38_2215)">
                                                <path
                                                    d="M6.3124 5.29968C7.68931 5.29968 8.80552 4.19018 8.80552 2.82153C8.80552 1.45289 7.68931 0.343384 6.3124 0.343384C4.93548 0.343384 3.81927 1.45289 3.81927 2.82153C3.81927 4.19018 4.93548 5.29968 6.3124 5.29968Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M13.5543 5.29968C14.9313 5.29968 16.0475 4.19018 16.0475 2.82153C16.0475 1.45289 14.9313 0.343384 13.5543 0.343384C12.1774 0.343384 11.0612 1.45289 11.0612 2.82153C11.0612 4.19018 12.1774 5.29968 13.5543 5.29968Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M19.1924 21.3353L17.2122 21.1216C17.6176 17.3965 17.5997 14.4931 17.1584 12.4937C16.9367 11.4895 16.4842 10.1981 15.5927 9.74835C14.0695 8.97796 11.5114 10.8082 10.7364 11.5095L10.1316 12.0573L9.473 11.5741C7.90052 10.4141 5.72771 9.20062 4.30755 10.0066C3.10019 10.6924 2.30499 12.8321 2.06755 16.0294C1.87267 18.6657 2.12579 21.0993 2.12803 21.1238L0.147873 21.3331C0.136673 21.2284 -0.125407 18.7236 0.0806727 15.9137C0.374113 11.9103 1.46275 9.34534 3.31971 8.28996C5.07363 7.29469 7.32483 7.71328 10.024 9.5346C10.425 9.22956 10.9917 8.83324 11.648 8.48144C13.496 7.4884 15.1693 7.31696 16.4932 7.98269C19.1431 9.3164 20.0279 13.6849 19.1946 21.3353H19.1924Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M11.9193 20.0907C11.198 20.0907 10.5125 19.8413 9.96597 19.4071C9.42165 19.8435 8.73397 20.0907 8.01269 20.0907C6.29461 20.0907 4.89685 18.7013 4.89685 16.9936C4.89685 16.3234 5.10965 15.6843 5.51061 15.1477L5.50165 15.1388L9.96373 10.7036L13.8412 14.5577C14.054 14.7247 14.2444 14.9184 14.4079 15.1344L14.4236 15.1567C14.8223 15.691 15.0306 16.3278 15.0306 16.9936C15.0306 18.7013 13.6329 20.0907 11.9148 20.0907H11.9193ZM9.96821 16.2788L10.7365 17.6482C10.9762 18.0757 11.4309 18.3406 11.9193 18.3406C12.6652 18.3406 13.2745 17.7372 13.2745 16.9936C13.2745 16.6996 13.1804 16.4213 13.0034 16.1853L12.9989 16.1809C12.9228 16.0807 12.8332 15.9916 12.7324 15.9159L12.6831 15.8781L9.96597 13.1772L6.90389 16.2209C6.74485 16.448 6.65973 16.713 6.65973 16.9913C6.65973 17.7328 7.26677 18.3384 8.01493 18.3384C8.50549 18.3384 8.95797 18.0734 9.19765 17.6459L9.96597 16.2766L9.96821 16.2788Z"
                                                    fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_38_2215">
                                                    <rect
                                                        width="19.4925"
                                                        height="20.9919"
                                                        fill="white"
                                                        transform="translate(0 0.343384)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <section className="mb-16">
                    <h2 className="text-2xl md:text-[32px] flex items-baseline gap-2 mb-2">
                        Les HOT ONES
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                viewBox="0 0 40 58"
                                fill="none"
                            >
                                <path
                                    d="M33.5986 22.3792C33.0741 21.8758 32.4917 21.445 31.926 20.9886C27.0443 17.0639 24.1947 11.0319 24.207 4.64131C24.207 3.07998 24.3764 1.5229 24.7109 0C24.6572 0.012798 24.5952 0.0213304 24.5416 0.0341273C24.0749 0.110914 23.6206 0.221833 23.1663 0.341273H23.1704C20.106 1.11767 17.2687 2.64489 14.9022 4.79486C14.8898 4.79486 14.8898 4.80765 14.8815 4.80765C10.7681 8.5147 8.30241 13.796 8.05881 19.4272C8.05881 19.4272 8.18684 25.8687 10.0165 29.418V29.4222C10.318 29.9939 10.384 30.6679 10.2023 31.2949C10.0206 31.9177 9.60346 32.4425 9.05009 32.7496C8.49255 33.0567 7.84004 33.125 7.23708 32.933C6.62997 32.741 6.12609 32.3144 5.82879 31.7385C4.86237 29.7293 4.20565 27.575 3.87526 25.3566C1.0462 29.3197 -0.308382 34.1999 0.0591266 39.1058C0.422565 43.8111 2.33058 48.2434 5.46117 51.6822C8.59578 55.1162 12.7672 57.343 17.2931 57.9957C14.0552 56.9932 11.5855 54.2758 10.8215 50.8716C10.0574 47.4717 11.1147 43.9054 13.5927 41.5335C13.8405 41.2946 14.1131 41.0941 14.3815 40.8766C16.6819 39.0294 18.0283 36.184 18.02 33.1723C18.02 32.4386 17.9415 31.7048 17.7805 30.9839C17.8053 30.9882 17.8342 30.9924 17.8589 31.001C18.0778 31.0351 18.2926 31.0906 18.5073 31.146H18.5115C19.9529 31.5129 21.291 32.2338 22.4061 33.2449C22.4102 33.2449 22.4102 33.2491 22.4143 33.2491H22.4184C24.3554 34.9982 25.516 37.4894 25.6316 40.1429C25.6068 41.7597 25.293 43.3551 24.7106 44.8524C24.5702 45.1254 24.5372 45.4411 24.6239 45.7355C24.7106 46.0298 24.9047 46.273 25.1649 46.418C25.4293 46.563 25.7349 46.5972 26.0198 46.5076C26.3048 46.418 26.5443 46.2132 26.6806 45.9445C27.1391 44.9975 27.4488 43.9821 27.6057 42.937C28.9397 44.8055 29.5758 47.1048 29.4023 49.417C29.0925 53.4184 26.4534 56.8183 22.7406 58C27.7668 57.2791 32.3428 54.6128 35.5389 50.539C38.7314 46.4692 40.309 41.2948 39.9498 36.0646C39.5905 30.8346 37.3197 25.941 33.5986 22.3792Z"
                                    fill="#E7C54B"
                                />
                            </svg>
                        </span>
                    </h2>
                    <span className="text-neutral-gray text-lg md:text-[20px]">
                        Découvrez notre sélection du moment !
                    </span>

                    <div className="flex justify-between mt-6">
                        <div className="flex gap-3">
                            <button className="btn md:btn-lg md:text-base text-white rounded-lg bg-main">Paris</button>
                            <button className="btn md:btn-lg md:text-base ">Bordeaux</button>
                            <button className="btn md:btn-lg md:text-base ">Marseille</button>
                            <button className="btn md:btn-lg md:text-base">Nîmes</button>
                        </div>
                        <button className="btn md:btn-lg md:text-base">Tout voir</button>
                    </div>

                    <div className="flex gap-4 mt-9">
                        {hotels.length > 0 &&
                            hotels
                                .slice(0, 4)
                                .map((hotel, index) => (
                                    <AdsCard
                                        name={hotel.name}
                                        city={hotel.city}
                                        starRating={hotel.starRating}
                                        img={index + 1}
                                    />
                                ))}
                    </div>
                </section>

                <section className="mb-16">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl md:text-[32px] flex items-baseline gap-2">
                            Des offres promotionnelles rien que pour vous !
                        </h2>
                        <button className="btn md:btn-lg md:text-base">Tout voir</button>
                    </div>
                    <div className="flex gap-3 mt-8">
                        <div className="w-full bg-[url(/img/promo1.jpg)] bg-cover  h-[200px] rounded-lg"></div>
                        <div className="w-full bg-[url(/img/promo2.jpg)] bg-cover  h-[200px] rounded-lg"></div>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl md:text-[32px] flex items-baseline gap-2 mb-2">Pas d’idée où aller ?</h2>

                    <span className="text-neutral-gray text-lg  md:text-[20px]">
                        Explorez la map afin d’avoir une destination qui vous convient
                    </span>

                    <div className="flex justify-between mt-6">
                        <div className="flex gap-3">
                            <button className="btn md:btn-lg md:text-base text-white rounded-lg bg-main">Paris</button>
                            <button className="btn md:btn-lg md:text-base ">Bordeaux</button>
                            <button className="btn md:btn-lg md:text-base ">Marseille</button>
                            <button className="btn md:btn-lg md:text-base">Nîmes</button>
                        </div>
                        <button className="btn md:btn-lg md:text-base">Tout voir</button>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    )
}

export default HomePage
