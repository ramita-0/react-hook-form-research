import React from 'react';
import TablaDespachos from './tabla-despachos';

import { useWatch } from 'react-hook-form';

export default function MockDespachos() {  
  const particiones = useWatch({ name:"despachos" })
  
  const totalTanque = particiones.reduce((accumulator, particionActual) => {
    return accumulator + particionActual.existencia;
  }, 0);

  const totalOperaciones = particiones.reduce((accumulator, particion) => {
    if (particion.condicion === 'FISCAL') return accumulator + 0;
    switch (particion.tipoDeDespacho) {
      case 'NO':
        return accumulator + 0;
      case 'COMPLETO':
        return accumulator + parseInt(particion.existencia, 10);
      case 'PARCIAL':
        return particion.cantidadADespachar ? accumulator + parseInt(particion.cantidadADespachar, 0) : accumulator + 0;
      default:
        return accumulator + 0;
    }
  }, 0);

  return (
    <TablaDespachos
      particiones={particiones}
      totalTanque={totalTanque}
      totalOperaciones={totalOperaciones}
    />
  );
}
