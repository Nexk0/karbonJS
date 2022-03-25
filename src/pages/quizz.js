import Head from 'next/head';
import { Box, Container, Grid, Typography, Paper, Button } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { bgcolor } from '@mui/system';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';




function Dashboard() {
  
  const handleUpdate = (index, answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[index].answerId = answer;
    setUserAnswers(newAnswers);
    console.log(userAnswers[index]);
  }

  const [userAnswers, setUserAnswers] = useState([
    {
      questionId: '1',
      answerId: '2'
    },
    {
      questionId: '2',
      answerId: '2'
    },
    {
      questionId: '3',
      answerId: '1'
    },
    {
      questionId: '4',
      answerId: '3'
    },
    {
      questionId: '5',
      answerId: '1'
    },
    {
      questionId: '6',
      answerId: '2'
    },
    {
      questionId: '7',
      answerId: '2'
    },
    {
      questionId: '8',
      answerId: '2'
    },
    {
      questionId: '9',
      answerId: '2'
    },
    {
      questionId: '10',
      answerId: '2'
    },
    {
      questionId: '11',
      answerId: '1'
    },
    {
      questionId: '12',
      answerId: '2'
    },
    {
      questionId: '13',
      answerId: '2'
    },
    {
      questionId: '14',
      answerId: '3'
    },
    {
      questionId: '15',
      answerId: '1'
    },
    {
      questionId: '16',
      answerId: '2'
    }
  ]);

  return (
    <>
      <Head>
        <title>
          Karbon | Quizz
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 0
        }}
      >
        <Typography
          color="textSecondary"
          variant="h1"
          margin={5}
          marginLeft={10}>
          Quizz!
        </Typography>

        <Typography
          color="textPrimary"
          variant="subtitle1"
          margin={5}
          marginLeft={10}>
          Ce questionnaire vous permettra d'obtenir des points automatiquement tous les jours ! Répondez aux questions dont vous connaissez les réponses et laissez la réponse par défaut (correspondant à la moyenne française) sinon.
        </Typography>
        <br />

        <Container maxWidth={false}>

          <Grid
            item xs={12}
            container
            justifyContent="space-around"
            alignItems="stretch"
            spacing={2}
            direction="column"
          >{/* ========================== ALIMENTATION =============================== */}
            <Grid item xs={12}>
              <Typography variant='h3' align='center'>
                1/5 - Alimentation
              </Typography>
            </Grid>

            <Grid item xs={12} sm={10} md={8} lg={7}>
              <Box
                sx={{
                  display: 'flex', flexWrap: 'wrap',
                  '& > :not(style)': { m: 1, width: "100%", height: "auto", padding: 5 }
                }}
              >
                <Paper elevation={3}>
                  <Typography>
                    Êtes-vous vegan ?
                  </Typography>
                  <br />
                  <FormControl>
                    <RadioGroup defaultValue="2" name="vegan" id='1' onChange={(e) => handleUpdate(0, e.target.value)}>
                      <FormControlLabel value={1} control={<Radio />} label="Oui" />
                      <FormControlLabel value={2} control={<Radio />} label="Non" />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              </Box>
            </Grid>

            <Grid item xs={12} sm={10} md={8} lg={7}>
              <Box
                sx={{
                  display: 'flex', flexWrap: 'wrap',
                  '& > :not(style)': { m: 1, width: "100%", height: "auto", padding: 5 }
                }}
              >
                <Paper elevation={3}>
                  <Typography>
                    Êtes-vous végétarien ?
                  </Typography>
                  <br />
                  <FormControl>
                    <RadioGroup defaultValue="2" name="vegetarien" id='2' onChange={(e) => handleUpdate(1, e.target.value)}>
                      <FormControlLabel value={1} control={<Radio />} label="Oui" />
                      <FormControlLabel value={2} control={<Radio />} label="Non" />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              </Box>
            </Grid>
            {/* ========================== TRANSPORT =============================== */}
            <Grid item xs={12} marginTop={10}>
              <Typography variant='h3' align='center'>
                2/5 - Transport
              </Typography>
            </Grid>

            <Grid item xs={12} sm={10} md={8} lg={7}>
              <Box
                sx={{
                  display: 'flex', flexWrap: 'wrap',
                  '& > :not(style)': { m: 1, width: "100%", height: "auto", padding: 5 }
                }}
              >
                <Paper elevation={3}>
                  <Typography>
                    Quel type de voiture avez-vous ?
                  </Typography>
                  <br />
                  <FormControl>
                    <RadioGroup defaultValue="1" name="voiture" id='3' onChange={(e) => handleUpdate(2, e.target.value)}
                    >
                      <FormControlLabel value={1} control={<Radio />} label="Thermique essence" />
                      <FormControlLabel value={2} control={<Radio />} label="Thermique diesel" />
                      <FormControlLabel value={3} control={<Radio />} label="Hybride" />
                      <FormControlLabel value={4} control={<Radio />} label="Electrique" />
                      <FormControlLabel value={5} control={<Radio />} label="Je n'ai pas de voiture" />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              </Box>
            </Grid>


            <Grid item xs={12} sm={10} md={8} lg={7}>
              <Box
                sx={{
                  display: 'flex', flexWrap: 'wrap',
                  '& > :not(style)': { m: 1, width: "100%", height: "auto", padding: 5 }
                }}
              >
                <Paper elevation={3}>
                  <Typography>
                    Quelle distance parcourez-vous à l'année en voiture (en moyenne) ?
                  </Typography>
                  <br />
                  <FormControl>
                    <RadioGroup defaultValue="3" name="distVoiture" id='4' onChange={(e) => handleUpdate(3, e.target.value)}
                    >
                      <FormControlLabel value={1} control={<Radio />} label="0 à 5000km" />
                      <FormControlLabel value={2} control={<Radio />} label="5000 à 10000km" />
                      <FormControlLabel value={3} control={<Radio />} label="10000 à 20000km" />
                      <FormControlLabel value={4} control={<Radio />} label="Plus de 20000km" />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              </Box>
            </Grid>


            <Grid item xs={12} sm={10} md={8} lg={7}>
              <Box
                sx={{
                  display: 'flex', flexWrap: 'wrap',
                  '& > :not(style)': { m: 1, width: "100%", height: "auto", padding: 5 }
                }}
              >
                <Paper elevation={3}>
                  <Typography>
                    Prenez-vous régulièrement l’avion (au moins 1 fois tous les 4 ans) ?
                  </Typography>
                  <br />
                  <FormControl>
                    <RadioGroup defaultValue="1" name="avion" id='5' onChange={(e) => handleUpdate(4, e.target.value)}
                    >
                      <FormControlLabel value={1} control={<Radio />} label="Oui" />
                      <FormControlLabel value={2} control={<Radio />} label="Non" />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              </Box>
            </Grid>


            <Grid item xs={12} sm={10} md={8} lg={7}>
              <Box
                sx={{
                  display: 'flex', flexWrap: 'wrap',
                  '& > :not(style)': { m: 1, width: "100%", height: "auto", padding: 5 }
                }}
              >
                <Paper elevation={3}>
                  <Typography>
                    Combien d’heure passez vous dans un bus par semaine (en moyenne)?
                  </Typography>
                  <br />
                  <FormControl>
                    <RadioGroup defaultValue="2" name="tempsBus" id='6' onChange={(e) => handleUpdate(5, e.target.value)}
                    >
                      <FormControlLabel value={1} control={<Radio />} label="0 à 3h / semaine" />
                      <FormControlLabel value={2} control={<Radio />} label="3h à 5h / semaine" />
                      <FormControlLabel value={3} control={<Radio />} label="5h à 9h / semaine" />
                      <FormControlLabel value={4} control={<Radio />} label="Plus de 9h / semaine" />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              </Box>
            </Grid>


            <Grid item xs={12} sm={10} md={8} lg={7}>
              <Box
                sx={{
                  display: 'flex', flexWrap: 'wrap',
                  '& > :not(style)': { m: 1, width: "100%", height: "auto", padding: 5 }
                }}
              >
                <Paper elevation={3}>
                  <Typography>
                    Quelle distance parcourez vous en train par an (en moyenne) ?
                  </Typography>
                  <br />
                  <FormControl>
                    <RadioGroup defaultValue="2" name="distTrain" id='7' onChange={(e) => handleUpdate(6, e.target.value)}
                    >
                      <FormControlLabel value={1} control={<Radio />} label="0 à 500km / an" />
                      <FormControlLabel value={2} control={<Radio />} label="500 à 1500km / an" />
                      <FormControlLabel value={3} control={<Radio />} label="1500 à 3000km / an" />
                      <FormControlLabel value={4} control={<Radio />} label="Plus de 3000km / an" />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              </Box>
            </Grid>


            <Grid item xs={12} sm={10} md={8} lg={7}>
              <Box
                sx={{
                  display: 'flex', flexWrap: 'wrap',
                  '& > :not(style)': { m: 1, width: "100%", height: "auto", padding: 5 }
                }}
              >
                <Paper elevation={3}>
                  <Typography>
                    Combien d'heures passez vous par semaine en métro ou en tram ?
                  </Typography>
                  <br />
                  <FormControl>
                    <RadioGroup defaultValue="2" name="tempsMetro" id='8' onChange={(e) => handleUpdate(7, e.target.value)}
                    >
                      <FormControlLabel value={1} control={<Radio />} label="0 à 3h / semaine" />
                      <FormControlLabel value={2} control={<Radio />} label="3h à 5h / semaine" />
                      <FormControlLabel value={3} control={<Radio />} label="5h à 8h / semaine" />
                      <FormControlLabel value={4} control={<Radio />} label="Plus de 8h / semaine" />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              </Box>
            </Grid>


            <Grid item xs={12} sm={10} md={8} lg={7}>
              <Box
                sx={{
                  display: 'flex', flexWrap: 'wrap',
                  '& > :not(style)': { m: 1, width: "100%", height: "auto", padding: 5 }
                }}
              >
                <Paper elevation={3}>
                  <Typography>
                    Utilisez-vous un vélo ou trotinnette ou autre pour les trajets courts ?
                  </Typography>
                  <br />
                  <FormControl>
                    <RadioGroup defaultValue="2" name="velo" id='9' onChange={(e) => handleUpdate(8, e.target.value)}
                    >
                      <FormControlLabel value={1} control={<Radio />} label="Oui" />
                      <FormControlLabel value={2} control={<Radio />} label="Non" />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              </Box>
            </Grid>


            {/* ========================== NUMERIQUE =============================== */}
            <Grid item xs={12} marginTop={10}>
              <Typography variant='h3' align='center'>
                3/5 - Numérique
              </Typography>
            </Grid>

            <Grid item xs={12} sm={10} md={8} lg={7}>
              <Box
                sx={{
                  display: 'flex', flexWrap: 'wrap',
                  '& > :not(style)': { m: 1, width: "100%", height: "auto", padding: 5 }
                }}
              >
                <Paper elevation={3}>
                  <Typography>
                    A quelle fréquence changez vous de téléphone ?
                  </Typography>
                  <br />
                  <FormControl>
                    <RadioGroup defaultValue="2" name="freqTel" id='10' onChange={(e) => handleUpdate(9, e.target.value)}
                    >
                      <FormControlLabel value={1} control={<Radio />} label="Tous les ans" />
                      <FormControlLabel value={2} control={<Radio />} label="Tous les 2 à 3 ans" />
                      <FormControlLabel value={3} control={<Radio />} label="Tous les 3 à 4 ans" />
                      <FormControlLabel value={4} control={<Radio />} label="Tous les 5 ans ou plus" />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              </Box>
            </Grid>


            <Grid item xs={12} sm={10} md={8} lg={7}>
              <Box
                sx={{
                  display: 'flex', flexWrap: 'wrap',
                  '& > :not(style)': { m: 1, width: "100%", height: "auto", padding: 5 }
                }}
              >
                <Paper elevation={3}>
                  <Typography>
                    Lorsque vous changez de téléphone, vous en prenez un :
                  </Typography>
                  <br />
                  <FormControl>
                    <RadioGroup defaultValue="1" name="changementTel" id='11' onChange={(e) => handleUpdate(10, e.target.value)}
                    >
                      <FormControlLabel value={1} control={<Radio />} label="Neuf" />
                      <FormControlLabel value={2} control={<Radio />} label="Reconditionné ou d'occasion" />
                      <FormControlLabel value={3} control={<Radio />} label="Ça dépend" />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              </Box>
            </Grid>


            {/* ========================== LOGEMENT =============================== */}
            <Grid item xs={12} marginTop={10}>
              <Typography variant='h3' align='center'>
                4/5 - Logement
              </Typography>
            </Grid>

            <Grid item xs={12} sm={10} md={8} lg={7}>
              <Box
                sx={{
                  display: 'flex', flexWrap: 'wrap',
                  '& > :not(style)': { m: 1, width: "100%", height: "auto", padding: 5 }
                }}
              >
                <Paper elevation={3}>
                  <Typography>
                    Quelle est la surface de votre logement ?
                  </Typography>
                  <br />
                  <FormControl>
                    <RadioGroup defaultValue="2" name="surface" id='12' onChange={(e) => handleUpdate(11, e.target.value)}
                    >
                      <FormControlLabel value={1} control={<Radio />} label="0 à 30m²" />
                      <FormControlLabel value={2} control={<Radio />} label="30 à 80m²" />
                      <FormControlLabel value={3} control={<Radio />} label="Plus de 80m²" />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              </Box>
            </Grid>


            <Grid item xs={12} sm={10} md={8} lg={7}>
              <Box
                sx={{
                  display: 'flex', flexWrap: 'wrap',
                  '& > :not(style)': { m: 1, width: "100%", height: "auto", padding: 5 }
                }}
              >
                <Paper elevation={3}>
                  <Typography>
                    Combien de personnes vivent dans votre logement ?
                  </Typography>
                  <br />
                  <FormControl>
                    <RadioGroup defaultValue="2" name="nbPersonnes" id='13' onChange={(e) => handleUpdate(12, e.target.value)}
                    >
                      <FormControlLabel value={1} control={<Radio />} label="1" />
                      <FormControlLabel value={2} control={<Radio />} label="2" />
                      <FormControlLabel value={3} control={<Radio />} label="3" />
                      <FormControlLabel value={4} control={<Radio />} label="4" />
                      <FormControlLabel value={5} control={<Radio />} label="5 ou plus" />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              </Box>
            </Grid>


            <Grid item xs={12} sm={10} md={8} lg={7}>
              <Box
                sx={{
                  display: 'flex', flexWrap: 'wrap',
                  '& > :not(style)': { m: 1, width: "100%", height: "auto", padding: 5 }
                }}
              >
                <Paper elevation={3}>
                  <Typography>
                    Comment est chauffé votre logement ?
                  </Typography>
                  <br />
                  <FormControl>
                    <RadioGroup defaultValue="3" name="chauffage" id='14' onChange={(e) => handleUpdate(13, e.target.value)}
                    >
                      <FormControlLabel value={1} control={<Radio />} label="Avec une pompe à chaleur" />
                      <FormControlLabel value={2} control={<Radio />} label="Au bois" />
                      <FormControlLabel value={3} control={<Radio />} label="Au chauffage électrique" />
                      <FormControlLabel value={4} control={<Radio />} label="Au gaz" />
                      <FormControlLabel value={5} control={<Radio />} label="Au fuel" />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              </Box>
            </Grid>


            <Grid item xs={12} sm={10} md={8} lg={7}>
              <Box
                sx={{
                  display: 'flex', flexWrap: 'wrap',
                  '& > :not(style)': { m: 1, width: "100%", height: "auto", padding: 5 }
                }}
              >
                <Paper elevation={3}>
                  <Typography>
                    Avez-vous une baignoire?
                  </Typography>
                  <br />
                  <FormControl>
                    <RadioGroup defaultValue="1" name="baignoire" id='15' onChange={(e) => handleUpdate(14, e.target.value)}
                    >
                      <FormControlLabel value={1} control={<Radio />} label="Oui" />
                      <FormControlLabel value={2} control={<Radio />} label="Non" />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              </Box>
            </Grid>


            {/* ========================== DIVERS =============================== */}
            <Grid item xs={12} marginTop={10}>
              <Typography variant='h3' align='center'>
                5/5 - Divers
              </Typography>
            </Grid>


            <Grid item xs={12} sm={10} md={8} lg={7}>
              <Box
                sx={{
                  display: 'flex', flexWrap: 'wrap',
                  '& > :not(style)': { m: 1, width: "100%", height: "auto", padding: 5 }
                }}
              >
                <Paper elevation={3}>
                  <Typography>
                    Faites-vous le tri sélectif ?
                  </Typography>
                  <br />
                  <FormControl>
                    <RadioGroup defaultValue="2" name="tri" id='16' onChange={(e) => handleUpdate(15, e.target.value)}
                    >
                      <FormControlLabel value={1} control={<Radio />} label="Oui" />
                      <FormControlLabel value={2} control={<Radio />} label="Non" />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              </Box>
            </Grid>


            {/* ========================== BOUTON SUBMIT =============================== */}
            <Box sx={{ py: 5, marginLeft: 8, marginBottom: 12 }}>
              <Button
                color="primary"
                size="large"
                type="submit"
                variant="contained"
                sx={{ borderRadius: 5 }}
                onClick={() => {
                  console.log(JSON.stringify({userAnswers}));

                }}
              >
                Valider toutes mes réponses
              </Button>
            </Box>

          </Grid>
        </Container>
      </Box>
    </>
  );
}

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
