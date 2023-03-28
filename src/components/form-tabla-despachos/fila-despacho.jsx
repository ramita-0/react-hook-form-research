import React from 'react';
import { Controller, useWatch } from 'react-hook-form';

import { Button, ButtonGroup, Input } from 'reactstrap';

export default function FilaDespacho({ numero, condicion, despacho, existencia, index }) {
  const tipoDeDespacho = useWatch({
    name: `despachos[${index}].tipoDeDespacho`
  })

  return (
    <>
      <tr>
        <th scope="row">{numero}</th>
        <td>{condicion}</td>
        <td>{despacho}</td>
        <td>{existencia} kg</td>
        <td>
          {condicion === 'LIBERADO' && (
            <div style={{ display: 'flex' }}>
              <div>
                <Controller
                  name={`despachos[${index}].tipoDeDespacho`}
                  render={({field: {onChange, value}}) => (
                    <ButtonGroup size={'sm'}>
                      <Button onClick={() => onChange("NO")} color="danger" outline active={value === "NO"}>
                        No
                      </Button>

                      <Button onClick={() => onChange("COMPLETO")} color="success" outline active={value === "COMPLETO"}>
                        Completo
                      </Button>

                      <Button onClick={() => onChange("PARCIAL")} color="warning" outline active={value === "PARCIAL"}>
                        Parcial
                      </Button>
                    </ButtonGroup>
                  )}
                />
              </div>
              {tipoDeDespacho !== "NO" ? (
                <div style={{ marginLeft: '30px', display: 'flex', justifyContent: 'center', width: '150px' }}>
                  {tipoDeDespacho === "COMPLETO" && (
                    <>
                      <Controller
                        name={`despachos[${index}].cantidadADespachar`}
                        render={({ field: { value } }) => (
                          <Input
                            value={existencia}
                            type="number"
                            bsSize={'sm'}
                            disabled
                          />
                        )}
                      />
                      <p style={{ margin: '0 0 0 5px' }}>kg</p>
                    </>
                  )}
                  {tipoDeDespacho === "PARCIAL" && (
                    <>
                      <Controller 
                        name={`despachos[${index}].cantidadADespachar`}
                        render={({ field: {onChange, value} }) => (
                          <Input
                            onChange={e => onChange(parseInt(e.target.value))}
                            value={value}
                            type="number"
                            bsSize={'sm'}
                          />
                        )}
                      />
                      
                      <p style={{ margin: '0 0 0 5px' }}>kg</p>
                    </>
                  )}
                </div>
              ) : (
                <div style={{ width: '180px' }}></div>
              )}
            </div>
          )}
        </td>
      </tr>
    </>
  );
}
