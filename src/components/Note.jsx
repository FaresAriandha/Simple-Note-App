import { NavLink } from "react-router-dom";

const Note = () => {
	const bgColorPriority = ["bg-red-600", "bg-yellow-500", "bg-green-600"];
	const priority = ["high", "medium", "normal"];
	const dataNote = {
		title: "Title Noteskajksjakskaks",
		priority: 1,
		desc: `Jadi hari ini bakal ada kegiatan :
      1. belajar
      2. belajar
      3. belajar lagi wkwk
    `,
		status: "finished | on-going",
	};
	return (
		<div className="w-10/12 max-w-[300px] min-h-[180px] max-h-[200px] rounded-xl ring-2 ring-black shadow-md shadow-slate-700 flex flex-col px-5 pt-3 bg-slate-200 relative mt-10">
			{/* Title */}
			<div className="w-full h-fit flex flex-row justify-between items-center">
				<h1 className="w-1/2 text-lg font-bold truncate line-through">
					{dataNote.title}
				</h1>
				<h2
					className={`w-fit text-sm font-semibold px-3 ${
						bgColorPriority[dataNote.priority]
					} text-white rounded-full capitalize`}
				>
					{priority[dataNote.priority]}
				</h2>
			</div>
			<p className="w-full h-2/3 text-sm bg-white mt-3 overflow-y-scroll p-2 rounded-lg ring-2 ring-black whitespace-pre-line">
				{dataNote.desc}
			</p>
			<NavLink
				to={"/notes/1"}
				className="w-fit h-fit px-3 p-1 bg-black text-white rounded-lg my-3 font-semibold relative left-full -translate-x-16"
			>
				More
			</NavLink>
		</div>
	);
};

export default Note;
