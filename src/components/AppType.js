import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"

export const AppType = () =>  {
  let navigate = useNavigate();
  let state = useSelector(state => state)

  const [appType, setAppType] = useState(state.type.type)

  const dispatch = useDispatch()

  return (
    <>
      <h1>Калькулятор для химического анализа органических веществ</h1>
      <h2>Выберите тип задачи: </h2>
      <>
        <label>
          <input checked={appType === "percents" ? true : false} onChange={() => { setAppType("percents"); dispatch({type:"changeAppType", value:"percents"})} } type="radio" name="appType"></input>
          Проценты
        </label>
        <label>
          <input checked={appType === "values" ? true : false} onChange={() => { setAppType("values"); dispatch({type:"changeAppType", value:"values"})} } type="radio" name="appType"></input>
          Значения
        </label>
      </>
      <>
        <button onClick={() => navigate("/")}>Назад</button>
        <button onClick={() => navigate(`/matter-mass`)}>Далее</button>
      </>
    </>
  )
}