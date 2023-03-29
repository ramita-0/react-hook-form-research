import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Button, Col, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export default function EdicionRemito() {
  const { control, setValue, getValues} = useFormContext()

  const notaRemitoValue = getValues("notaRemito")

  const [modal, setModal] = useState(false);
  const [nuevaNotaRemito, setnuevaNotaRemito] = useState(getValues("notaRemito"));

  const toggleEdicion = () => setModal(!modal);

  const handleChangeNuevaNotaRemito = texto => {
    setnuevaNotaRemito(state => texto);
  };

  return (
    <div style={{ width: '450px' }}>
      <div>
        <h6>
          <span style={{ fontWeight: '500' }}>Notas para remito</span>
        </h6>
        <p style={{ marginBottom: '30px' }}>Seran transcriptas al remito textualmente:</p>
        <FormGroup row>
          <Col sm={10}>
            <Controller
              name='notaRemito'
              control={control}
              render={(field) => {
                <Input value={notaRemitoValue} name="notaRemito" type="textarea" disabled style={{ height: '150px' }} />
              }} 
            />
          </Col>
        </FormGroup>
        <Button style={{ backgroundColor: '#FFB440', borderColor: '#FFB440', marginLeft: '300px' }} onClick={e => toggleEdicion()}>
          Editar
        </Button>
      </div>

      <Modal isOpen={modal} toggle={toggleEdicion}>
        <ModalHeader toggle={toggleEdicion}>Modificar el remito</ModalHeader>
        <ModalBody>
          {/* No lo pongo dentro del form porque este estado no me interesa hasta que le de Aceptar */}
          <Input type="textarea" rows={5} value={nuevaNotaRemito} onChange={e => handleChangeNuevaNotaRemito(e.target.value)} />
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={e => {
              toggleEdicion();
              setValue("notaRemito", nuevaNotaRemito)
            }}
          >
            Guardar
          </Button>{' '}
          <Button
            color="danger"
            onClick={() => {
              toggleEdicion();
              handleChangeNuevaNotaRemito(notaRemitoValue);
            }}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
