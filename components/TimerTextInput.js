
import React  from "react";
import {Flex} from "native-base";
import SelectDropdown from 'react-native-select-dropdown'

export const TimerTextInput = ({setHour, setMinute, setSecond}) => {
   
    const range = (start, stop, step) => Array.from({length: (stop-start) / step + 1}, (_, i) => (start+(i*step))).map(String)
    
    return(
        <Flex width= "200px" height="50px" flexDirection="column" alignSelf="center" justifyContent="space-between" marginTop="50px" >


            <SelectDropdown
                data={range(0, 23, 1)}
                onSelect={(selectedItem, index) => {
                    setHour(selectedItem)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />

            <SelectDropdown
                data={range(0, 59, 1)}
                onSelect={(selectedItem, index) => {
                    setMinute(selectedItem)
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />

            <SelectDropdown
                data={range(0, 59, 1)}
                onSelect={(selectedItem, index) => {
                    setSecond(selectedItem)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />          
        </Flex>
    )
}


 