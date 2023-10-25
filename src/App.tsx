// import { useState } from 'react'
import './App.css'
import { useQuery } from 'react-query';

const fetchData = async () => {
  const res = await fetch('https://teamfinder.onrender.com/teams');
  const data = await res.json();
  return data;
} 

const App: React.FC = () => {
  const {data, isLoading, isError} = useQuery('data', fetchData);

  if(isLoading){
    return <div>Loading...</div>
  }

  if(isError){
    return <div>Error loading data</div>
  }

  return (
    <>
      <h1>
        Welcome to Teamfinder 2.0
      </h1>
        {data && data.map((item: any) => 
          <ul key={item.id}>
            <li>Team: {item.name}</li>
            <li>Nickname: {item.nickname}</li>
            <li>Founded: {item.founded}</li>
            <li>Stadium: {item.groundName}</li>
            <li>Stadium capacity: {item.groundCapacity}</li>
            <li>Country: {item.country}</li>
            <li>League: {item.league}</li>
            <li>Coach: {item.coach}</li>
          </ul>)}
    </>
  )
}

export default App
