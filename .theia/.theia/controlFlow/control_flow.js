let userRole = "admin";
let accessLevel;
if (userRole == "admin") {
    accessLevel = "access Granted"; 
} else if (userRole == "manager") {
    accessLevel = "Limited Acess";
} else {
    accessLevel = "no access";
}
console.log("Access Level: ", accessLevel);

let isLoggedIn = true;
let userMessage;
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "welcome admin";
    }
        else {
            userMessage = "Welcome User";
             }
             } else {
                userMessage = "please log in";
            }
console.log("User Message", userMessage)

let userType = "subscriber";
let userCategory;
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);