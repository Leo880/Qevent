/* export default function TagsPage() {
  return <h1 className="text-3xl font-bold">Tags Page</h1>;
} */

"use client";
import { useEffect, useState } from "react";
import Tag from "@/components/Tag";

export default function TagsPage() {
  const [tags,setTags] = useState([]);

  useEffect(() => {
    fetch("https://qevent-backend.labs.crio.do/tags")
      .then(res => res.json())
      .then(setTags);
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-4 p-6">
      {tags.map(tag => <Tag key={tag.id} artist={tag.name} />)}
    </div>
  );
}
