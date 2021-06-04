import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {addId, addWord} from './Action/Action'
import Table from "./Reducer/Table";

function App() {
  const dispatch = useDispatch();
  const word = useSelector((state) => state.Table.searchWordArray);
  const id = useSelector((state) => state.Table.id);
  const [newWord, setNewWord] = useState('');
  

 const checkWordExist =()=>{
   let index = word.findIndex((element) => 
    (element.word === newWord)
  );
  dispatch(addId(index))
  return index!== -1
 }

  const clickButton = () => {
     if(!checkWordExist()){
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${newWord}`)
      .then((res) => {
        
        dispatch(addWord(res));
        setNewWord('');
      })
      .catch((error) => {
        console.log(error);
      });
     }else{
      alert('You Add Existing Word') 
      setNewWord('');
     }
  }
  
  
  return (
    <div className="App">
      <header className="App-header">
        <input
        className='search'
          type="text"
          placeholder="search words..."
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
        />
        <button className='btn' onClick={clickButton}>Submit</button>
        <br/>
        <table>
          <tr>
            <th>Word</th>
            <th>Definition</th>
            <th>Example</th>
          </tr>
          {word.map((curr,idx)=>{
            return(
              <tr id={idx} style = {{backgroundColor:`${id===idx?'red': ''}`}}>
            <td>{curr.word}</td>
            <td>{curr.definition}</td>
            <td>{curr.example}</td>
            </tr>
            )
          })}
        </table>
      </header>
    </div>
  );
}

export default App;
