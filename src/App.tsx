import { useEffect, useState } from 'react'
import * as C from './App.styles'

import { DashBoard } from './components/InfoArea'
import { InputArea } from './components/InputArea'
import { TableArea } from './components/TableArea'
import { items } from './data/items'
import { Item } from './types/Item'
import { filterItems, getDate } from './utils'

const App = () => {
  const [listItems, setListItems] = useState(items)
  const [filteredItems, setFilteredItems] = useState<Item[]>([])
  const [date, setDate] = useState(getDate())

  useEffect(() => {
    setFilteredItems(filterItems(listItems, date))
  }, [date, listItems])

  return (
    <C.Container className='App'>
      <C.Header className='title'>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.ContainerItem>
        <DashBoard
          setDate={e => setDate(e)}
          date={date}
          items={filteredItems}
        />
        <InputArea addItem={e => setListItems([...listItems, e])} />

        <TableArea items={filteredItems} />
      </C.ContainerItem>
    </C.Container>
  )
}

export default App
