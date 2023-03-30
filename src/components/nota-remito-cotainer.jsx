import React, { useState } from 'react';
import EdicionRemito from './edicion-remito';
import { FormProvider, useForm } from 'react-hook-form';

export default function NotaRemitoContainer() {
  const apiObj = { notaRemito: 'Nota api' };

  const methods = useForm({
    defaultValues: {
      notaRemito: apiObj.notaRemito
    }
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(data => console.log(data))}>
        <EdicionRemito />
        <input type="submit" />
      </form>
    </FormProvider>
  )
}
