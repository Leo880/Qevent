/*export default function EventsPage() {
  return <h1 className="text-3xl font-bold">Events Page</h1>;
} */

"use client";
import { useEffect, useState } from "react";
import EventCard from "@/components/EventCard";

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://qevent-backend.labs.crio.do/events")
      .then(res => res.json())
      .then(setEvents);
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-4 p-6">
      {events.map(e => <EventCard key={e.id} event={e} />)}
    </div>
  );
}
