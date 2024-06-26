import React, { useState } from 'react';
import styles from './LeadStepTwoSlider.module.css';
import ReactSlider from 'react-slider';

type LeadStepTwoSliderProps = {
  rangeValue: number;
  setRangeValue: (value: number) => void;
  formatValue: (value: number) => string;
  disableSwiper?: () => void;
  enableSwiper?: () => void;
};

const LeadStepTwoSlider = ({
  rangeValue,
  setRangeValue,
  formatValue,
  disableSwiper,
  enableSwiper,
}: LeadStepTwoSliderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <ReactSlider
      step={1}
      min={3}
      max={30}
      defaultValue={3}
      onChange={value => {
        setRangeValue(value);
        setIsActive(true);
        disableSwiper && disableSwiper();
      }}
      onAfterChange={() => {
        setIsActive(false);
        enableSwiper && enableSwiper();
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
