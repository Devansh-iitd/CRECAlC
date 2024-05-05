
const Xmb = (V,Ca0,A,Fa0,T,E) => {
    const R=8.3;
    const exp = V*Ca0*A*Math.exp(-E/(R*T))/Fa0*(1+V*Ca0*A*Math.exp(-E/(R*T)/Fa0));
    return exp;
}

const Xeb = (Ua,cpa,Fa0,Hrx0,T,T0) => {
    const R=8.3;
    const exp = (Ua*(T-T0)/Fa0  + cpa*(T-T0))/(-Hrx0);
    return exp;
}

const Xebs=[],Xmbs=[];

const tempcalc =  (V,Ca0,A,Fa0,T,E,Ua,cpa,Hrx0,T0) => {
    for(i =0; i<T0+300;i+=2){
        const Xm = Xmb(V,Ca0,A,Fa0,i,E);
        const Xe = Xeb(Ua,cpa,Fa0,Hrx0,i,T0);
        Xebs.push(Xe);
        Xmbs.push(Xm);

        
    }
    //console.log(Xebs[100],Xmbs[100]);
    return {Xebs,Xmbs};

}

module.exports = tempcalc;