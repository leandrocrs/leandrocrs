import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Bag from './Bag';

const StyledApp = styled.main`
  // Your style here
`;

type CheckoutStep = 'bag' | 'shipping' | 'identification' | 'payment';

export function App() {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('bag');

  return (
    <>
      <CssBaseline />
      <StyledApp>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h1">Single Page Cart</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Bag
                    expanded={currentStep === 'bag'}
                    onChange={() => setCurrentStep('bag')}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Accordion
                    expanded={currentStep === 'shipping'}
                    onChange={() => setCurrentStep('shipping')}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Shipping address
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>
                        Deliver to LA, York
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>Shipping address</Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
                <Grid item xs={12}>
                  <Accordion
                    expanded={currentStep === 'identification'}
                    onChange={() => setCurrentStep('identification')}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Identification
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>
                        Contoso SA
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>Identification</Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
                <Grid item xs={12}>
                  <Accordion
                    expanded={currentStep === 'payment'}
                    onChange={() => setCurrentStep('payment')}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Payment method
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>
                        Credit Card
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>Payment method</Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <Box padding={2}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h2">Your order</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </StyledApp>
    </>
  );
}

export default App;
