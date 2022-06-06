import React from "react"
import { useNavigate } from "react-router-dom"
import InputNumber from "./InputNumber"

import { useSelector } from 'react-redux'

export default function QuantitativeValues(props) {
  let navigate = useNavigate();

  let data = useSelector((state) => state.data)

	return(
		<>
			<h1>Калькулятор для химического анализа органических веществ</h1>
			<h2>Введите количественные значения для продуктов сгорания</h2>
			<ul>
			{
				data.map((elem, index) => {
					return (<li key={index}><InputNumber name={elem.name}/></li>)
				})
			}
			</ul>
			<>
				<button onClick={() => navigate("/combustion-products")}>Назад</button>
				<button onClick={() => navigate("/result")}>Результат</button>
			</>
		</>)
}