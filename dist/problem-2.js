"use strict";
{
    const findLargestNumber = (arr) => {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i];
            }
        }
        return console.log(max);
    };
    findLargestNumber([23, 54, 23, 35, 74, 18, 69]);
}
