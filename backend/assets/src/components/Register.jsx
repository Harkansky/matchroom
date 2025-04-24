const Register = () => {
  return (
    <div>
      <div className="bg-gray-500 w-full h-[250px] p-4 flex flex-col gap-8 mb-8">
        <h2 className="uppercase text-white">Matchroom</h2>
        <h1 className="font-bold text-[32px] text-white">Inscription</h1>
      </div>
      <form className="px-4">
        <div className="flex gap-4">
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend text-gray-500 text-sm pb-1">
              Nom
            </legend>
            <input
              type="text"
              className="input input-lg rounded-lg w-full text-[15px]"
              placeholder="John"
            />
          </fieldset>

          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend text-gray-500 text-sm pb-1">
              Prénom
            </legend>
            <input
              type="text"
              className="input input-lg rounded-lg w-full text-[15px]"
              placeholder="Doe"
            />
          </fieldset>
        </div>

        <div className="flex gap-4">
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend text-gray-500 text-sm pb-1">
              Email
            </legend>
            <input
              type="text"
              className="input input-lg rounded-lg w-full text-[15px]"
              placeholder="john.doe@gmail.com"
            />
          </fieldset>
        </div>

        <div className="flex gap-4">
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend text-gray-500 text-sm pb-1">
              Date
            </legend>
            <input
              type="date"
              className="input input-lg rounded-lg w-full text-[15px]"
              placeholder="01/01/1992"
            />
          </fieldset>
        </div>

        <fieldset className="fieldset w-full">
          <legend className="fieldset-legend text-gray-500 text-sm pb-1">
            Téléphone
          </legend>
          <label className="input input-lg w-full validator rounded-lg text-[15px]">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <g fill="none">
                <path
                  d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
            <input
              type="tel"
              className="tabular-nums"
              required
              placeholder="06 12 34 56 78"
              pattern="[0-9]*"
              minlength="10"
              maxlength="10"
              title="Must be 10 digits"
            />
          </label>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend text-gray-500 text-sm pb-1">
            Mot de passe
          </legend>
          <input
            type="password"
            className="input input-lg rounded-lg w-full text-[15px]"
            placeholder="Mot de passe"
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend text-gray-500 text-sm pb-1">
            Confirmation du mot de passe
          </legend>
          <input
            type="password"
            className="input input-lg rounded-lg w-full text-[15px]"
            placeholder="Mot de passe"
          />
        </fieldset>

        <button className="btn btn-xl text-lg mt-6 text-[15px] text-white font-medium bg-main w-full rounded-lg">
          Inscription
        </button>
      </form>
      <hr className="text-gray-300 my-3 w-[300px] mx-auto" />
    </div>
  );
};

export default Register;
