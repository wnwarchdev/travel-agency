import React from 'react';
import ProtoTypes from 'prop-types';
import styles from './HappyHourAd.scss';


class HappyHourAd extends React.Component {

  static propTypes = {
    titleText: ProtoTypes.string,
    promoText: ProtoTypes.string,
  }

  render() {
    const { titleText = 'Happy Hour', promoText = 'Get the offer at: '} = this.props;
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{titleText}</h3>
        <h5 className={styles.promoDescription}>{promoText}</h5>
      </div>
    );
  }
}


export default HappyHourAd;
