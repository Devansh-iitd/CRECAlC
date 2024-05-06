
const Xmb = (V,Ca0,A,Fa0,T,E) => {
    const R=1.987;
    //console.log(-E/(R*T),T)
    const exp = (V*Ca0*A*Math.exp(-E/(R*T)))/(Fa0*((1+V*Ca0*A*Math.exp(-E/(R*T))/Fa0)));
    return exp;
}

const Xeb = (Hrx0,T,T0,thetai,delcp,cps) => {
    const R=1.987;
    console.log(thetai[0]*cps[0]+thetai[1]*cps[1]+thetai[3]*cps[3],thetai,cps)
    const exp = ((thetai[0]*cps[0]+thetai[1]*cps[1]+thetai[3]*cps[3])*(T-T0))/(-Hrx0 - delcp*(T-T0));
    return exp;
}

 let Xebs=[],Xmbs=[],Ts=[];

const tempcalc =  (V,Ca0,A,Fa0,T,E,Ua,Hrx0,T0,Fb0,Fm0,Cpa,Cpb,Cpc,Cpm) => {
    console.log(V,Ca0,A,Fa0,T,E,Ua,Hrx0,T0,Fb0,Fm0,Cpa,Cpb,Cpc,Cpm)
     thetai=[1,Fb0/Fa0,0/Fa0,Fm0/Fa0];
    const delcp = Cpc-Cpa-Cpb;
     cps = [Cpa,Cpb,Cpc,Cpm];
     cps= cps.map(Number);
     thetai=thetai.map(Number);

    for(i =540; i<630;i++){

        console.log(i);
        const Xm = Xmb(V,Ca0,A,Fa0,i,E);
        const Xe = Xeb(Hrx0,i,T0,thetai,delcp,cps);
        Xebs.push(Xe);
        Xmbs.push(Xm);
        Ts.push(i);

        
    }
    //console.log(Xebs[100],Xmbs[100]);
    return {Xebs,Xmbs,Ts};

}



module.exports = tempcalc;