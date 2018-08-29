/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  const unitsPair = new Map([
    ['l', {symbol: 'gal', convertValue: 0.26417}],
    ['kg', {symbol: 'lbs', convertValue: 2.20462}],
    ['km', {symbol: 'mi', convertValue: 0.62137}],
    ['gal', {symbol: 'l', convertValue: 3.78541}],
    ['lbs', {symbol: 'kg', convertValue: 0.453592}],
    ['mi', {symbol: 'km', convertValue: 1.60934}]
  ]);
  
  const units = new Map ([
    ['l', {name: 'litres'}],
    ['kg', {name: 'kilograms'}],
    ['km', {name: 'kilometers'}],
    ['gal', {name: 'gallons'}],
    ['lbs', {name: 'pounds'}],
    ['mi', {name: 'miles'}]
  ]);
  
  
  this.getNum = function(input) {
    var result = parseFloat(input) || 1;
    
    var input = input.match(/(^(\.?\d+\.?\d*)(\/?)(\.?\d+\.?\d*)?)?([a-zA-Z ]*)/);
    
    // invalid input
    if (!input || (input[4] && input[3] !== '/')) return NaN;
    if ((input[0] != input.input)) return NaN;
    
    // fractional input
    if (input[4]) {
      return Number(input[2]) / Number(input[4]);
    }
     // decimal input
    if (input[2]) {
      return Number(input[2]);
    }
    
    return units.get(input[5].toLowerCase()) ? 1 : NaN;
  };
  
  
  this.getUnit = function(input) {
    input = input.match(/[a-zA-Z ]+$/);
    
    if (input) {
      const unit = input[0]
        .replace(/\s/g, '')
        .toLowerCase();
      
      return units.get(unit) && unit;
    }
    
    return undefined;
  };
  
  
  this.getReturnUnit = function(initUnit) {
    const returnUnit = unitsPair.get(initUnit);
    
    return returnUnit && returnUnit.symbol;
  };

  
  this.spellOutUnit = function(unit) {
    return unit && units.get(unit).name;;
  };
  
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    const pairUnit = unitsPair.get(initUnit)
    
    return pairUnit 
      ? parseFloat((initNum * pairUnit.convertValue).toFixed(5))
      : undefined;
  };
  
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
