'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
import LogoPic from '../../public/assets/fullLogo.png';
import CircleLogoPic from '../../public/assets/circleLogo.png';
import Image from 'next/image';
import Hello from './helloPraragrph';

export default function BtnNav() {

const pathName = usePathname();
const router = useRouter();
const [active, setActive] = useState(false);
const [activeChat, setActiveChat] = useState(false);
const [activeCreate, setActiveCreate] = useState(false);
const [clicked, setClicked] = useState(true);

useEffect(() => {
  if (!pathName) return;

setActive(pathName.includes('/'))
setActiveChat(pathName.includes('/chat'))

}, [pathName])



//const clicked=true;

/*  const NavToChat=async () => {
    //   const doc = await addDoc(collection(db, "users", session?.user?.email!, "chats"),{ userId:session?.user?.email!, timeStamp:serverTimestamp()});
      // router.push(`/chat`);
     }

     const NavToQ=async () => {
      //   const doc = await addDoc(collection(db, "users", session?.user?.email!, "chats"),{ userId:session?.user?.email!, timeStamp:serverTimestamp()});
        // router.push(`/questions`);
       }*/


  return (
    <>
 
    {clicked? (

      <div className="rounded-xl  border border-solid border-white backdrop-blur-[28.5px] w-20 absolute z-50" style={{ 
      background: 'rgba(255, 255, 255, 0.57)'
  }}>
    <div className='flex flex-col  p-4  h-full justify-around'>

<div className="logoGradient rounded-lg p-1" style={{background: "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 62.54%);"}}>
<Image src={CircleLogoPic} alt="Experteam AI logo" className='m-auto w-[100%]'/>
</div>

      {/******----1----*******/}
     <div className='flex flex-col  mt-4 items-center gap-3 mb-2'>
      {/*home page */}

      <div className={`rounded-xl group hover:bg-white p-2 w-10 h-10 mb-1 ${active && `bg-white`}`}>
      <Link href={'/'} className='flex justify-center'>
     
<div className='m-auto '>   
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={`text-[#41394B] group-hover:text-[#FF3067] ${active && `text-[#FF3067]`}`}>
<path d="M12 14.9925C10.3432 14.9925 9 16.3357 9 17.9925V23.9925H15V17.9925C15 16.3357 13.6568 14.9925 12 14.9925Z" fill='currentColor'/>
<path d="M17 17.9851V23.9851H21C22.6568 23.9851 24 22.6419 24 20.9851V11.8641C24.0002 11.3446 23.7983 10.8454 23.437 10.4721L14.939 1.28509C13.4396 -0.337257 10.9089 -0.436867 9.28655 1.06257C9.20949 1.13382 9.13523 1.20802 9.06403 1.28509L0.581016 10.4691C0.208734 10.8439 -0.000140554 11.3508 7.09607e-08 11.8791V20.9851C7.09607e-08 22.6419 1.34316 23.9851 3 23.9851H6.99998V17.9851C7.01869 15.2583 9.22027 13.0315 11.8784 12.9674C14.6255 12.9011 16.9791 15.1658 17 17.9851Z" fill='currentColor'/>
<path d="M12 14.9851C10.3432 14.9851 9 16.3283 9 17.9851V23.9851H15V17.9851C15 16.3283 13.6568 14.9851 12 14.9851Z" fill='currentColor'/>
</svg>
</div>
</Link>
</div>

 {/*עוזר אישי */}
 <div className={`rounded-xl group hover:bg-white p-2 w-10 h-10 mb-1 ${activeChat && `bg-white`}`}>
   <Link href={'/chat'} className='flex justify-center '>

    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={`text-[#41394B] group-hover:text-[#FF3067] ${activeChat && `text-[#FF3067]`}`}>
  <path d="M20 24H4C3.448 24 3 23.553 3 23C3 19.691 5.691 17 9 17H15C18.309 17 21 19.691 21 23C21 23.553 20.552 24 20 24ZM20.5 6H20C20 3.794 18.206 2 16 2H13V1C13 0.447 12.552 0 12 0C11.448 0 11 0.447 11 1V2H8C5.794 2 4 3.794 4 6H3.5C2.673 6 2 6.673 2 7.5V9.5C2 10.327 2.673 11 3.5 11H4C4 13.206 5.794 15 8 15H16C18.206 15 20 13.206 20 11H20.5C21.327 11 22 10.327 22 9.5V7.5C22 6.673 21.327 6 20.5 6ZM9.5 10C8.672 10 8 9.328 8 8.5C8 7.672 8.672 7 9.5 7C10.328 7 11 7.672 11 8.5C11 9.328 10.328 10 9.5 10ZM14.5 10C13.672 10 13 9.328 13 8.5C13 7.672 13.672 7 14.5 7C15.328 7 16 7.672 16 8.5C16 9.328 15.328 10 14.5 10Z" fill="currentColor"/>
</svg>
    </div>
   </Link>
</div>
</div>

<hr className="h-px  bg-[#41394B] border-0 m-1 p-[0.75px]"></hr>


 {/******--2--****** */}

<div className='flex flex-col items-center gap-3 mb-3 mt-3'>
 {/*כתיבה*/}
 <div className='rounded-xl group hover:bg-white p-2 w-10 h-10' >
 <Link href={'/create'} className='flex justify-center '>

    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-[#41394B] group-hover:text-[#FF3067]'>
  <path d="M19 0H5C3.6744 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.6744 0 5L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.6744 23.9984 5 24H19C20.3256 23.9984 21.5964 23.4711 22.5338 22.5338C23.4711 21.5964 23.9984 20.3256 24 19V5C23.9984 3.6744 23.4711 2.40356 22.5338 1.46622C21.5964 0.528882 20.3256 0.00158786 19 0ZM17 10C16.7348 10 16.4804 9.89464 16.2929 9.70711C16.1054 9.51957 16 9.26522 16 9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8H13V16H14C14.2652 16 14.5196 16.1054 14.7071 16.2929C14.8946 16.4804 15 16.7348 15 17C15 17.2652 14.8946 17.5196 14.7071 17.7071C14.5196 17.8946 14.2652 18 14 18H10C9.73478 18 9.48043 17.8946 9.29289 17.7071C9.10536 17.5196 9 17.2652 9 17C9 16.7348 9.10536 16.4804 9.29289 16.2929C9.48043 16.1054 9.73478 16 10 16H11V8H9C8.73478 8 8.48043 8.10536 8.29289 8.29289C8.10536 8.48043 8 8.73478 8 9C8 9.26522 7.89464 9.51957 7.70711 9.70711C7.51957 9.89464 7.26522 10 7 10C6.73478 10 6.48043 9.89464 6.29289 9.70711C6.10536 9.51957 6 9.26522 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6H15C15.7956 6 16.5587 6.31607 17.1213 6.87868C17.6839 7.44129 18 8.20435 18 9C18 9.26522 17.8946 9.51957 17.7071 9.70711C17.5196 9.89464 17.2652 10 17 10Z" fill="currentColor"/>
</svg>
    </div>
   </Link>
</div>


{/*תמלול תחקור */}
<div className='rounded-xl group hover:bg-white p-2 w-10 h-10'>
<Link href={'https://www.videoindexer.ai/media/library'} target={'_blank'} className='flex justify-center'>

    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className='text-[#41394B] group-hover:text-[#FF3067]'>
  <path d="M24 23.0025C24 23.5525 23.55 24.0025 23 24.0025C21.46 24.0025 20.71 22.8825 20.17 22.0525C19.67 21.3025 19.42 21.0025 19 21.0025C18.49 21.0025 18.1 21.4425 17.49 22.1525C16.79 22.9825 15.92 24.0025 14.46 24.0025C13 24.0025 12.14 22.9725 11.46 22.1325C10.88 21.4325 10.5 21.0025 10 21.0025C9.61 21.0025 9.37 21.2525 8.84 21.9125C8.12 22.7925 7.13 24.0025 5 24.0025C2.24 24.0025 0 21.7625 0 19.0025C0 16.2425 2.24 14.0025 5 14.0025C5.55 14.0025 6 14.4525 6 15.0025C6 15.5525 5.55 16.0025 5 16.0025C3.35 16.0025 2 17.3525 2 19.0025C2 20.6525 3.35 22.0025 5 22.0025C6.18 22.0025 6.67 21.4025 7.29 20.6425C7.89 19.9125 8.63 19.0025 10 19.0025C11.47 19.0025 12.32 20.0325 13 20.8725C13.58 21.5725 13.96 22.0025 14.46 22.0025C14.96 22.0025 15.36 21.5625 15.97 20.8525C16.67 20.0225 17.54 19.0025 19 19.0025C20.46 19.0025 21.29 20.1225 21.83 20.9525C22.33 21.7025 22.58 22.0025 23 22.0025C23.55 22.0025 24 22.4525 24 23.0025ZM8.99 16.0025H9.93C10.99 16.0025 12.01 15.5825 12.76 14.8325L20.48 7.1125L16.89 3.5225L9.17 11.2425C8.42 11.9925 8 13.0125 8 14.0725V15.0125C8 15.5625 8.44 16.0025 8.99 16.0025ZM23.26 4.3325C23.74 3.8525 24 3.2125 24 2.5325C24 1.8525 23.74 1.2125 23.26 0.7425C22.27 -0.2475 20.66 -0.2475 19.67 0.7425L18.31 2.1025L21.9 5.6925L23.26 4.3325Z" fill="currentColor"/>
</svg>
    </div>
    </Link>
</div>


{/* GPT */}
<div className='rounded-xl group hover:bg-white p-2 w-10 h-10'>
<Link href={'https://openai.com/gpt-4'} className='flex justify-center'>

    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-[#41394B] group-hover:text-[#FF3067]'>
  <g clip-path="url(#clip0_127_148)">
    <path d="M13 -0.00390625H5C2.243 -0.00390625 0 2.23909 0 4.99609V17.8501C0 18.6431 0.435 19.3691 1.134 19.7441C1.452 19.9151 1.801 19.9991 2.149 19.9991C2.565 19.9991 2.98 19.8781 3.34 19.6391L7.303 16.9961H13C15.757 16.9961 18 14.7531 18 11.9961V4.99609C18 2.23909 15.757 -0.00390625 13 -0.00390625ZM24 8.99609V21.8501C24 22.6431 23.565 23.3691 22.866 23.7441C22.548 23.9151 22.199 23.9991 21.851 24.0001C21.435 24.0001 21.02 23.8791 20.661 23.6401L16.697 20.9961H11C9.55 20.9961 8.253 20.3651 7.339 19.3761L7.908 18.9961H13C16.859 18.9961 20 15.8551 20 11.9961V4.99609C20 4.68809 19.973 4.38809 19.935 4.09009C22.246 4.53009 24 6.55909 24 8.99609Z" fill="currentColor"/>
  </g>
  <defs>
    <clipPath id="clip0_127_148">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
    </div>
    </Link>
</div>
    
{/*chat pdf */}
<div className='rounded-xl group hover:bg-white p-2 w-10 h-10'>
<Link href={'https://www.chatpdf.com/'} className='flex justify-center'>

    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-[#41394B] group-hover:text-[#FF3067]'>
  <path d="M7.98 16.11C7.98 16.58 7.57 16.97 7.09 16.97H6.26V15.25H7.1C7.58 15.25 7.99 15.64 7.99 16.11H7.98ZM15 8H21.54C21.19 7.09 20.66 6.25 19.95 5.54L16.47 2.05C15.76 1.34 14.92 0.81 14.01 0.46V7C14.01 7.55 14.46 8 15.01 8H15ZM12.09 15.25H11.25V18.75H12.09C12.57 18.75 12.98 18.36 12.98 17.89V16.11C12.98 15.64 12.57 15.25 12.09 15.25ZM22 10.49V19C22 21.76 19.76 24 17 24H7C4.24 24 2 21.76 2 19V5C2 2.24 4.24 0 7 0H11.51C11.67 0 11.83 0.01 12 0.02V7C12 8.65 13.35 10 15 10H21.98C21.99 10.16 22 10.32 22 10.49ZM9.23 16.11C9.23 14.95 8.27 14 7.09 14H6C5.45 14 5 14.45 5 15V19.44C5 19.79 5.28 20.06 5.62 20.06C5.96 20.06 6.24 19.78 6.24 19.44V18.22H7.08C8.26 18.22 9.22 17.27 9.22 16.11H9.23ZM14.23 16.11C14.23 14.95 13.27 14 12.09 14H11C10.45 14 10 14.45 10 15V19.44C10 19.79 10.28 20 10.62 20C10.96 20 12.08 20 12.08 20C13.26 20 14.22 19.05 14.22 17.89V16.11H14.23ZM19.02 14.63C19.02 14.28 18.74 14.01 18.4 14.01H16.09C15.74 14.01 15.47 14.29 15.47 14.63V19.44C15.47 19.79 15.75 20.06 16.09 20.06C16.43 20.06 16.71 19.78 16.71 19.44V17.64H17.95C18.3 17.64 18.57 17.36 18.57 17.02C18.57 16.68 18.29 16.4 17.95 16.4H16.71V15.26H18.4C18.75 15.26 19.02 14.98 19.02 14.64V14.63Z" fill="currentColor"/>
</svg>
    </div>
    </Link>
 {/************ */}
 </div>


 
</div>

<hr className="h-px  bg-[#41394B] border-0 m-1 p-[0.75px]"></hr>


 {/******--3--****** */}
 <div className='flex flex-col items-center gap-3 mt-3 mb-2 '>

  {/*יצירת תמונות*/}
  <div className='rounded-xl group hover:bg-white p-2 w-10 h-10'>
<Link href={'https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F'} target={'_blank'} className='flex justify-center'>

    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-[#41394B] group-hover:text-[#FF3067]'>
  <g clip-path="url(#clip0_36_2646)">
    <path d="M11.1221 12.5361C10.8435 12.2573 10.5127 12.0362 10.1486 11.8853C9.78448 11.7344 9.39421 11.6567 9.00009 11.6567C8.60596 11.6567 8.21569 11.7344 7.85159 11.8853C7.48749 12.0362 7.15669 12.2573 6.87809 12.5361L0.0380859 19.3761C0.130547 20.6302 0.692994 21.8032 1.61296 22.6605C2.53292 23.5178 3.7426 23.9962 5.00009 24.0001H19.0001C19.9798 23.9999 20.9376 23.7101 21.7531 23.1671L11.1221 12.5361Z" fill="currentColor"/>
    <path d="M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z" fill="currentColor"/>
    <path d="M19 0H5C3.67441 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.67441 0 5L0 16.586L5.464 11.122C5.92831 10.6576 6.47956 10.2892 7.08628 10.0378C7.69299 9.78644 8.34328 9.65707 9 9.65707C9.65672 9.65707 10.307 9.78644 10.9137 10.0378C11.5204 10.2892 12.0717 10.6576 12.536 11.122L23.167 21.753C23.71 20.9375 23.9998 19.9797 24 19V5C23.9984 3.67441 23.4711 2.40356 22.5338 1.46622C21.5964 0.528882 20.3256 0.00158786 19 0ZM18 10C17.2089 10 16.4355 9.7654 15.7777 9.32588C15.1199 8.88635 14.6072 8.26164 14.3045 7.53073C14.0017 6.79983 13.9225 5.99556 14.0769 5.21964C14.2312 4.44372 14.6122 3.73098 15.1716 3.17157C15.731 2.61216 16.4437 2.2312 17.2196 2.07686C17.9956 1.92252 18.7998 2.00173 19.5307 2.30448C20.2616 2.60723 20.8864 3.11992 21.3259 3.77772C21.7654 4.43552 22 5.20888 22 6C22 7.06087 21.5786 8.07828 20.8284 8.82843C20.0783 9.57857 19.0609 10 18 10Z" fill="currentColor"/>
  </g>
  <defs>
    <clipPath id="clip0_36_2646">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
    </div>
    </Link>
</div>


{/*פרומפט אסיסטנט */}
<div className='rounded-xl group hover:bg-white p-2 w-10 h-10'>
<Link href={'https://www.imiprompt.com/'} className='flex justify-center'>

    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-[#41394B] group-hover:text-[#FF3067]'>
  <path d="M21 0H3C1.34531 0 0 1.36423 0 3.04219V17.2406C0 18.9186 1.34531 20.2828 3 20.2828H6.92344L10.6734 23.4819C11.0531 23.8289 11.5359 24 12.0094 24C12.4781 24 12.9422 23.8336 13.3031 23.5104L17.1516 20.2876H21C22.6547 20.2876 24 18.9234 24 17.2454V3.04219C24 1.36423 22.6547 0 21 0ZM10.2938 13.4807L8.87812 14.9162L5.57812 11.5698C5.20312 11.1895 4.99687 10.6857 4.99687 10.1438C4.99687 9.6019 5.20312 9.09804 5.57812 8.71777L8.87812 5.37136L10.2938 6.80689L6.99375 10.1533L10.2938 13.4807ZM18.4172 11.5698L15.1172 14.9162L13.7016 13.4807L17.0016 10.1343L13.7016 6.80689L15.1172 5.37136L18.4172 8.71777C18.7922 9.09804 18.9984 9.6019 18.9984 10.1438C18.9984 10.6809 18.7922 11.1895 18.4172 11.5698Z" fill="currentColor"/>
</svg>
    </div>
    </Link>
</div>


 {/*TTS*/}
 <div className='rounded-xl group hover:bg-white p-2 w-10 h-10'>
 <Link href={'/TTS'} className='flex justify-center'>

    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none" className='text-[#41394B] group-hover:text-[#FF3067]'>
<path d="M19.2 10.4999C19.2 15.1999 15.7 19.1999 11.2 19.9999V21.6999C11.2 22.5999 10.5 23.2999 9.6 23.2999C8.7 23.2999 8 22.5999 8 21.6999V19.9999C3.5 19.1999 0 15.2999 0 10.4999C0 9.5999 0.7 8.8999 1.6 8.8999C2.5 8.8999 3.2 9.5999 3.2 10.4999C3.2 13.9999 6.1 16.8999 9.6 16.8999C13.1 16.8999 16 13.9999 16 10.4999C16 9.5999 16.7 8.8999 17.6 8.8999C18.5 8.8999 19.2 9.5999 19.2 10.4999Z" fill="currentColor"/>
<path d="M10.7 10.6C10.1 10.6 9.6 10.1 9.6 9.5C9.6 8.9 10.1 8.4 10.7 8.4H13.2V6.6H10.7C10.1 6.6 9.6 6.1 9.6 5.5C9.6 4.9 10.1 4.4 10.7 4.4H13.2V3.6C13.2 1.6 11.6 0 9.6 0C7.6 0 6 1.6 6 3.6V11.4C6 13.4 7.6 15 9.6 15C11.6 15 13.2 13.4 13.2 11.4V10.6H10.7Z" fill="currentColor"/>
</svg>
    </div>
   </Link>
</div>


 {/*כתוביות*/}
 <div className='rounded-xl group hover:bg-white p-2 w-10 h-10'>
 <Link href={'https://sonix.ai/'} target={'_blank'} className='flex justify-center'>
   
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-[#41394B] group-hover:text-[#FF3067]'>
<path d="M19 2H5C3.67441 2.00159 2.40356 2.52888 1.46622 3.46622C0.528882 4.40356 0.00158786 5.67441 0 7L0 17C0.00158786 18.3256 0.528882 19.5964 1.46622 20.5338C2.40356 21.4711 3.67441 21.9984 5 22H19C20.3256 21.9984 21.5964 21.4711 22.5338 20.5338C23.4711 19.5964 23.9984 18.3256 24 17V7C23.9984 5.67441 23.4711 4.40356 22.5338 3.46622C21.5964 2.52888 20.3256 2.00159 19 2ZM5 11H7C7.26522 11 7.51957 11.1054 7.70711 11.2929C7.89464 11.4804 8 11.7348 8 12C8 12.2652 7.89464 12.5196 7.70711 12.7071C7.51957 12.8946 7.26522 13 7 13H5C4.73478 13 4.48043 12.8946 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11ZM13 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17C4 16.7348 4.10536 16.4804 4.29289 16.2929C4.48043 16.1054 4.73478 16 5 16H13C13.2652 16 13.5196 16.1054 13.7071 16.2929C13.8946 16.4804 14 16.7348 14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18ZM19 18H17C16.7348 18 16.4804 17.8946 16.2929 17.7071C16.1054 17.5196 16 17.2652 16 17C16 16.7348 16.1054 16.4804 16.2929 16.2929C16.4804 16.1054 16.7348 16 17 16H19C19.2652 16 19.5196 16.1054 19.7071 16.2929C19.8946 16.4804 20 16.7348 20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18ZM19 13H11C10.7348 13 10.4804 12.8946 10.2929 12.7071C10.1054 12.5196 10 12.2652 10 12C10 11.7348 10.1054 11.4804 10.2929 11.2929C10.4804 11.1054 10.7348 11 11 11H19C19.2652 11 19.5196 11.1054 19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071C19.5196 12.8946 19.2652 13 19 13Z" fill="currentColor"/>
</svg>
    </div>
</Link>
</div>

 </div>

{/**** */}
 {/************ */}


 
 <div className='m-auto ' onClick={()=>setClicked(!clicked)}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 24" fill="none" className=''>
  <path d="M13 3L3 12.4983L13 22" stroke="#41394B" stroke-width="3.47" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>


    </div>
    </div>
 
    ):(

    <div className="rounded-xl border border-solid border-white backdrop-blur-[28.5px] w-1/6 h-[96%] absolute z-50" style={{ 
      background: 'rgba(255, 255, 255, 0.57)'
  }}>
    <div className='flex flex-col  p-4  h-full'>

<div className="logoGradient rounded-lg p-3" style={{background: "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 62.54%);"}}>
<Image src={LogoPic} alt="Experteam AI logo" className='m-auto w-[100%]'/>
</div>

      {/******----1----****** */}

     <div className='flex flex-col mb-4 mt-3'>
      {/*home page */}

      <div className='rounded-xl group hover:bg-white'>
      <Link href={'/'} className='flex justify-between pb-2 pt-2 pl-4 pr-4 '>
        <button>עמוד הבית</button>
<div>   
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-[#41394B] group-hover:text-[#FF3067]'>
<path d="M12 14.9925C10.3432 14.9925 9 16.3357 9 17.9925V23.9925H15V17.9925C15 16.3357 13.6568 14.9925 12 14.9925Z" fill='currentColor'/>
<path d="M17 17.9851V23.9851H21C22.6568 23.9851 24 22.6419 24 20.9851V11.8641C24.0002 11.3446 23.7983 10.8454 23.437 10.4721L14.939 1.28509C13.4396 -0.337257 10.9089 -0.436867 9.28655 1.06257C9.20949 1.13382 9.13523 1.20802 9.06403 1.28509L0.581016 10.4691C0.208734 10.8439 -0.000140554 11.3508 7.09607e-08 11.8791V20.9851C7.09607e-08 22.6419 1.34316 23.9851 3 23.9851H6.99998V17.9851C7.01869 15.2583 9.22027 13.0315 11.8784 12.9674C14.6255 12.9011 16.9791 15.1658 17 17.9851Z" fill='currentColor'/>
<path d="M12 14.9851C10.3432 14.9851 9 16.3283 9 17.9851V23.9851H15V17.9851C15 16.3283 13.6568 14.9851 12 14.9851Z" fill='currentColor'/>
</svg>
</div>
</Link>
</div>

 {/*עוזר אישי */}
 <div className='rounded-xl group hover:bg-white'>
   <Link href={'/chat'} className='flex justify-between pb-2 pt-2 pl-4 pr-4'>
    <button  className=' '> 
    עוזר אישי

    </button>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-[#41394B] group-hover:text-[#FF3067]'>
  <path d="M20 24H4C3.448 24 3 23.553 3 23C3 19.691 5.691 17 9 17H15C18.309 17 21 19.691 21 23C21 23.553 20.552 24 20 24ZM20.5 6H20C20 3.794 18.206 2 16 2H13V1C13 0.447 12.552 0 12 0C11.448 0 11 0.447 11 1V2H8C5.794 2 4 3.794 4 6H3.5C2.673 6 2 6.673 2 7.5V9.5C2 10.327 2.673 11 3.5 11H4C4 13.206 5.794 15 8 15H16C18.206 15 20 13.206 20 11H20.5C21.327 11 22 10.327 22 9.5V7.5C22 6.673 21.327 6 20.5 6ZM9.5 10C8.672 10 8 9.328 8 8.5C8 7.672 8.672 7 9.5 7C10.328 7 11 7.672 11 8.5C11 9.328 10.328 10 9.5 10ZM14.5 10C13.672 10 13 9.328 13 8.5C13 7.672 13.672 7 14.5 7C15.328 7 16 7.672 16 8.5C16 9.328 15.328 10 14.5 10Z" fill="currentColor"/>
</svg>
    </div>
   </Link>
</div>
</div>

<hr className="h-px  bg-[#41394B] border-0 m-4"></hr>


 {/******--2--****** */}

<div className='flex flex-col mb-4'>
 {/*כתיבה*/}
 <div className='rounded-xl group hover:bg-white'>
 <Link href={'/create'} className='flex justify-between pb-2 pt-2 pl-4 pr-4'>
    <button  className=' '>כתיבה
    </button>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-[#41394B] group-hover:text-[#FF3067]'>
  <path d="M19 0H5C3.6744 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.6744 0 5L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.6744 23.9984 5 24H19C20.3256 23.9984 21.5964 23.4711 22.5338 22.5338C23.4711 21.5964 23.9984 20.3256 24 19V5C23.9984 3.6744 23.4711 2.40356 22.5338 1.46622C21.5964 0.528882 20.3256 0.00158786 19 0ZM17 10C16.7348 10 16.4804 9.89464 16.2929 9.70711C16.1054 9.51957 16 9.26522 16 9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8H13V16H14C14.2652 16 14.5196 16.1054 14.7071 16.2929C14.8946 16.4804 15 16.7348 15 17C15 17.2652 14.8946 17.5196 14.7071 17.7071C14.5196 17.8946 14.2652 18 14 18H10C9.73478 18 9.48043 17.8946 9.29289 17.7071C9.10536 17.5196 9 17.2652 9 17C9 16.7348 9.10536 16.4804 9.29289 16.2929C9.48043 16.1054 9.73478 16 10 16H11V8H9C8.73478 8 8.48043 8.10536 8.29289 8.29289C8.10536 8.48043 8 8.73478 8 9C8 9.26522 7.89464 9.51957 7.70711 9.70711C7.51957 9.89464 7.26522 10 7 10C6.73478 10 6.48043 9.89464 6.29289 9.70711C6.10536 9.51957 6 9.26522 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6H15C15.7956 6 16.5587 6.31607 17.1213 6.87868C17.6839 7.44129 18 8.20435 18 9C18 9.26522 17.8946 9.51957 17.7071 9.70711C17.5196 9.89464 17.2652 10 17 10Z" fill="currentColor"/>
</svg>
    </div>
   </Link>
</div>


{/*תמלול תחקור */}
<div className='rounded-xl group hover:bg-white'>
<Link href={'https://www.videoindexer.ai/media/library'} target={'_blank'} className='flex justify-between pb-2 pt-2 pl-4 pr-4'>
    <button className='' >תמלול תחקור
    </button>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className='text-[#41394B] group-hover:text-[#FF3067]'>
  <path d="M24 23.0025C24 23.5525 23.55 24.0025 23 24.0025C21.46 24.0025 20.71 22.8825 20.17 22.0525C19.67 21.3025 19.42 21.0025 19 21.0025C18.49 21.0025 18.1 21.4425 17.49 22.1525C16.79 22.9825 15.92 24.0025 14.46 24.0025C13 24.0025 12.14 22.9725 11.46 22.1325C10.88 21.4325 10.5 21.0025 10 21.0025C9.61 21.0025 9.37 21.2525 8.84 21.9125C8.12 22.7925 7.13 24.0025 5 24.0025C2.24 24.0025 0 21.7625 0 19.0025C0 16.2425 2.24 14.0025 5 14.0025C5.55 14.0025 6 14.4525 6 15.0025C6 15.5525 5.55 16.0025 5 16.0025C3.35 16.0025 2 17.3525 2 19.0025C2 20.6525 3.35 22.0025 5 22.0025C6.18 22.0025 6.67 21.4025 7.29 20.6425C7.89 19.9125 8.63 19.0025 10 19.0025C11.47 19.0025 12.32 20.0325 13 20.8725C13.58 21.5725 13.96 22.0025 14.46 22.0025C14.96 22.0025 15.36 21.5625 15.97 20.8525C16.67 20.0225 17.54 19.0025 19 19.0025C20.46 19.0025 21.29 20.1225 21.83 20.9525C22.33 21.7025 22.58 22.0025 23 22.0025C23.55 22.0025 24 22.4525 24 23.0025ZM8.99 16.0025H9.93C10.99 16.0025 12.01 15.5825 12.76 14.8325L20.48 7.1125L16.89 3.5225L9.17 11.2425C8.42 11.9925 8 13.0125 8 14.0725V15.0125C8 15.5625 8.44 16.0025 8.99 16.0025ZM23.26 4.3325C23.74 3.8525 24 3.2125 24 2.5325C24 1.8525 23.74 1.2125 23.26 0.7425C22.27 -0.2475 20.66 -0.2475 19.67 0.7425L18.31 2.1025L21.9 5.6925L23.26 4.3325Z" fill="currentColor"/>
</svg>
    </div>
    </Link>
</div>


{/* GPT */}
<div className='rounded-xl group hover:bg-white'>
<Link href={'https://openai.com/gpt-4'} className='flex justify-between  pt-2 pl-4 pr-4'>
    <button className=''>Chat GPT
  
    </button>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-[#41394B] group-hover:text-[#FF3067]'>
  <g clip-path="url(#clip0_127_148)">
    <path d="M13 -0.00390625H5C2.243 -0.00390625 0 2.23909 0 4.99609V17.8501C0 18.6431 0.435 19.3691 1.134 19.7441C1.452 19.9151 1.801 19.9991 2.149 19.9991C2.565 19.9991 2.98 19.8781 3.34 19.6391L7.303 16.9961H13C15.757 16.9961 18 14.7531 18 11.9961V4.99609C18 2.23909 15.757 -0.00390625 13 -0.00390625ZM24 8.99609V21.8501C24 22.6431 23.565 23.3691 22.866 23.7441C22.548 23.9151 22.199 23.9991 21.851 24.0001C21.435 24.0001 21.02 23.8791 20.661 23.6401L16.697 20.9961H11C9.55 20.9961 8.253 20.3651 7.339 19.3761L7.908 18.9961H13C16.859 18.9961 20 15.8551 20 11.9961V4.99609C20 4.68809 19.973 4.38809 19.935 4.09009C22.246 4.53009 24 6.55909 24 8.99609Z" fill="currentColor"/>
  </g>
  <defs>
    <clipPath id="clip0_127_148">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
    </div>
    </Link>
</div>
    
{/*chat pdf */}
<div className='rounded-xl group hover:bg-white'>
<Link href={'https://www.chatpdf.com/'} className='flex justify-between pb-2 pt-2 pl-4 pr-4'>
    <button className=''>Chat Pdf

    </button>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-[#41394B] group-hover:text-[#FF3067]'>
  <path d="M7.98 16.11C7.98 16.58 7.57 16.97 7.09 16.97H6.26V15.25H7.1C7.58 15.25 7.99 15.64 7.99 16.11H7.98ZM15 8H21.54C21.19 7.09 20.66 6.25 19.95 5.54L16.47 2.05C15.76 1.34 14.92 0.81 14.01 0.46V7C14.01 7.55 14.46 8 15.01 8H15ZM12.09 15.25H11.25V18.75H12.09C12.57 18.75 12.98 18.36 12.98 17.89V16.11C12.98 15.64 12.57 15.25 12.09 15.25ZM22 10.49V19C22 21.76 19.76 24 17 24H7C4.24 24 2 21.76 2 19V5C2 2.24 4.24 0 7 0H11.51C11.67 0 11.83 0.01 12 0.02V7C12 8.65 13.35 10 15 10H21.98C21.99 10.16 22 10.32 22 10.49ZM9.23 16.11C9.23 14.95 8.27 14 7.09 14H6C5.45 14 5 14.45 5 15V19.44C5 19.79 5.28 20.06 5.62 20.06C5.96 20.06 6.24 19.78 6.24 19.44V18.22H7.08C8.26 18.22 9.22 17.27 9.22 16.11H9.23ZM14.23 16.11C14.23 14.95 13.27 14 12.09 14H11C10.45 14 10 14.45 10 15V19.44C10 19.79 10.28 20 10.62 20C10.96 20 12.08 20 12.08 20C13.26 20 14.22 19.05 14.22 17.89V16.11H14.23ZM19.02 14.63C19.02 14.28 18.74 14.01 18.4 14.01H16.09C15.74 14.01 15.47 14.29 15.47 14.63V19.44C15.47 19.79 15.75 20.06 16.09 20.06C16.43 20.06 16.71 19.78 16.71 19.44V17.64H17.95C18.3 17.64 18.57 17.36 18.57 17.02C18.57 16.68 18.29 16.4 17.95 16.4H16.71V15.26H18.4C18.75 15.26 19.02 14.98 19.02 14.64V14.63Z" fill="currentColor"/>
</svg>
    </div>
    </Link>
 {/************ */}
 </div>
</div>

<hr className="h-px  bg-[#41394B] border-0 m-4"></hr>



 {/******--3--****** */}
 <div className='flex flex-col  '>

  {/*יצירת תמונות*/}
  <div className='rounded-xl group hover:bg-white'>
<Link href={'https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F'} target={'_blank'} className='flex justify-between pb-2 pt-2 pl-4 pr-4'>
    <button className=''>מחולל תמונות    
    </button>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-[#41394B] group-hover:text-[#FF3067]'>
  <g clip-path="url(#clip0_36_2646)">
    <path d="M11.1221 12.5361C10.8435 12.2573 10.5127 12.0362 10.1486 11.8853C9.78448 11.7344 9.39421 11.6567 9.00009 11.6567C8.60596 11.6567 8.21569 11.7344 7.85159 11.8853C7.48749 12.0362 7.15669 12.2573 6.87809 12.5361L0.0380859 19.3761C0.130547 20.6302 0.692994 21.8032 1.61296 22.6605C2.53292 23.5178 3.7426 23.9962 5.00009 24.0001H19.0001C19.9798 23.9999 20.9376 23.7101 21.7531 23.1671L11.1221 12.5361Z" fill="currentColor"/>
    <path d="M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z" fill="currentColor"/>
    <path d="M19 0H5C3.67441 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.67441 0 5L0 16.586L5.464 11.122C5.92831 10.6576 6.47956 10.2892 7.08628 10.0378C7.69299 9.78644 8.34328 9.65707 9 9.65707C9.65672 9.65707 10.307 9.78644 10.9137 10.0378C11.5204 10.2892 12.0717 10.6576 12.536 11.122L23.167 21.753C23.71 20.9375 23.9998 19.9797 24 19V5C23.9984 3.67441 23.4711 2.40356 22.5338 1.46622C21.5964 0.528882 20.3256 0.00158786 19 0ZM18 10C17.2089 10 16.4355 9.7654 15.7777 9.32588C15.1199 8.88635 14.6072 8.26164 14.3045 7.53073C14.0017 6.79983 13.9225 5.99556 14.0769 5.21964C14.2312 4.44372 14.6122 3.73098 15.1716 3.17157C15.731 2.61216 16.4437 2.2312 17.2196 2.07686C17.9956 1.92252 18.7998 2.00173 19.5307 2.30448C20.2616 2.60723 20.8864 3.11992 21.3259 3.77772C21.7654 4.43552 22 5.20888 22 6C22 7.06087 21.5786 8.07828 20.8284 8.82843C20.0783 9.57857 19.0609 10 18 10Z" fill="currentColor"/>
  </g>
  <defs>
    <clipPath id="clip0_36_2646">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
    </div>
    </Link>
</div>


{/*פרומפט אסיסטנט */}
<div className='rounded-xl group hover:bg-white'>
<Link href={'https://www.imiprompt.com/'} className='flex justify-between pb-2 pt-2 pl-4 pr-4'>
    <button className=''>עוזר פרומפטים
    </button>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-[#41394B] group-hover:text-[#FF3067]'>
  <path d="M21 0H3C1.34531 0 0 1.36423 0 3.04219V17.2406C0 18.9186 1.34531 20.2828 3 20.2828H6.92344L10.6734 23.4819C11.0531 23.8289 11.5359 24 12.0094 24C12.4781 24 12.9422 23.8336 13.3031 23.5104L17.1516 20.2876H21C22.6547 20.2876 24 18.9234 24 17.2454V3.04219C24 1.36423 22.6547 0 21 0ZM10.2938 13.4807L8.87812 14.9162L5.57812 11.5698C5.20312 11.1895 4.99687 10.6857 4.99687 10.1438C4.99687 9.6019 5.20312 9.09804 5.57812 8.71777L8.87812 5.37136L10.2938 6.80689L6.99375 10.1533L10.2938 13.4807ZM18.4172 11.5698L15.1172 14.9162L13.7016 13.4807L17.0016 10.1343L13.7016 6.80689L15.1172 5.37136L18.4172 8.71777C18.7922 9.09804 18.9984 9.6019 18.9984 10.1438C18.9984 10.6809 18.7922 11.1895 18.4172 11.5698Z" fill="currentColor"/>
</svg>
    </div>
    </Link>
</div>


 {/*TTS*/}
 <div className='rounded-xl group hover:bg-white'>
 <Link href={'/TTS'} className='flex justify-between pb-2 pt-2 pl-4 pr-4'>
    <button  className=''>TTS 
    </button>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none" className='text-[#41394B] group-hover:text-[#FF3067]'>
<path d="M19.2 10.4999C19.2 15.1999 15.7 19.1999 11.2 19.9999V21.6999C11.2 22.5999 10.5 23.2999 9.6 23.2999C8.7 23.2999 8 22.5999 8 21.6999V19.9999C3.5 19.1999 0 15.2999 0 10.4999C0 9.5999 0.7 8.8999 1.6 8.8999C2.5 8.8999 3.2 9.5999 3.2 10.4999C3.2 13.9999 6.1 16.8999 9.6 16.8999C13.1 16.8999 16 13.9999 16 10.4999C16 9.5999 16.7 8.8999 17.6 8.8999C18.5 8.8999 19.2 9.5999 19.2 10.4999Z" fill="currentColor"/>
<path d="M10.7 10.6C10.1 10.6 9.6 10.1 9.6 9.5C9.6 8.9 10.1 8.4 10.7 8.4H13.2V6.6H10.7C10.1 6.6 9.6 6.1 9.6 5.5C9.6 4.9 10.1 4.4 10.7 4.4H13.2V3.6C13.2 1.6 11.6 0 9.6 0C7.6 0 6 1.6 6 3.6V11.4C6 13.4 7.6 15 9.6 15C11.6 15 13.2 13.4 13.2 11.4V10.6H10.7Z" fill="currentColor"/>
</svg>
    </div>
   </Link>
</div>


 {/*כתוביות*/}
 <div className='rounded-xl group hover:bg-white'>
 <Link href={'https://sonix.ai/'} target={'_blank'} className='flex justify-between pb-2 pt-2 pl-4 pr-4'>
    <button className=''>עריכת כתוביות 
    </button>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='text-[#41394B] group-hover:text-[#FF3067]'>
<path d="M19 2H5C3.67441 2.00159 2.40356 2.52888 1.46622 3.46622C0.528882 4.40356 0.00158786 5.67441 0 7L0 17C0.00158786 18.3256 0.528882 19.5964 1.46622 20.5338C2.40356 21.4711 3.67441 21.9984 5 22H19C20.3256 21.9984 21.5964 21.4711 22.5338 20.5338C23.4711 19.5964 23.9984 18.3256 24 17V7C23.9984 5.67441 23.4711 4.40356 22.5338 3.46622C21.5964 2.52888 20.3256 2.00159 19 2ZM5 11H7C7.26522 11 7.51957 11.1054 7.70711 11.2929C7.89464 11.4804 8 11.7348 8 12C8 12.2652 7.89464 12.5196 7.70711 12.7071C7.51957 12.8946 7.26522 13 7 13H5C4.73478 13 4.48043 12.8946 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11ZM13 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17C4 16.7348 4.10536 16.4804 4.29289 16.2929C4.48043 16.1054 4.73478 16 5 16H13C13.2652 16 13.5196 16.1054 13.7071 16.2929C13.8946 16.4804 14 16.7348 14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18ZM19 18H17C16.7348 18 16.4804 17.8946 16.2929 17.7071C16.1054 17.5196 16 17.2652 16 17C16 16.7348 16.1054 16.4804 16.2929 16.2929C16.4804 16.1054 16.7348 16 17 16H19C19.2652 16 19.5196 16.1054 19.7071 16.2929C19.8946 16.4804 20 16.7348 20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18ZM19 13H11C10.7348 13 10.4804 12.8946 10.2929 12.7071C10.1054 12.5196 10 12.2652 10 12C10 11.7348 10.1054 11.4804 10.2929 11.2929C10.4804 11.1054 10.7348 11 11 11H19C19.2652 11 19.5196 11.1054 19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071C19.5196 12.8946 19.2652 13 19 13Z" fill="currentColor"/>
</svg>
    </div>
</Link>
</div>


<button className='rounded-xl group hover:bg-white mt-5' onClick={()=>setClicked(!clicked)}>
  
<div className='p-2    flex justify-between pb-2 pt-2 pl-4 pr-4' >
<button className=''>
לסגירה
</button>  
  <div className='rotate-180'>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 16 24" fill="none" className=''>
  <path d="M13 3L3 12.4983L13 22" stroke="#41394B" stroke-width="3.47" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
</div>

 </button>

</div>


 {/************ */}



<div>

</div>
    </div>
    </div>
    )} 
    
    </>
  )
}
