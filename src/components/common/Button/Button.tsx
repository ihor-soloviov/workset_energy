type ButtonProps = {
  text?: string;
  type: 'submit' | 'reset' | 'button';
  className: string;
  disabled?: boolean;
  children?: React.ReactNode;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleSubmit?: () => void;
};

const Button = ({
  text,
  type,
  className,
  children,
  handleClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      type={type}
      className={className}
    >
      <>
        {text}
        {children}
      </>
    </button>
  );
};

export default Button;
