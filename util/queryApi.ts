
import { useCollection } from "react-firebase-hooks/firestore";
import { addDoc, collection, getDocs, orderBy, serverTimestamp} from 'firebase/firestore';
import openai from "./chatgpt";
import { useSession } from "next-auth/react";
import { db } from "../firebase";
import { useState } from "react";



const query =async (prompt:any,model:string) => {
  //  const {prompt, chatId,modal,session}= req.body;
  //const [prePrompt, setprePrompt]=useState<any[]>([]);

//let newPrompt = "";
{/*get prevease masseges for the prompt */}
//const querySnapshot = await getDocs(collection(db,'users',session?.user?.email!, 'chats', chatId, 'messages'));
//querySnapshot.forEach((doc) => {
 //doc.data() is never undefined for query doc snapshots

//console.log(doc.data())


 //console.log(doc.id, " => ", doc.data().text);
 //setprePrompt(prePrompt=>[...prePrompt, doc.data().text])

console.log(prompt)
console.log(model)
    const completion  = await openai.createChatCompletion({
        model,
        messages:prompt,
        
    })
    .then((completion)=>{
        console.log("completion")
        console.log(completion.data.choices[0].message)
      //  console.log( completion.data.choices[0].message?.content.split('/n'))
       return completion.data.choices[0].message
       // return completion.data
      // return completion.data.choices[0].message
            
    }).catch((error)=>{`Somthing want worng, please try again - Error num: ${error.message}`});

//setprePrompt([])
   return completion;
}

export default query;