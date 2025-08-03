'use client';

import Calendar from "react-calendar";
import { getEvents } from "@/utils/storage";
import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";

const CalendarView = () => {
    const [events, setEvents] = useState<{ date: string; title: string }[]>([]);

    useEffect(() => {
        const evs = getEvents();
        setEvents(evs.map((e) => ({ date: e.date, title: e.title })));
    }, []);

    return (
        <div>
            <Calendar
                tileContent={({ date }) => {
                const event = events.find((e) => e.date === date.toISOString().split("T")[0]);
                return event ? <p style={{ fontSize: "10px", color: "red" }}>{event.title}</p> : null;
                }}
            />
        </div>
    );
}

export default CalendarView();
