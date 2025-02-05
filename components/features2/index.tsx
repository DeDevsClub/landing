import { Divider } from '@heroui/react';
import Text from '../text';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {FeatureIcon} from '../icons/FeatureIcon';
import {Flex} from '../styles/flex';

export const Features2 = () => {
   return (
      <>
         <Flex
            // direction={'column'}
            style={{
               gap: '1rem',
               paddingTop: '$20',
               justifyContent: 'center',
               alignItems: 'center',
               paddingLeft: '$6',
               paddingRight: '$6',
               flexDirection: 'column',
               // '@sm': {
               //    gap: '5rem',
               //    flexDirection: 'row-reverse',
               //    px: '$16',
               // },
               // '@md': {
               //    justifyContent: 'space-evenly',
               // },
            }}
         >
            <Flex
               style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
               }}
            >
               <Text className="span" color="primary">
                  Awesome Feature
               </Text>
               <Text className="h3">Your title here</Text>
               <Text
                  className="span"
                  style={{
                     maxWidth: '400px',
                     color: '$accents8',
                  }}
               >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  condimentum, nisl ut aliquam lacinia, nisl nisl aliquet nisl,
                  nec tincidunt nisl lorem eu nunc. Sed euismod, nisl ut aliquam
                  lacinia,
               </Text>

               <Flex
                  className="py-10"
                  style={{
                     justifyContent: 'center',
                     flexWrap: 'wrap',
                  }}
               >
                  <Flex
                     style={{
                        paddingTop: '$10',
                        paddingBottom: '$10',
                        gap: '$5',
                     }}
                  >
                     <BoxIcon />
                     <Flex
                        style={{
                           flexDirection: 'column',
                        }}
                     >
                        <Text weight={'bold'}>Your title here</Text>
                        <Text
                           className="span"
                           style={{
                              maxWidth: '325px',
                              color: '$accents8',
                           }}
                        >
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Sed condimentum, nisl ut aliquam lacinia, nisl
                           nisl aliquet nisl,
                        </Text>
                     </Flex>
                  </Flex>
                  <Flex
                     style={{
                        paddingTop: '$10',
                        paddingBottom: '$10',
                        gap: '$5',
                     }}
                  >
                     <BoxIcon />
                     <Flex
                        style={{
                           flexDirection: 'column',
                        }}
                     >
                        <Text className="h4" weight={'bold'}>
                           Your title here
                        </Text>
                        <Text
                           className="span"
                           style={{
                              maxWidth: '325px',
                              color: '$accents8',
                           }}
                        >
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Sed condimentum, nisl ut aliquam lacinia, nisl
                           nisl aliquet nisl,
                        </Text>
                     </Flex>
                  </Flex>
               </Flex>
            </Flex>
            <Flex
               style={{
                  alignItems: 'center',
               }}
            >
               <FeatureIcon />
            </Flex>
         </Flex>

         <Divider
            style={{
               position: "absolute",
               inset: "0p",
               left: "0",
               marginTop: "$5",
            }}
         />
      </>
   );
};
