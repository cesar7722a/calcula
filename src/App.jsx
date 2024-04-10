import { useState } from 'react'
import './App.css'
import { Button } from './components/button/Button'
import { ButtonZero } from './components/buttonZero/ButtonZero'
import { ButtonOperation } from './components/button/ButtonOperation'

function App() {
  const [num1, setNum1] = useState("")
  const [simbolo, setSimbolo] = useState("")
  const [num2, setNum2] = useState("")

  function adicionarNumero(n) {
    let numero = num1 + n
    setNum1(numero)
  }

  function operador(sinal) {
    if (num1 != "" && num2 != "") {
      if (simbolo === "/") {
        setNum2(parseFloat(num2) / parseFloat(num1))
      } else if (simbolo === "*") {
        setNum2(parseFloat(num2) * parseFloat(num1))
      } else if (simbolo === "+") {
        setNum2(parseFloat(num2) + parseFloat(num1))
      } else if (simbolo === "-") {
        setNum2(parseFloat(num2) - parseFloat(num1))
      }
      setSimbolo(sinal)
      setNum1("")
    } else {
      setSimbolo(sinal)
      setNum2(num1)
      setNum1("")
    }
  }
  function efetuarOperacao() {
    if (num1 != "" && num2 != "" && simbolo != "=") {
      if (simbolo === "/") {
        setNum1(parseFloat(num2) / parseFloat(num1))
      } else if (simbolo === "*") {
        setNum1(parseFloat(num2) * parseFloat(num1))
      } else if (simbolo === "+") {
        setNum1(parseFloat(num2) + parseFloat(num1))
      } else if (simbolo === "-") {
        setNum1(parseFloat(num2) - parseFloat(num1))
      }
      setNum2("")
      setSimbolo("=")
    }
  }

  function limpar() {
    setNum1("")
  }

  function limparTudo() {
    setNum1("")
    setNum2("")
    setSimbolo("")
  }
  function percentagem() {
    let p = (parseFloat(num1) / 100) * (parseFloat(num2))
    setNum1(p)
  }

  function adicionarPonto() {
    if (num1 === "") {
      setNum1("0.")
    } else if (!num1.includes(".")) {
      let numNovo = num1 + "."
      setNum1(numNovo)
    }
  }

  return (
    <div className='container'>
      <div className='calculadora'>
        <div className="headerCalculadora">
          <p className='equacao'>{num2}</p>
          <p className='solucao'>{simbolo} {num1}</p>
        </div>
        <div className="botaoes">
          <div className="linha">
            <Button onClick={() => limpar()} text={"CE"} />
            <Button onClick={() => limparTudo()} text={"C"} />
            <Button onClick={() => percentagem()} text={"%"} />
            <ButtonOperation onClick={() => operador(`/`)} text={"/"} />
          </div>
          <div className="linha">
            <Button onClick={() => adicionarNumero(7)} text={"7"} />
            <Button onClick={() => adicionarNumero(8)} text={"8"} />
            <Button onClick={() => adicionarNumero(9)} text={"9"} />
            <ButtonOperation onClick={() => operador(`*`)} text={"*"} />
          </div>
          <div className="linha">
            <Button onClick={() => adicionarNumero(4)} text={"4"} />
            <Button onClick={() => adicionarNumero(5)} text={"5"} />
            <Button onClick={() => adicionarNumero(6)} text={"6"} />
            <ButtonOperation onClick={() => operador(`-`)} text={"-"} />
          </div>
          <div className="linha">
            <Button onClick={() => adicionarNumero(1)} text={"1"} />
            <Button onClick={() => adicionarNumero(2)} text={"2"} />
            <Button onClick={() => adicionarNumero(3)} text={"3"} />
            <ButtonOperation onClick={() => operador(`+`)} text={"+"} />
          </div>
          <div className="linha">
            <ButtonZero onClick={() => adicionarNumero(0)} text={"0"} />
            <Button onClick={() => adicionarPonto()} text={"."} />
            <ButtonOperation onClick={() => efetuarOperacao()} text={"="} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
