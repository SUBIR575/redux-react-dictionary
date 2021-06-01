import {ADD_WORD} from '../Action/Type'

const initialstate={
  searchWordArray:[]
}

const Table= (state=initialstate,action)=>{
  switch (action.type) {
    case ADD_WORD:
      const {word} = action.payload.data[0];
     
      state.searchWordArray.push({word, definition:action.payload.data[0].meanings[0].definitions[0].definition, example:action.payload.data[0].meanings[0].definitions[0].example});
      
      return{
        
        ...state 
      }
      
      
    default:
      return state;
  }
}
export default Table;
