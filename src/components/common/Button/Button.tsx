type ButtonProps = {
  text?: string;
  type: 'submit' | 'reset' | 'button';
  className: string;
  children?: React.ReactNode;
  handleClick?: () => void;
  handleSubmit?: () => void;
};

const Button = ({
  text,
  type,
  className,
  children,
  handleClick,
}: ButtonProps) => {
  return (
    <button onClick={handleClick} type={type} className={className}>
      <>
        {text}
        {children}
      </>
    </button>
  );
};

export default Button;
