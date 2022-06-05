import changeElementsListReducer from "../redux/changeElementsListReducer"
import React from "react"
import {createStore} from "redux"

let store = createStore(changeElementsListReducer)

export default function InputNumber(props) {
	let unit = "г"
	if (props.name === "CO2") unit = "л"

	function changeValue(name, value) {
		store.dispatch({ type:"changeMass", name: props.name, mass: value })
	}

	return (
		<label>
			<span id={props.name}>{props.name}</span>
			<input onChange={(event) => changeValue(props.name, event.target.valueAsNumber)} type="number"></input>
			{unit}
		</label>
	)
}

/*
const changeValue = (name, value) => {
	let data = JSON.parse(sessionStorage.data)// array with elements
	// also we take arg value, when contain number - mass of combustion product
	// name - name of combustion product
	let newData = [] // new array with elements
	for (let elem of data) {
		// find elem with taked name
		if (elem.name !== name) {
			newData.push(elem)// not taked name
			continue
		}

		// elem founded
		// replace value to value in args
		let newElem = {
			name : elem.name,
			value// replace here
		}

		newData.push(newElem)
	}

	sessionStorage.data = JSON.stringify(newData)
}*/