import * as C from './style'

import { TableItem } from '../TableItem'
import { Item } from '../../types/Item'

type Props = {
  items: Item[]
}

export const TableArea = ({ items }: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <th>Data</th>
          <th>Categoria</th>
          <th>Título</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </tbody>
    </C.Table>
  )
}
