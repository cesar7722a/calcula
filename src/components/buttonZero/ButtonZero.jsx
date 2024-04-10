import "./ButtonZero.css"


export function ButtonZero({ onClick, text }) {
  return (
    <button className="botao_zero" onClick={onClick}>{text}</button>
  )
}