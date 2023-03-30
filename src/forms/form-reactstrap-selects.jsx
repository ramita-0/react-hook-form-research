import React from 'react'
import Select from '../components/select'
import { useForm, Controller } from 'react-hook-form';

export default function FormReactstrapSelects() {
  const { handleSubmit, control } = useForm()

  const onSubmit = data => console.log(data)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <Controller
          control={control} 
          name={"chofer"}
          render={({field: {value, onChange}}) => (
            <Select
              value={value}
              onChange={onChange}
              label={"Chofer"}
              options={[
                { id: 1, value: 'Jose Luis' },
                { id: 2, value: 'Pedro Alfonso' },
              ]}
            />
          )
        }
        />

        {/* Noten este shorthand, uso la desestructuracion de 'field', ya que los valores del mismo son
            value y onChange, que a su vez son los que toma mi componente controlado 
        */}
        
        <Controller 
          control={control} 
          name={"Patente tractor"}
          render={({field}) => (
              <Select
                {...field}
                label={"Patente tractor"}
                options={[
                  { id: 1, value: 'AWE 124' },
                  { id: 2, value: 'FVT 624' },
                ]}
              />
            )
          }
        />

        <input type="submit" />
      </form>
    </div>
  )
}