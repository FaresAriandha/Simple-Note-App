import { NavLink } from "react-router-dom";

const Note = (props) => {
	const { idNote, title, desc, priority, status } = props.dataNote;
	const bgColorPriority = ["bg-red-600", "bg-yellow-500", "bg-green-600"];
	const listPriority = ["high", "medium", "normal"];
	return (
		<div className="w-10/12 max-w-[300px] min-h-[180px] max-h-[200px] rounded-xl ring-2 ring-black shadow-md shadow-slate-700 flex flex-col px-5 pt-3 bg-slate-200 relative mt-10">
			{/* Title */}
			<div className="w-full h-fit flex flex-row justify-between items-center">
				<h1
					className={`w-1/2 text-lg font-bold truncate ${
						status == 2 && "line-through"
					}`}
				>
					{title.length > 0 ? title : "No title"}
				</h1>
				<h2
					className={`w-fit text-sm font-semibold px-3 ${bgColorPriority[priority]} text-white rounded-full capitalize`}
				>
					{listPriority[priority]}
				</h2>
			</div>
			<p className="w-full h-2/3 min-h-[50px] text-sm bg-white mt-3 p-2 rounded-lg ring-2 ring-black whitespace-pre-line overflow-scroll">
				{desc.length > 0 ? desc : "No Desc Available"}
			</p>
			<div className="w-fit h-fit relative left-full -translate-x-full flex ">
				<NavLink
					to={`/notes/${idNote}`}
					className="w-fit h-fit px-3 p-1 bg-black text-white rounded-lg my-3 font-semibold"
				>
					More
				</NavLink>
			</div>
		</div>
	);
};

export default Note;
