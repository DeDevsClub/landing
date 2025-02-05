import {Card, CardBody, Divider} from '@heroui/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import Text from '../text';

export const Features3 = () => {
   return (
      <>
         <Box
            style={{
               paddingLeft: '$6',
               paddingRight: '$6',
               paddingBottom: '$14',
            }}
         >
            <Flex
               style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: '$20',
               }}
            >
               <Text
                     className="span"
                     style={{
                     color: '#FEAEE0',
                  }}
               >
                  Demographics
               </Text>
               <Text className="h2">Community Members</Text>
               {/* <Text
                  span
                  style={{
                     maxWidth: '800px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
                  Come from all walks of life.
               </Text> */}
            </Flex>
            <Flex
               style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  paddingTop: '$14',
               }}
            >
               <Card style={{maxWidth: '500px'}}>
                  <CardBody>
                     <Flex style={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex
                           style={{
                              flexDirection: 'column',
                           }}
                        >
                           <Text className="h5">Blockchain Developers</Text>
                           <Text className="span">
                              Blockchain developers seeking AI integrations, networking opportunities, and involvement in cutting-edge projects.
                           </Text>
                        </Flex>
                     </Flex>
                  </CardBody>
               </Card>
               <Card style={{maxWidth: '500px'}}>
                  <CardBody>
                     <Flex style={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex
                           style={{
                              flexDirection: 'column',
                           }}
                        >
                           <Text className="h5">AI/ML Engineers</Text>
                           <Text className="span">
                              AI/ML experts seeking to integrate agents to blockchain projects while expanding knowledge of distributed systems.
                           </Text>
                        </Flex>
                     </Flex>
                  </CardBody>
               </Card>
               <Card style={{maxWidth: '500px'}}>
                  <CardBody>
                     <Flex style={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex
                           style={{
                              flexDirection: 'column',
                           }}
                        >
                           <Text className="h5">AI Enthusiasts</Text>
                           <Text className="span">
                              Those interested in recent events in AI and low-code solutions to unlock AI superpowers in an intuitive and seamless manner.
                           </Text>
                        </Flex>
                     </Flex>
                  </CardBody>
               </Card>
            </Flex>
            <Flex
               style={{
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  paddingTop: '$8',
                  alignItems: 'center',
               }}
            >
               <Card style={{maxWidth: '500px'}}>
                  <CardBody>
                     <Flex style={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex
                           style={{
                              flexDirection: 'column',
                           }}
                        >
                           <Text className="h5">Crypto Traders</Text>
                           <Text className="span">
                              Fascinated by emergent technologies and how they can benefit from advanced crypto trading strategies that leverage AI.
                           </Text>
                        </Flex>
                     </Flex>
                  </CardBody>
               </Card>
            </Flex>
         </Box>

         <Divider
            style={{
               position: 'absolute',
               inset: '0p',
               left: '0',
               marginTop: '$5',
            }}
         />
      </>
   );
};
