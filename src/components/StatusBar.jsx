import React from "react";
import {
  Container,
  ProgressBar,
  Progress,
  Labels,
  Label,
} from "../styles/statusBar.module";

const StatusBar = () => {
  return (
    <Container>
      <ProgressBar>
        <Progress width="33%" />
      </ProgressBar>
      <Labels>
        <Label active>주문 접수</Label>
        <Label>주문 완료</Label>
      </Labels>
    </Container>
  );
};

export default StatusBar;
