
import React from 'react';
import styles from './DaysToSummer.scss';



class DaysToSummer extends React.Component {


  getCountdownTime(){
    const currentTime = new Date();
    console.log('currentTime: ',currentTime);
    const nextMidnight = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 23, 0, 0, 0));
    console.log('nextNoon: ',nextMidnight);


    return Math.round((nextMidnight.getTime() - currentTime.getTime())/1000);
  }

  constructor() {
    super();

    const currentTime = new Date();
    const interval = 1000*60*60*24;


    console.log('get time: ',currentTime);
    if(currentTime.getUTCHours() == 23 || currentTime.getUTCMinutes() == 59 || currentTime.getUTCSeconds() == 59){
      this.forceUpdate();
      setInterval(() => {this.forceUpdate();}, interval);}
  }



  render() {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>Days to Summer:</h3>
        <div className={styles.counter}>counter</div>
      </div>
    );
  }

}

export default DaysToSummer;
