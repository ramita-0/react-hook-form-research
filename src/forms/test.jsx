import { useEffect, useState } from "react";

export default function UncontrolledForm() {
  const [state, setState] = useState("")

  const handleSubmitClick = () => {
    const name = window.inputReference.value
    setState(prevState => name)
  };

  useEffect(() => {console.log(state)}, [state])

  return (
    <div>
      <input type="text" id="inputReference" />
      <button onClick={e => handleSubmitClick()}>Sign up</button>
    </div>
  );
}
