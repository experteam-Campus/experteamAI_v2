import React from 'react'
import { DocumentData } from 'firebase/firestore';

type Props = {
    message:DocumentData
}
export default function Message({message}:Props) {
const isItAI = message.user.name==="ExperTeamAI"
console.log('HERE')
console.log(message)

//let msg=message.text.content.split("\n").join("<br/>")


  return (
    
    <div className={`${isItAI&& "bg-slate-200"}`}>
    <div className='flex space-x-5 p-3'>
        <img  className='h-12 w-12' src={message.user.userImg}/>


       {/*(message.text).map((txt:string)=>{
        //<p> {txt}</p> 
 console.log(txt)
})*/}

<p style={{ whiteSpace: "pre-line" }}> {message.text.content}</p> 
   
  </div> 
  
    </div>
  )
}
