const pathnames = [
  '/',
  '/leadgen',
  '/pv-anlagen',
  '/karriere',
  '/stromspeicher',
  '/karriere/jobs',
  '/uber-uns',
  '/wallbox',
  '/impressum',
  '/thank-you',
];
const jobPathRegex = /^\/karriere\/jobs\/\d+$/;
const blackList = ['/karriere', '/leadgen', '/thank-you'];
export { pathnames, jobPathRegex, blackList };
