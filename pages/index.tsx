import React,{useState} from "react";
import { Card, Box, H1 } from "../styles/Card";
import { PS1, PS2,PS3,PS4,LINE,DOT } from "../styles/Position";
import {VALHEADER,VAL1, VAL2, VAL3, VAL4,VAL5,VAL6,VALLINE,VALDOT,UP,DOWN,PLAY} from '../styles/Values'

const Index=()=> {
  const [pos,setPos] = useState<string>('')
  const [val,setVal] = useState<string>('')
  const fstHandler =()=>{
      setPos('0')
  }
  const sndHandler =()=>{
    setPos('31.5%')
  }
  const thHandler =()=>{
    setPos('63%')
  }
  const fthHandler =()=>{
    setPos('94.5%')
  }
const fstVal =()=>{
  setVal('0')
}
const sndVal =()=>{
  setVal('18.7%')
}

const thVal =()=>{
  setVal('37.5%')
}
const frVal =()=>{
  setVal('56.2%')
}

const fthVal =()=>{
  setVal('74.9%')
}

const sVal =()=>{
  setVal('96.5%')
}
  return (
    <Card>
      <Box>
        <H1>Кол-во предметов</H1>
        <PS1 onClick={fstHandler}>2</PS1>
        <PS2 onClick={sndHandler}>3</PS2>
        <PS3 onClick={thHandler}>4</PS3>
        <PS4 onClick={fthHandler}>5</PS4>
        <LINE>
          <DOT dot={pos}/>
        </LINE>
        <VALHEADER>Значения</VALHEADER>
        <VAL1 onClick={fstVal}>A</VAL1>
        <VAL2 onClick={sndVal}>9</VAL2>
        <VAL3 onClick={thVal}>19</VAL3>
        <VAL4 onClick={frVal}>50</VAL4>
        <VAL5 onClick={fthVal}>99</VAL5>
        <VAL6 onClick={sVal}>999</VAL6>
        <VALLINE>
         <VALDOT dot={val}/>
        </VALLINE>
        <UP>По возрастанию</UP>
        <DOWN>По убыванию</DOWN>
        <PLAY>Играть</PLAY>
      </Box>
    </Card>
  );
}

export default Index