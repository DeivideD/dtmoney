import styled from 'styled-components'
import { Header } from './components/header'
import { GlobalStyle } from './assets/style/global';
import { Dashboard } from './components/dashboard';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <Dashboard />
    </>
  );
}
