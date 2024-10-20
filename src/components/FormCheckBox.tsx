import React from 'react'
import {} from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";

type checkBoxPropType = {
    id : string,
    label : string,
    checkBoxColor: string,
    isChecked: boolean,
    setIsChecked: (value: boolean) => void;
}
function FormCheckBox(props: checkBoxPropType) : React.JSX.Element {
    return (
    <BouncyCheckbox id={props.id} text={props.label} fillColor={props.checkBoxColor}  isChecked={props.isChecked} onPress={() => {
        props.setIsChecked(!props.isChecked)}
    }/>
    )
}

export default FormCheckBox;