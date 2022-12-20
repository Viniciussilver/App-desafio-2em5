import { Item } from '../types/Item'

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export const getDate = (): string => {
  let year = new Date().getFullYear()
  let month = new Date().getMonth()

  return `${year}-${month + 1}`
}

export const filterItems = (item: Item[], date: string) => {
  let [year, month] = date.split('-')

  const items = item.filter(item => {
    return (
      item.date.getFullYear() == parseInt(year) &&
      item.date.getMonth() + 1 == parseInt(month)
    )
  })

  return items
}

export const formatDate = (date: Date): string => {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDay()

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
}

const addZeroToDate = (n: number): string => (n < 10 ? `0${n}` : `${n}`)
