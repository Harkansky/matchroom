const Footer = () => {
  return (
    <footer className="bg-main text-white flex flex-col gap-6 rounded-lg my-8 p-6">
      <div className="flex gap-8">
        <div className="w-1/4">
          <h3 className="font-semibold mb-3">Matchroom</h3>
          <span className="text-white/80">
            votre compagnon idéal pour réserver et négocier les meilleures
            offres d'hôtels, tout en profitant de tarifs avantageux et de
            services sur mesure.
          </span>
        </div>
        <div className="w-1/4">
          <h3 className="font-semibold mb-3">à Propos</h3>
          <ul className="text-white/80">
            <li className="mb-3">
              <a href="#">Qui sommes-nous?</a>
            </li>
            <li className="mb-3">
              <a href="#">Blog</a>
            </li>
            <li className="mb-3">
              <a href="#">Partenaires</a>
            </li>
          </ul>
        </div>
        <div className="w-1/4">
          <h3 className="font-semibold mb-3">Supports</h3>
          <ul className="text-white/80">
            <li className="mb-3">
              <a href="#">Nous contacter</a>
            </li>
            <li className="mb-3">
              <a href="#">Ticket</a>
            </li>
            <li className="mb-3">
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="w-1/4">
          <h3 className="font-semibold mb-3">Restez à jour</h3>
          <div className="join">
            <div>
              <label className="input validator join-item">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <div className="flex flex-col">
                  <input
                    type="email"
                    className="bg-white/80"
                    placeholder="mail@gmail.com"
                    required
                  />
                  <div className="flex gap-4"></div>
                </div>
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>
            <button className="btn btn-neutral join-item">Join</button>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">
          © 2025 MATCHROOM. All right reserved
        </span>
        <div className="flex gap-6">
          <a href="#">Politique de confidentialité</a>
          <a href="#">Termes et services</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
