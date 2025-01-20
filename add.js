function add(input){
    if(input == '') return 0
    
    let delimiter =  /[\n,]/
    if (input.startsWith('//')) {
        delimiter = new RegExp(`\\${input[2]}`);
        const cleanedInput = input.split('\n')[1]; 
        const numbers = cleanedInput.split(delimiter).map(Number);
        return numbers.reduce((sum, num) => sum + num, 0);
    }    

    const numbers = input.split(delimiter).map(Number)
    const negatives = numbers.filter((num) => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(', ')}`);
    }
    
    return numbers.reduce((sum,num)=>sum+num,0)

}

module.exports = add