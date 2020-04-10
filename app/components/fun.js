
'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator
} from 'react-native';

import { AppRegistry, Image, TextInput, Button} from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions

import {
    StackNavigator,
  } from 'react-navigation';


class Value extends React.Component {
    render() {
      return (
      <Text>Hello {this.props.name}, you have {this.props.userSPY} SPY.</Text>    
     )
    }
    }


    //Fetch working

    export default class Fun extends React.Component {

        constructor(props){
          super(props);
          this.state ={ isLoading: true}
        }
      
  componentDidMount(){
    return fetch('https://api.iextrading.com/1.0/stock/market/batch?symbols=spy&types=quote,news,chart&range=1m&last=5')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.SPY,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }




  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }


    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          quote= {({tree}) => tree.quote}
          renderItem={({item}) => <Text>{item.symbol}, </Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

      
      
      {/*
      Original Playworld
      */}
      export class Playworld extends React.Component {
        constructor(props) {
          super(props);
          this.state = {usdIn: ''};
        }
        static navigationOptions = {
          title: 'Welcome',
        };
        render() {
          const { navigate } = this.props.navigation;
      
          let pic= {
            uri: 'https://i.redd.it/nm3kc8kzwki01.jpg'
          };
          return (
            
            <View style={styles.container}>
              <Value name='Michael Kirk' userSPY='0'/>
       
              <Image 
                source= {pic} 
                style={{width:193, height: 110}}
              />
              <Text style={styles.text}>Convert To SPY </Text>
      
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
      
       <Button
              title="Buy"
              onPress={() =>
                navigate('Buy', { name: 'Jane' })
              }
            />    </View>
          );
        }
      }
      