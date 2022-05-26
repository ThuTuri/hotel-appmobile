import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LoginScreen({navigation}){
    return(
        
        <View style={styles.header} >
        <Text style={{ fontSize: 20, fontWeight: '500' }}>Hihi cái này tối về em làm, </Text>
        <Text style={{ fontSize: 20, fontWeight: '500' }}>còn tối nào thì em khum biết</Text>
    </View>
);
}

const styles = StyleSheet.create({
header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

},

})