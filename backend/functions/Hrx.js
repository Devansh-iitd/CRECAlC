

const Hrx = (Hrx0, coeffs,cps,T,Tr) => {
    let delCp=0,delHrx0value=0;

    
     coeffs = coeffs.map(Number);
        cps = cps.map(Number);
    console.log(Hrx0,coeffs,cps,T,Tr)

    for(let i=3; i>=0; i--){
        console.log(delCp,delHrx0value)
        delCp += coeffs[i]*cps[i]*(T-Tr)/coeffs[0];
        //delHrx0value = coeffs[i]*Hrx0[i]/coeffs[0];
    }


    //console.log(Hrx0 + delCp*(T-Tr));

    return Hrx0 + delCp*(T-Tr);
}

module.exports = Hrx;

