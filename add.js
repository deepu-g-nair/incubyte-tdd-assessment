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
    return numbers.reduce((sum,num)=>sum+num,0)

}

module.exports = add