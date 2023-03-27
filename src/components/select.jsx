import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

export default function Select({label, options, ...params}) {
  return (
    <FormGroup>
      <Label for="exampleSelect">{label}</Label>
      <Input id="exampleSelect" name="select" type="select" {...params}>
        <option value={null} key={0} />
        {options
          ? options.map(otherEntity => (
              <option value={otherEntity.id} key={otherEntity.id}>
                {otherEntity.value}
              </option>
            ))
          : null}
      </Input>
    </FormGroup>
  );
}

