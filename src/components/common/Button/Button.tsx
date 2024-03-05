type ButtonProps = {
  text?: string;
  type: 'submit' | 'reset' | 'button';
  className: string;
  children?: React.ReactNode;
};

const Button = ({ text, type, className, children }: ButtonProps) => {
  return (
    <button type={type} className={className}>
      <>
        {text}
        {children}
      </>
    </button>
  );
};

export default Button;
