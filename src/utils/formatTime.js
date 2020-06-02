export const formatTime = (arg) => {

  if ( arg === undefined ) return null; //test01

  if ( isNaN(arg)===true ) return null; //test02

  if ( arg<0 ) return null; //test03

  let hour = Math.floor(arg / 3600);
  let min = Math.floor((arg / 60) % 60);
  let sec = Math.floor(arg % 60);
  //console.log('lets: ',hour,min,sec);

  let time = hour.toString(10).padStart(2,'0') + ':' + min.toString(10).padStart(2,'0') + ':' + sec.toString(10).padStart(2,'0');
  //console.log('the time is: ',time);

  return time;

};

//console.log(formatTime(32122), ' -this is time');
