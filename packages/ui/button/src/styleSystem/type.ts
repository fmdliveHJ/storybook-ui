export type BaseProps = {
  // box
  bg?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'accent'
    | 'success'
    | 'warning'
    | 'error';
  boxShadow?: 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | 'inner';
  borderRadius?: 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  border?: string;
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  BaseProps & {
    as?: keyof JSX.IntrinsicElements;
    children?: React.ReactNode;
    color?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    isDisabled?: boolean;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };
