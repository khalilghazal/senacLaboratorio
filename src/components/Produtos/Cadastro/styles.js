import styled from "styled-components";

export const Container=styled.div`
background:#dfdfdf;
width:50%;
display:flex;
padding:40px;
padding-top:0px;
margin-left:25%;
margin-top:25px;
`;

export const Form = styled.form`

`;
export const H3 = styled.h3`
text-align:center;
font-size:35px;
`;

export const Input = styled.input`
padding:10px;
width:97%;
margin-top:9px;
`;

export const Textarea = styled.textarea`
padding:10px;
border-radius:5px;
margin-top:10px;
border:1px solid #b8b8b8;
outline:none;
width:97%;
:focus {
    border:1px solid #90a8de;
    outline:none;
}`;

export const Button= styled.button`
height:40px;
margin-top:20px;
outline:none;
background: rgb(0, 117, 102);
border-radius:5px;
color:white;
font-size:20px;
width:100%;
border: 2px solid #007566;
:active{
  height:35px;
}

`;
// Define our button, but with the use of props.theme this time
export const Button1 = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  width:100%;
  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;
// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}
// Define what props.theme will look like
const theme = {
  main: "mediumseagreen"
};
