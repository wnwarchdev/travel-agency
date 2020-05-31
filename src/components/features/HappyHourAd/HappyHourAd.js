import React from 'react';
import ProtoTypes from 'prop-types';
import styles from './HappyHourAd.scss';


class HappyHourAd extends React.Component {

  static propTypes = {
    titleText: ProtoTypes.string,
    promoText: ProtoTypes.string,
  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  constructor() {
    super();
    const interval = 1000;
    setInterval(() => {this.forceUpdate();}, interval);
  }

  render() {

    const { titleText = 'Happy Hour in:', promoText = 'The time is now!'} = this.props;
    const getTime = this.getCountdownTime();


    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{titleText}</h3>
        <div className={styles.promoDescription}>{getTime > 82800 ? promoText : getTime}</div>
      </div>
    );
  }
}


export default HappyHourAd;
