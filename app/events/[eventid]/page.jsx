"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function EventDetails() {
  const { eventid } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`https://qevent-backend.labs.crio.do/events/${eventid}`)
      .then(res => res.json())
      .then(setEvent);
  }, [eventid]);

  if (!event) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <p>{event.description}</p>
    </div>
  );
}
