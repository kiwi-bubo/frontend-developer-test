import './Button.css'

export function Button({buttonText}) {
    function logMessage() {
        console.log("I hope you like the look of the webpage! \nCheck it out in smaller screen sizes as well :)");
    }

    return (
        <button 
            onClick={logMessage}
            className="my-button">
            {buttonText}
        </button>
    )
}