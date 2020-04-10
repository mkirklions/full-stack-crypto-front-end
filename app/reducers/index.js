import { combineReducers } from 'redux';
import { DATA_AVAILABLE,
    ADD_IEX,
    getUser,
    getIEX,
    getQR,
    ADD_LOGIN,
    getSignup,

} from "../actions/" //Import the actions types constant we defined in our actions

    const emptyIEX = {
        quote: "Nothing"
    }

    const initalUserState = {
        id: "InitalID",
        user:"UserInital",
        userSPY: "NA",

    }

    const initalLoginState = {
        username: "NotLoggedIn",
        pass: "NoPass",
        pass2: "NoPass2"
    }
  
  
//Works
    let userState = { userData: initalUserState, loading:true };
const reducerUser = (state = userState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
        state = Object.assign({}, state, { userData: action.userData, loading:false });
            return state;
        default:
            return state;
    }
};

let loginState = { loginData: initalLoginState, loading:true };
const loginReducer = (state = loginState, action) => {
    switch (action.type) {
        case ADD_LOGIN:
        state = Object.assign({}, state, { loginData: action.loginData, loading:false });
            return state;
        default:
            return state;
    }
};





//}
//dont mutate the state
//return state in default


//redux-promise-middleware tutorial

const iexDataReducer = (state= emptyIEX, action) => {
        switch(action.type) {
            case 'ADD_IEX_PENDING':
            state = Object.assign({}, state, {    
                error: null,
                isPending: true, 
                quote: "pending"
            });
            console.log("yo");
            return state;
   
            case 'ADD_IEX':
            state = Object.assign({}, state, {    
                error: null,
                isFulfilled:true,
               quote: action.payload.quote 
          });
          console.log("action");
          console.log(state)
          return state;

            case 'ADD_IEX_REJECTED':
            return {
                isRejected: true,
                error: action.payload
            };
            default: return state;
        }
}



const qrReducer = (state= {}, action) => {
    switch(action.type) {
        
        case 'ADD_QR':
        state = Object.assign({}, state, {    
            error: null,
            isFulfilled:true,
           qrCode: action.payload 
      });
      console.log("action");
      console.log(state)
      return state;
      default: return state;
    }
    
}



 
// Combine all the reducers
const rootReducer = combineReducers({
  
    reducerUser,
    iexDataReducer,
    loginReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})
 

export default rootReducer;
