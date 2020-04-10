export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const ADD_IEX = 'ADD_IEX';
export const ADD_QR = 'ADD_QR';
import Data from './getdata.json';

//this gets data from an JSON
export function getUser() {
  return (dispatch) => {
    setTimeout(() => {
        const userData  =  Data.user;
        dispatch({type: DATA_AVAILABLE, userData:userData});
    }, 50);
};
}


//this gets API data
export function getIEX() {
    return (dispatch) => {
      setTimeout(() => {
        var urlData  =  fetch ("https://api.iextrading.com/1.0/stock/market/batch?symbols=spy&types=quote") 
        .then((response) => { return response.json()})
        .then((respJson) => { 
            dispatch({type: ADD_IEX, payload:respJson.SPY});
            console.log("resolved");
            console.log("quote:"+respJson.SPY.quote.close);
        })
        .catch((error) => {
            console.error(error);
        });
        const iexData=  urlData;
      }, 
      50);
  };
  }


//this gets QR code for api data
export function getQR() {
    return (dispatch) => {
      setTimeout(() => {
        var qrData  =  fetch ("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=mkirklions") 
        .then((response) => { return response})
        .then((respJson) => { 
            dispatch({type: "ADD_QR", payload:respJson});
            console.log("resolved");
            console.log("quote:"+respJson);
        })
        .catch((error) => {
            console.error(error);
        });
      }, 
      50);
  };
  }