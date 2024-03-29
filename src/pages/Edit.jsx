import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import Success from "../../public/lottiefiles/Success.json";
import Warning from "../../public/lottiefiles/Warning.json";
import Lottie from "lottie-react";

const Edit = () => {
	const { pathname } = useLocation();
	const { id } = useParams();

	const [notes, setNotes] = useState(
		JSON.parse(localStorage.getItem("notes"))
	);

	const [clickUpdate, setClickUpdate] = useState(false);
	const [clickRemove, setClickRemove] = useState(false);
	let note = {};

	if (!clickRemove) {
		note = notes.find((item) => item.idNote == id);
	}

	const { idNote, title, desc, priority, status } = note;

	const textColorOpt = ["text-red-600", "text-yellow-500", "text-green-600"];
	const ringColorSelect = [
		"ring-red-600",
		"ring-yellow-500",
		"ring-green-600",
	];
	const [selectedOptionPriority, setSelectedOptionPriority] =
		useState(priority);
	const [selectedOptionStatus, setSelectedOptionStatus] = useState(status);
	const [titleNote, setTitleNote] = useState(title);
	const [descNote, setDescNote] = useState(desc);

	const handleChange = (event) => {
		event.target.id == "priority"
			? setSelectedOptionPriority(event.target.selectedIndex - 1)
			: setSelectedOptionStatus(event.target.selectedIndex);
	};

	const handleChangeDesc = (event) => {
		event.target.style.height = "auto";
		event.target.style.height = event.target.scrollHeight + "px";
		setDescNote(event.target.value);
	};

	const handleChangeTitle = (event) => {
		setTitleNote(event.target.value);
	};

	const onSubmitNote = () => {
		const dataNote = {
			idNote,
			title: titleNote,
			desc: descNote,
			priority: selectedOptionPriority,
			status: selectedOptionStatus,
		};

		notes.forEach((item, index) => {
			if (item.idNote == id) {
				notes[index] = dataNote;
			}
		});

		setNotes(notes);
		localStorage.setItem("notes", JSON.stringify(notes));
		setClickUpdate(true);

		// console.log(notes);
		// Alert Success
	};

	const handleSuccessPopUp = () => {
		setTimeout(() => {
			setClickUpdate(false);
			window.location.href = "/";
		}, 500);
	};

	const handleSuccessRemove = () => {
		notes.forEach((item, index) => {
			if (item.idNote == id) {
				notes.splice(index, 1);
				setClickRemove(true);
			}
		});

		setNotes(notes);
		localStorage.setItem("notes", JSON.stringify(notes));
		window.location.href = "/";
	};

	return (
		<div className="w-screen h-full px-8 flex flex-col justify-start items-center">
			<h1
				className={`text-lg font-bold mt-20 my-4 ${
					pathname != "/add" && "hidden"
				}`}
			>
				Add New Note
			</h1>
			{/* Input */}
			<div
				className={`ring-0 ring-black w-full h-fit  ${
					pathname != "/add" && "mt-20 mb-20"
				}`}
			>
				<div className="title-note flex flex-col items-start justify-start">
					<label
						htmlFor="title"
						className="text-base font-semibold after:content-['*'] after:ms-1 after:text-red-600 after:hidden"
					>
						Title
					</label>
					<input
						onChange={handleChangeTitle}
						type="text"
						name="title"
						id="title"
						required="required"
						placeholder="your title"
						className="peer outline-none border-none w-full ring-2 ring-gray-500 focus:ring-black rounded-lg mt-3 py-2 px-3 caret-black text-black"
						value={titleNote}
					/>
					<span className="mt-2 text-sm text-red-600 hidden">
						Must fill!
					</span>
				</div>
				<div className="desc-note flex flex-col items-start justify-start mt-5">
					<label
						htmlFor="desc"
						className="text-base font-semibold after:content-['*'] after:ms-1 after:text-red-600 after:hidden"
					>
						Description
					</label>
					<textarea
						onChange={handleChangeDesc}
						type="text"
						name="desc"
						id="desc"
						required="required"
						placeholder="your plan"
						rows={3}
						className="peer outline-none border-none w-full h-fit ring-2 ring-gray-500 focus:ring-black rounded-lg mt-3 py-2 px-3 caret-black text-black resize-y "
						value={descNote}
					/>
					<span className="mt-2 text-sm text-red-600 hidden">
						Must fill!
					</span>
				</div>
				<div className="status-priority-note flex flex-row items-start justify-between my-5">
					<div className="priority-note flex flex-col items-start justify-start">
						<label
							htmlFor="priority"
							className="text-base font-semibold after:content-['*'] after:ms-1 after:text-red-600 after:hidden"
						>
							Priority
						</label>
						<select
							name="priority"
							id="priority"
							className={`bg-transparent ${
								selectedOptionPriority != -1
									? textColorOpt[
											selectedOptionPriority
									  ]
									: "text-black"
							} outline-none border-none w-full h-fit ring-2 focus:${
								selectedOptionPriority != -1
									? ringColorSelect[
											selectedOptionPriority
									  ]
									: "ring-gray-500 "
							} rounded-lg mt-3 py-2 px-2 caret-black  ${
								selectedOptionPriority != -1
									? ringColorSelect[
											selectedOptionPriority
									  ]
									: "ring-gray-500 "
							} *:text-black `}
							value={selectedOptionPriority}
							onChange={handleChange}
						>
							<option value="-1" disabled>
								Choose
							</option>
							<option value="0">High</option>
							<option value="1">Medium</option>
							<option value="2">Normal</option>
						</select>
						<span className="mt-2 text-sm text-red-600 hidden">
							Must fill!
						</span>
					</div>
					<div className="status-note flex flex-col items-start justify-start">
						<label
							htmlFor="status"
							className="text-base font-semibold after:content-['*'] after:ms-1 after:text-red-600 after:hidden"
						>
							Status
						</label>
						<select
							name="status"
							id="status"
							className={`bg-transparent ${
								selectedOptionStatus != -1
									? textColorOpt[
											selectedOptionStatus
									  ]
									: "text-black"
							} outline-none border-none w-full h-fit ring-2 focus:${
								selectedOptionStatus != -1
									? ringColorSelect[
											selectedOptionStatus
									  ]
									: "ring-gray-500 "
							} rounded-lg mt-3 py-2 px-2 caret-black  ${
								selectedOptionStatus != -1
									? ringColorSelect[
											selectedOptionStatus
									  ]
									: "ring-gray-500 "
							} *:text-black `}
							value={selectedOptionStatus}
							onChange={handleChange}
						>
							<option value="-1" disabled>
								Choose
							</option>
							<option value="1">On going</option>
							<option value="2">Finished</option>
						</select>
						<span className="mt-2 text-sm text-red-600 hidden">
							Must fill!
						</span>
					</div>
				</div>
				<div className="w-full h-fit flex flex-row items-start justify-between mt-10 gap-x-5">
					<NavLink
						className="w-1/2 min-w-fit py-2 rounded-md ring-2 ring-black active:scale-95 transition-all duration-300 font-semibold active:bg-slate-200 shadow-md shadow-gray-600 active:shadow-none inline-block text-center"
						to={"/"}
					>
						Cancel
					</NavLink>
					<button
						className="w-1/2 min-w-fit py-2 rounded-md ring-2 ring-black bg-black/80 text-white active:scale-95 transition-all duration-300 font-semibold active:bg-black shadow-md shadow-gray-600 active:shadow-none"
						onClick={onSubmitNote}
					>
						Update
					</button>
				</div>
				<button
					className="w-full h-fit mt-5 py-2.5 rounded-md bg-red-400 text-white  active:scale-95 transition-all duration-300 font-semibold shadow-md shadow-gray-600 active:shadow-none active:bg-red-600 text-center "
					onClick={() => {
						setClickRemove(true);
					}}
				>
					Remove
				</button>
			</div>

			<div
				className={`fixed w-screen h-screen bg-black/30 flex justify-center items-center ${
					!clickUpdate && "hidden"
				}`}
			>
				<div className="w-9/12 h-fit p-2 bg-white rounded-lg flex  flex-col justify-center items-center">
					{/* Logo */}
					<Lottie
						animationData={Success}
						className="w-[150px] h-[150px]"
					/>
					{/* Text */}
					<h1 className="font-bold text-center">
						Note Updated Successfully!
					</h1>
					<button
						className="w-full h-fit py-2 text-white rounded-md text-center bg-black mb-1 mt-5 font-semibold active:scale-90 transition-all duration-200"
						onClick={handleSuccessPopUp}
					>
						Close
					</button>
				</div>
			</div>

			<div
				className={`fixed w-screen h-screen bg-black/30 flex justify-center items-center ${
					!clickRemove && "hidden"
				}`}
			>
				<div className="w-9/12 h-fit p-2 bg-white rounded-lg flex  flex-col justify-center items-center">
					{/* Logo */}
					<Lottie
						animationData={Warning}
						className="w-[150px] h-[150px]"
					/>
					{/* Text */}
					<h1 className="font-bold text-center">
						Are you sure delete this note ?
					</h1>
					<div className="w-full flex items-center justify-evenly ">
						<button
							className="w-2/5 h-fit py-2 text-black rounded-md text-center bg-white mb-1 mt-5 font-semibold active:scale-90 transition-all duration-200 ring-2 ring-black"
							onClick={() => {
								setClickRemove(false);
							}}
						>
							No
						</button>
						<button
							className="w-2/5 h-fit py-2 text-white rounded-md text-center bg-black mb-1 mt-5 font-semibold active:scale-90 transition-all duration-200 ring-2 ring-black"
							onClick={handleSuccessRemove}
						>
							Yes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Edit;
