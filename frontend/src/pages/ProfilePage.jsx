import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";

const ProfilePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const { user } = useAuth();

  const fetchUserProfile = async () => {
    try {
      const response = await fetch(`/api/users/${user.username}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setUserProfile(data[0]);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const fetchUserReservations = async () => {
    try {
      const response = await fetch(`/api/reservations/${user.username}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setUserReservations(data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchUserProfile();
    }
  }, [user]);

  return (
    <div className="mt-9 px-4 max-w-[800px] mx-auto">
      <h1 className="text-3xl mb-6">Bonjour {userProfile?.firstName} 👋</h1>

      <section className="border border-gray-200 rounded-lg p-4 ">
        <h2 className="text-2xl mt-4">Mes réservations</h2>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Hotel</th>
                <th>Chambre</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle bg-gray-200 h-12 w-12"></div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>
                  <div className="badge badge-soft badge-warning">
                    En attente
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
