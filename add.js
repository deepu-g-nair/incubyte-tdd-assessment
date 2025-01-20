function add(input){
    if(input == '') return 0
    if(!input.includes(',')) return Number(input)
    
    let delimiter =  /[\n,]/

    const numbers = input.split(delimiter).map(Number)
    return numbers.reduce((sum,num)=>sum+num,0)


}

module.exports = add