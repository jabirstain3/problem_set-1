"use strict";
{
    const repeatString = (text, repetition) => {
        let temp = '';
        for (let i = 0; i < repetition; i++) {
            temp += text;
        }
        return console.log(temp);
        ;
    };
    repeatString("hello!", 3);
}
