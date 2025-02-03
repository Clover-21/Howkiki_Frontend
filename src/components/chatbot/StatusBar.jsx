import React, { useState, useEffect } from "react";
import {
  Container,
  ProgressBar,
  Progress,
  DotWrap,
  Dot,
  Labels,
  Label,
} from "../../styles/components/statusBar.module";

export default function StatusBar() {
  const [orderStatus, setOrderStatus] = useState("NOT_YET_SENT");
  const progressWidths = {
    NOT_YET_SENT: "33%",
    AWAITING_ACCEPTANCE: "100%",
  };

  useEffect(() => {
    const fetchOrderStatus = async () => {
      try {
        const response = await fetch("https:~");
        const data = await response.json();
        setOrderStatus(data.status);
      } catch (error) {
        console.error("Error fetching order status:", error);
      }
    };

    fetchOrderStatus();
  }, []);

  return (
    <Container>
      <ProgressBar>
        <Progress width={progressWidths[orderStatus]} />
        <DotWrap>
          <Dot active={orderStatus === "NOT_YET_SENT"} />
          <Dot active={orderStatus === "AWAITING_ACCEPTANCE"} />
        </DotWrap>
      </ProgressBar>
      <Labels>
        <Label active={orderStatus === "NOT_YET_SENT"}>주문 접수</Label>
        <Label active={orderStatus === "AWAITING_ACCEPTANCE"}>주문 완료</Label>
      </Labels>
    </Container>
  );
}
