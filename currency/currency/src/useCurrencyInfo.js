import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data, setdata] = useState({})//yaha curly brackets issiliye lagaye hai kyuki agar fetch kuch nhi bhi nhi return karta hai to hamare ye ek empty object hai to jab hum ispe loop lagayenge to ye crash nhi karega

useEffect(()=>{
fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
.then((res)=>res.json())
.then((res)=>setdata(res[currency]))//yaha par currency jo bhi hum denge wohi url me se aa jayega
},[currency]) // This line specifies the dependency array for the useEffect hook. The effect will re-run whenever the currency value changes. If currency changes, the fetch request will be made again to get the updated data.
return data;
}

export default useCurrencyInfo;