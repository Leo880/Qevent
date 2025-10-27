/*export default function ArtistsPage() {
  return <h1 className="text-3xl font-bold">Artists Page</h1>;
}*/

"use client";
import { useEffect, useState } from "react";
import ArtistCard from "@/components/ArtistCard";

export default function ArtistsPage() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch("https://qevent-backend.labs.crio.do/artists")
      .then(res => res.json())
      .then(setArtists);
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-4 p-6">
      {artists.map(a => <ArtistCard key={a.id} artist={a} />)}
    </div>
  );
}
