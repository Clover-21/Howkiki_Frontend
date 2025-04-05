import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/manager/Header";
import TableModal from "../../components/manager/tableModal";
import { apiClient } from "../../api/apiClient";
import {
  TableBoxContainer,
  TableBox,
  HasOrderTableNum,
  TableNum,
  MoreOrders,
  HasOrderBox,
  MenuWrap,
  MenuName,
  Quantity,
  Line,
  TotalPriceWrapper,
  TotalPrice,
} from "../../styles/manager/tableManage.module";

export default function TableManagePage() {
  const { storeId } = useParams();
  const [tables, setTables] = useState([]);
  const [orders, setOrders] = useState([]);
  const [isTableModalOpen, setIsTablelModalOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);

  const handleTableOrder = (table) => {
    setSelectedTable(table);
    setIsTablelModalOpen(true);
  };

  useEffect(() => {
    const fetchTables = () => {
      const baseTables = Array.from({ length: 7 }, (_, index) => ({
        id: index + 1,
      }));
      setTables(baseTables);
    };

    const fetchOrders = async () => {
      try {
        const response = await apiClient.get(
          `/stores/${storeId}/orders/tables/all`
        );
        setOrders(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("주문 데이터 가져오기 실패:", error);
      }
    };

    fetchTables();
    fetchOrders();
  }, []);

  return (
    <>
      <Header />
      <TableBoxContainer>
        {tables.map((table) => {
          const matchingOrder = orders.find(
            (order) => order.tableNumber === table.id
          );
          return (
            <TableBox key={table.id} onClick={() => handleTableOrder(table)}>
              {matchingOrder ? (
                <>
                  <HasOrderBox>
                    <HasOrderTableNum>{table.id}번</HasOrderTableNum>
                    {matchingOrder.orderDetail
                      .slice(0, 2)
                      .map((order, index) => (
                        <MenuWrap key={index}>
                          <MenuName>{order.menuName}</MenuName>
                          <Quantity>{order.quantity}</Quantity>
                        </MenuWrap>
                      ))}
                    {matchingOrder.orderDetail.length > 2 && (
                      <MoreOrders>
                        +외 {matchingOrder.orderDetail.length - 2}개
                      </MoreOrders>
                    )}
                  </HasOrderBox>
                  <Line />
                  <TotalPriceWrapper>
                    <TotalPrice>
                      {matchingOrder?.totalPrice
                        ? matchingOrder.totalPrice.toLocaleString()
                        : "0"}
                      원
                    </TotalPrice>
                  </TotalPriceWrapper>
                </>
              ) : (
                <>
                  <TableNum>{table.id}번</TableNum>
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
      />
    </>
  );
}
