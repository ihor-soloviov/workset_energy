import Button from '@/components/common/Button/Button';
import Link from 'next/link';
import styles from './JobHero.module.css';
import BtnArrowIcon from '/public/icons/job-arrow.svg';
import LinkArrowIcon from '/public/icons/jobs-arrow.svg';
import { inter } from '@/utils/fonts';
import Image from 'next/image';
import JobHeroMob from '/public/images/karriere-page/job-hero-mob.jpg';
import JobHeroDesk from '/public/images/karriere-page/job-hero-desk.jpg';
import type { KarrierJobItem } from '@/types/infoTypes';

type JobHeroProps = {
  response: KarrierJobItem | null;
};

const JobHero = ({ response }: JobHeroProps) => {
  return (
    <section className={styles.JobHeroSection}>
      <Image
        objectFit="cover"
        layout="fill"
        className={styles.JobHeroImgMob}
        alt="hero-img"
        src={JobHeroMob}
      />
      <Image
        layout="fill"
        objectFit="cover"
        className={styles.JobHeroImgDesc}
        alt="hero-img"
        src={JobHeroDesk}
      />
      <div className={styles.JobHeroContainer}>
        <Link className={styles.jobHeroLink} href="/karriere/jobs">
          <LinkArrowIcon className={styles.jobHeroIcon} />
          Zu allen offenen Stellen
        </Link>
        <h2 className={styles.JobHeroTitle}>
          {response?.data.attributes.job_title}
        </h2>
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
