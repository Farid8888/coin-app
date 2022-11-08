import styled from "@emotion/styled"


export const Card =styled.div`
width:30rem;
max-width:90%;
margin:4rem auto;
`


export const Box =styled.div`
    position:absolute;
height: 460px;
width:460px;
background-color:white;
box-sizing: border-box;
&:before{
    content: "";
   
  position: absolute;
  inset: 0;
  border-radius: 50px; 
  padding: 10px; 
  background:linear-gradient(198.7deg, #7F75F0 -40.02%, #101F32 96.22%); 
  -webkit-mask: 
     linear-gradient(#fff 0 0) content-box, 
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude; 
}
border-radius: 54px;
`




export const H1 =styled.h1`
position: absolute;
left: 30.8%;
right: 25.1%;
font-family: 'Helvetica';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 44px;
display: flex;
align-items: center;
text-align: center;
color: #423F45;
`









