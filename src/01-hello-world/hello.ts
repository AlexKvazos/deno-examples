console.log("Hello, world!");

console.log("%cThis is a red color", "color: red");
console.log("%cThis is bold and blue", "color:blue;font-weight:bold");

console.log(`Running Deno v${Deno.version.deno} pid ${Deno.ppid}`);

console.log("Random UUID:", crypto.randomUUID());
