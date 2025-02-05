import {Button, Navbar, NavbarBrand, NavbarContent, NavbarItem} from '@heroui/react';
import Text from '../text';
import React from 'react';
import {ModalLogin} from '../modal';
import {icons} from './icons';
import {AcmeLogo} from './logo';
// import {useTheme as useNextTheme, useTheme} from 'next-themes';
// import {useTheme} from '@heroui/react';
import {GithubIcon} from '../icons/GithubIcon';

export const Nav = () => {
   const collapseItems = [
      'Features',
      'Pricing',
   ];
   return (
      <Navbar
         isBordered
         style={{
            'overflow': 'hidden',
            // '& .nextui-navbar-container': {
            //    background: '$background',
            //    borderBottom: 'none',
            // },
         }}
      >
         <NavbarBrand>
           {/* <Navbar.Toggle aria-label="toggle navigation" showIn="xs" /> */}
            {/* <AcmeLogo /> */}
            <Text 
               className="font-bold" 
               // color="inherit" 
               // hideIn="xs"
            >
               DeDevs
            </Text>
            {/* <Navbar.Content
               hideIn="sm"
               style={{
                  pl: '6rem',
               }}
            >
               <Dropdown isBordered>
                  <Navbar.Item>
                     <Dropdown.Button
                        auto
                        light
                        style={{
                           px: 0,
                           dflex: 'center',
                           svg: {pe: 'none'},
                        }}
                        iconRight={icons.chevron}
                        ripple={false}
                     >
                        Features
                     </Dropdown.Button>
                  </Navbar.Item>
                  <Dropdown.Menu
                     aria-label="DeDevs Features"
                     style={{
                        '$$dropdownMenuWidth': '340px',
                        '$$dropdownItemHeight': '70px',
                        '& .nextui-dropdown-item': {
                           'py': '$4',
                           'svg': {
                              color: '$secondary',
                              mr: '$4',
                           },
                           '& .nextui-dropdown-item-content': {
                              w: '100%',
                              fontWeight: '$semibold',
                           },
                        },
                     }}
                  >
                     <Dropdown.Item
                        key="autoscaling"
                        showFullDescription
                        description="DeDevs scales apps to meet user demand, automagically, based on load."
                        icon={icons.scale}
                     >
                        Autoscaling
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="usage_metrics"
                        showFullDescription
                        description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                        icon={icons.activity}
                     >
                        Usage Metrics
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="production_ready"
                        showFullDescription
                        description="DeDevs runs on DeDevs, join us and others serving requests at web scale."
                        icon={icons.flash}
                     >
                        Production Ready
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="99_uptime"
                        showFullDescription
                        description="Applications stay on the grid with high availability and high uptime guarantees."
                        icon={icons.server}
                     >
                        +99% Uptime
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="supreme_support"
                        showFullDescription
                        description="Overcome any challenge with a supporting team ready to respond."
                        icon={icons.user}
                     >
                        +Supreme Support
                     </Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
            </Navbar.Content> */}
         </NavbarBrand>

         {/* <Navbar.Collapse>
            {collapseItems.map((item, index) => (
               <Navbar.CollapseItem key={item}>
                  <Link
                     color="inherit"
                     style={{
                        minWidth: '100%',
                     }}
                     href="#"
                  >
                     {item}
                  </Link>
               </Navbar.CollapseItem>
            ))}

         </Navbar.Collapse> */}
         <NavbarContent>
            {/* <ModalLogin /> */}

            <NavbarItem>
            <a 
               href="https://whop.com/dedevs" 
               target="_blank"
               rel="noopener noreferrer"
            >
               <Button 
                  // auto 
                  // flat
                  href="https://whop.com/dedevs"
               >
                 Join
               </Button>
            </a>
            </NavbarItem>
         </NavbarContent>
      </Navbar>
   );
};
