const math = require('mathjs');
const nerdamer = require('nerdamer/all');


const equilibriumConversion = (kc, Hrx0, cpa, T1,E=0) => {
  const R = 1.98;

  var T=[],Xebs=[],Xes=[];

  
    for( let i=300;i<=600; i=i+5){
      

      const ke = kc * Math.exp((Hrx0 * (1 / T1 - 1 / i)/R) );
      const Xeb = cpa*(i - T1) / (-Hrx0);
      const Xe = ke / (1 + ke);
        T.push(i);
        Xebs.push(Xeb);
        Xes.push(Xe);
        //console.log(`Iteration at T=${i}: ke=${ke}, Xeb=${Xeb}, Xe=${Xe}`);
       
    }

    // console.log(T[100],Xebs[100],Xes[100])
    // console.log(math.intersect([300,0],[660,6.91],[300,1],[660,0.896]));
    //const solution = nerdamer.solv
    return {T,Xebs,Xes};


};

//equilibriumConversion(100000, -20000, 50, 298,10000);

module.exports = equilibriumConversion;