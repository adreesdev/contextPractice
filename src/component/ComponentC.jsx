import {
	TextField,
	Button,
	Container,
	Typography,
	Box,
	Stack,
	Grid,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { SumContext } from "../context/ContextApi";

const ComponentC = () => {
	const { sum, result, reset, names } = useContext(SumContext);

	const [a, setA] = useState(0);
	const [b, setB] = useState(0);
	const [name, setName] = useState("");

	const submitValue = () => {
		const frmdetails = {
			value1: a,
			value2: b,
		};
		sum(frmdetails.value1, frmdetails.value2);
	};
	const submitName = () => {
		const frmdetails2 = {
			name1: name,
		};
		names(frmdetails2.name1);
		console.log(frmdetails2.name1);
	};

	let handleReset = () => {
		reset();
	};

	return (
		<>
			<Container>
				<Box
					sx={{
						width: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
					pt={5}
				>
					<Typography variant="h3" py={5}>
						Calculator
					</Typography>
					<Grid container py={2}>
						<Grid item md={6}>
							<Box
								sx={{
									width: "100%",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<TextField
									label="Name"
									onChange={(e) => setName(e.target.value)}
								/>
								<br />
								<Button
									variant="contained"
									onClick={submitName}
									color="success"
								>
									Check
								</Button>
							</Box>
						</Grid>
						<Grid item md={6}>
							<Box
								sx={{
									width: "100%",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Stack spacing={3}>
									<TextField
										label="Value 1"
										inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
										onChange={(e) => setA(e.target.value)}
									/>
									<TextField
										label="Value 2"
										inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
										onChange={(e) => setB(e.target.value)}
									/>
								</Stack>
								<Stack py={2} direction="row" spacing={5}>
									<Button
										variant="contained"
										onClick={submitValue}
										color="success"
									>
										Add
									</Button>
									<Button
										variant="contained"
										onClick={handleReset}
										color="error"
									>
										Reset
									</Button>
								</Stack>
							</Box>
						</Grid>
					</Grid>

					<Typography variant="h5">Result: {result}</Typography>
				</Box>
			</Container>
		</>
	);
};

export default ComponentC;
