/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
    
      if (!initNum && !initUnit) {
        res.send('invalid number and unit');
      } else if (!initNum) {
        //res.send('invalid number');
        res.json({initNum, initUnit, returnNum, returnUnit, string: 'invalid number'});
      } else if (!initUnit) {
        //res.send('invalid unit');
        res.json({initNum: parseFloat(initNum.toFixed(5)), initUnit, returnNum, returnUnit, string: 'invalid unit'});
      } else {
        const response = {initNum, initUnit, returnNum, returnUnit, string: toString};
        res.json(response);
      } 
    });
    
};
