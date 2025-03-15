import { FC } from 'react';
import Button from '../design-system/button';
import Twitter from '../design-system/icons/twitter';
import Link from '../design-system/link';
import Stack from '../design-system/stack';
import Grid from '../design-system/grid';
import Youtube from '../design-system/icons/youtube';
import Discord from '../design-system/icons/discord';
import External from '../design-system/icons/external';
import Footer from '../design-system/footer';
import Navigation from '../design-system/navigation';
import Wallet from '../design-system/wallet';
import myImage from '../assets/pfp.png';
import Banner from '../design-system/banner';
import PFP from '../assets/pfp/legends.png';
import Card from '../design-system/card';
import GenesisPFP from '../assets/pfp/genesis.png';
import DegenHoursPFP from '../assets/pfp/degenhours.png';
import FrogtoberPFP from '../assets/pfp/frogtober.png';
import LegendsPFP from '../assets/pfp/legends.png';
import MutantsPFP from '../assets/pfp/mutants.png';
import SerumPFP from '../assets/pfp/serum.png';
import ElementalsPFP from '../assets/pfp/elementals.png';

export const Home: FC<{}> = () => {
  
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <>

      <Navigation 
        localStyles={{position: 'fixed', top: 0}}
        wallet={<Wallet balance={0.0389} address="0x6972b4e81673bcec5f8b4c280E6F752C800D6ED6" profile={myImage} />}>
        <Button variant='TERTIARY' size='M' active>Home</Button>
        <Button variant='TERTIARY' size='M'>Portals</Button>
        <Button as="a" variant='TERTIARY' size='M' after={<External />} href='https://payc.auraexchange.org/' target="_blank">Marketplace</Button>
        <Button as="a" variant='TERTIARY' size='M' after={<External />} href='./' target="_blank">Merch</Button>
        <Button as="a" variant='TERTIARY' size='M' after={<External />} href='https://payc.engagertool.app/' target="_blank">EngageR</Button>
      </Navigation>

      <Stack direction='VERTICAL' localStyles={{marginTop: 86, marginBottom: 94, '@media (min-width: 1080px)': { marginBottom: 50,}}}>

        <Banner pfp={PFP} heading='PAYC Legends'>
          <Button size='M' variant="PRIMARY" onClick={handleClick}>View Collection</Button>
        </Banner>

          {/* Home Tiles */}
          <Grid
            columns={1}
            gap={'var(--scale-48)'}
            localStyles={{
              padding: 'var(--scale-48)',
              gridTemplateColumns: '1fr',
              '@media (min-width: 800px)' :{
                gridTemplateColumns: '1fr 1fr',
              },
              '@media (min-width: 1200px)' :{
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
              },
            }}>
            <Card heading="Genesis" size='7,777' pfp={GenesisPFP} direction="VERTICAL">
              <Button size='M' variant='SECONDARY' onClick={handleClick}>View Collection</Button>
              <Button size='M' variant="PRIMARY" onClick={handleClick}>Select Portal</Button>
            </Card>
            <Card heading="Mutants" size='2,801' pfp={MutantsPFP} direction="VERTICAL">
              <Button size='M' variant='SECONDARY' onClick={handleClick}>View Collection</Button>
              <Button size='M' variant="PRIMARY" disabled>Mint Closed</Button>
            </Card>
            <Card heading="Serum" size='Coming soon' pfp={SerumPFP} direction="VERTICAL">
              <Button size='M' variant='SECONDARY' onClick={handleClick}>Burn 5 Mutants 🔥</Button>
              <Button size='M' variant="PRIMARY" onClick={handleClick}>Buy with Sheesh</Button>
            </Card>
            <Card heading="Elementals" size='Coming soon' pfp={ElementalsPFP} direction="VERTICAL">
              <Button size='M' variant='SECONDARY' onClick={handleClick}>View Collection</Button>
              <Button size='M' variant="PRIMARY" onClick={handleClick}>Apply Serum</Button>
            </Card>
            <Card heading="Degen Hours" size='1,302' pfp={DegenHoursPFP} direction="VERTICAL">
              <Button size='M' variant='SECONDARY' onClick={handleClick}>View Collection</Button>
              <Button size='M' variant="PRIMARY" onClick={handleClick}>Select Portal</Button>
            </Card>
            <Card heading="Frogtober" size='2,615' pfp={FrogtoberPFP} direction="VERTICAL">
              <Button size='M' variant='SECONDARY' onClick={handleClick}>View Collection</Button>
              <Button size='M' variant="PRIMARY" onClick={handleClick}>Select Portal</Button>
            </Card>
            <Card heading="Legends" size='1,000' pfp={LegendsPFP} direction="VERTICAL">
              <Button size='M' variant='SECONDARY' onClick={handleClick}>View Collection</Button>
              <Button size='M' variant="PRIMARY" disabled>Portal Paused</Button>
            </Card>
  
          </Grid>

        {/* FOOTER */}
        <Footer
          localStyles={{position: 'fixed', bottom: 0, left: 0}} 
          socials={
            <>
              <Link iconOnly href="./"><Discord theme="LIGHT" size="S" /></Link>
              <Link iconOnly href="./"><Twitter theme="LIGHT" size="S" /></Link>
              <Link iconOnly href="./"><Youtube theme="LIGHT" size="S" /></Link>
            </>
          } 
        />

      </Stack>
    </>
  );
}

export default Home;
