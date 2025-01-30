import React, { useState } from "react";
import Header from "../../components/Header";
import TableModal from "../../components/TableModal";
import {
  TableBoxContainer,
  TableBox,
  TableNum,
  PeopleNum,
  HasOrderBox,
  MenuWrap,
  MenuName,
  Quantity,
  Line,
  TextWrapper,
  EmptyText,
  TotalPriceWrapper,
  TotalPrice,
} from "../../styles/manager/tableManage.module";

export default function TableManagePage() {
  const [isTableModalOpen, setIsTablelModalOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);

  // 임의로 작성
  const tables = Array.from({ length: 7 }, (_, index) => ({
    id: index + 1,
    name: `${index + 1}번`,
    peoplenum: [2, 4, 4, 2, 2, 4, 2][index],
    orders:
      index === 0
        ? [
            { id: 1, name: "라구짜장과 계란튀김", quantity: 1, price: 15000 },
            { id: 2, name: "소롱포", quantity: 1, price: 7500 },
            { id: 3, name: "블랙하가우", quantity: 1, price: 9500 },
            { id: 4, name: "코카콜라", quantity: 2, price: 8000 },
          ]
        : index === 2
        ? [
            { id: 3, name: "블랙하가우", quantity: 2, price: 9500 },
            { id: 4, name: "코카콜라", quantity: 1, price: 8000 },
          ]
        : [],
  }));

  const handleTableOrder = (table) => {
    setSelectedTable(table);
    setIsTablelModalOpen(true);
  };

  const calculateTotalPrice = (orders) => {
    if (!orders || orders.length === 0) return 0;
    return orders.reduce(
      // 값을 누적하는 함수
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  const getTableData = (table) => {
    const hasOrder = table.orders.length > 0;
    const visibleMenu = table.orders.slice(0, 2);
    const remainingMenuCount = table.orders.length - visibleMenu.length;
    const totalPrice = calculateTotalPrice(table.orders);

    return { hasOrder, visibleMenu, remainingMenuCount, totalPrice };
  };

  return (
    <>
      <Header />
      <TableBoxContainer>
        {tables.map((table) => {
          const { hasOrder, visibleMenu, remainingMenuCount, totalPrice } =
            getTableData(table);

          return (
            <TableBox
              hasOrder={hasOrder}
              key={table.id}
              onClick={() => handleTableOrder(table)}
            >
              {hasOrder ? (
                <>
                  <HasOrderBox>
                    <TableNum hasOrder={hasOrder}>{table.name}</TableNum>
                    {visibleMenu.map((order, index) => (
                      <MenuWrap key={index}>
                        <MenuName>{order.name}</MenuName>
                        <Quantity>{order.quantity}</Quantity>
                      </MenuWrap>
                    ))}
                    {remainingMenuCount > 0 && (
                      <TextWrapper>
                        <EmptyText>+ 외 {remainingMenuCount}개</EmptyText>
                      </TextWrapper>
                    )}
                  </HasOrderBox>
                  <Line />
                  <TotalPriceWrapper>
                    <TotalPrice>{totalPrice.toLocaleString()}원</TotalPrice>
                  </TotalPriceWrapper>
                </>
              ) : (
                <>
                  <TableNum>{table.name}</TableNum>
                  <PeopleNum>{table.peoplenum}</PeopleNum>
                </>
              )}
            </TableBox>
          );
        })}
      </TableBoxContainer>
      <TableModal
        isOpen={isTableModalOpen}
        onClose={() => setIsTablelModalOpen(false)}
        table={selectedTable}
        menu={selectedTable?.orders || []}
        totalPrice={calculateTotalPrice(selectedTable?.orders || [])}
      />
    </>
  );
}
