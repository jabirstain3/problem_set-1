{
    const filterEvenNumbers = (arr: number[]) =>{
        const arrOfEven: number[] = arr.filter((num: number) => num % 2 === 0);
        return console.log( arrOfEven );
    }

    filterEvenNumbers([47, 71, 2, 4, 24, 35])
}