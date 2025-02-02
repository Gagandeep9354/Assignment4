import React, { useState } from 'react'
import { TextInput, StyleSheet, } from 'react-native'

type InputPropType = {
    passLength: string,
    setPassLength: (value: string) => void;
}

function InputBox(props: InputPropType) : React.JSX.Element {
    return(
        <TextInput
        maxLength = {2}
        style={styles.txtBox}
        placeholder='Password Length (8-16)'
        value={props.passLength}
        onChangeText={(length) => {

            props.setPassLength(length)}}

        />
    )
}

export default InputBox;

const styles = StyleSheet.create({
    txtBox: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        width: '80%',
        }
})