import {
  Container,
  Box,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import imgHubSpot from './images/hubspot.png';
import imgStripe from './images/stripe.png';


const companyData = {
  'hubspot': {
    airtableLink: "https://airtable.com/embed/shrHi8a6NsiPXQv00?backgroundColor=blue&viewControls=on",
    title: 'HubSpot',
    url: 'https://hubspot.com',
    logoRef: imgHubSpot,
  },
  'stripe': {
    airtableLink: "https://airtable.com/embed/shrHi8a6NsiPXQv00?backgroundColor=blue&viewControls=on",
    title: 'Stripe',
    url: 'https://stripe.com',
    logoRef: imgStripe,
  },
};

const Airtable = () => {

  const [company, setCompany] = useState('hubspot');

  const { logoUrl, airtableLink, title, url, logoRef } = companyData[company];

  return (
    <Container>
      <Box>
        Switcher
      </Box>
      <Box>
        <a target="_blank" href={url}>
          <img src={logoRef} width="300px"/>
        </a>
      </Box>
      <iframe className="airtable-embed" src={airtableLink} frameborder="0" onmousewheel="" width="100%" height="800" style={{background: 'transparent', border: '1px solid #ccc'}}></iframe>

    </Container>
  );
};

export default Airtable;
