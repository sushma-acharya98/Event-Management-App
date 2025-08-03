import { useRouter } from "next/router";
import { getEventById } from "@/utils/storage";
import EventForm from "@/components/EventForm";
import { useEffect, useState } from "react";
import { Event } from "@/types/event";

const UpdatePage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [event, setEvent] = useState<Event>();

    useEffect(() => {
        if (typeof id === "string") {
        const found = getEventById(id);
        if (found) setEvent(found);
        }
    }, [id]);

    return (
        <div style={{ padding: "2rem" }}>
            <h2>Update Event</h2>
            {event && <EventForm eventToEdit={event} />}
        </div>
    );
}

export default UpdatePage;