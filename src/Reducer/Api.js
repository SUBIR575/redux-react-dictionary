import {ADD_VALUE, ADD_DEF, ADD_EXAM, ADD_SYN} from '../Action/Type'
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
      case ADD_DEF:
        const def = action.payload;
        return{
          ...state,
          data:[...state.data,
          {
            definition:def
          }
          ]
        }
        case ADD_EXAM:
        const exam = action.payload;
        return{
          ...state,
          data:[...state.data,
          {
            example:exam
          }
          ]
        }
        case ADD_SYN:
        const syn = action.payload;
        return{
          ...state,
          data:[...state.data,
          {
            synonyms:syn
          }
          ]
        }
  
    default:
      return state;
  }
}
export default Api;
