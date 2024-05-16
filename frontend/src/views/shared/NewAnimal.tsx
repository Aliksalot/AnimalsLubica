import { AnimalTypes } from '../../../../src/shared/types/models.ts';
import style from './NewAnimal.module.css';

export default function  NewAnimal() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = (event.target) as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      type: formData.get('type'),
      age: formData.get('age')
    }
    fetch('/api/new-animal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(data)
    })
    .then(() => {
      alert("Create success")
      window.location.href='/';
    })
  }
  return (
    <>
      <form
        className={style.form}
        onSubmit={handleSubmit}
      >
        <h1>
          Create new Animal
        </h1>
        <label
        >
          What's the name of the animal?
        </label>
        <input placeholder='Name' name='name' />
        <label
        >
          What is the age of the animal (in months)?
        </label>
        <input type='number' min={1} step={1} name='age' placeholder='Age' />
        <label
        >
          Choose Animal Type
        </label>
        <select
          defaultValue={'none'}
          name='type'
        >
          <option disabled value = 'none'>Animal type</option>
          {AnimalTypes.map((type, index) => (
            <option value={type} key={index}>{type}</option>
          ))}
        </select>
        <button
        >Create</button>

      </form>
    </>
  )
}
