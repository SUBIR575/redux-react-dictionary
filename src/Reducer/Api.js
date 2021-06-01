import {ADD_VALUE} from '../Action/Type'
const initialstate={
  data:[]
}
const Api= (state=initialstate,action)=>{
  switch (action.type) {
    case ADD_VALUE:
      const word = action.payload;
      return{
        ...state,
        data:[...state.data,
          {
             word:word
          } 
        ]
      }
      
  
    default:
      return state;
  }
}
export default Api;
