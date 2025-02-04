import { Button, Card, Divider, Grid, Link, Text } from '@nextui-org/react';
import React from 'react';
import { CheckIcon } from '../icons/CheckIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Plans = () => {
  return (
    <>
      <Flex
        css={{ py: '$20', gap: '1rem', px: '$6' }}
        justify={'center'}
        wrap={'wrap'}
        direction={'column'}
        align={'center'}
      >
        <Flex direction={'column'} align={'center'}>
          <Text span css={{ color: '$blue600' }}>
            Memberships
          </Text>
          <Text h2>Membership Plans</Text>
        </Flex>

        <Flex
          css={{ gap: '2rem', width: '100%' }}
          wrap={'wrap'}
          justify={'center'}
        >
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    DeDevs Club
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>
                    Enhance your career prospects through industry insights, technical skill development, and community support in blockchain and AI engineering.
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$4' }}>
              <Text css={{ display: 'contents' }} h2>
                $0{' '}
              </Text>
              <Text css={{ display: 'contents', color: '$accents8' }}>/mo</Text>
              <Button css={{ mt: '$7', mb: '$12' }}>Get Started</Button>

              <Divider />
              <Box as={'ul'}>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Free Forever
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Community Chat
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Community Forum
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Private Discord
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Request Board
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    DeDevs Academy
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>
  Join to access courses that provide practical applications for building decentralized agents, LLMs, AI bots, websites, and more. 

Our courses are designed to grow your portfolio.
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$4' }}>
              <Text css={{ display: 'contents' }} h2>
                $50{' '}
              </Text>
              <Text css={{ display: 'contents', color: '$accents8' }}>/mo</Text>
              <Button css={{ mt: '$7', mb: '$12' }}>Get Started</Button>

              <Divider />
              <Box as={'ul'}>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Exclusive Masterclasses
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    20+ DevTools
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Coding Templates
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    100+ Resources
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    + Club Benefits
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
        </Flex>
      </Flex>

      <Divider
        css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
      />
    </>
  );
};
