import { useForm } from "react-hook-form"

export default async function FormAsyncDefaultvalues() {
  const fetchData = () => {
    return new Promise(res => {
      setTimeout(() => {
        res( {
          name: "ramiro",
          apellido: "moya",
          texto: "datos de la api!"
        })
      }, 1000)
    })
    
  }

  // Por que no funciona de la manera que lo explica en el FAQs?
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: async () => {
      return await fetchData()
    }
  })
  
  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <input {...register("name", { required: true })}></input>
      {errors.name && <p>Se require un nombre</p>}

      <input {...register("apellido", { required: "true" })}></input>
      
      <input {...register("texto")}></input>
      
      <input type="submit"></input>
    </form>
  )
}