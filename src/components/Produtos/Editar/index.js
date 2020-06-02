import React, { useCallback, useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import "./styles.css";


function Editar({ product, callBack }) {
  const [produto, setproduto] = useState({
    sku: "",
    name: "",
    price: "",
  });

  const [products,addProduct] =useState([]);
  const history = useHistory();

  useEffect(() => {
    setproduto(product);
  }, [product]);

  const handleChange = useCallback(
    (e) => {
      setproduto({
        ...produto,
        [e.target.name]: e.target.value,
      });
    },
    [produto]
  );

  const handleSubmit = useCallback((e) => {
    
  
    var produtos=JSON.parse(localStorage.getItem("produtos")) ;
  
    produtos.find(x=>x.sku==produto.sku).value=produto;
    for( var i=0;i<produtos.length;i++){
      if(produtos[i].sku==produto.sku){
        produtos[i]=produto;
        localStorage.setItem("produtos",JSON.stringify(produtos))
      }
        
    }
 
    //console.log( callBack)
    
  }, [callBack, produto]);

  return (
    <div className="modal">
      <span>SKU</span>
      <input
        className="input"
        type="text"
        onChange={handleChange}
        name="sku"
        value={produto.sku}
        readOnly
      />

      <span>Name</span>
      <input
        className="input"
        onChange={handleChange}
        name="name"
        value={produto.name || ""}
      />

      <span>price</span>
      <input
        className="input"
        onChange={handleChange}
        name="price"
        value={produto.price || ""}
      />

<button type="button" className="button" onClick={() => { handleSubmit(); callBack({
            tipoAcao: "success",
          });}} >
        Editar
      </button>
     
      <button
        type="button"
        className="button"
        onClick={() =>
          callBack({
            tipoAcao: "closeModal",
          })
        }
      >
        Close
      </button>
    </div>
  );
}

export default Editar;
