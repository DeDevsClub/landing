import styled from 'styled-components';

const StyledText = styled.p<{ size?: 'small' | 'medium' | 'large'; color?: 'primary' | 'secondary' | 'accent'; weight?: 'light' | 'normal' | 'bold'; }>`
  margin: 0;
  font-family: var(--sans);
  font-size: ${({ size }) => size === 'small' ? 'var(--sm)' : size === 'large' ? 'var(--lg)' : 'var(--md)'};
  color: ${({ color }) => color === 'secondary' ? 'var(--secondary)' : color === 'accent' ? 'var(--accent)' : 'var(--primary)'};
  font-weight: ${({ weight }) => weight === 'light' ? 'var(--light)' : weight === 'bold' ? 'var(--bold)' : 'var(--normal)'};
`;

interface TextProps {   
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'accent';
  weight?: 'light' | 'normal' | 'bold'; 
  className?: string;
  style?: React.CSSProperties;
}

const Text = ({ children, size, color, weight, className, style, ...props }: TextProps) => {
  return (
    <StyledText size={size} color={color} weight={weight} 
    className={className} style={style} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
