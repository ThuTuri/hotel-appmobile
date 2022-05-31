import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 35, marginLeft: 10 }}>
                <Icon name='arrow-back-ios' size={28} color={COLORS.dark} onPress={navigation.goBack} />
            </View>
            <View style={styles.viewfl1}>
                <Text style={{ fontSize: 30, bottom: 17, fontWeight: 'bold', top: 10, color: COLORS.primary }}>
                    Sign in
                </Text>
            </View>
            <View style={styles.viewfl2}>
                <KeyboardAvoidingView>
                    <View style={styles.textinput}>
                        <AntDesign style={styles.icon} name='mail' size={20} />
                        <TextInput
                            style={{ width: '100%', height: '100%' }}
                            placeholder='Username'
                        />
                    </View>
                    <View style={styles.textinput}>
                        <AntDesign style={styles.icon} name='lock' size={20} />
                        <TextInput
                            style={{ width: '100%', height: '100%' }}
                            placeholder='Password'
                            secureTextEntry={true}
                        />
                    </View>
                </KeyboardAvoidingView>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ fontSize: 18, color: 'white' }}>Login</Text>
                </TouchableOpacity>
                <View style={styles.viewSignup}>
                    
                        <Text style={{ right: 10, fontSize: 15 }}>Don't have an account?</Text>
                        <TouchableOpacity >
                            <Text style={{ fontSize: 15, color: '#E71C1C' }}>Sign up</Text>
                        </TouchableOpacity>
                    

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewfl1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    viewfl2: {
        flex: 2,
        justifyContent: 'space-around',
        marginLeft: 15,
        marginRight: 15
    },
    viewfl3: {
        flex: 3,
        marginTop: 30,
        justifyContent: 'center',
        flexDirection: 'row',
        alignContent: 'flex-start'
    },
    textinput: {
        borderWidth: 1,
        padding: 5,
        margin: 15,
        height: 50,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        position: 'relative',
        margin: 5,
        color: COLORS.dark
    },
    buttonfalse: {
        backgroundColor: '#3D3D3D',
        alignItems: 'center',
        padding: 15,
        borderRadius: 15,
        margin: 10,
    },
    button: {
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        padding: 15,
        borderRadius: 15,
        margin: 10,
    },
    viewSignup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
})