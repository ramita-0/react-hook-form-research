import React, { useState } from 'react';
import { Button, Input, InputGroup } from 'reactstrap';

export default function NuevoMailAdicionalInput({ handleAgregarMail }) {
  const [nuevoMail, setNuevoMail] = useState('');

  return (
    <div>
      <InputGroup style={{ width: '350px' }}>
        <Input placeholder="Agregar destinatario..." value={nuevoMail} onChange={e => setNuevoMail(e.target.value)} />
        <Button
          color="success"
          onClick={e => {
            handleAgregarMail(nuevoMail);
            setNuevoMail(state => '');
          }}
        >
          <span style={{ fontWeight: '600' }}>+</span>
        </Button>
      </InputGroup>
    </div>
  );
}
