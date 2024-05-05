const math = require('mathjs');
const nerdamer = require('nerdamer/all');


const equilibriumConversion = (kc, Hrx0, cpa, T1,E=0) => {
  const R = 8.31;

  const T=[],Xebs=[],Xes=[];

  
    for( i=T1;i<=T1+400; i+=2){

      const ke = kc * Math.exp((Hrx0 * (1 / T1 - 1 / i)/R) );
      const Xeb = cpa*(i - T1) / (-Hrx0);
      const Xe = ke / (1 + ke);
        T.push(i);
        Xebs.push(Xeb);
        Xes.push(Xe);
    }

    // console.log(T[100],Xebs[100],Xes[100])
    // console.log(math.intersect([300,0],[660,6.91],[300,1],[660,0.896]));
    //const solution = nerdamer.solv
    return {T,Xebs,Xes};


};

//equilibriumConversion(100000, -20000, 50, 298,10000);

module.exports = equilibriumConversion;