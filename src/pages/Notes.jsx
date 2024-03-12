import Note from "../components/Note";

const Notes = () => {
	return (
		<div className="flex flex-col justify-start items-center w-screen h-fit pt-10 pb-20 bg-red-600">
			{/* Search and Filter */}
			<Note />
			<Note />
			<Note />
			<Note />
		</div>
	);
};

export default Notes;
