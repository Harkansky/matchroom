import { Link } from "react-router-dom"

const AdsCard = ({ city, starRating, img }) => {
    const randomPrice = Math.floor(Math.random() * (300 - 50 + 1)) + 50

    const randomComments = Math.floor(Math.random() * (500 - 50 + 1)) + 50

    return (
        <Link to="/" className="flex-1 min-w-[200px]">
            <div className={`w-full bg-[url(/img/hotel${img}.jpg)] bg-cover  h-[200px] rounded-lg`}></div>
            <h3 className="text-lg md:text-[22px] mt-3">Hotel Neyer</h3>
            <div className="text-neutral-gray flex gap-1 items-center">
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                    </svg>
                </span>
                <span className="text-sm md:text-base text-neutral-gray">{city}</span>
            </div>
            <div className="text-neutral-gray flex gap-1 items-center">
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-5"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                    </svg>
                </span>
                <span className="text-sm md:text-base text-neutral-gray">4.8 ({randomComments} avis)</span>
            </div>
            <span className="text-lg md:text-[26px]">{randomPrice}€/nuit</span>
            <div>
                <span className="text-sm md:text-base text-secondary-yellow">All inclusive</span>
            </div>
        </Link>
    )
}

export default AdsCard
