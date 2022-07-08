
import React from "react";
import {Input, Flex} from "native-base";

export const TimerTextInput = ({setHour, setMinute, setSecond}) => {

    const valueTypes = {"hour": 23, "minute":59, "second": 59};
   
    const setValue = (value, type) => {
       console.log("******", typeof(value), value, parseInt(value))
       if (value && !isNaN(value)){
           value == parseInt(value);
           if(0 <= value <= valueTypes[type]){

           }
          
       }

       return "00"
    }

    const validateHour = (value) => {

    }

    const validateMinute = (value) => {

    }

    const validateSecond  = (value) => {

    }


    return(
        <Flex width= "200px" height="50px" flexDirection="row" alignSelf="center" justifyContent="space-between" marginTop="50px" >
            <Input w={{
                base: "50px",
                md: "50px"
                }} 
                textAlign='center' 
                maxLength={2}
                placeholder='00'
                name = 'hour'
                keyboardType="numeric"
                onChange = {(e) => {setHour(setValue(e.target.value, "hour"))}}/>
            <Input w={{
                base: "50px",
                md: "50px"
                }}  
                textAlign='center'
                maxLength={2}
                placeholder="00"
                name = 'minute'
                keyboardType="numeric"
                onChange = {(e) => {setMinute(setValue(e.target.value), "minute")}} />
            <Input w={{
                base: "50px",
                md: "50px"
                }}  
                maxLength={2}
                textAlign='center'
                placeholder="00"
                name = 'second'
                 keyboardType="numeric"
                onChange = {(e) => {setSecond(setValue(e.target.value, "second"))}} />
        </Flex>
    )
}


 