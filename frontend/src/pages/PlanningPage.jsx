// src/pages/PlanningPage.jsx
import React, { useEffect, useState } from 'react'
import { Calendar, Views } from 'react-big-calendar'
import { localizer } from '../lib/localizer'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const frMessages = {
    today:    "Aujourd'hui",
    previous: 'Précédent',
    next:     'Suivant',
    month:    'Mois',
    week:     'Semaine',
    day:      'Jour',
    agenda:   'Agenda',
}

export default function PlanningPage() {
    const [events, setEvents]       = useState([])
    const [loading, setLoading]     = useState(true)
    const [error, setError]         = useState(null)
    const [date, setDate]           = useState(new Date())
    const [view, setView]           = useState(Views.WEEK)

    useEffect(() => {

        fetch('/api/reservations?status=confirmed', {
            headers: { 'Accept': 'application/json' },
        })
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`)
                return res.json()
            })
            .then(data => {
                const evts = data.map(r => ({
                    id:    r.id,
                    title: `${r.room.roomNumber} – ${r.user.firstName}`,
                    start: new Date(r.checkIn),
                    end:   new Date(r.checkOut),
                }))
                setEvents(evts)
            })
            .catch(err => {
                console.error(err)
                setError(err.message)
            })
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <p>Chargement du planning…</p>
    if (error)   return <p className="text-red-600">Erreur : {error}</p>

    return (
        <div className="p-4 font-sans">
            <h1 className="text-2xl mb-4">Planning des réservations</h1>
            {events.length === 0 && (
                <p>Aucune réservation confirmée à afficher.</p>
            )}
            <div style={{ height: 600 }}>
                <Calendar
                    localizer={localizer}
                    events={events}

                    tooltipAccessor="tooltip"

                    // Contrôle de la vue et de la date
                    view={view}
                    onView={v => setView(v)}
                    date={date}
                    onNavigate={d => setDate(d)}

                    // options
                    defaultView={Views.WEEK}
                    views={[Views.MONTH, Views.WEEK, Views.DAY]}
                    messages={frMessages}

                    toolbarClassName="border-b"
                    className="bg-white"
                />
            </div>
        </div>
    )
}
