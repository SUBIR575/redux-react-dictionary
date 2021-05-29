import {ADD_WORD} from '../Action/Type'

const initialstate={
  table:[]
}

const Table= (state=initialstate,action)=>{
  switch (action.type) {
    case ADD_WORD:
      const word = action.payload;
      return{...state,
        table:[...state.table,word]
      }
    
  
    default:
      return state;
  }
}
export default Table;
