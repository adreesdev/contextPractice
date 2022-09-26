import React from "react";
import { UserConsumer } from "../context/context";

const ComponentD = () => {
	return (
		<>
			<UserConsumer>
				{(value) => {
					return <h1>{value}</h1>;
				}}
			</UserConsumer>
		</>
	);
};

export default ComponentD;
