import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthProvider"

const ProfilePage = () => {
    const [userProfile, setUserProfile] = useState(null)
    const { user } = useAuth()

    const fetchUserProfile = async () => {
        try {
            const response = await fetch(`/api/users/${user.username}`)
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }
            const data = await response.json()
            setUserProfile(data[0])
        } catch (error) {
            console.error("Error fetching user profile:", error)
        }
    }

    useEffect(() => {
        if (user) {
            fetchUserProfile()
        }
    }, [user])

    return (
        <div className="mt-9 px-4 max-w-[800px] mx-auto">
            <h1 className="text-3xl ">Bonjour {userProfile?.firstName} 👋</h1>
        </div>
    )
}

export default ProfilePage
