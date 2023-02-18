import myStyle from "./style.module.css";

export function DisplayDifficulty(props){
  return <div className={myStyle.container}>
    {
      props.difficulty ? `Difficulty set to ${props.difficulty}` : "No difficulty set"
    }
  </div>
}
