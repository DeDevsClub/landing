import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Faq = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               gap: '$18',
               px: '$6',
            }}
            direction={'column'}
         >
            <Flex align={'center'} direction={'column'}>
               <Text span css={{color: '$blue600'}}>
                  FAQ
               </Text>
               <Text h2>What is DeDevs Academy and who is it for?</Text>
               <Text
                  span
                  css={{
                     maxWidth: '700px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
                  Developers who are interested in advancing their career and skillset via self-paced courses, live streams, and collaboration.
               </Text>
            </Flex>

            <Flex
               css={{
                  'gap': '$10',
                  '@lg': {
                     px: '$64',
                  },
               }}
               direction={'column'}
            >
               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        Do I need to be an expert?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        No, many of our members are experts in just one field or are simply enthusiasts looking to expand their knowledge.
                        aliquet
                     </Text>
                  </Flex>
               </Flex>
               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        What makes DeDevs unique?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Our community specifically focuses on the intersection of blockchain and AI and we emphasize practical skill development.
                     </Text>
                  </Flex>
               </Flex>
 <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        How can I collaborate with other members?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Members can participate in forums, join project teams, and participate in open source projects via our GitHub Org: DeDevsClub
                     </Text>
                  </Flex>
               </Flex>
               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        What kind of resources and opportunities does DeDevs Club provide?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Technical workshops, networking opportunities, collaborative projects, learning resources, and curated industry updates.
                  </Flex>
               </Flex>
            </Flex>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
