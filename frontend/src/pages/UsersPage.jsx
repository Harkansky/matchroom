import React, { useEffect, useState } from 'react';

export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Chargement…</p>;
    if (!users.length) return <p>Aucun utilisateur.</p>;

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Liste des utilisateurs</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                <tr>
                    <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>ID</th>
                    <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Username</th>
                    <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Email</th>
                    <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Prénom</th>
                    <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Nom</th>
                </tr>
                </thead>
                <tbody>
                {users.map(u => (
                    <tr key={u.id}>
                        <td style={{ border: '1px solid #eee', padding: '0.5rem' }}>{u.id}</td>
                        <td style={{ border: '1px solid #eee', padding: '0.5rem' }}>{u.username}</td>
                        <td style={{ border: '1px solid #eee', padding: '0.5rem' }}>{u.email}</td>
                        <td style={{ border: '1px solid #eee', padding: '0.5rem' }}>{u.firstName}</td>
                        <td style={{ border: '1px solid #eee', padding: '0.5rem' }}>{u.lastName}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
