import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {addWord,addValue,addDef,addExam,addSyn} from './Action/Action'

function App() {
  const dispatch = useDispatch();
  const table = useSelector((state) => state.Table.table);
  const word = useSelector(state => state.Api.data.word)
  const Def = useSelector(state => state.Api.data.definition)
  const Exam = useSelector(state => state.Api.data.example)
  const Syn = useSelector(state => state.Api.data.synonyms)
  const [newWord, setNewWord] = useState('');
  const [newSpeach, setNewSpeach] = useState("Add a Word");
  const [newDef, setNewDef] = useState("Add a Word");
  const [newExm, setNewExm] = useState("Add a Word");
  const [newSyn, setNewSyn] = useState([ ]);

  console.log(table);
  useEffect(() => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${value}`)
      .then((res) => {
        console.log(res);
        setNewSpeach(res.data[0].word);
        setNewDef(res.data[0].meanings[0].definitions[0].definition);
        setNewExm(res.data[0].meanings[0].definitions[0].example);
        setNewSyn(res.data[0].meanings[0].definitions[0].synonyms)
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  const value = table[table.length-1]

  const clickButton = () => {
    dispatch(addWord(newWord),
    dispatch(addValue(newSpeach)),
    dispatch(addDef(newDef)),
    dispatch(addExam(newExm)),
    dispatch(addSyn(newSyn)),
    setNewWord(''))
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
          
          <tr>
            <td>{word}</td>
            <td>{Def}</td>
            <td>{Exam}</td>
        
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
