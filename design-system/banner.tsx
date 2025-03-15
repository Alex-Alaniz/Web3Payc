import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { CSSObject } from '@emotion/react';
import Box from './box';
import myImage from '../assets/banner/legends.png';
import PFP from '../assets/pfp/placeholder.png';
import Heading from './heading';
import { StaticImageData } from 'next/image';
import Image from 'next/image';


type Props = {
  heading?: string;
  pfp?: string | StaticImageData;
  children?: ReactNode;
  localStyles?: CSSObject;
}

const El = styled(Box)(({ localStyles }: Props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'var(--scale-48)',
  backgroundImage: `url('${myImage}')`,
  backgroundPosition: 'center left',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: 360,
  width: '100%',
  '@media (min-width: 600px)' :{
    justifyContent: 'start',
    height: 250,
  },
  '@media (min-width: 1200px)' :{
    height: 300,
  },
  '@media (min-width: 1500px)' :{
    height: 350,
    padding: 'var(--scale-60)',
  },
  ...(localStyles)
}));


const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 'var(--scale-24)',
  '@media (min-width: 600px)' :{
    flexDirection: 'row',
    gap: 'var(--scale-36)',
    alignItems: 'center'
  },
});

const HeadingGroup = styled.div({
  display: 'flex',
  width: 'auto', 
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 'var(--scale-12)',
  '@media (min-width: 600px)' :{
    gap: 'var(--scale-12)',
    alignItems: 'start'
  },
});

const ButtonGroup = styled.div({
  display: 'flex',
  width: 'auto', 
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--scale-12)',
  '@media (min-width: 600px)' :{
    gap: 'var(--scale-12)',
    alignItems: 'start'
  },
});

const StyledImage = styled.img({
  borderRadius: '100%',
  width: 120,
  height: 120,
  '@media (min-width: 1080px)' :{
    width: 140,
    height: 140,
  },
  '@media (min-width: 1200px)' :{
    width: 160,
    height: 160,
  },
  '@media (min-width: 1500px)' :{
    width: 180,
    height: 180,
  },
});

const Banner: FC<Props> = ({ localStyles, pfp = PFP, children, heading = "Title", ...props }) => {
  return (
    <El localStyles={localStyles} {...props}>
      <Content>
        <Image src={pfp} alt={heading} />
        <HeadingGroup>
          <Heading level="3">{heading}</Heading>
          <ButtonGroup>
            {children}
          </ButtonGroup>
        </HeadingGroup>
      </Content>
    </El>
  );
}

export default Banner;