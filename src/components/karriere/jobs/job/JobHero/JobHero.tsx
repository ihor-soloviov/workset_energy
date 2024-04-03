import Button from '@/components/common/Button/Button';
import Link from 'next/link';
import styles from './JobHero.module.css';
import BtnArrowIcon from '/public/icons/job-arrow.svg';
import LinkArrowIcon from '/public/icons/jobs-arrow.svg';
import { inter } from '@/utils/fonts';
import Image from 'next/image';
import JobHero1Mob from '/public/images/karriere-page/job-hero-1-mob.jpg';
import JobHero2Mob from '/public/images/karriere-page/job-hero-2-mob.jpg';
import JobHero3Mob from '/public/images/karriere-page/job-hero-3-mob.jpg';
import JobHero4Mob from '/public/images/karriere-page/job-hero-4-mob.jpg';
import JobHero5Mob from '/public/images/karriere-page/job-hero-5-mob.jpg';
import JobHero1Desk from '/public/images/karriere-page/job-hero-1-desk.jpg';
import JobHero2Desk from '/public/images/karriere-page/job-hero-2-desk.jpg';
import JobHero3Desk from '/public/images/karriere-page/job-hero-3-desk.jpg';
import JobHero4Desk from '/public/images/karriere-page/job-hero-4-desk.jpg';
import JobHero5Desk from '/public/images/karriere-page/job-hero-5-desk.jpg';
import type { KarrierJobItem } from '@/types/infoTypes';

type JobHeroProps = {
  response: KarrierJobItem | null;
};

const JobHero = ({ response }: JobHeroProps) => {
  const currentImg = (title: string) => {
    switch (title) {
      case 'Trainee Sales Manager':
        return { mobile: JobHero1Mob, desktop: JobHero1Desk };
      case 'Junior Sales Manager':
        return { mobile: JobHero2Mob, desktop: JobHero2Desk };
      case 'Middle Sales Manager':
        return { mobile: JobHero3Mob, desktop: JobHero3Desk };
      case 'Elektroinstallateur':
        return { mobile: JobHero4Mob, desktop: JobHero4Desk };
      case 'PV-Modul-Installateur':
        return { mobile: JobHero5Mob, desktop: JobHero5Desk };

      default:
        return;
    }
  };
  const title = response?.data.attributes.job_title ?? '';
  const imgSrc = currentImg(title);

  return (
    <section className={styles.JobHeroSection}>
      {imgSrc && (
        <>
          <Image
            objectFit="cover"
            layout="fill"
            priority
            className={styles.JobHeroImgMob}
            alt="hero-img"
            src={imgSrc.mobile}
          />
          <Image
            layout="fill"
            objectFit="cover"
            priority
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
