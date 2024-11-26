import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { CategoryBar, CategoryBox1 } from "../styles/main.module";

export default function OrderCheckPage() {
  return (
    <>
      <Header />
      <CategoryBar>
        <CategoryBox1>주문접수</CategoryBox1>
      </CategoryBar>
      <SideBar />
    </>
  );
}
