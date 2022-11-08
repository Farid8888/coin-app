import styled from '@emotion/styled'


export const VALHEADER =styled.h1`
position: absolute;
left: 33.94%;
right: 42.35%;
top: 27.64%;
bottom: 55.93%;
font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 44px;
display: flex;
align-items: center;
text-align: center;

color: #423F45;
`

export const VAL1=styled.div`
position: absolute;
width: 15px;
height: 29px;
left: 5%;
top:43%;
font-family: 'Calibri';
font-style: normal;
font-weight: 700;
font-size:15px;
line-height: 29px;
text-align: center;
color: #4F4B61;
cursor:pointer;
&:hover{
    color:blue
}
`

export const VAL2=styled.div`
position: absolute;
width: 15px;
height: 29px;
left: 21.6%;
top:43%;
font-family: 'Calibri';
font-style: normal;
font-weight: 700;
font-size:15px;
line-height: 29px;
text-align: center;
color: #4F4B61;
cursor:pointer;
&:hover{
    color:blue
}
`


export const VAL3=styled.div`
position: absolute;
width: 15px;
height: 29px;
left: 38.3%;
top:43%;
font-family: 'Calibri';
font-style: normal;
font-weight: 700;
font-size:15px;
line-height: 29px;
text-align: center;
color: #4F4B61;
cursor:pointer;
&:hover{
    color:blue
}
`

export const VAL4=styled.div`
position: absolute;
width: 15px;
height: 29px;
left: 54.86%;
top:43%;
font-family: 'Calibri';
font-style: normal;
font-weight: 700;
font-size:15px;
line-height: 29px;
text-align: center;
color: #4F4B61;
cursor:pointer;
&:hover{
    color:blue
}
`

export const VAL5=styled.div`
position: absolute;
width: 15px;
height: 29px;
left: 71.52%;
top:43%;
font-family: 'Calibri';
font-style: normal;
font-weight: 700;
font-size:15px;
line-height: 29px;
text-align: center;
color: #4F4B61;
cursor:pointer;
&:hover{
    color:blue
}
`

export const VAL6=styled.div`
position: absolute;
width: 15px;
height: 29px;
left: 88.2%;
top:43%;
font-family: 'Calibri';
font-style: normal;
font-weight: 700;
font-size:15px;
line-height: 29px;
text-align: center;
color: #4F4B61;
cursor:pointer;
&:hover{
    color:blue
}
`

export const VALLINE =styled.div`
position: absolute;
width: 89%;
height: 15px;
left: 5%;
top: 49%;
background: #FFD748;
border-radius: 10px;
`

type D ={
    dot:string
}
export const VALDOT=styled.div`
position: absolute;
width: 15px;
border-radius:50%;
height: 15px;
left:${(props:D)=>(props.dot ? props.dot : '0')};
top: 0;
background: #104987;
`

export const UP =styled.div`
position: absolute;
width: 37%;
height: 25.44px;
left: 5%;
top: 60%;
background: #FFD748;
border-radius: 20px;
text-align:center;
font-weight:bold;
cursor:pointer;
&:hover{
    background-color:orange
}
`


export const DOWN =styled.div`
position: absolute;
width: 37%;
height: 25.44px;
right: 5%;
top: 60%;
background: #FFD748;
border-radius: 20px;
text-align:center;
font-weight:bold;
cursor:pointer;
&:hover{
    background-color:orange
}
`

export const PLAY =styled.button`
position: absolute;
left: 35%;
top: 78%;
bottom: 0%;
background: #38DF7A;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
border-radius: 10px;
border:none;
color:white;
width: 29%;
height: 31.44px;
font-weight:bold;
cursor:pointer;
&:hover{
    background-color:green
}
`