const calculate = require('./calculator')

test('returns 0 if the input is an empty string', ()=>{
    expect(calculate('')).toBe(0)
})