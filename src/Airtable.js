import {
  Container,
  Box,
  Heading,
  Badge,
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

  const defaultCompany = window.location.hash.substr(1) || 'hubspot';
  const [company, setCompany] = useState(defaultCompany);

  const { logoUrl, airtableLink, title, url, logoRef } = companyData[company];
  /*
        <a target="_blank" href={url}>
          <img src={logoRef} width="300px"/>
        </a>
*/

  return (
    <Container>
      <Box>
        {Object.entries(companyData).map(([key, cd]) => {
          return (
            <a href={`#${key}`} onClick={() => setCompany(key)}>
              <Badge>{cd.title}
            </Badge></a>
          );
        })}
      </Box>
      <Box>
        <Heading as="h3" size="lg">{title}</Heading>
      </Box>
      <iframe className="airtable-embed" src={airtableLink} frameborder="0" onmousewheel="" width="100%" height="800" style={{background: 'transparent', border: '1px solid #ccc'}}></iframe>

    </Container>
  );
};

export default Airtable;
