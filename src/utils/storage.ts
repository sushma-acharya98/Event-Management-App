import { Event } from "@/types/event";

export const getEvents = (): Event[] => {
    if (typeof window === "undefined") return [];
    const events = localStorage.getItem("events");
    return events ? JSON.parse(events) : [];
};

export const saveEvents = (events: Event[]) => {
    localStorage.setItem("events", JSON.stringify(events));
};

export const getEventById = (id: string): Event | undefined => {
    return getEvents().find((e) => e.id === id);
};
