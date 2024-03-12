import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const { status, statusText } = useRouteError();
	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center gap-y-4 bg-slate-600 text-white">
			<h1 className="text-xl font-bold">Oops!</h1>
			<p className="text-sm font-semibold">
				Sorry, an unexpected error has occurred.
			</p>
			<p className="text-sm font-bold">{status}</p>
			<p>
				<i>{statusText}</i>
			</p>
		</div>
	);
};

export default ErrorPage;
