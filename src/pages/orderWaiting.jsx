import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import {
  CategoryBar,
  CategoryBox1,
  ModalContainer,
  Modal,
  Button,
  ModalContent,
} from "../styles/main.module";
import useModal from "../hooks/useModal";

export default function OrderWaitingPage() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Header />
      <CategoryBar>
        <CategoryBox1 onClick={openModal}>주문접수</CategoryBox1>
      </CategoryBar>
      <SideBar />

      {isOpen && (
        <ModalContainer>
          <Modal>
            <ModalContent>새로운 주문이 도착하였습니다!</ModalContent>
            <Button onClick={closeModal}>주문확인</Button>
          </Modal>
        </ModalContainer>
      )}
    </>
  );
}
