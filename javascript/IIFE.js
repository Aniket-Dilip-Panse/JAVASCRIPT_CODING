// IIFE STANDS FOR IMMEDIATE INVOKE FUNCTION EXPRESSION
// IT IS MAINLY USE TO CONNECT WITH THE DATABASE OR WIFI AND DO NOT CHANGE THE GLOBAL PORTION.
(function () {
    console.log("IIFE");
})();

(() => {
    console.log("Invoking arrow function immediately");
})()
