

const Hrx = (Hrx0, coeffs,cps,T,Tr) => {
    let delCp=0,delHrx0value=0;

    
     coeffs = coeffs.map(Number);
        cps = cps.map(Number);
    console.log(Hrx0,coeffs,cps,T,Tr)
    coeffs[2]= -coeffs[2];

    for(let i=2; i>=0; i--){
        //console.log(delCp,delHrx0value)
        delCp += coeffs[i]*cps[i]/coeffs[0];
        
        //delHrx0value = coeffs[i]*Hrx0[i]/coeffs[0];
    }
    //console.log(delCp,T-Tr,delCp*(T-Tr))


    //console.log(Hrx0 + delCp*(T-Tr));

    return Hrx0 + delCp*(T-Tr);
}

module.exports = Hrx;

