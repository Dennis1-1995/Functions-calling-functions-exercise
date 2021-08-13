// Hey kiddo:
const checkingAge = function (age){
    if (age >=18){
        return true;
    }else{
        return false;
    }
}

const checkingAdult = function (age){
    let adult = checkingAge(age);
    if (adult==true){
        return "Hello there";
    }else{
        return "Hey kiddo";
    }
}

console.log(checkingAdult(10));

//=====================================================

// VAT calculations:

// VAT exercise 1:

const vatCalc = function (price, vat){
    if (vat == 21){
        return price * 1.21;
    }else if (vat == 9){
        return price * 1.09;
    }else{
        return price;
    }
};

const price = function(price, vat){
    return priceVAT = vatCalc(price, vat);
    //return price * priceVAT / 100;
};

console.log(price(222,0));                              
console.log(Math.round(price(222,0)) + ' => Afgerond');

// VAT exercise 2:

const amountCalcVat = function(amount, vat){
    if (vat == 21){
        return Math.round(amount / 1.21);
    }else if(vat == 9){
        return  Math.round(amount / 1.09);
    }else{
        return amount;
    }
};


const arrayPriceVat = function (amount, vat){
    let basePrice = amountCalcVat(amount, vat);
    let myArray = [];
    let priceVat = amount - basePrice;
    myArray.push(basePrice, priceVat);
    return myArray;
};

console.log(arrayPriceVat(325,0));

