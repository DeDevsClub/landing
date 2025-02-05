import {Box} from '../styles/box';

interface LayoutProps {
   children: React.ReactNode;
}

export const Layout = ({children}: LayoutProps) => (
   <Box
      style={{
         maxWidth: '100%',
         background: '$background',
      }}
   >
      {children}
   </Box>
);
