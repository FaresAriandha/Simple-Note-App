import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Notes from "./pages/Notes.jsx";
import Create from "./pages/Create.jsx";
import Edit from "./pages/Edit.jsx";

// Definisi Route
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Notes />,
			},
			{
				path: "/add",
				element: <Create />,
			},
			{
				path: "/notes/:id",
				element: <Edit />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
