import React from 'react'
import FormBasico from '../forms/form-basico'
import FormReactstrapSelects from '../forms/form-reactstrap-selects'
import FormAnidadoArray from '../forms/form-anidado-array'
import FieldArray from '../components/form-anidado/field-array'
import FormTablaDespachos from '../forms/form-tabla-despachos'

export default function Home() {
  return (
    <div style={{color: "beige"}}>
      <h1 style={{marginBottom: "120px", textAlign:"center"}}>Investigacion de React Hook Form</h1>
            
      <div style={{marginLeft: "30px"}}>
        
        <div>
          <h3>Form basico</h3>
          <FormBasico />
        </div>

        <div>
          <h3>Form con selectores</h3>
          <FormReactstrapSelects />
        </div>

        <div>
          <h3>Form anidado</h3>
          <FormAnidadoArray />
        </div>

        <div>
          <h3>Field array component</h3>
          <FieldArray />
        </div>

        <div>
          <h3>Form tabla despachos</h3>
          <FormTablaDespachos />
        </div>
      </div>

    </div>
  )
}