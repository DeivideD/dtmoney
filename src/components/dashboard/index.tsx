import { Summary } from "../summary/idex";
import { Container } from "./style";
import totalImg  from '../../assets/total.svg'
import incomeImg  from '../../assets/income.svg'
import outcomeImg  from '../../assets/outcome.svg'

export function Dashboard(){
return(
  <Container> 
    <Summary title="Entradas" image={incomeImg} value={150} />
    <Summary title="Saidas" image={outcomeImg} value={50} />
    <Summary className={true} title="Total" image={totalImg} value={100} />
  </Container>
 );
}
