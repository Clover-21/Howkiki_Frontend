import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import useModal from "../../hooks/useModal";
import TableModal from "../../components/tableModal";
import {
  TableBoxContainer,
  TableBox,
  TableNum,
  PeopleNum,
} from "../../styles/manager/tableManage.module";

export default function TableManagePage() {
  const { isOpen, onClose } = useModal();
  const [isTableModalOpen, setIsTablelModalOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);

  // 임의로 지정
  const tables = Array.from({ length: 7 }, (_, index) => ({
    id: index + 1,
    name: `${index + 1}번`,
    peoplenum: [2, 4, 4, 2, 2, 4, 2][index],
  }));

  const menu = Array.from({ length: 4 }, (_, index) => ({
    id: index + 1,
    name: ["라구짜장과 계란튀김", "소롱포", "블랙하가우", "코카콜라"][index],
    quantity: [1, 1, 1, 2][index],
    price: ["15,000원", "7,500원", "9,500원", "8000원"][index],
  }));

  const handleTableOrder = (table) => {
    setSelectedTable(table);
    setIsTablelModalOpen(true);
  };

  useEffect(() => {}, [isOpen, onClose]);

  return (
    <>
      <Header />
      <TableBoxContainer>
        {tables.map((table) => (
          <TableBox key={table.id} onClick={() => handleTableOrder(table)}>
            <TableNum>{table.name}</TableNum>
            <PeopleNum>{table.peoplenum}</PeopleNum>
          </TableBox>
        ))}
      </TableBoxContainer>
      <TableModal
        isOpen={isTableModalOpen}
        onClose={() => setIsTablelModalOpen(false)}
        table={selectedTable}
        menu={menu}
      />
    </>
  );
}
