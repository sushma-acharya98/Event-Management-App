'use client';

import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { Event } from "@/types/event";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { getEvents, saveEvents } from "@/utils/storage";
import { useEffect } from "react";

interface Props {
    eventToEdit?: Event;
}

const EventForm = ({ eventToEdit }: Props) => {
    const { register, handleSubmit, setValue, watch, reset, setError } = useForm<Event>();
    const router = useRouter();

    useEffect(() => {
        if (eventToEdit) {
        reset(eventToEdit);
        }
    }, [eventToEdit, reset]);

    const onSubmit = (data: Event) => {
        const allEvents = getEvents();
        const id = eventToEdit ? eventToEdit.id : uuidv4();
        const updatedEvent: Event = { ...data, id };

        // Check for venue/date conflict
        const conflict = allEvents.find(
        (e) => e.id !== id && e.date === data.date && e.venue === data.venue
        );

        if (conflict) {
        setError("venue", {
            type: "manual",
            message: "Another event is already scheduled at this venue on this date.",
        });
        return;
        }

        const updatedEvents = eventToEdit
        ? allEvents.map((e) => (e.id === id ? updatedEvent : e))
        : [...allEvents, updatedEvent];

        saveEvents(updatedEvents);
        router.push("/");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid", gap: "1rem", maxWidth: 500 }}>
            <TextField label="Title" {...register("title", { required: true })} />
            <TextField label="Description" {...register("description", { required: true })} />
            <TextField label="Venue" {...register("venue", { required: true })} />
            <TextField type="date" {...register("date", { required: true })} InputLabelProps={{ shrink: true }} />
            <Button type="submit" variant="contained">
                {eventToEdit ? "Update Event" : "Add Event"}
            </Button>
        </form>
    );
}

export default EventForm;
