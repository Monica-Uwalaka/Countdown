
import React  from "react";
import {Flex} from "native-base";
import SelectDropdown from 'react-native-select-dropdown'

export const TimerTextInput = ({setHour, setMinute, setSecond}) => {
   
    const range = (start, stop, step) => Array.from({length: (stop-start / step) + 1}, (_, i) => (start+(i*step))).map(String);
    
    return(
        <Flex width= "200px" height="50px" flexDirection="column" alignSelf="center" justifyContent="space-between" marginTop="50px" >

            <SelectDropdown
                data={range(0, 23, 1)}
                onSelect={(selectedItem, index) => {
                    setHour(selectedItem)
                }}
                defaultValueByIndex = {0}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
            />

            <SelectDropdown
                data={range(0, 59, 1)}
                onSelect={(selectedItem, index) => {
                    setMinute(selectedItem)
                    console.log(selectedItem, index)
                }}
                defaultValueByIndex = {0}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
            />

            <SelectDropdown
                data={range(0, 59, 1)}
                onSelect={(selectedItem, index) => {
                    setSecond(selectedItem)
                }}
                defaultValueByIndex = {0}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
            />          
        </Flex>
    )
}


 