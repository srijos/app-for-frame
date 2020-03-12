import React, {Component, Fragment} from 'react';
 
const Greeting = (props) => {
    console.log('In Greetings: reply: ', props.reply)
    const replyMessage = <h2> Reply from above: {props.reply}</h2>;
    return <Fragment>
            <div className="greet-container">
                <h3>Yo! What's your name?</h3>
                <input type="text" size="40" onChange={props.nameHandler}/>
                {props.reply !== '' ? replyMessage : null}
            </div>
        </Fragment>;
}

export default Greeting;