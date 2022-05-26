import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import COLORS from '../../consts/colors';
import NeedLoginMessage from '../../shared/need-login-message/NeedLoginMessage';

export default function GiftScreen({navigation}){
    return(
        <NeedLoginMessage navigation={navigation}/>
    );
}

const styles = StyleSheet.create({
   
});