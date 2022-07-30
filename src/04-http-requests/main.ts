const response = await fetch("https://restcountries.com/v3.1/name/mexico");

console.log(response.status, response.statusText);
console.log(response.headers.get("Content-Type"));
console.log(await response.json());
