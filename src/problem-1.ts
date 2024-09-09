{
    const repeatString = ( text: string, repetition: number) => {
        let temp: string ='';
        for ( let i: number = 0; i < repetition; i++ ) {
            temp += text; 
        }
        return console.log( temp );

        ;
    }

    repeatString("hello!", 3);
}