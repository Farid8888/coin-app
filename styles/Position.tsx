import styled from '@emotion/styled'

export const PS1 =styled.div`
position: absolute;
width: 11.79px;
height: 27.42px;
left: 22%;
top: 15%;
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

export const PS2 =styled.div`
position: absolute;
width: 11.79px;
height: 27.42px;
left: 40%;
top: 15%;
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


export const PS3 =styled.div`
position: absolute;
width: 11.79px;
height: 27.42px;
left: 58%;
top: 15%;
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

export const PS4 =styled.div`
position: absolute;
width: 11.79px;
height: 27.42px;
left: 76%;
top: 15%;
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

export const LINE =styled.div`
position: absolute;
width: 57%;
height: 15px;
left: 22%;
top: 21%;
background: #FFD748;
border-radius: 10px;
`

type D={
    dot:string
}

export const DOT=styled.div`
position: absolute;
width: 15px;
border-radius:50%;
height: 15px;
left: ${(props:D)=>(props.dot ? props.dot : '0')};
top: 0;
background: #104987;
`