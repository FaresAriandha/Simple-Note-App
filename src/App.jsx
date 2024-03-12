import { Outlet } from "react-router-dom";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<div className="flex flex-col h-full">
				<Logo />
				<Outlet />
				<Navbar />
				{/* {currentUrl != "notes" && <Navbar />} */}
			</div>
		</>
	);
}

export default App;
