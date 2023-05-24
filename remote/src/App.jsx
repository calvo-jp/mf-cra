import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

export default function App() {
	return (
		<BrowserRouter>
			<ChakraProvider>
				<Box p={4}>
					<Login />
				</Box>
			</ChakraProvider>
		</BrowserRouter>
	);
}
