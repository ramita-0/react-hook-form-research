import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Input } from "reactstrap";

function FieldArray() {
  const { control, register, handleSubmit } = useForm();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "mailsOpcionales", // unique name for your Field Array
  });

  const [nuevoMail, setnuevoMail] = useState(undefined)
  
  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <Input type="text" value={nuevoMail} onChange={e => setnuevoMail(state => e.target.value)} />
      <button onClick={() => append(nuevoMail)}>Agregar mail</button>
      <ul>
        <li>
          {fields.map((field, index) => (
            <input
              key={field.id} // important to include key with field's id
              {...register(`mailsOpcionales.${index}.value`)} 
            />
          ))}
        </li>
        <button type="submit">Submit</button>

      </ul>
    </form>
  );
}
export default FieldArray