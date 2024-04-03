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
