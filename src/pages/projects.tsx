import { useState } from "react";

export default function Projects() {
  // var characters = ''
  const [characters, setCharacetrs] = useState("");
  function HandleTextAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setCharacetrs(e.target.value)
  }
  return (
    <div>
      <div className="max-w-[500px] mx-auto">
        <textarea
          className="w-full border border-black/20 p-5 focus:outline-none rounded-xl"
          rows={10}
          placeholder="Please enter anything to get the character count"
          onChange={(event) => HandleTextAreaChange(event)}
        ></textarea>
        <p>Total Number Of characters: {characters.length}</p>
      </div>
    </div>
  );
}
