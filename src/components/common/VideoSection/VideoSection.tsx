import styles from './VideoSection.module.css';
import Container from '../Container/Container';
import cn from 'classnames';
import TextWrap from './TextWrap/TextWrap';
import IFrame from './IFrame/IFrame';

type VideoSectionProps = {
  className: string;
  title: string;
  link: string;
  text: string;
  textDesk?: string;
};

const VideoSection = ({
  title,
  text,
  textDesk,
  link,
  className,
}: VideoSectionProps) => {
  const videoFrameClass = cn(styles.videoFrame, styles[className]);

  return (
    <section className={styles.videoSection}>
      <Container>
        <div className={styles.videoMainWrap}>
          <IFrame link={link} videoFrameClass={videoFrameClass} />
          <TextWrap
            className={className}
            title={title}
            text={text}
            textDesk={textDesk}
          />
        </div>
      </Container>
    </section>
  );
};

export default VideoSection;
