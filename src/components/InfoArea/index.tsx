import * as C from './style'

import { useEffect, useState } from 'react'
import { formatCurrency } from '../../utils'
import { Item } from '../../types/Item'
import { categories } from '../../data/categories'

const months = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
]

type Props = {
  items: Item[]
  date: string
  setDate: (e: string) => void
}

export const DashBoard = ({ items, date, setDate }: Props) => {
  const [income, setIncome] = useState(0)
  const [expenses, setExpenses] = useState(0)
  const [total, setTotal] = useState(0)

  let [year, month] = date.split('-')

  useEffect(() => {
    const filterSalary = items
      .filter(item => !categories[item.category].expense)
      .reduce((acc, item) => acc + item.value, 0)

    const filterExpense = items
      .filter(item => categories[item.category].expense)
      .reduce((acc, item) => acc + item.value, 0)

    setIncome(filterSalary)
    setExpenses(filterExpense)
    setTotal(filterSalary - filterExpense)
  }, [items])

  const handlePrevMonth = () => {
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)

    currentDate.setMonth(currentDate.getMonth() - 1)
    setDate(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }

  const handleNextMonth = () => {
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)

    currentDate.setMonth(currentDate.getMonth() + 1)
    setDate(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }

  return (
    <C.Container>
      <C.MonthArea>
        <button onClick={handlePrevMonth}>⬅</button>
        <p>
          {months[parseInt(month) - 1]} de {year}
        </p>
        <button onClick={handleNextMonth}>➡</button>
      </C.MonthArea>

      <div className='resume-area'>
        <p className='title'>Receita</p>
        <p className='text-current'>{formatCurrency(income)}</p>
      </div>
      <div className='resume-area'>
        <p className='title'>Despesa</p>
        <p className='text-current'>{formatCurrency(expenses)}</p>
      </div>
      <div className='resume-area'>
        <p className='title'>Balanço</p>
        <C.TextCurrenty value={total >= 0} className='text-current'>
          {formatCurrency(total)}
        </C.TextCurrenty>
      </div>
    </C.Container>
  )
}
