"use strict";
{
    const reverseArray = (arr) => {
        let reverseArr = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            reverseArr.push(arr[i]);
        }
        return console.log(reverseArr);
    };
    reverseArray(["Asta", "Yeami", "Aleen"]);
}
