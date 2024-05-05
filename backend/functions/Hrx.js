

const Hrx = (Hrx0, coeffs,cps,T,Tr) => {
    const delCp=0,delHrx0value=0;

    for(let i=3; i>=0; i--){
        delCp = coeffs[i]*cps[i]*(T-Tr)/coeffs[0];
        delHrx0value = coeffs[i]*Hrx0[i]/coeffs[0];
    }

    return delHrx0value + delCp*(T-T0);
}

module.exports = Hrx;

