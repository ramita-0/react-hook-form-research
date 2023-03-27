import React, { useEffect, useState } from 'react';
import TablaDespachos from './tabla-despachos';


export default function MockDespachos() {
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

  const [particiones, setParticiones] = useState(apiObj.particiones);

  const totalTanque = particiones.reduce((accumulator, particionActual) => {
    return accumulator + particionActual.existencia;
  }, 0);
  const totalOperaciones = particiones.reduce((accumulator, particionActual) => {
    if (isNaN(particionActual.cantidadADespachar)) return accumulator + 0;
    return accumulator + particionActual.cantidadADespachar;
  }, 0);

  const handleChangeOperacionesState = (numero, value) => {
    const particionAModificarIndex = particiones.findIndex(particionActual => particionActual.numero === numero);
    const particionAModificar = particiones.filter(particionActual => particionActual.numero === numero)[0];

    if (particionAModificar.existencia < value) value = particionAModificar.existencia;
    particionAModificar.cantidadADespachar = value;

    const newState = [...particiones];

    newState[particionAModificarIndex].cantidadADespachar = parseInt(value, 10);

    setParticiones(state => newState);
  };

  return (
    <TablaDespachos
      particiones={particiones}
      totalTanque={totalTanque}
      totalOperaciones={totalOperaciones}
      handleChange={handleChangeOperacionesState}
    />
  );
}
