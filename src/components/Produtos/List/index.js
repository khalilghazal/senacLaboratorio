import React, {
    useEffect,
    useState,
    useCallback,
  } from "react";
  import Editar from "../Editar";
  import "./style.css";
function List(){

    const loadProdutos=useCallback(() => {
        const prods=JSON.parse(localStorage.getItem("produtos")) ;
        console.log(prods);
        SetProdutos(prods);
          
      }, []);
    
      const callBackEdit = (dataFromChild) => {
        const { tipoAcao } = dataFromChild;
        console.log(tipoAcao)
        if (tipoAcao === "success") {
          loadProdutos();
          setCurrentProduto(null);
        } else if (tipoAcao === "closeModal") {
            setCurrentProduto(null);
        }
      };
const[produtos,SetProdutos]=useState([])  
const [currentProduto, setCurrentProduto] = useState(null);

function deletar(product){
  console.log('deletar '+ JSON.stringify(product))
  var prods=JSON.parse(localStorage.getItem("produtos")) ;
  for( var i=0;i<prods.length;i++){
    if(prods[i].sku===product.sku){
      prods = prods.slice(i+1)
      localStorage.setItem("produtos",JSON.stringify(prods))
      loadProdutos();
    }
      
  }
}



useEffect(()=>{
SetProdutos(JSON.parse(localStorage.getItem("produtos")));


},[])
return  (
    <div>
      
      <h1>Total Products:  {produtos.length}</h1>

      <table>
        <thead>
          <tr>
            <th>SKU</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.sku}>
              <td>{produto.sku}</td>
              <td>{produto.name}</td>
              <td>{produto.price}</td>
              <td>
              <button onClick={() => setCurrentProduto(produto)}>Editar</button>
              <button onClick={() => deletar(produto)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {currentProduto && <Editar product={currentProduto} callBack={callBackEdit} />}
    </div>
  );


}
export default List;