import { jwtDecode } from "jwt-decode"
import { useContext, createContext, useState, useEffect } from "react"
const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            try {
                const decoded = jwtDecode(token)
                setUser(decoded)
            } catch (error) {
                console.error("Token decode failed:", error)
            }
        }
    }, [])

    return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext)
}
