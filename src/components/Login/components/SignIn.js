import React, { useState } from 'react';
import {
  Box,
  Center,
  Text,
  Flex,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useToast,
} from '@chakra-ui/react';
import Input from '../../Input';
import { AiFillWeiboCircle, AiFillWechat, AiOutlineQq } from 'react-icons/ai';
import { useFormik } from 'formik';
import request from '../../../utils/request';

const menus = [
  {
    url: 'users/password/mobile_reset',
    name: '用手机号重置密码',
  },
  {
    url: 'users/password/email_reset',
    name: '用邮箱重置密码',
  },
  {
    url: 'p/9058d0b8711d',
    name: '无法用海外手机登陆',
  },
  {
    url: 'p/498a9fa7da08',
    name: '无法用 Google 帐号登录',
  },
];

const otherAccounts = [
  {
    icon: <AiFillWeiboCircle color="#e05244" />,
    key: '0',
  },
  {
    icon: <AiFillWechat color="#00bb29" />,
    key: '1',
  },
  {
    icon: <AiOutlineQq color="#498ad5" />,
    key: '2',
  },
];

const LineNode = <Box w="60px" borderTop="1px" borderColor="#b5b5b5" />;

function SignIn() {
  const [loading, setLoading] = useState(false);
  const toast = useToast({
    position: 'top',
    duration: 5000,
  });
  const goToUrl = url => () => window.open('https://www.jianshu.com/' + url);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async values => {
      setLoading(true);
      const { errors } = await request('/api/users/login', {
        user: values,
      });
      if (errors) {
        toast({
          title: Object.keys(errors).map(key =>
            errors[key].map(item => <div key={item}>{`${key}: ${item}`}</div>)
          ),
          status: 'error',
        });
      } else {
        toast({
          title: '登陆成功',
          status: 'success',
        });
      }
      setLoading(false);
    },
  });

  return (
    <>
      <form onSubmit={formik?.handleSubmit}>
        <Input
          placeholder="邮箱"
          borderBottomRadius="0"
          icon="BsPersonFill"
          type="email"
          name="email"
          required
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Input
          placeholder="密码"
          type="password"
          borderTopRadius="0"
          borderTop="0"
          icon="BsFillLockFill"
          name="password"
          required
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Flex justify="space-between" p="15px 0">
          <Checkbox defaultChecked>
            <Text fontSize="15px">记住我</Text>
          </Checkbox>
          <Menu placement="bottom-end">
            <MenuButton fontSize="14px" color="#999" type="button">
              登录遇到问题?
            </MenuButton>
            <MenuList color="#333">
              {menus.map(item => (
                <MenuItem onClick={goToUrl(item.url)} key={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
        <Button
          w="100%"
          colorScheme="button"
          borderRadius={25}
          fontSize={18}
          padding="9px 18px"
          height="auto"
          lineHeight="inherit"
          mt="5px"
          type="submit"
          isLoading={loading}
        >
          登录
        </Button>
      </form>
      <Box paddingInline="30px" mt="50px">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          fontSize="12px"
        >
          {LineNode}
          <Text>社交帐号登录</Text>
          {LineNode}
        </Flex>
        <Center fontSize="32px" mt="10px">
          {otherAccounts.map(item => (
            <Center w="50px" h="50px" m="0 5px" key={item.key}>
              {item.icon}
            </Center>
          ))}
        </Center>
      </Box>
    </>
  );
}

export default SignIn;
