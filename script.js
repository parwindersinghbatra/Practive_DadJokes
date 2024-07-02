// const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
const apiKey = "g2XiD6MzNNOB+eZcvKAyHw==CD0DbzFPaaKwZ3bR";

const options = {
    method: 'GET',
    headers: { 'X-Api-Key': apiKey},
}
// let textData = document.getElementById("searchImage").value;
const SearchImageFunction = async () =>{
    
    const apiURL = "https://api.api-ninjas.com/v1/dadjokes"
    try{
        const response = await fetch(apiURL, options)
        const data = await response.json();
        console.log(data[0].joke);
        document.getElementById("jokes").innerHTML = data[0].joke
    }catch(e){
        console.error("This is error ");
    }  
}