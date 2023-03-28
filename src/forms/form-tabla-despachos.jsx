import { FormProvider, useForm } from "react-hook-form";
import MockDespachos from "../components/form-tabla-despachos/mock-despachos";

export default function FormTablaDespachos(props) {
  const apiObj = {
    particiones: [
      {
        cantidadADespachar: 54000,
        tipoDeDespacho: 'COMPLETO',
        existencia: 54000,
        despacho: '-',
        condicion: 'FISCAL',
        numero: 1,
      },
      {
        cantidadADespachar: 1000,
        tipoDeDespacho: 'NO',
        existencia: 1000,
        despacho: 'E2LA98NS',
        condicion: 'LIBERADO',
        numero: 2,
      },
      {
        cantidadADespachar: 3000,
        tipoDeDespacho: 'PARCIAL',
        existencia: 3000,
        despacho: 'A7HJ22RX',
        condicion: 'LIBERADO',
        numero: 3,
      },
      {
        cantidadADespachar: 3000,
        tipoDeDespacho: 'PARCIAL',
        existencia: 3000,
        despacho: 'R2XCB8JS',
        condicion: 'LIBERADO',
        numero: 4,
      },
    ],
  };
  
  const methods = useForm({
    defaultValues: {
      despachos: apiObj.particiones
    },
  })

  const onSubmit = (data) => {console.log(data)}

  return(
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <MockDespachos />
        <input type="submit" />
      </form>
    </FormProvider>
  )
}