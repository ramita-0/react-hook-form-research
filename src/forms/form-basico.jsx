import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

export default function FormBasico() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "Ramiro"
    }
  });
  
  console.log(watch("firstName"))

  return (
    <div style={{width:"300px"}}>
      <form onSubmit={handleSubmit((data) => console.log(data))} style={{display:"flex", flexDirection:"column"}}>

        <h4 style={{margin:"0", textAlign:"left"}}>First name</h4>
        <input {...register('firstName', { required: true })} />
        {errors.firstName && <p>First name is required.</p>}

        <h4 style={{margin:"0", textAlign:"left"}}>Last name</h4>
        <input {...register('lastName')} />
        {errors.lastName && <p>Last name is required.</p>}

        <h4 style={{margin:"0", textAlign:"left"}}>Age</h4>
        <input {...register('age', { pattern: /\d+/ })} />
        {errors.age && <p>Please enter number for age.</p>}

        <input type="submit" />
      </form>
    </div>
  )
}