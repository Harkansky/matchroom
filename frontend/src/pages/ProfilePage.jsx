import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthProvider"

const ProfilePage = () => {
    const [userProfile, setUserProfile] = useState(null)
    const [userReservations, setUserReservations] = useState([])
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

    const fetchUserReservations = async () => {
        try {
            const response = await fetch(`/api/reservations/${user.username}`)
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }
            const data = await response.json()
            setUserReservations(data)
        } catch (error) {
            console.error("Error fetching user profile:", error)
        }
    }

    useEffect(() => {
        if (user) {
            fetchUserProfile()
            fetchUserReservations()
        }
    }, [user])

    return (
        <div className="mt-9 px-4 max-w-[800px] mx-auto">
            <h1 className="text-3xl mb-6">Bonjour {userProfile?.firstName} 👋</h1>

            <section className="border border-gray-200 rounded-lg p-4 ">
                <h2 className="text-2xl mt-4">Mes réservations</h2>
                {userReservations.length > 0 && (
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Hotel</th>
                                    <th>Chambre</th>
                                    <th>Offre</th>
                                    <th>Statut</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userReservations.map((reservation) => (
                                    <tr>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle bg-gray-200 h-12 w-12"></div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{reservation.room.hotel.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{reservation.room.roomNumber}</td>
                                        <td>{reservation.totalPrice}€</td>
                                        <td>
                                            <div className="badge badge-soft badge-warning">En attente</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {userReservations.length === 0 && <p className="mt-3">Pas de réservations</p>}
            </section>
        </div>
    )
}

export default ProfilePage
