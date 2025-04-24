const LoginPage = () => {
  return (
    <div>
      <div className="bg-gray-500 w-full h-[250px] p-4 flex flex-col gap-8 mb-8">
        <h2 className="uppercase text-white">Matchroom</h2>
        <h1 className="font-bold text-[32px] text-white">
          Connectez vous à votre compte
        </h1>
      </div>
      <form className="px-4">
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-gray-500 text-sm pb-1">
            Email
          </legend>
          <input
            type="text"
            className="input input-lg rounded-lg w-full text-[15px]"
            placeholder="john.doe@gmail.com"
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend text-gray-500 text-sm pb-1">
            Mot de passe
          </legend>
          <input
            type="text"
            className="input input-lg rounded-lg w-full text-[15px]"
            placeholder="Mot de passe"
          />
        </fieldset>
        <button className="btn btn-xl text-lg mt-6 text-[15px] text-white font-medium bg-main w-full rounded-lg">
          Connexion
        </button>
      </form>
      <hr className="text-gray-300 my-3 w-[300px] mx-auto" />
    </div>
  );
};

export default LoginPage;
