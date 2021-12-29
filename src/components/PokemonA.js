import React,{useEffect, useState} from "react";
import axios from "axios";



const PokemonA =()=>
{   
  const [num,setNum]=useState('1');
  const [name,setName]=useState();
  const [move,setMove]=useState();
  useEffect(()=>{
      async function getData()
      {
          const res =await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
          console.log(res.data);
          setName(res.data.name);
          setMove(res.data.moves.length);

      }
      
      getData();
  });
    return (
        <div>
            <h1> You Selected{num}</h1>
            <h1> You Selected {name}</h1>
            <h1> {name} has {move} moves</h1>
            <select value={num} onChange={(e)=>setNum(e.target.value)}>
                <option value="1"> 1 </option>
                <option value="25"> 25 </option>
                <option value="3">  3</option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>

            </select>
        </div>
    )
}
export default PokemonA;
