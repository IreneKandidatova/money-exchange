// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var H = 50;
    var Q = 25;
    var D = 10; 
    var N = 5;
    var P = 1;
    var empty = [];
    var error = "You are rich, my friend! We don't have so much coins for exchange";
    var err = {"error":error};
    if (currency > 10000) {return err};
    if (currency <= 0) { return empty };
    var HNumber = Math.floor(currency/H);
    currency = currency -  HNumber*H;
    var QNumber = Math.floor(currency / Q);
    currency = currency - QNumber * Q;
    var DNumber = Math.floor(currency / D);
    currency = currency - DNumber * D;
    var NNumber = Math.floor(currency / N);
    currency = currency - NNumber * N;
    var PNumber = Math.floor(currency / P);
    var result = {"H": HNumber, "Q": QNumber, "D": DNumber, "N": NNumber,"P":PNumber};
    if (PNumber == 0) { delete result.P};
    if (NNumber == 0) { delete result.N};
    if (DNumber == 0) { delete result.D};
    if (QNumber == 0) { delete result.Q};
    if (HNumber == 0) { delete result.H};
   return result
}
