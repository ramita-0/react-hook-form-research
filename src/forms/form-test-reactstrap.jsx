import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input } from "reactstrap"

export default function FormTestReactstrap(props) {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      nombre: "",
      apellido: "",
      edad: ""
    }
  })
  
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleToggle = () => {
    setDropdownOpen(state => !state)
  }
  const [testValue, setTestValue] = useState("")
  const [reRenders, setReRenders] = useState(0)

  useEffect(() => setReRenders(a => a+1), [])

  return( 
    <div>
      <h1>{reRenders}</h1>
      <div>
        <input placeholder="Testinput" value={testValue} onChange={e => setTestValue(e.target.valuesasdsasdsasdsa)}></input>
      </div>
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <Controller 
        control={control}
        name={"nombre"}
        render={({field}) => (
          <Input {...field} type="text" placeholder="Nombre"></Input>
        )}
        
        />

        <Input {...register("apellido")} type="text" placeholder="Apellido"></Input>
        <Dropdown isOpen={dropdownOpen} toggle={handleToggle} direction="down" style={{margin:"50px 0 50px 0"}}>
          <DropdownToggle caret>Seleccione su edad</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>17</DropdownItem>
            <DropdownItem>18</DropdownItem>
            <DropdownItem>19</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <input type="submit" />
      </form>
    </div>
  )
}