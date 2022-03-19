import styled from 'styled-components'
import { Header } from './components/header'
import { GlobalStyle } from './assets/style/global';
import { Dashboard } from './components/dashboard';
import { Home } from './components/pages/home';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Home /> 
    </>
  );
}
