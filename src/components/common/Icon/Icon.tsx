import Image from 'next/image';

type IconProps = {
  name: string;
  className: string;
  width: number;
  height: number;
};

const Icon = ({ name, className, width, height }: IconProps) => (
  <Image
    className={className}
    src={`/icons/${name}.svg`}
    height={height}
    width={width}
    alt="svg"
  />
);

export default Icon;
