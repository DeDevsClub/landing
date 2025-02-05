import styled from 'styled-components';

const StyledGridContainer = styled.div<{ gap?: number; alignItems?: string; justify?: string; }>`
  display: grid;
  gap: ${({ gap }) => gap || 0}px;
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  justify-content: ${({ justify }) => justify || 'stretch'};
`;

const StyledGrid = styled.div<{ sm?: number; md?: number; lg?: number; justify?: string; align?: string; }>`
  grid-column: span ${({ sm }) => sm || 1};
  justify-self: ${({ justify }) => justify || 'stretch'};
  align-self: ${({ align }) => align || 'stretch'};

  @media (min-width: 768px) {
    grid-column: span ${({ md }) => md || 1};
  }

  @media (min-width: 1024px) {
    grid-column: span ${({ lg }) => lg || 1};
  }
`;

interface GridProps {
  children: React.ReactNode;
  sm?: number;
  md?: number;
  lg?: number;
  justify?: string;
  align?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Grid = ({ children, sm, md, lg, justify, align, className, style, ...props }: GridProps) => {
  return (
    <StyledGrid sm={sm} md={md} lg={lg} justify={justify} align={align} className={className} style={style} {...props}>
      {children}
    </StyledGrid>
  );
};

export { Grid };

interface GridContainerProps {
  children: React.ReactNode;
  gap?: number;
  alignItems?: string;
  justify?: string;
  className?: string;
  style?: React.CSSProperties;
}

const GridContainer = ({ children, gap, alignItems, justify, className, style, ...props }: GridContainerProps) => {
  return (
    <StyledGridContainer gap={gap} alignItems={alignItems} justify={justify} className={className} style={style} {...props}>
      {children}
    </StyledGridContainer>
  );
};

export { GridContainer };
