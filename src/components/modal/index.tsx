
import { Container, TrasactionTypeContainer, ButtonBox } from './style';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useContext, useState } from 'react';
import { api } from '../../service/api';
import { TrasactionContext } from '../../contexts/context';
import { Transition } from '../../model/transaction';

Modal.setAppElement('#root');
interface Props {
  modalIsOpen: boolean;
  setIsOpen: (modalOpen: boolean) => void
}

export function ModalHome(props: Props) {
  const [type, setType] = useState('entrada');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const { transactions, setTransactions } = useContext(TrasactionContext);


  function onCloseModal() {
    props.setIsOpen(false);
  }

  async function hadleCreateNewTrasaction(e: FormEvent) {
    e.preventDefault();
    const createdAt = '2022-04-22'
    const data: Transition = {
      type,
      title,
      amount,
      category,
      createdAt
    }

    const dataPersist  = await api.post('new-transaction', data)
    const transaction: Transition = dataPersist.data.transaction;
    console.log(transaction)
    setTransactions([
        ...transactions, 
        transaction
    ]
    );
    onCloseModal();
  }
  
  return (

    <Modal
      overlayClassName='react-modal-overlay'
      className="react-modal-content"
      isOpen={props.modalIsOpen}
      onRequestClose={onCloseModal}
      contentLabel="Example Modal"
    >
      <button
        type="button"
        onClick={onCloseModal}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={hadleCreateNewTrasaction}>
        <h2>Nova Transação</h2>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Titulo" />
        <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} placeholder="valor" /><br />
        <TrasactionTypeContainer>
          <ButtonBox
            type="button"
            isActive={type === 'entrada'}
            onClick={() => setType("entrada")}
            activeColor="#33CC95"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </ButtonBox>
          <ButtonBox
            type="button"
            isActive={type === 'saida'}
            onClick={() => setType("saida")}
            activeColor="#E52E4D"
          >
            <img src={outcomeImg} alt="saida" />
            <span>Saida</span>
          </ButtonBox>
        </TrasactionTypeContainer>
        <input type="text" value={category} onChange={e => setCategory(e.target.value)} placeholder="Categoria" /><br />
      
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}