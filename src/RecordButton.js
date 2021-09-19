// the button form material-ui is optional
// npm install @material-ui/core
import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

const RecordButton = (props) => {

    const [isMicOn, setIsMicOn] = useState(false);

    var buttonColour;
    var buttonLabel;

    if (isMicOn) {
        buttonColour = "secondary";
        buttonLabel = "Stop";
    } else {
        buttonColour = "primary";
        buttonLabel = "Start";
    }

    useEffect(() => {
        handleListen()
      }, [isMicOn])
    
    const handleListen = () => {
    if (isMicOn) {
        mic.start()
        mic.onend = () => {
        console.log('continue..')
        mic.start()
        }
    } else {
        mic.stop()
        mic.onend = event => {
            props.setting(false);
        }
    }
    mic.onstart = () => {
        console.log('Mics on')
    }
    
    mic.onresult = event => {
        let transcript = Array.from(event.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')
        const first = transcript.split(' ')[0]
        const second = transcript.split(' ')[1]
        if(first == 'start') {
            props.setting(true);
        }
        if(second == 'pause') {
            props.setting(false);
        }
        if(props.set) {
            transcript = '';
        }
        mic.onerror = event => {
            console.log(event.error)
          }
        }
    }

    return(
        <div style={{ position: 'absolute', right: '50%' }}>
            <Button style={{ display: 'flex', alignSelf: 'center' }} variant="contained" color={buttonColour} onClick={() => {setIsMicOn(!isMicOn)}} >{buttonLabel}</Button>
            <Button style={{ display: 'flex', alignSelf: 'center' }} variant="contained" color={buttonColour} onClick={() => {window.location.reload()}}>Reset</Button>
        </div>
    )
}

export default RecordButton;