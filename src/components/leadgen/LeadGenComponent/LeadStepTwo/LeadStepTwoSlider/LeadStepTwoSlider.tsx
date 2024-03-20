import React, { useState } from 'react';

import styles from './LeadStepTwoSlider.module.css';
import ReactSlider from 'react-slider';
import CountWrapIcon from '/public/icons/range-wrap.svg';

type LeadStepTwoSliderProps = {
  rangeValue: number;
  setRangeValue: (value: number) => void;
  formatValue: (value: number) => string;
};

const LeadStepTwoSlider = ({
  rangeValue,
  setRangeValue,
  formatValue,
}: LeadStepTwoSliderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <ReactSlider
      step={1000}
      min={1000}
      max={15000}
      defaultValue={4000}
      onChange={value => {
        setRangeValue(value);
        setIsActive(true);
      }}
      onAfterChange={() => {
        setIsActive(false);
      }}
      className={styles.stepTwoInput}
      thumbClassName={styles.stepTwoInputThumb}
      thumbActiveClassName={`${isActive && styles.active}`}
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
          <div className={styles.stepTwoActiveWrap}>
            <CountWrapIcon className={styles.stepTwoActiveIcon} />
            <span className={styles.stepTwoActiveCount}>
              {formatValue(rangeValue)}
            </span>
          </div>
        </div>
      )}
    />
  );
};

export default LeadStepTwoSlider;
