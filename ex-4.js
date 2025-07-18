//Exercise 4
// Switch Statement
let lightBulbStatus = "On";

//Start coding here
let result;
switch(lightBulbStatus) {
    case "On":
        result = "Light bulb is On.";
        break;
    case "Off":
        result = "Light bulb is off";
        break;
    default:
        result = "Please choose the correct input."
};

console.log(result);