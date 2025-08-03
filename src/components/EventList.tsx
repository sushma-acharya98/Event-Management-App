'use client';

import { Button, Card, Typography } from "@mui/material";
import { Event } from "@/types/event";
import { useRouter } from "next/router";
import { getEvents, saveEvents } from "@/utils/storage";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const EventList = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const router = useRouter();

    useEffect(() => {
        setEvents(getEvents());
    }, []);

    const handleDelete = (id: string) => {
        const newEvents = events.filter((e) => e.id !== id);
        saveEvents(newEvents);
        setEvents(newEvents);
    };

    return (
        <div>
            {events.map((event) => {
                const isPast = dayjs(event.date).isBefore(dayjs(), "day");
                return (
                <Card key={event.id} sx={{ p: 2, m: 1, backgroundColor: isPast ? "#ffe6e6" : "#e6ffe6" }}>
                    <Typography variant="h6">{event.title}</Typography>
                    <Typography>{event.date}</Typography>
                    <Typography>{event.venue}</Typography>
                    <div style={{ marginTop: "10px" }}>
                        <Button onClick={() => router.push(`/update?id=${event.id}`)}>Edit</Button>
                        <Button onClick={() => handleDelete(event.id)} color="error">
                            Delete
                        </Button>
                    </div>
                </Card>
                );
            })}
        </div>
    );
}

export default EventList;