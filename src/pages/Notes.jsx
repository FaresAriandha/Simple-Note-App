import Note from "../components/Note";
import { useState } from "react";

const Notes = () => {
	const [notes, setNotes] = useState(
		JSON.parse(localStorage.getItem("notes")) || []
	);

	return (
		<div
			className={`flex flex-col ${
				notes != 0
					? "justify-start h-fit"
					: "justify-center h-screen"
			} items-center w-screen  pt-10 pb-20`}
		>
			{/* Search and Filter */}
			{notes != 0 ? (
				notes.map((item) => (
					<Note key={item.idNote} dataNote={item} />
				))
			) : (
				<h1>No data. lets create a new note</h1>
			)}
		</div>
	);
};

export default Notes;
