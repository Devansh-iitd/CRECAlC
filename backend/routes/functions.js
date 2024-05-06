const router = require('express').Router();
const ATR = require('../functions/adiabaticTubular');
const equilibriumConversion = require('../functions/equilibriumConversion');
const Hrx = require('../functions/Hrx');
const tempcalc = require('../functions/tempcalc');
const odex = require('odex');


router.route('/adiabaticTubular').post((req,res)=> {
    console.log(req.body)
    const {Hrx0,Fa0,Ca0,reversible,T1,T2,T0,E,k1,kc0,Cpa,gasphase} = req.body;
    const derivative = ATR(Hrx0,Fa0,Ca0,reversible,T1,T2,T0,E,k1,kc0,Cpa,gasphase);
    f = new odex.Solver(derivative, 1).integrate(0,[0]);
    //console.log(f(676));
    X=[], T=[],V=[];
    let value=0.1;

    //console.log(f(2.6))
      
    while(true){
        const ans = f(value);
        //console.log(`Evaluating at value: ${value}, Output: ${f(value)}`);

        X.push(ans);
        T.push(T0-(Hrx0*ans)/Cpa);
        V.push(value);
        value+=0.1;
        if(X[X.length-1]-X[X.length-2]<0.0001){
            value +=0.3;
        }

        if(X[X.length-1]-X[X.length-2]<0.000000001)
            break;
        if(value>6){
            break;
        }
}
   // console.log(X,T,V)
   return res.json({X,T,V});

})

router.route('/HOR').post( (req,res) => {
   // console.log(req.body)
    
    const {Hrx0,a,b,c,d,cpa,cpb,cpc,cpd,T,Tr} = req.body;
    const coeffs = [a,b,c,d];
    const cps = [cpa,cpb,cpc,cpd];
    
   return res.json(Hrx(Hrx0, coeffs,cps,T,Tr));
}
    )

router.route('/equilibriumConversion').post((req,res) => {
    console.log(req.body);
    const {kc, Hrx0, cpa, T1} = req.body;
    return res.json(equilibriumConversion(kc, Hrx0, cpa, T1));
})

router.route('/tempcalc').post((req,res) => {
    console.log(req.body)
    const {V,Ca0,A,Fa0,T,E,Ua,Hrx0,T0,Fb0,Fm0,Cpa,Cpb,Cpc,Cpm} = req.body;

    return res.json(tempcalc(V,Ca0,A,Fa0,T,E,Ua,Hrx0,T0,Fb0,Fm0,Cpa,Cpb,Cpc,Cpm));
})

module.exports = router;
