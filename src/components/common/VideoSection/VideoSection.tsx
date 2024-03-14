import styles from './VideoSection.module.css';
import Container from '../Container/Container';
import { inter } from '@/utils/fonts';
import cn from 'classnames';

type VideoSectionProps = {
  className: string;
  title: string;
  link: string;
  text: string;
};

const VideoSection = ({ title, text, link, className }: VideoSectionProps) => {
  const videoFrameClass = cn(styles.videoFrame, styles[className]);

  return (
    <section className={styles.videoSection}>
      <Container>
        <div className={styles.videoMainWrap}>
          <iframe src={link} className={videoFrameClass} allowFullScreen />

          <div className={styles.videoTextWrap}>
            <h2 className={styles.videoTitle}>{title}</h2>
            <p className={`${styles.videoText} ${inter.className}`}>{text}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VideoSection;
