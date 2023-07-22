import { useState, useEffect } from 'react';

export default function Home() {
  const [infoUser, setInfoUser] = useState(null);
  const [inputValue, setinputValue] = useState("")
  const api = "https://api.github.com/users/"
  const nameOfUser = "JohnWesley14"

  

  function handleValue(event){
    setinputValue(event.target.value)
  }
  async function searchUser(){
    const response = await fetch(`${api}${inputValue}`)
    const data = await response.json()
    setInfoUser(data)
    console.log(data);
  }

  return (
    <main className='flex w-screen h-screen items-center justify-center selection:bg-violet-400'>
      <div className="flex items-center max-w-[300px] justify-center flex-col gap-5">
        {infoUser ? (
          <div>
          <img src={infoUser.avatar_url} className='w-full rounded-md' alt="Image" />
          <h1 className='text-gray-200 text-center mt-3'>{infoUser.name}</h1>
          <p className='text-gray-400 font-light text-sm leading-1'>{infoUser.bio}</p>

        </div>
        ): (
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="" />

        )}
        
        
        <input type="text" value={inputValue} onChange={handleValue} className='w-full rounded-md pl-1 min-h-[40px] text-center font-normal text-sm bg-slate-800 outline-none text-slate-50' />
        <input type="button" value="Pesquisar Usuário" className='px-5 h-10 bg-slate-50 flex items-center w-full justify-center rounded-md hover:bg-slate-300 cursor-pointer'onClick={searchUser}/>
      </div>
      
    </main>
  );
}
