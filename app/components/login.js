import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../actions'; //Import your actions
import store from '../store.js';
import { Buy } from './welcome';



  // Log the initial state
  console.log(store.getState())
 
  // Every time the state changes, log it
  // Note that subscribe() returns a function for unregistering the listener
  const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
  )

export function sendData(email,password,password2) {

 
    console.log(email);
    console.log(password + password2)

return "";


}



class Login extends React.Component {


    //All from medium boilerplate tutorial
    constructor(props) {
        super(props);

        this.state = {
            email: "test",
            password:"test",
            password2:"asd",
            

        };

    }

    //Run Actions
    componentDidMount() {
        console.log("getting user");
        this.props.getUser();
      //this.props.getURL();
      console.log("getting iex");
        this.props.getIEX();
    
        
      
    }


  render() {


    return (
      


<View
style= {{flex: 1,
     flexDirection:'column'}}>

            <View
                style={{ 
                    height: 70,
                    padding: 5, 
                    alignItems: "flex-end", 
                    flexDirection: 'row', 
                    justifyContent: 'flex-end', 
                    backgroundColor: color1
                }}
            >

                <Text
                    style={{ 
                        fontSize: 24, 
                        color: '#FFFFFF' 
                    }}


                > Log In</Text>
            </View>


            <View
                style={{ 
                    height: 50,
                    alignItems: "flex-start", 
                    justifyContent: 'flex-start', 
                    backgroundColor: color2 }}
            >
                <Text
                    style={{ fontSize: 30 }}

                > Welcome </Text>

            </View>
            <View
                style={{ 
                    height: 40, 
                    padding: 0, 
                    flexDirection: 'row', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    backgroundColor: color2
                }}
            >
                <Text
                    style={{ fontSize: 24 }}

                > Sign up and begin accepting SPY</Text>


            </View>

            <View
                style={{
                    height: 50, 
                    padding: 5, 
                    flexDirection: 'row',
                    justifyContent: 'space-around', 
                    alignItems: 'center', 
                    backgroundColor: color2
                }}
            >


{//old SPY text went here
}


      <Text
                    style={{ fontSize: fontSize3 }}> 
                    $
                    {
                    
                        (parseFloat(this.props.payload.previousClose)
                        
                        ).toFixed(2)} USD/SPY</Text>
         

          
          <Text
                    style={{ fontSize: fontSize3 }}> 
                      {(parseFloat(this.props.payload.previousClose).toFixed(2)<0?"":"+")}
                    {
                    
                        (parseFloat(this.props.payload.changePercent)*
                        100
                        ).toFixed(2)}% past day</Text>
                  
       
</View>



{
    /////////BODY
}


            <View
                style={{
                    height: 60, flexDirection: 'column', justifyContent: 'center',
                    alignItems: 'center', backgroundColor: color3
                }}
            >
                <Text
                    style={{ fontSize: fontSize1 }}

                >Sign Up Now</Text>
              

            </View>

            <View
                style={{ 
                    height: 200, 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    backgroundColor: color3 
                }}
            >
            

 <TextInput
          style={{height: 40, width: 165}}
          placeholder= "Enter your email"
          onChangeText={(email)=>this.setState({email})}
          />

           <TextInput
          style={{height: 40, width: 165}}
          placeholder= "Enter your password"
          onChangeText={(password)=>this.setState({password})}
          />

           <TextInput
          style={{height: 40, width: 165}}
          placeholder= "Confirm your password"
          onChangeText={(password2)=>this.setState({password2})}
          />

     
          <Text 
            style={{padding: 10}}>
          Convert {this.state.usdIn} USD, Get {parseFloat((this.state.usdIn/278).toFixed(3))} SPY 
         {/* {Math.round((this.state.usdIn/278)*100)/100} */}
        </Text>



             
            </View>

            <View
                style={{ 
                    height: 50, 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    backgroundColor: color3
                }}
            >
                <Button
                    onPress={Buy}
                    title="Create Account"
                    color= {color4}
                    accessibilityLabel="Login"
                />
            </View>

            <View
                style={{ 
                    height: 50, 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    backgroundColor: color3 
                }}
            >
        




            </View>


            <View
                style={{ 
                    height: 200,  
                    padding:20,
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'flex-end', 
                    backgroundColor: color3
                }}
            >
                <Text
                    style={{ fontSize: 12 }}

                >Quote of the day:</Text>
                <Text
                    style={{ fontSize: 18 }}

                >"Keep Going"</Text>


            </View>


</View>



    );
  }
}



// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    console.log("the state of things:");
    console.log(state);
    return {
      
        userData: state.reducerUser.userData,
        userData2: state.reducerUser,
        payload: state.iexDataReducer.quote,
        loginData: state.loginReducer
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Login);

const color1=  '#36B1BF';
const color2=  '#55E89B';
const color3=  '#E9F1DF';
const color4=  '#F2385A';
const color5=  '#F5A503';

fontSize1=32;
fontSize2= 24;
fontSize3= 18;
fontSize4=16;
fontSize5=12;


const styles = StyleSheet.create({


  loginScreen: {
    flex:1,
    flexDirection:"column",
    justifyContent: 'space-around',

  },

  topBar: {
 flex:1,
 justifyContent: "flex-end",
 alignItems:"flex-start",
  },

  playText: {
    flex: 1,
   flexDirection: 'column',
   justifyContent: 'center'


 },

  headerText: {
    flex: 1,
   
   backgroundColor: 'rgba(0,0,0,0.5)',
  padding: 15,
 },
  centerText: {
     flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },

  bodyText: {
padding: 10,
  }

}
);
