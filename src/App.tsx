import { Routes, Route } from "react-router-dom";
import ChartPage from "./components/ChartPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<ChartPage />} />
		</Routes>
	);
}

export default App;
