import { Container } from "./style";

export function TransactionTable(){
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
           <td>Titilo</td>
           <td>200</td>
           <td>Site</td>
           <td>2019-20-20</td>
         </tr>
         <tr>
           <td>Titilo</td>
           <td>200</td>
           <td>Site</td>
           <td>2019-20-20</td>
         </tr>
         <tr>
           <td>Titilo</td>
           <td>200</td>
           <td>Site</td>
           <td>2019-20-20</td>
         </tr>
         <tr>
           <td>Titilo</td>
           <td>200</td>
           <td>Site</td>
           <td>2019-20-20</td>
         </tr>
       </tbody>
     </table>
   </Container>
  );
}