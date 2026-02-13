import type { actionType, OrderType, stateType } from '@/types/types-data';
import * as actions from './Actions'

export const reducer = (state : stateType , action : actionType) => 
{
   switch(action.type)
   {
    case  actions.ADD_TO_TROLLEY :
     return {
        ...state,
        Orders : [action.payload , ...state.Orders],
        numOfItems: state.numOfItems + 1,
     };

     case actions.REMOVE_FROM_TROLLEY :
      return {
         ...state,
         Orders : state.Orders.filter((item : OrderType ) => item.id !== action.payload.id),
         numOfItems: state.numOfItems - 1
      };

     case actions.INCREASE_NUM_OF_PRODUCTS : 
      return {
         ...state,
         numOfProducts : state.numOfProducts + 1
      }
     
     case actions.DECREASE_NUM_OF_PRODUCTS : 
      return {
         ...state,
         numOfProducts : state.numOfProducts - 1
      };
      
      default: 
        return state

   }
}