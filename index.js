const zodiac= document.getElementById("zodiac");
const body=document.body;
const getColor= ()=>{
    switch(zodiac.value){
        case "aries":
        body.style.backgroundColor="red";
        break;
        case "tarus":
        body.style.backgroundColor="green";
        break;
        case "gemini":
        body.style.backgroundColor="yellow";
        break;
        case "cancer":
        body.style.backgroundColor="silver";
        break;
        case "leo":
        body.style.backgroundColor="orange";
        break;
        case "virgo":
        body.style.backgroundColor="brown";
        break;
        case "libra":
        body.style.backgroundColor="pink";
        break;
        case "scorpio":
        body.style.backgroundColor="black";
        break;
        case "sagittarius":
        body.style.backgroundColor="purple";
        break;
        case "aquarius":
        body.style.backgroundColor="gray";
        break;
        case "capricon":
        body.style.backgroundColor="blue";
        break;
        case "pisces":
        body.style.backgroundColor="#90EE90";
        break;
        default:
            break;
        
    }
}