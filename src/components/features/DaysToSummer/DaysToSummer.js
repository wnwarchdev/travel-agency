
import React from 'react';
import styles from './DaysToSummer.scss';



class DaysToSummer extends React.Component {


  getCountdownTime(){
    let currentDate = new Date();
    //console.log('currentTime: ',currentDate);

    const currentMonth = currentDate.getUTCMonth();
    const currentDay = currentDate.getUTCDate();
    let message = '';
    const startDate = new Date(currentDate.getFullYear(), 5, 20);
    const oneDay = 1000*60*60*24;
    //console.log('startDate: ' , startDate);
    //console.log('calc is: ', -(Math.floor((currentDate - startDate)/oneDay)));
    const daysToSummer = -(Math.floor((currentDate - startDate)/oneDay));
    //console.log('current month is: ', currentMonth + 1);
    //console.log('current day is: ', currentDay);

    if ( ((currentMonth == 5) && (currentDay >= 20))||(currentMonth == 6) || (currentMonth == 7) || ((currentMonth == 8) && (currentDay <= 22)) )  {
      message = 'summer is now';}

    else if ( (currentMonth == 5) && (currentDay == 18) ){
      message = 'Only 1 day to summer';}

    else if ( ((currentMonth == 8) && (currentDay > 22)) || (currentMonth >= 9) ){
      const nextYear = currentDate.getFullYear()+1;
      //console.log('next year is: ', nextYear);
      const startDate = new Date(nextYear, 5, 20);
      const daysToSummer = (Math.floor((startDate - currentDate)/oneDay));
      const nextYearShort = nextYear - 2000;

      message = daysToSummer + ' days to summer of \'' + nextYearShort;
      //console.log('next date: ', startDate );
    }

    else {
      message = daysToSummer + ' days to summer';
    }

    return String(message);
  }

  constructor() {
    super();

    const currentTime = new Date();
    const interval = 1000*60*60*24;
    //console.log('get time: ',currentTime);
    if(currentTime.getUTCHours() == 23 || currentTime.getUTCMinutes() == 59 || currentTime.getUTCSeconds() == 59){
      this.forceUpdate();
      setInterval(() => {this.forceUpdate();}, interval);}
  }



  render() {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>Days to Summer:</h3>
        <div className={styles.counter}>{this.getCountdownTime()}</div>
      </div>
    );
  }

}

export default DaysToSummer;
