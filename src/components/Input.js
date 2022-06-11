import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsPersonFill, BsFillLockFill } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';

function MyInput(props) {
  const getIcon = () => {
    const IconMap = {
      BsPersonFill,
      BsFillLockFill,
      AiFillMail,
    };

    return IconMap[props.icon]({
      size: 18,
      color: '#969696',
    });
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" h={50}>
        {getIcon()}
      </InputLeftElement>
      <Input
        h={50}
        fontSize="14px"
        bg="hsla(0,0%,71%,.1)"
        borderColor="#c8c8c8"
        _focus={{
          shadow: 'none',
        }}
        p="4px 12px 4px 35px"
        {...props}
      />
    </InputGroup>
  );
}

export default MyInput;
