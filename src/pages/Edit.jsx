import { useState } from "react";
import { useLocation } from "react-router-dom";

const Edit = () => {
	const textColorOpt = ["text-red-600", "text-yellow-500", "text-green-600"];
	const ringColorSelect = [
		"ring-red-600",
		"ring-yellow-500",
		"ring-green-600",
	];
	("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et animi fugit corporis, cum impedit asperiores sint praesentium dolores laboriosam at id iusto reiciendis odio possimus quam. At excepturi impedit inventore, quia dolore libero laboriosam atque corrupti, iusto quaerat, molestias eaque est. Fugiat, quibusdam. Porro suscipit delectus aliquam doloribus quae libero? Blanditiis aspernatur eveniet voluptatum esse ad alias numquam dolorem quae dignissimos praesentium in tenetur dolore, nam officia quos porro pariatur ratione dolor laborum natus laudantium consequuntur eos harum! Quos, sint reprehenderit necessitatibus eveniet dolorum quo ipsam aliquam corrupti quaerat nemo assumenda quidem exercitationem at quis, debitis ea quod ipsa suscipit.");
	const [selectedOptionPriority, setSelectedOptionPriority] = useState(-1);
	const [selectedOptionStatus, setSelectedOptionStatus] = useState(-1);
	const { pathname } = useLocation();
	const handleChange = (event) => {
		console.log(event.target.id);
		event.target.id == "priority"
			? setSelectedOptionPriority(event.target.selectedIndex - 1)
			: setSelectedOptionStatus(event.target.selectedIndex);
	};

	const handleChangeTextArea = (event) => {
		event.target.style.height = "auto";
		event.target.style.height = event.target.scrollHeight + "px";
	};

	return (
		<div className="w-screen h-full pt-10 px-8 flex flex-col justify-start items-center ">
			<h1
				className={`text-lg font-bold mt-10 my-4 ${
					pathname != "/add" && "hidden"
				}`}
			>
				Add New Note
			</h1>
			{/* Input */}
			<div
				className={`ring-0 ring-black w-full h-[100px] ${
					pathname != "/add" && "mt-10 mb-20"
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
						type="text"
						name="title"
						id="title"
						required="required"
						placeholder="your title"
						className="peer outline-none border-none w-full ring-2 ring-gray-500 focus:ring-black rounded-lg mt-3 py-2 px-3 caret-black text-black"
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
						onInput={handleChangeTextArea}
						type="text"
						name="desc"
						id="desc"
						required="required"
						placeholder="your plan"
						rows={3}
						className="peer outline-none border-none w-full h-fit ring-2 ring-gray-500 focus:ring-black rounded-lg mt-3 py-2 px-3 caret-black text-black resize-y"
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
				<div className="w-full h-[180px] flex flex-row items-start justify-between mt-10 gap-x-5 mb-20 ">
					<button className="w-1/2 min-w-fit py-2 rounded-md ring-2 ring-black active:scale-95 transition-all duration-300 font-semibold active:bg-slate-200 shadow-md shadow-gray-600 active:shadow-none">
						Cancel
					</button>
					<button className="w-1/2 min-w-fit py-2 rounded-md ring-2 ring-black bg-black/80 text-white active:scale-95 transition-all duration-300 font-semibold active:bg-black shadow-md shadow-gray-600 active:shadow-none">
						Update
					</button>
				</div>
			</div>
		</div>
	);
};

export default Edit;
