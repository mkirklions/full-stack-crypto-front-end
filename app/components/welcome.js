import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../actions'; //Import your actions
import store from '../store.js';

export class Buy extends React.Component {
    render() {
        
    }

}

  // Log the initial state
  console.log(store.getState())
 
  // Every time the state changes, log it
  // Note that subscribe() returns a function for unregistering the listener
  const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
  )

  
function changeSPY() {

        if (this.props.payload.changePercent > 0) {
            

        return (
          (parseFloat(this.props.payload.changePercent)*100).toFixed(2)
       )
    }
    else {
        return (
        (parseFloat(this.props.payload.changePercent)*100).toFixed(2)
           
       )
    }
}
      




class Welcome extends React.Component {


    //All from medium boilerplate tutorial
    constructor(props) {
        super(props);

        this.state = {
        };

    }

    //Run Actions
    componentDidMount() {
        console.log("getting user");
        this.props.getUser();
      //this.props.getURL();
      console.log("getting iex");
        this.props.getIEX();
        this.props.getQR();
      
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


                > Settings</Text>
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

                > Welcome {this.props.userData.fname}</Text>

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

                > You have </Text>

                <Text  
                    style={{ fontSize: 24 }}
                >{this.props.userData.spy} SPY</Text>

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
                      {(parseFloat(this.props.payload.previousClose).toFixed(2)<0?"":"+")}
                    {
                    
                        (parseFloat(this.props.payload.changePercent)*
                        100
                        ).toFixed(2)}%</Text>
                  
        
            <Text
                    style={{ fontSize: fontSize3 }}
                >
                {(parseFloat(this.props.payload.previousClose).toFixed(2)<0?"":"+")}$

                {
                ((parseFloat(this.props.payload.changePercent))*
                (parseFloat(this.props.userData.spy))*
                (parseFloat(this.props.payload.previousClose))).toFixed(2)} past day
                </Text>


      <Text
                    style={{ fontSize: fontSize3 }}> 
                    $
                    {
                    
                        (parseFloat(this.props.payload.previousClose)*
                        parseFloat(this.props.userData.spy)
                        ).toFixed(2)}</Text>
            </View>



{
    /////////BODY
}


            <View
                style={{
                    height: 40, flexDirection: 'column', justifyContent: 'center',
                    alignItems: 'center', backgroundColor: color3
                }}
            >
                <Text
                    style={{ fontSize: 18 }}

                >Receive SPY</Text>
                <Text
                    style={{ fontSize: 12 }}

                >Your username is {this.props.userData.username} 
                </Text>

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
                <Image
                    style={{ width: 170, height: 170 }}
                    source={{ uri: 'https://api.qrserver.com/v1/create-qr-code/?data=mkirklions&bgcolor=FFFFFF'
                 }}
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
                <Button
                    onPress={Buy}
                    title="Buy SPY"
                    color= {color4}
                    accessibilityLabel="Buy SPY"
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
                <Button
                    onPress={Buy}
                    title="Send SPY"
                    color= {color4}
                    accessibilityLabel="Send SPY"
                />





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
        loginData: state.loginReducer.email
        
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

const color1=  '#36B1BF'
const color2=  '#55E89B'
const color3=  '#E9F1DF'
const color4=  '#F2385A'
const color5=  '#F5A503'
fontSize3= 18;

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
