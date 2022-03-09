import { useTable, useSortBy } from 'react-table';
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"

const RTable =({ columns, data }) => {
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  useTable(
{
  columns,
  data,
},
  useSortBy
  );
  return (
    <Table {...getTableProps()} variant="striped" colorScheme="red">
        <Thead>
          {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}{" "}
                {column.isSorted ? (column.isSortedDesc ? " V" : " ^") : ""}
                </Th>
            ))}
          </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
           prepareRow(row);
           return (
              <Tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
              })}
              </Tr>
           );
        })}
        </Tbody>
    </Table>
  );
};
export default RTable;
