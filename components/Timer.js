import React, { useState, useEffect } from "react";
import { Button, Text, View } from "react-native";
import moment from "moment";
import { TimerTextInput } from "./TimerTextInput";

const isTimerSet = (momentTime) => {
    if (momentTime._i == "00:00:00"){
        return false;
    }

    return true;
}

export const Timer = () => {
    const [time, setTime] = useState(moment('00:00:00', "HH:mm:ss"));
    const [timerSet, SetTimerSet] = useState(isTimerSet(time));
    const [timerCanceled, setTimerCanceled] = useState(true);
    
    
    const [pause, setPause] = useState(false);
    const [hour, setHour] = useState("00")
    const [minute, setMinute] = useState("00")
    const [second, setSecond] = useState("00")

    
    useEffect(() => {

        setTime(moment(`${hour}:${minute}:${second}`,  "HH:mm:ss"));
        SetTimerSet(isTimerSet(moment(`${hour}:${minute}:${second}`,  "HH:mm:ss")));
       
    }, [hour, minute, second]);
    
    let TextInput;
    {
        if (timerCanceled){
            
            TextInput = <TimerTextInput setHour={setHour} setMinute={setMinute} setSecond={setSecond}/>;
        }
        else {
            TextInput = 
              <></>
        }
    }

    const resetCountDown = () => {
        setTime(moment('00:00:00', "HH:mm:ss"))
        setTimerCanceled(true)
    }

    console.log(time)
    return (
        <View style={{
            flexDirection: "vertical",
            width: "100%",
            alignItems: "center",
            }}>
            
            <Text style={{fontSize: 40}}>
                {time.format(
                    'HH:mm:ss'
                )}
            </Text>

            <View
                style={{
                width: "100%",
                flexDirection: "row",
                padding: 20,
                justifyContent:"space-between",
                }}
                >

                <Button
                    disabled = {timerCanceled}
                    onPress={resetCountDown}
                    title="Cancel"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />

                <Button
                    disabled = {!timerSet}
                    onPress={()=>{setTime(moment(time).subtract(1,"seconds")); setTimerCanceled(false);}}
                    title="Start"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />

                <Button
                    title="Pause"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />

                <Button
                    title="Resume"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
            {TextInput}
        </View>
       
    );
}
