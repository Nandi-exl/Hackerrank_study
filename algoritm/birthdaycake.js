/*
- im in charge of cake birthday
- each year the cake will have one canddle
 so when the year continue the candle will always adding one and the candle
 size is equevaluent with number/numeric

 let say im 5 year so my candle will be [1, 2, 3, 4, 5] t
        this return 5 canddle with total 5 canndle where the fith cancdle is the highest because the number
    im 4 = [2,4,5,5] so i have 2 highest candle which are 5 i have to count the total
    number of the highest candle

    if(the arr[i] > arr[i] + 1){
        push arr[i]
    }else{

    }

    total highest number = for each loop of the highest array it will add 1
    total of the highest number array = result of comparing the value length of an array

*/

const arr = [2, 3, 5, 3, 5, 5, 5, 6];

// console.log(arr.pop());

const totalHighestNumber = (n) => {
  const sortN = n.sort();
  const lastArr = Math.max(...n);
  //why using Math.max() function is to prevent if the last highest value using non absolute syntax sucha as =>> 10{-truncated-}
  /*
  get the last value simplyfy from sorN[sortN.length - 1], 
  sortN.pop() - using pop will remove the value from the array
  Math.max(...n) - modern javascript technique to get last value
  */
  const result = sortN.filter((a) => a == lastArr);
  return result.length;

  //   console.log(sortN);
  //   let highest = [lastArr];

  //   for (let i = sortN.length - 1; i >= 0; i--) {
  //     if (sortN[i] == lastArr) {
  //       highest.push(sortN[i]);
  //     }
  //   }

  //   return highest.length;

  //   return result.length;
};

console.log(totalHighestNumber(arr));
