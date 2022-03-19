import { useEffect } from "react";
import { Container } from "./style";

export function TransactionTable(){

  useEffect(() => {

  }, [])
  return(
   <Container>
     <table>
       <thead>
         <tr>
           <th>Totilo</th>
           <th>Valor</th>
           <th>Categoria</th>
           <th>Data</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>Salario</td>
           <td>Site</td>
           <td className="deposit">R$ 2000</td>
           <td>2019-20-20</td>
         </tr>
         <tr>
           <td>Titilo</td>
           <td>Site</td>
           <td className="withdraw">- R$ 200</td>
           <td>2019-20-20</td>
         </tr>
       </tbody>
     </table>
   </Container>
  );
}