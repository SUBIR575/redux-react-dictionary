import {ADD_WORD} from './Type'

export const addWord = (data)  =>{
  return{
    type:ADD_WORD,
    payload:data
  }
}