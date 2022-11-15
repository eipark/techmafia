import {
  Container,
  Box,
  Heading,
  Badge,
  Text,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import imgHubSpot from './images/hubspot.png';
import imgStripe from './images/stripe.png';
import {
  useParams,
  Link,
} from "react-router-dom";


const companyData = {
  'hubspot': {
    airtableLink: "https://airtable.com/embed/shrHi8a6NsiPXQv00?backgroundColor=blue&viewControls=on",
    title: 'HubSpot',
    url: 'https://hubspot.com',
    logoRef: imgHubSpot,
  },
  'stripe': {
    airtableLink: "https://airtable.com/embed/shr1aENlN1eJBRzHN?backgroundColor=blue&viewControls=on",
    title: 'Stripe',
    url: 'https://stripe.com',
    logoRef: imgStripe,
  },
};

const TWITTER_LINK = "https://twitter.com/intent/tweet?text=Hey%20%40techmafia_io%20you%20should%20add%20%7BCOMPANY%20HERE%7D%20to%20techmafia.io!";

const Airtable = () => {

    let { company } = useParams();
  company = company || "hubspot";

  const { logoUrl, airtableLink, title, url, logoRef } = companyData[company];
  /*
        <a target="_blank" href={url}>
          <img src={logoRef} width="300px"/>
        </a>
*/

  return (
    <Container id="mafias">
      <Box my="8">
        Scan for mafias: &nbsp;
        {Object.entries(companyData).map(([key, cd]) => {
          return (
            <Link to={`/${key}`} key={key}>
              {company == key ?
                <Badge mx="3" fontSize="1em" colorScheme="green">{cd.title}</Badge>
                :
                <Badge mx="3" fontSize="1em">{cd.title}</Badge>
              }
          </Link>
          );
        })}
          <a target="_blank" href={TWITTER_LINK}><Badge mx="3" fontSize="1em">+ Add a company</Badge></a>
      </Box>
      <Box my="2">
        <Heading as="h3" size="lg">{title}</Heading>
      </Box>
      <iframe className="airtable-embed" src={airtableLink} frameborder="0" onmousewheel="" width="100%" height="800" style={{background: 'transparent', border: '1px solid #ccc'}}></iframe>

      <Text my="4" size="xs">Note: We only include companies that have been venture funded or have public valuation information. </Text>
    </Container>
  );
};

export default Airtable;
