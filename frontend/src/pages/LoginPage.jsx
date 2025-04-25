import { useState } from "react"

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("/api/login_check", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })

        const data = await response.json()
        if (response.ok) {
            console.log("Login successful", data)
            localStorage.setItem("token", data.token)
            window.location.href = "/"
        } else {
            console.error("Login failed", data)
        }
    }

    return (
        <div className="px-4 mt-4 max-w-[800px] mx-auto">
            <div>
                <div className="bg-[url(/img/login-illustration.jpg)] bg-[0%_70%] bg-cover w-full h-[250px] p-4 flex flex-col gap-8 mb-8 rounded-lg">
                    <h2 className="uppercase text-white">Matchroom</h2>
                    <h1 className="font-bold text-[32px] text-white">Connectez vous à votre compte</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-gray-500 text-sm pb-1">Email</legend>
                        <input
                            type="text"
                            className="input input-lg rounded-lg w-full text-[15px]"
                            placeholder="john.doe@gmail.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-gray-500 text-sm pb-1">Mot de passe</legend>
                        <input
                            type="password"
                            className="input input-lg rounded-lg w-full text-[15px]"
                            placeholder="Mot de passe"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </fieldset>
                    <button className="btn btn-xl text-lg mt-6 text-[15px] text-white font-medium bg-main w-full rounded-lg">
                        Connexion
                    </button>
                </form>
                <hr className="text-gray-300 my-3 w-[300px] mx-auto" />
            </div>
        </div>
    )
}

export default LoginPage
