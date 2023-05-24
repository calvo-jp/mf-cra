import { Box, Button, FormControl, FormLabel, Input, chakra } from "@chakra-ui/react";

export default function Login() {
	return (
		<Box maxW="350px">
			<chakra.form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<FormControl>
					<FormLabel>Email</FormLabel>
					<Input autoFocus />
				</FormControl>

				<FormControl mt={4}>
					<FormLabel>Password</FormLabel>
					<Input />
				</FormControl>

				<Button mt={5} w="full" colorScheme="blue">
					Login
				</Button>
			</chakra.form>
		</Box>
	);
}
