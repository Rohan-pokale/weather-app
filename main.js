let search_btn=document.getElementById("search-btn");

search_btn.onclick=async()=> {
    let city=document.getElementById("input-city").value;
    const response=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/2025-02-27?key=KENNFUKMUGNWFSZ2NM95NL23M`);
    const data=await response.json();
    console.log(data);  
} 