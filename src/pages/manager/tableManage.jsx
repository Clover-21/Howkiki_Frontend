import React from "react";
import Header from "../../components/Header";
import {
  TableBoxContainer,
  TableBox,
  TableNum,
  PeopleNum,
} from "../../styles/manager/tableManage.module";

export default function TableManagePage() {
  // 임의로 7개로 지정
  const tables = Array.from({ length: 7 }, (_, index) => ({
    id: index + 1,
    name: `${index + 1}번`,
    peoplenum: [2, 4, 4, 2, 2, 4, 2][index],
  }));

  return (
    <>
      <Header />
      <TableBoxContainer>
        {tables.map((table) => (
          <TableBox key={table.id}>
            <TableNum>{table.name}</TableNum>
            <PeopleNum>{table.peoplenum}</PeopleNum>
          </TableBox>
        ))}
      </TableBoxContainer>
    </>
  );
}
