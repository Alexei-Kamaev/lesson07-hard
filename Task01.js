'use strict';
{
    const allСashbox = [
        [12, 4500], 
        [7, 3210], 
        [4, 650], 
        [3, 1250], 
        [9, 7830], 
        [1, 990], 
        [6, 13900], 
        [1, 370]
    ];
    console.log(allСashbox);
    function getAveragePriceGoods(arr){
    let summResult=0, summCount=0;
    for (let a = 0; a < arr.length; a += 1) {
        const mediumCheck = (arr[a]);
        const [x, y] = mediumCheck;
        summResult = summResult + y;
        summCount = summCount + x;
        }
    return ((summResult / summCount).toFixed(2));
    }
    console.log(getAveragePriceGoods(allСashbox));

}