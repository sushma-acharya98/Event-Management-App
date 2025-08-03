'use client';

import { Button, Container, Typography, Box, Paper } from "@mui/material";
import Link from "next/link";
import EventList from "@/components/EventList";

const Home = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                background: "linear-gradient(to right, #ffefba, #ffffff)",
                py: 8,
            }}
        >
        <Container maxWidth="md">
            <Paper elevation={4} sx={{ p: 5, borderRadius: 4, textAlign: "center" }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    🎉 Event Management App
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" mb={4}>
                    Organize and manage your events.
                </Typography>

                <Link href="/add" passHref>
                    <Button
                    variant="contained"
                    size="large"
                    sx={{
                        backgroundColor: "#d32f2f", // Red 700
                        '&:hover': {
                        backgroundColor: "#b71c1c", // Red 900
                        },
                        mb: 4,
                    }}
                    >
                    ➕ Add New Event
                    </Button>
                </Link>

                <EventList />
            </Paper>
        </Container>
        </Box>
    );
};

export default Home;
