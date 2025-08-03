'use client';

import { Button, Card, Typography, Box, Stack } from "@mui/material";
import { Event } from "@/types/event";
import { useRouter } from "next/navigation";
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
        const updatedEvents = events.filter((event) => event.id !== id);
        saveEvents(updatedEvents);
        setEvents(updatedEvents);
    };

    if (events.length === 0) {
        return (
        <Typography variant="h6" sx={{ mt: 4, textAlign: "center", color: "text.secondary" }}>
            No events available.
        </Typography>
        );
    }

    return (
        <Box display="grid" gap={2} mt={2}>
        {events.map((event) => {
            const isPast = dayjs(event.date).isBefore(dayjs(), "day");

            return (
            <Card
                key={event.id}
                sx={{
                p: 3,
                borderRadius: 3,
                backgroundColor: isPast ? "#ffeaea" : "#e6fff2",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
            >
                <Typography variant="h6" fontWeight={600} gutterBottom>
                    {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    📅 {dayjs(event.date).format("MMMM D, YYYY")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    📍 {event.venue}
                </Typography>

                <Box display="flex" justifyContent="center">
                    <Stack direction="row" spacing={2} mt={2}>
                        <Button
                        variant="outlined"
                        onClick={() => router.push(`/update?id=${event.id}`)}
                        sx={{
                            borderRadius: "999px",
                            textTransform: "none",
                            fontWeight: 500,
                        }}
                        >
                        <span style={{ color: "white" }}>✏️</span> Edit
                        </Button>

                        <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(event.id)}
                        sx={{
                            borderRadius: "999px",
                            textTransform: "none",
                            fontWeight: 500,
                            background: "linear-gradient(to right, #ff4e50, #f30000)",
                            boxShadow: "0 4px 8px rgba(255, 0, 0, 0.2)",
                            "&:hover": {
                            background: "linear-gradient(to right, #f30000, #ff4e50)",
                            },
                        }}
                        >
                        <span style={{ color: "white" }}>🗑</span> Delete
                        </Button>
                    </Stack>
                </Box>

            </Card>
            );
        })}
        </Box>
    );
};

export default EventList;
