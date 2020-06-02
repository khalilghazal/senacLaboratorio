import React, { useState, useEffect, useCallback } from "react";
import {Container,Form,Input,Textarea,Button,H3} from "./styles";
function Cadastro(){


    const initialValue={
        sku:"",
        name:"",
        description:"",
        price:"",
        quantity:"",
        image:""
    };
    const [messageError, setMessageError] = useState(null);
    const [product,setProduct] =useState(initialValue);
    const [products,addProduct] =useState([]);
   
   const handleKeyUp=useCallback((e)=>{ 
    let value;
    
            value=e.target.value;
            value=value.replace(/\D/g,"")
            value=value.replace(/(\d)(\d{2})$/,"$1,$2")
            value=value.replace(/(?=(\d{3})+(\D))\B/g,".")
            e.target.value=value;
        
   },[])
   
   
   
   
    const handleChange= useCallback(
        
        (e)=>{
            
        setProduct({
            ...product,
            [e.target.name]:e.target.value,
        });
    },
    [product]
    );


    const handleSubmit= useCallback((e)=>{
        e.preventDefault();
        var prods=JSON.parse(localStorage.getItem("produtos")) ;

        

        if(isValidate()){
            
    
      
        const prods=[...products,product]

        for( var i=0;i<products.length;i++){
            if(products[i].sku===product.sku){
                setMessageError('id already exists'  )
            return true;
            }
      
        }
        addProduct( [...products, product]);
        localStorage.setItem("produtos",JSON.stringify(prods))
        console.log(products)
        setMessageError('Produto Adicionado com sucesso '  )   
        }
        else console.log("Fail")
       
     
    }

    )
    function skuExists(){
        var prods=JSON.parse(localStorage.getItem("produtos")) ;
        
        for( var i=0;i<prods.length;i++){
            if(prods[i].sku===product.sku){
                setMessageError('id already exists'  )
            return true;
            }
      
        }
        return false;
    }
    function isValidate() {
        var result="";
       
        if(product.sku === "") result=result+" sku,";
        if(product.name === "") result=result+" name,";
        if(product.description === "") result=result+" description,";
        if(product.quantity === "") result=result+" quantity,";
        if(product.image === "") result=result+" image,";
        if(product.price === "") result=result+" price,";

        if(result.length>0){
            result="* " +result+" estão obrigatorio(s)";
            setMessageError(result  )
            return false;
        }
        else {      
            setMessageError(null)
            return true;
          }
      }

    return (
    <Container>
        

        <Form onSubmit={handleSubmit}>
        <H3>cadastro</H3>
        <Input   placeholder="SKU" onChange={handleChange}  name="sku" value={product.sku}/>
        <Input   placeholder="nome"  onChange={handleChange} name="name" value={product.name}/>
        <Textarea   placeholder="description" onChange={handleChange}  name="description" value={product.description}></Textarea>
        <Input  onKeyUp={handleKeyUp} placeholder="preço" onChange={handleChange}  name="price" value={product.price}/>
        <Input  type="number" placeholder="quantity" onChange={handleChange}  name="quantity" value={product.quantity}/>
        <Input   placeholder="image" onChange={handleChange} name="image" value={product.image}/>
        <Button>Cadastrar</Button>
        {messageError && <div >
          <strong>{messageError}</strong>
        </div>}
        </Form>
    </Container>
    );
}
export default Cadastro;