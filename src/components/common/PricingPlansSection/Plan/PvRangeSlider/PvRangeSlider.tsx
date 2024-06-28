import React, { useState } from 'react';
import styles from './PvRangeSlider.module.css';
import ReactSlider from 'react-slider';

type PvRangeSliderProps = {
  rangeValue: number;
  setRangeValue: (value: number) => void;
  disableSwiper?: () => void;
  enableSwiper?: () => void;
};

const PvRangeSlider = ({
  rangeValue,
  setRangeValue,
  disableSwiper,
  enableSwiper,
}: PvRangeSliderProps) => {
  return (
    <ReactSlider
      step={1}
      min={3}
      max={30}
      defaultValue={3}
      onChange={value => {
        setRangeValue(value);

        disableSwiper && disableSwiper();
      }}
      onAfterChange={() => {
        enableSwiper && enableSwiper();
      }}
      className={styles.pvRangeInput}
      thumbClassName={styles.pvRangeInputThumb}
      thumbActiveClassName={`${styles.active}`}
      trackClassName={styles.pvRangeInputTrack}
      renderTrack={(props, state) => (
        <div
          {...props}
          className={`${props.className} ${state.index === 0 ? styles.pvRangeInputTrackCompleted : ''}`}
          key={props.key}
        />
      )}
      renderThumb={(props, state) => (
        <div {...props} key={props.key}>
          <div className={styles.pvRangeActiveWrap}>
            <span
              className={styles.pvRangeActiveCount}
            >{`${rangeValue}${rangeValue === 30 ? '+' : ''}`}</span>
          </div>
        </div>
      )}
    />
  );
};

export default PvRangeSlider;
