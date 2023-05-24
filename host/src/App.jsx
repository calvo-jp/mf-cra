import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "remote/Login";
import Landing from "./Landing";
import Layout from "./Layout";

export default function App() {
	return (
		<ChakraProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" Component={Layout}>
						<Route path="/" element={<Landing />} />
						<Route path="/login" element={<Login />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ChakraProvider>
	);
}
