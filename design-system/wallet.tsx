import { FC } from 'react';
import styled from '@emotion/styled';
import Button from './button';
import Box from './box';
import ChevronDown from './icons/chevron';
import Body from './body';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

export type Props = {
  balance?: number;
  profile?: string | StaticImageData;
  address?: string;
};

const Eth = styled.div(({
  gap: 4,
  background: 'transparent',
  border: '1px solid var(--button-border)',
  height: 35,
  display: 'flex',
  alignItems: 'center',
  padding: '8px 12px',
  borderTopLeftRadius: 4,
  borderBottomLeftRadius: 4,
}));

const Address = styled.div(({
  width: '8ch',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
}));

const LocalButton = styled(Button)(({
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  marginLeft: -1
}));

const Wallet: FC<Props> = ({ balance = '0', address = '0x00000000000000000000000000000000000', profile }) => {

  const handleClick = () => {
    alert('Change Wallet!');
  };

  return (
    <Box localStyles={{display: 'flex', alignItems: 'center'}}>
      <Eth><Body>{balance} ETH</Body></Eth>
      <LocalButton 
        variant='SECONDARY'
        size='S'
        before={profile && <Image width={17} height={17} src={profile} alt="Profile" />} 
        after={<ChevronDown />}
        onClick={handleClick}
      >
        <Address>{address}</Address>
      </LocalButton>
    </Box>
  );
}

export default Wallet;
