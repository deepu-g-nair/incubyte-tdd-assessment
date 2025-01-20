function add(input){
    if(input == '') return 0
    if(!input.includes(',')) return Number(input)
}

module.exports = add