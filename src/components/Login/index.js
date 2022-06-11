import React, { Fragment } from 'react';
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from '@chakra-ui/react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const tabs = [
  {
    name: '登录',
  },
  {
    name: '注册',
  },
];

function Login() {
  return (
    <Box
      textAlign="center"
      w="400px"
      bg="white"
      borderRadius="4px"
      shadow="base"
      p="50px 50px 30px"
      marginInline="auto"
    >
      <Tabs align="center" variant="unstyled">
        <TabList fontWeight="bold" fontSize="18px" mb="50px">
          {tabs.map((tab, index) => (
            <Fragment key={tab.name}>
              <Tab
                borderBottom="2px"
                borderColor="transparent"
                fontWeight="bold"
                fontSize="18px"
                h="42.5px"
                _focus={{ boxShadow: 'none' }}
                _selected={{
                  color: 'tab',
                  borderBottom: '2px',
                  borderColor: 'tab',
                }}
              >
                {tab.name}
              </Tab>
              {tabs.length !== index + 1 && (
                <Text p="10px" color="tab">
                  ·
                </Text>
              )}
            </Fragment>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel p="0">
            <SignIn />
          </TabPanel>
          <TabPanel p="0">
            <SignUp />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Login;
