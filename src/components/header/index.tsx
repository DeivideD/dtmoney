import { useState } from "react";
import logoImg from "../../assets/logo.svg"
import { ModalHome } from "../modal";
import { Container, Content } from "./style"


export function Header() {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="money" />
        <button onClick={() => setIsOpen(true)}> Nova transação</button>
      </Content>
      <ModalHome modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
    </Container>
  )
}