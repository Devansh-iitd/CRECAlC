const  odex = require('odex');



const {Hrx} = require('./Hrx');
const ATR = (Hrx0,Fa0,Ca0,reversible,T1,T2,T0,E,k1,kc0,Cpa,gasphase=false) => {
    

    
    return function derivative(x,y) {

    const R = 8.314;
    const X = y;

    //console.log(y);

    


    const T = T0- (Hrx0*y)/Cpa;
    
    const k = k1*Math.exp(E*(1/T1-1/T)/R);
    const kc = kc0*Math.exp(Hrx0*(1/T2-1/T)/R);
    
    

    var ra;
    if(reversible== false && gasphase==false) {
     ra =-k*Ca0*(1-X);
    }
    else if(reversible== true && gasphase==false) {
         ra =-k*Ca0*(1-(1+1/kc)*y);
    }
    else if(reversible== false && gasphase==true) {
            ra =-k*Ca0*(1-X)*T0/T;
    }
    else {
        ra =-k*Ca0*(1-(1+1/kc)*y)*T0/T;
    }

        return [-ra/Fa0];
    }
    

}


// const derivative =ATR(-6900,0.9*163,9.3,true,360,333,330,65700,31.1,3.03,141);
//f = new odex.Solver(derivative, 1).integrate(0,[0]);
    
//console.log(f(2.6));
module.exports = ATR;