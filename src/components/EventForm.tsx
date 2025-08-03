'use client';

import { useForm } from "react-hook-form";
import {
    TextField,
    Button,
    Typography,
    Paper,
    Container,
    Box,
} from "@mui/material";
import { Event } from "@/types/event";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { getEvents, saveEvents } from "@/utils/storage";
import { useEffect } from "react";

interface Props {
    eventToEdit?: Event;
}

const EventForm = ({ eventToEdit }: Props) => {
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors },
    } = useForm<Event>();
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
            message:
            "Another event is already scheduled at this venue on this date.",
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
        <Container maxWidth="sm" sx={{ py: 6 }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
                {eventToEdit ? "Edit Event" : "Create New Event"}
                </Typography>

                <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    display: "grid",
                    gap: 2,
                    mt: 2,
                }}
                >
                <TextField
                    label="Title"
                    {...register("title", { required: "Title is required" })}
                    error={!!errors.title}
                    helperText={errors.title?.message}
                    fullWidth
                />
                <TextField
                    label="Description"
                    {...register("description", {
                    required: "Description is required",
                    })}
                    error={!!errors.description}
                    helperText={errors.description?.message}
                    fullWidth
                    multiline
                    rows={3}
                />
                <TextField
                    label="Venue"
                    {...register("venue", { required: "Venue is required" })}
                    error={!!errors.venue}
                    helperText={errors.venue?.message}
                    fullWidth
                />
                <TextField
                    label="Date"
                    type="date"
                    {...register("date", { required: "Date is required" })}
                    error={!!errors.date}
                    helperText={errors.date?.message}
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                />
                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                        mt: 1,
                        borderRadius: "999px",
                        textTransform: "none",
                        paddingX: 4,
                        paddingY: 1.2,
                        fontWeight: "bold",
                        fontSize: "1rem",
                        background: "linear-gradient(to right, #ff416c, #ff4b2b)",
                        boxShadow: "0 4px 10px rgba(255, 65, 108, 0.3)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                        background: "linear-gradient(to right, #ff4b2b, #ff416c)",
                        boxShadow: "0 6px 16px rgba(255, 75, 43, 0.5)",
                        },
                    }}
                    >
                        {eventToEdit ? "Update Event" : "Add Event"}
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default EventForm;
