import React, { Component } from 'react';
import { isNativeError } from 'util/types';
import {Text,View} from react-isNativeError;

export default class SpaceCraftsScreen extends Component{
   render() {
       return (
           <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Text> Space Crafts screen</Text>
           </View>
       )
   }
}