import React, {useState, useEffect, useRef } from "react";
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
    const [timerRunning, setTimerRunning] = useState(false);
    const [timerPaused, setTimerPaused] = useState(false);
    const [timerCanceled, setTimerCanceled] = useState(true);
    const [hour, setHour] = useState("00");
    const [minute, setMinute] = useState("00");
    const [second, setSecond] = useState("00");

    const  nIntervId = useRef();

    const countdown = () => {
        let newTime = time.subtract(1,"seconds").format('HH:mm:ss').split(":"); 
        setHour(newTime[0]); 
        setMinute(newTime[1]); 
        setSecond(newTime[2]); 
      
        
      
    }

    const togglePause = () => {
        setTimerPaused(!timerPaused)
    }

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


    //This useEffect listens for changes in the hour, minute and second varialbles
    useEffect(() => {
        setTime(moment(`${hour}:${minute}:${second}`,  "HH:mm:ss"));
        SetTimerSet(isTimerSet(moment(`${hour}:${minute}:${second}`,  "HH:mm:ss")));
       
    }, [hour, minute, second]);
    
   

    //useeffect to start timer
    useEffect(() => {

        if(timerRunning && !timerPaused){
           
            nIntervId.current = setInterval(countdown, 1000)
        }
        else{
            console.log(nIntervId.current)
            clearInterval(nIntervId.current);
            nIntervId,current = null;

        }

    }, [timerRunning, timerPaused])
    
    

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
                }}
                >
                
                <Button
                    disabled = {!timerRunning}
                    title="Cancel"
                    color="#841584"
                />

                {
                    
                    timerRunning?
                        //conditionally show pause and resume button while timer is running 
                        timerPaused?
                        <Button
                            onPress={togglePause}
                            title="Resume"
                            color="#841584"
                        />
                        :
                        <Button
                            onPress={togglePause}
                            title="Pause"
                            color="#841584"
                        />
                    :
                    //show start button only when timer is not running
                    <Button
                        disabled = {!timerSet}
                        onPress={() => {setTimerRunning(true)}}
                        title="Start"
                        color="#841584"
                    />
                }

            </View>
            
            {
            //display text input only when timer is not running
            !timerRunning?
            TextInput
            :
            <></>
            }
            
        </View>
       
    );
}
 