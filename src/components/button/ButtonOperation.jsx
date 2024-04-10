import "./ButtonOperation.css"


export function ButtonOperation({ onClick, text }) {
  return (
    <button className="botao_operacao" onClick={onClick}>{text}</button>
  )
}