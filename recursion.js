const isEven = (num)=>{
    if (num >= 0){
        if(num === 0){
            console.log(true);
        }
        if(num === 1){
            console.log(false);
        }
        else {
            isEven(num-2);
        }

    }else {
        console.log('please insert a positive whole number')
    }

}

isEven(50);
isEven(49);