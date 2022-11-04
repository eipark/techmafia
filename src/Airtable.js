import {
  Container,
} from '@chakra-ui/react'
import React, { useState } from 'react'


const companyData = {
  'hubspot': {
    airtableLink: "https://airtable.com/embed/shrHi8a6NsiPXQv00?backgroundColor=blue&viewControls=on",
    title: 'HubSpot',
    url: 'https://hubspot.com',
  },
  'stripe': {
    airtableLink: "https://airtable.com/embed/shrHi8a6NsiPXQv00?backgroundColor=blue&viewControls=on",
    title: 'Stripe',
    url: 'https://stripe.com',
  },
};

const Airtable = () => {

  const [company, setCompany] = useState('hubspot');

  const { airtableLink, title, url } = companyData[company];

  return (
    <Container>
      <iframe className="airtable-embed" src={airtableLink} frameborder="0" onmousewheel="" width="100%" height="800" style={{background: 'transparent', border: '1px solid #ccc'}}></iframe>

    </Container>
  );
};

export default Airtable;
