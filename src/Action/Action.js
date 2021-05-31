import {ADD_WORD, ADD_VALUE, ADD_DEF, ADD_EXAM, ADD_SYN} from './Type'

export const addWord = (data)  =>{
  return{
    type:ADD_WORD,
    payload:data
  }
}
export const addValue = (data) =>{
  return{
    type:ADD_VALUE,
    payload:data
  }
}
export const addDef = (data) =>{
  return{
    type:ADD_DEF,
    payload:data
  }
}
export const addExam = (data) =>{
  return{
    type:ADD_EXAM,
    payload:data
  }
}
export const addSyn = (data) =>{
  return{
    type:ADD_SYN,
    payload:data
  }
}