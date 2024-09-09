{
    const reverseArray = <T>  (arr: T[]) =>{
        let reverseArr: T[] = []; 
        for (let i: number = arr.length - 1; i >= 0 ; i--) {
            reverseArr.push(arr[i]);
        }
        return console.log( reverseArr );
    }

    reverseArray(["Asta", "Yeami", "Aleen"])
}