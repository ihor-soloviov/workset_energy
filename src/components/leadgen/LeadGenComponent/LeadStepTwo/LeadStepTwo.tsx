import React, { useState, useEffect } from 'react';
import styles from './LeadStepTwo.module.css';
import { inter } from '@/utils/fonts';
import ReactSlider from 'react-slider';
import WorksetIcon from '/public/icons/workset.svg';
import CountWrapIcon from '/public/icons/range-wrap.svg';
const LeadStepTwo = () => {
  const [rangeValue, setRangeValue] = useState<number>(4000);

  console.log(rangeValue);
  const formatValue = (value: number) =>
    value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return (
    <div className={styles.stepTwoMainWrap}>
      <h3 className={styles.stepTwoTitle}>
        Dein geschätzter Jahresstromverbrauch?
      </h3>
      <p className={`${styles.stepTwoTopText} ${inter.className}`}>
        Sie finden Ihren Stromverbrauch auf Ihrer aktuellen Jahresabrechnung des
        Energieversorgers
      </p>
      <div className={styles.stepTwoWrap}>
        <div className={styles.stepTwoLabelWrap}>
          <p className={styles.stepTwoLabel}>kWh:</p>
          <div className={styles.stepTwoCountWrap}>
            <span className={styles.stepTwoCount}>
              {formatValue(rangeValue)}
            </span>
          </div>
        </div>
        <div className={styles.stepTwoInputWrap}>
          <ReactSlider
            step={1000}
            min={1000}
            max={15000}
            defaultValue={4000}
            onChange={value => setRangeValue(value)}
            className={styles.stepTwoInput}
            thumbClassName={styles.stepTwoInputThumb}
            thumbActiveClassName={styles.active}
            trackClassName={styles.stepTwoInputTrack}
            renderTrack={(props, state) => (
              <div
                {...props}
                className={`${props.className} ${state.index === 0 ? styles.stepTwoInputTrackCompleted : ''}`}
                key={props.key}
              />
            )}
            renderThumb={(props, state) => (
              <div {...props} key={props.key}>
                <div className={styles.stepTwoRangeCountWrap}>
                  <CountWrapIcon className={styles.stepTwoRangeIcon} />
                  <span className={styles.stepTwoRangeCount}>
                    {formatValue(rangeValue)}
                  </span>
                </div>
              </div>
            )}
          />
          <div className={styles.stepTwoRangeWrap}>
            <span className={`${styles.stepTwoRange} ${inter.className}`}>
              1.000
            </span>
            <span className={`${styles.stepTwoRange} ${inter.className}`}>
              15.000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadStepTwo;
