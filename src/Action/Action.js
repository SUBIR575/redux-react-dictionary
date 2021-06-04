import {ADD_WORD,ADD_ID} from './Type'

export const addWord = (data)  =>{
  return{
    type:ADD_WORD,
    payload:data
  }
}
export const addId = (data)  =>{
  return{
    type:ADD_ID,
    payload:data
  }
}

