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
                        Add New Event
                    </Button>
                </Link>

                <EventList />
            </Paper>
        </Container>
        </Box>
    );
};

export default Home;
