'use client';

import { Button } from "@mui/material";
import Link from "next/link";
import EventList from "@/components/EventList";

const Home = () => {
    return (
        <div className="event-box">
            <div className="event-box-header">
                <h1>Event Management App</h1>
            </div>
            <div className="event-box-button">
                <Link href="/add">
                    <Button variant="contained" sx={{ mb: 2 }}>
                        Add Event
                    </Button>
                </Link>
            </div>
            <EventList />
        </div>
    );
}

export default Home;