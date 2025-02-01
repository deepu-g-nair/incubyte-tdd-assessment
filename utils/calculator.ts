function add(input: string): number {
    if(input == ''){
        return 0
    }
    else{
        const numbers = input.split(/[\n,]+/).map(Number);
        if(numbers.length == 1){
            return numbers[0]
        }
        else{
            const sum = numbers.reduce((acc, curr) => acc + curr, 0);
            return sum
        }
    }
}

export { add };
