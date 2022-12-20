import * as C from './style'

import { categories } from '../../data/categories'
import { useState } from 'react'
import { Item } from '../../types/Item'

type Prop = {
  addItem: (e: Item) => void
}
export const InputArea = ({ addItem }: Prop) => {
  const [dateField, setDateField] = useState('')
  const [categoryField, setCategoryField] = useState('')
  const [titleField, setTitleField] = useState('')
  const [valueField, setValueField] = useState('')

  let categoryKeys: string[] = Object.keys(categories)

  const handleAddEvent = () => {
    let errors: string[] = []

    if (!dateField) {
      errors.push('Data invalida!')
    }
    if (!categoryKeys.includes(categoryField)) {
      errors.push('Categória invalida!')
    }
    if (!titleField) {
      errors.push('Texto invalido!')
    }
    if (!valueField) {
      errors.push('Valor invalido!')
    }

    if (errors.length > 0) {
      alert(errors.join('\n'))
    } else {
      let [year, month, day] = dateField.split('-')
      addItem({
        date: new Date(parseInt(year), parseInt(month) - 1, parseInt(day)),
        category: categoryField,
        title: titleField,
        value: Number(valueField),
      })
    }
  }

  return (
    <C.Container>
      <C.Label>
        {' '}
        Data
        <C.Input
          type='date'
          value={dateField}
          onChange={e => {
            console.log(e.target.value)
            setDateField(e.target.value)
          }}
        />
      </C.Label>
      <C.Label>
        {' '}
        Categoria
        <C.Select onChange={e => setCategoryField(e.target.value)}>
          <option></option>
          {categoryKeys.map((item, index) => (
            <option key={index} value={item}>
              {categories[item].title}
            </option>
          ))}
        </C.Select>
      </C.Label>
      <C.Label>
        {' '}
        Título
        <C.Input type='text' onChange={e => setTitleField(e.target.value)} />
      </C.Label>
      <C.Label>
        {' '}
        Valor
        <C.Input type='number' onChange={e => setValueField(e.target.value)} />
      </C.Label>

      <button onClick={handleAddEvent}>Adicionar</button>
    </C.Container>
  )
}
