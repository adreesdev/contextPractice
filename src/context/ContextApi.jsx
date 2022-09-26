import React, { createContext, useState } from "react";

export const SumContext = createContext();

const ContextApi = (props) => {
	const [result, setResult] = useState(0);
	const [history, setHistory] = useState();
	// let h = localStorage.getItem("history");
	// let n = localStorage.getItem("name");

	let sum = (a, b) => {
		let h = localStorage.getItem("history");
		let c = 0;
		if (h) {
			h = h.split(",");
			c = +a + +b + +h[history];
			setResult(c);
			h[history] = c;
			localStorage.setItem("history", h);
		}
	};

	let reset = () => {
		let h = localStorage.getItem("history");
		if (h) {
			h = h.split(",");
			h[history] = 0;
			localStorage.setItem("history", h);
		}
		window.location.reload();
	};

	let names = (value) => {
		let h = localStorage.getItem("history");
		let n = localStorage.getItem("name");
		if (n) {
			n = n.split(",");
			h = h.split(",");
			if (n.includes(value)) {
				setHistory(n.indexOf(value));
			} else {
				n.push(value);
				localStorage.setItem("name", n);
				setHistory(n.indexOf(value));
				h.push(0);
				localStorage.setItem("history", h);
			}
		} else {
			let n = [];
			n.push(value);
			setHistory(n.indexOf(value));
			localStorage.setItem("name", n);
			localStorage.setItem("history", 0);
		}
	};

	return (
		<SumContext.Provider value={{ sum, result, reset, names }}>
			{props.children}
		</SumContext.Provider>
	);
};

export default ContextApi;
