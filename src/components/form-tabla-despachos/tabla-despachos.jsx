import React from 'react';
import FilaDespacho from './fila-despacho';

import { Table } from 'reactstrap';

export default function TablaDespachos(props) {
  const { totalTanque, totalOperaciones, particiones } = props;
  
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', backgroundColor: '#727577' }}>
        <p style={{ margin: 'auto 0 0 0', color: 'whitesmoke' }}>
          Existencia total del tanque: <span style={{ color: 'white', fontWeight: '600' }}>{totalTanque} kg.</span>
        </p>
        <p style={{ margin: 'auto 0 0 40px', color: 'whitesmoke' }}>
          Ultima actualizacion de datos: <span style={{ color: 'white', fontWeight: '600' }}>2023-02-06</span>
        </p>
      </div>
      
      <Table responsive={true}>
        <thead style={{ color: '#3D4C5B' }}>
          <tr>
            <th>#</th>
            <th>Condicion</th>
            <th>Despacho</th>
            <th>Existencia</th>
            <th>Cantidad a despachar de cada partida</th>
          </tr>
        </thead>
        <tbody>
          {particiones.map((particion, index) => {
            return <FilaDespacho key={particion.despacho} index={index} {...particion}/>  
          })}
        </tbody>
      </Table>

      <p style={{ margin: '0 0 0 477px', fontWeight: '600' }}>Total Operacion (neto): {totalOperaciones} kg</p>
    </>
  );
}
