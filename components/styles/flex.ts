import styled from "styled-components";

export const Flex = styled.div`
   box-sizing: border-box;
   display: flex;
   flex-direction: row;
   variants: {
      direction: {
         column: {
            flexDirection: 'column',
         },
         row: {
            flexDirection: 'row',
         },
      },
      justify: {
         center: {
            justifyContent: 'center',
         },
         start: {
            justifyContent: 'flex-start',
         },
         end: {
            justifyContent: 'flex-end',
         },
         between: {
            justifyContent: 'space-between',
         },
         around: {
            justifyContent: 'space-around',
         },
      },
      align: {
         center: {
            alignItems: 'center',
         },
         start: {
            alignItems: 'flex-start',
         },
         end: {
            alignItems: 'flex-end',
         },
         stretch: {
            alignItems: 'stretch',
         },
      },
      wrap: {
         wrap: {
            flexWrap: 'wrap',
         },
         nowrap: {
            flexWrap: 'nowrap',
         },
      },
   },
});
`;
