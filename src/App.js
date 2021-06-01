import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {addWord} from './Action/Action'
import Table from "./Reducer/Table";

function App() {
  const dispatch = useDispatch();
  const word = useSelector((state) => state.Table.searchWordArray);
  const [newWord, setNewWord] = useState('');
 
 

  const clickButton = () => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${newWord}`)
      .then((res) => {
        dispatch(addWord(res));
        setNewWord('');
      })
      .catch((error) => {
        console.log(error);
      });
    
  }
  word.findIndex((element) => {
    if (element.word === newWord) {
      return alert('You Add Existing Word')
    }
  })
  
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
          {word.map((curr)=>{
            return(
              <tr>
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
