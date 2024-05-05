const router = require('express').Router();
const ATR = require('../functions/adiabaticTubular');
const equilibriumConversion = require('../functions/equilibriumConversion');
const Hrx = require('../functions/Hrx');
const tempcalc = require('../functions/tempcalc');
const odex = require('odex');


router.route('/adiabaticTubular').post((req,res)=> {
    const {Hrx0,Fa0,Ca0,reversible,T1,T2,T0,E,k1,kc0,Cpa,gasphase} = req.body;
    const derivative = ATR(Hrx0,Fa0,Ca0,reversible,T1,T2,T0,E,k1,kc0,Cpa,gasphase);
    f = new odex.Solver(derivative, 1).integrate(0,[0]);
    //console.log(f(676));
    X=[], T=[],V=[];
    let value=0.2;
      
    while(true){
        X.push(f(value));
        T.push(T0-(Hrx0*f(value))/Cpa);
        V.push(value);
        value+=0.2;
        if(X[X.length-1]-X[X.length-2]<0.0001){
            value +=0.5;
        }
        else if(X[X.length-1]-X[X.length-2]>0.01){
            value +=0.2;
        }
        if(X[X.length-1]-X[X.length-2]<0.000001)
            break;
        if(value>6){
            break;
        }

        
        


    }
   return res.json({X,T,V});

})

router.route('/HOR').post( (req,res) => {
    const {Hrx0, coeffs,cps,T,Tr} = req.body;

   return res.json(Hrx(Hrx0, coeffs,cps,T,Tr));
}
    )

router.route('/equilibriumConversion').post((req,res) => {
    const {kc, Hrx0, cpa, T1} = req.body;
    return res.json(equilibriumConversion(kc, Hrx0, cpa, T1));
})

router.route('/tempcalc').post((req,res) => {
    const {V,Ca0,A,Fa0,T,E,Ua,cpa,Hrx0,T0} = req.body;
    return res.json(tempcalc(V,Ca0,A,Fa0,T,E,Ua,cpa,Hrx0,T0));
})

module.exports = router;
