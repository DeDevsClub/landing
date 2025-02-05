import {Button, Divider} from '@heroui/react';
import React from 'react';
import {Flex} from '../styles/flex';
import Text from '../text';

export const Trial = () => {
   return (
      <>
         <Flex
            className="py-20 px-6"
            style={{
               justifyContent: 'center',
               flexDirection: 'column',
               alignItems: 'center',
            }}
         >
            <Text className="h3">Lifetime Access</Text>
            <Text
               className="span"
               style={{
                  color: '$accents8',
                  paddingBottom: '15px',
                  textAlign: 'center',
               }}
            >
               Access for FREE while supplies last.
            </Text>
<a 
               href="https://whop.com/dedevs" 
               target="_blank"
               rel="noopener noreferrer"
            >
               <Button>Join Free</Button>
            </a>
         </Flex>

         <Divider
            style={{
               position: "absolute",
               inset: "0p",
               left: "0",
               marginTop: "10px",
            }}
         />
      </>
   );
};
