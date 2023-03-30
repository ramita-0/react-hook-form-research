import { useForm } from "react-hook-form"

export default function FormTestControl(props) {
  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      nombre:"",
      mail:""
    }
  })
  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <input {...control.register("nombre")}></input>
      <input {...register("mail")}></input>
      <input type="submit" />
    </form>
  )
}