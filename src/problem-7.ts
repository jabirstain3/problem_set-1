{
    function logstring ( variable: unknown) {
        if (typeof variable === "string") {
            console.log(variable);
        }
        else {
            console.log("Error: The input is not a string");
        }
    }

    logstring(43);
}