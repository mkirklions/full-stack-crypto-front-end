'use strict';
import React, { Component } from 'react';
import {   
    FlatList,
    View,
    Text,
    ActivityIndicator,
    AppRegistry, 
    Image, 
    TextInput, 
    Button,
    StyleSheet
} from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'; //Import your actions
import {
    StackNavigator,
  } from 'react-navigation';
  import store from '../store.js';

  const styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontSize: 19,
        fontWeight: 'bold',
      },
      activeTitle: {
        color: 'red',
      },
    description:{
        marginTop: 5,
        fontSize: 14,
    }
});
  // Log the initial state
console.log(store.getState());
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);
// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state



function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data,

        //Testing mine
        id: state.reducerSPY.id,
        price: state.reducerSPY.price,
        userSPY: state.reducerSPY.userSPY,
        reducerSPY: state.reducerSPY,

        IEX_DATA: state.iexDataReducer.iexData,
        

        //user login
        userData: state.reducerUser.userData,

        //cats

    }
};

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}



class Value extends React.Component {
    render() {
      return (
      <Text>Hello {this.props.name}, you have SPY.</Text>    
     )
    }
    }

class Home extends Component {
    constructor(props) {



        super(props);

        this.state = {
        };

        this.renderItem = this.renderItem.bind(this);
    
    
    }

    componentDidMount() {

        this.props.getUser();
       
   


    }

//{type:GET_SPY,
//price: "15"}

    render() { 
     
       //const { navigate } = this.props.navigation;

        let pic= {
          uri: 'https://i.redd.it/nm3kc8kzwki01.jpg'
        };

        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else {
            return ( 

                <View style={styles.container}>

                  <Value                               
                     />
               
           
                  <Image 
                    source= {pic} 
                    style={{width:193, height: 110}}
                  />
                  <Text              
                  style={styles.text}                  
                  >Convert To SPY {this.props.id}
                  </Text>
           
                  <TextInput
                    style={{height: 40, width: 165}}
                    placeholder= "Enter your USD to Convert"
                    onChangeText={(usdIn)=>this.setState({usdIn})}
                    />
          
               
                    <Text 
                      style={{padding: 10}}>
                    Convert {this.state.usdIn} USD, Get {parseFloat((this.state.usdIn/278).toFixed(3))} SPY 
                   {/* {Math.round((this.state.usdIn/278)*100)/100} */}
                  </Text>



                  <FlatList
                        ref='listRef'
                        data={this.props.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index}/>
          
           <Button
                  title="Buy"
                  onPress={() =>
                    navigate('Buy', { name: 'Jane' })
                  }
                />
          
          {/*
          How to comment
          */}
                </View>
              );
        }
    }

    renderItem({item, index}) {
        return (
            <View style={styles.row}>
                <Text style={styles.title}>
                    {(parseInt(index) + 1)}{". "}{item.title}
                </Text>
                <Text style={styles.description}>
                    {item.description}
                </Text>
            </View>
        )
    }
};



//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);


