import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {addWord} from './Action/Action'

function App() {
  const dispatch = useDispatch();
  const table = useSelector((state) => state.Table.table);
  const [newWord, setNewWord] = useState('');
  const [newSpeach, setNewSpeach] = useState("Add a Word");
  const [newDef, setNewDef] = useState("Add a Word");
  const [newExm, setNewExm] = useState("Add a Word");
  const [newValue, setNewValue] = useState([ ]);

  console.log(table);
  useEffect(() => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${value}`)
      .then((res) => {
        console.log(res);
        setNewSpeach(res.data[0].meanings[0].partOfSpeech);
        setNewDef(res.data[0].meanings[0].definitions[0].definition);
        setNewExm(res.data[0].meanings[0].definitions[0].example);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  const value = table[table.length-1]
  
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
        <button className='btn' onClick={()=> dispatch(addWord(newWord),setNewWord(''))}>Submit</button>
        <br/>
        <table>
          <tr>
            <th>Part of Speech</th>
            <th>Definition</th>
            <th>Example</th>
          </tr>
          
          <tr>
            <td>{newSpeach}</td>
            <td>{newDef}</td>
            <td>{newExm}</td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
