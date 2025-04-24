// src/pages/PlanningPage.jsx
import React, { useEffect, useState } from 'react'
import { Calendar, Views } from 'react-big-calendar'
import { localizer } from '../lib/localizer'
import 'react-big-calendar/lib/css/react-big-calendar.css'

export default function PlanningPage() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('/api/reservations')
            .then(r => r.json())
            .then(data => {
                const evts = data.map(r => ({
                    id:    r.id,
                    title: `${r.room.roomNumber} – ${r.user.firstName}`,
                    start: new Date(r.checkIn),
                    end:   new Date(r.checkOut),
                }))
                setEvents(evts)
            })
    }, [])

    return (
        <div className="p-4 font-sans">
            <h1 className="text-2xl mb-4">📅 Planning des réservations</h1>
            <div className="border rounded-lg overflow-hidden">
                <Calendar
                    localizer={localizer}
                    events={events}
                    defaultView={Views.WEEK}
                    views={[Views.MONTH, Views.WEEK, Views.DAY]}
                    style={{ height: 600 }}
                    className="bg-white"
                    toolbarClassName="border-b"
                    dayPropGetter={() => ({ className: 'bg-gray-50' })}
                    eventPropGetter={() => ({
                        className: 'bg-blue-500 text-white rounded px-2 py-1',
                    })}
                />
            </div>
        </div>
    )
}
