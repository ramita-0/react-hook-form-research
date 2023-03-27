import { FormProvider, useForm } from "react-hook-form";
import MailsContainer from "../components/form-anidado/mails-container";

export default function FormAnidadoArray() {
  const methods = useForm()
  const onSubmit = data => console.log(data)

  return(
    <FormProvider {...methods}>
      <MailsContainer />
    </FormProvider>
  )
}