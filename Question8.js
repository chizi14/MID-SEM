function CalculateDiscount(price,CustomerType,isHoliday){
    if(price < 5000){
        price = price * 0;
    }
    else if( CustomerType == "Regular" ){
        price = price *0.05;
        return price  // 10% discount
    }else if( CustomerType == "Member"){
        price = price * 0.10; // 10% dicount
    }else if( CustomerType == "VIP"){
        price = price * 0.20 // 20% discount
    }else if ( CustomerType == "VIP" && isHoliday == true){
        price = price * 0.25; // 25% discount
    }
}