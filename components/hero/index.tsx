import {Button, Divider, Input, Text} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Hero = () => {
   const showCheckmarks = false
   const title = "DeDevs"
   const subtitle = "Boost your career with insights, skill development, and support in emergent blockchain and AI technologies."

   return (
      <>
         <Flex
            css={{
               'gap': '$3',
               'px': '$6',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$20',
               },
            }}
            justify={'center'}
         >
            <Box
               css={{
                  pt: '$13',

                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
               }}
            >
               <Box
                  css={{
                     maxWidth: '600px',
                  }}
               >
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >
                     Welcome{' '}
                  </Text>
                  {/* <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >
                     to{' '}
                  </Text> */}
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                     color="#FEAEE0"
                  >
                     
                 { "DeDevs" }
                  </Text>
               </Box>

               <Text
                  css={{
                     color: '$accents8',
                     maxWidth: '400px',
                     pb: '$4',
                  }}
                  size={'$lg'}
                  span
               >
                  {subtitle}
               </Text>

              {/* <Flex
                  css={{
                     gap: '$8',
                     pt: '$4',
 width: '100%',
                  }}
                  wrap={'wrap'}
               >
                  
                  <Button>Join (Free)</Button>
               </Flex> */}
            </Box>
            <Box
               css={{
                  '& img': {
                     width: '775px',
                     objectFit: 'contain',
                  },
               }}
            >
               <img src="mock.png" />
            </Box>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$10'}}
         />
      </>
   );
};
