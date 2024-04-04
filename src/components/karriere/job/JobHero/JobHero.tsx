import Button from '@/components/common/Button/Button';
import Link from 'next/link';
import styles from './JobHero.module.css';
import BtnArrowIcon from '/public/icons/job-arrow.svg';
import LinkArrowIcon from '/public/icons/jobs-arrow.svg';
import { inter } from '@/utils/fonts';
import Image from 'next/image';
import { currentImg } from './jobHeroItems';
import type { KarrierJobItem } from '@/types/infoTypes';

type JobHeroProps = {
  response: KarrierJobItem | null;
};

const JobHero = ({ response }: JobHeroProps) => {
  const title = response?.data.attributes.job_title ?? '';
  const imgSrc = currentImg(title);

  return (
    <section className={styles.JobHeroSection}>
      {imgSrc && (
        <>
          <Image
            fill
            placeholder="blur"
            className={styles.JobHeroImgMob}
            alt="hero-img"
            src={imgSrc.mobile}
          />
          <Image
            fill
            placeholder="blur"
            className={styles.JobHeroImgDesc}
            alt="hero-img"
            src={imgSrc.desktop}
          />
        </>
      )}

      <div className={styles.JobHeroContainer}>
        <Link className={styles.jobHeroLink} href="/karriere/jobs">
          <LinkArrowIcon className={styles.jobHeroIcon} />
          Zu allen offenen Stellen
        </Link>
        <h2 className={styles.JobHeroTitle}>{title}</h2>
        <p className={`${styles.JobHeroTextMob} ${inter.className}`}>
          Entdecke einzigartige Entwicklungsmöglichkeiten in unserem
          Unternehmen. Komm zu uns, um deine Ambitionen zu verwirklichen und
          neue Höhen in deiner Karriere zu erreichen
        </p>
        <p className={`${styles.JobHeroTextDesk} ${inter.className}`}>
          Eine Chance, eine erfolgreiche Karriere im Vertrieb zu starten!
        </p>
        <Button className={styles.JobHeroBtn} type="button">
          Mehr Info
          <BtnArrowIcon className={styles.JobHeroIcon} />
        </Button>
      </div>
    </section>
  );
};

export default JobHero;