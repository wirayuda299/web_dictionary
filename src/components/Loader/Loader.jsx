export default function Loader() {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="w-12 h-12 rounded-full animate-spin
                    border-8 border-dashed border-purple-500 "></div>
			<span className="sr-only">Loading...</span>
		</div>

	);
}
