import React, { useState } from 'react';
import {
  Box,
  Center,
  Text,
  Flex,
  Button,
  useToast,
  Link,
} from '@chakra-ui/react';
import Input from '../../Input';
import { AiFillWechat, AiOutlineQq } from 'react-icons/ai';
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
    icon: <AiFillWechat color="#00bb29" />,
    key: '1',
  },
  {
    icon: <AiOutlineQq color="#498ad5" />,
    key: '2',
  },
];

const LineNode = <Box w="60px" borderTop="1px" borderColor="#b5b5b5" />;

function SignUp() {
  const [loading, setLoading] = useState(false);
  const toast = useToast({
    position: 'top',
    duration: 5000,
  });
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    onSubmit: async values => {
      setLoading(true);
      const { errors } = await request('/api/users', {
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
          title: '注册成功！',
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
          placeholder="用户名"
          borderBottomRadius="0"
          icon="BsPersonFill"
          name="username"
          required
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <Input
          placeholder="邮箱"
          borderRadius="0"
          icon="AiFillMail"
          name="email"
          type="email"
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
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Button
          w="100%"
          colorScheme="buttonYellow"
          borderRadius={25}
          fontSize={18}
          padding="9px 18px"
          height="auto"
          lineHeight="inherit"
          mt="20px"
          type="submit"
          isLoading={loading}
        >
          注册
        </Button>
        <Box fontSize="12px" pt="10px" lineHeight="20px">
          <Text>点击 “注册” 即表示您同意并愿意遵守简书</Text>
          <Text>
            <Link>用户协议</Link> 和 <Link>隐私政策</Link> 。
          </Text>
        </Box>
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

export default SignUp;
