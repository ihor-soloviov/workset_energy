import JobHero1Mob from '/public/images/karriere-page/job-hero-1-mob.webp';
import JobHero2Mob from '/public/images/karriere-page/job-hero-2-mob.webp';
import JobHero3Mob from '/public/images/karriere-page/job-hero-3-mob.webp';
import JobHero4Mob from '/public/images/karriere-page/job-hero-4-mob.webp';
import JobHero5Mob from '/public/images/karriere-page/job-hero-5-mob.webp';
import JobHero1Desk from '/public/images/karriere-page/job-hero-1-desk.webp';
import JobHero2Desk from '/public/images/karriere-page/job-hero-2-desk.webp';
import JobHero3Desk from '/public/images/karriere-page/job-hero-3-desk.webp';
import JobHero4Desk from '/public/images/karriere-page/job-hero-4-desk.webp';
import JobHero5Desk from '/public/images/karriere-page/job-hero-5-desk.webp';

export const currentImg = (title: string) => {
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
