import React from "react";
import Header from "../../components/Header";
import {
  TableBoxContainer,
  TableBox,
} from "../../styles/manager/tableManage.module";

export default function TableManagePage() {
  // 임의로 7개로 지정
  const tables = Array.from({ length: 7 }, (_, index) => ({
    id: index + 1,
    name: `${index + 1}번`,
  }));

  return (
    <>
      <Header />
      <TableBoxContainer>
        {tables.map((table) => (
          <TableBox key={table.id}>{table.name}</TableBox>
        ))}
      </TableBoxContainer>
    </>
  );
}
