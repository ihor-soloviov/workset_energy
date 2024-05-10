import { inter } from '@/utils/fonts';

export const renderText = (
  text: string,
  className: string,
  interFont: boolean,
) => {
  const lines = text.split('\n');
  console.log('lines', lines);
  return lines.map((line, index) => (
    <p
      className={`${className ? className : ''} ${interFont ? inter.className : ''}`}
      key={index}
    >
      {line}
    </p>
  ));
};
