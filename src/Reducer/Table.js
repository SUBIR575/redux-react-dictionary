import {ADD_WORD, ADD_ID} from '../Action/Type'

const initialstate={
  searchWordArray:[],
  id:''
}

const Table= (state=initialstate,action)=>{
  switch (action.type) {
    
    case ADD_WORD:
      const {word} = action.payload.data[0];
      state.searchWordArray.push({word, definition:action.payload.data[0].meanings[0].definitions[0].definition, example:action.payload.data[0].meanings[0].definitions[0].example});
     
      console.log(word)
     
     
      return{
        ...state 
      }
      case ADD_ID:

      state.id = action.payload
      
      
    default:
      return state;
  }
}
export default Table;
