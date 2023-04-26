import React from 'react';


function Invitation(props){
    return(
    <div>
        <p>
            Subject : {props.subject} <br/>
            To : {props.Email} <br/><br/>
        </p>

    <p>
        Hi , {props.personName} <br/><br/> 
  
        I am having a {props.event} next Friday at my Home . I am happy to see you. Would you like to come ? It will be fun . Lots of people from my school are <br/>
        coming . you know some of them - {props.friends} .
        <br/>
        <br/>
        My house is behind our school , near {props.address} .
        <br/>
        <br/>
        I hope you will come and see you soon .<br/>

        <br/> from ,<br/>
        {props.personName}

    </p>
    </div>



    );
}

export default Invitation;