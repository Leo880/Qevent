"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function CreateEvent() {
  const router = useRouter();
  const { data: session } = useSession();

  if (!session) {
    router.push("/events");
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const newEvent = Object.fromEntries(form.entries());

    const res = await fetch("https://qevent-backend.labs.crio.do/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    });

    if (res.ok) router.push("/events");
    else alert("Event creation failed");
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6">
      <input name="title" placeholder="Title" className="border p-2 w-full mb-4" />
      <input name="artist" placeholder="Artist" className="border p-2 w-full mb-4" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Create Event</button>
    </form>
  );
}
