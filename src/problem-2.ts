{
    const findLargestNumber = ( arr : number[]) =>{
        let max: number = arr[0];
        for (let i: number = 1; i < arr.length; i++) {
            if ( max < arr[i]){
                max = arr[i];
            }
        }
        return console.log(max);
    }

    findLargestNumber([23, 54, 23, 35, 74, 18, 69]);
}