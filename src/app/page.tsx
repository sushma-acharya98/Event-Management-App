'use client';

import { Button } from "@mui/material";
import Link from "next/link";
import EventList from "@/components/EventList";

const Home = () => {
    return (
        <div className="event_box" style={{ padding: "2rem" }}>
            <h1>Event Manager</h1>
            <Link href="/add">
                <Button variant="contained" sx={{ mb: 2 }}>
                    Add Event
                </Button>
            </Link>
            <EventList />
        </div>
    );
}

export default Home;