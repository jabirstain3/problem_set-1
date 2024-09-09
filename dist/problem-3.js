"use strict";
{
    const filterEvenNumbers = (arr) => {
        const arrOfEven = arr.filter((num) => num % 2 === 0);
        return console.log(arrOfEven);
    };
    filterEvenNumbers([47, 71, 2, 4, 24, 35]);
}
