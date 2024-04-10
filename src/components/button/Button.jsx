import "./Button.css"


export function Button({ onClick, text }) {
  return (
    <button className="botao" onClick={onClick}>{text}</button>
  )
}