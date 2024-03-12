import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
	const { pathname } = useLocation();
	const homeActive = ({ isActive }) =>
		`w-1/2 py-[15px] text-center ${
			pathname != "/add" || isActive
				? "bg-transparent text-black "
				: "rounded-tr-[30px] bg-black text-white"
		}`;
	const addActive = ({ isActive }) =>
		`w-1/2 py-[15px] text-center ${
			isActive
				? "bg-transparent text-black"
				: "rounded-tl-[30px] bg-black text-white"
		}`;

	return (
		<>
			<div className="w-screen flex justify-evenly items-center h-fit text-white bottom-0 left-0 text-md font-semibold bg-white fixed z-50">
				<NavLink to={"/"} className={homeActive}>
					Home
				</NavLink>
				<NavLink to={"/add"} className={addActive}>
					Add
				</NavLink>
			</div>
		</>
	);
};

export default Navbar;
