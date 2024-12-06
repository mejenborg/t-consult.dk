import { Box, Container, Grid, Sheet, Typography } from "@mui/joy";
import Architecture from "../assets/architecture.jpg";
import HouseKeys from "../assets/table-house-keys.jpg";

interface BusinessPageProps {}

export default function BusinessPage({}: BusinessPageProps) {
  return (
    <Sheet component="main" sx={{ position: "relative" }}>
      <Box
        sx={{
          backgroundImage: `url(${Architecture})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          backgroundPosition: "50% 70%",
          minWidth: 750,
          width: "100%",
          height: 500,
          position: "absolute",
          zIndex: 0,
          filter: "brightness(0.6)",
        }}
      />
      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          paddingTop: "210px",
          paddingBottom: 5,
        }}
      >
        <Typography level="h1">Erhvervs rådgivning</Typography>
        <Typography level="h2">Bolighandel</Typography>
        <Typography level="h3" sx={{ mb: 1 }}>
          Købsrådgivning
        </Typography>
        <Typography sx={{ mb: 4 }}>
          At købe en ejendom er en af de største beslutninger i livet. Det er en
          proces fyldt med både spænding og overvejelser, hvor der skal tages
          højde for alt fra ejendommens stand til dens fremtidige
          vedligeholdelse. Med T-Consult som din rådgiver er du sikret
          professionel hjælp gennem hele processen, så du kan træffe din
          beslutning på et solidt og informeret grundlag.
        </Typography>
        <Typography level="h4" sx={{ mb: 1 }}>
          Hvad er købsrådgivning?
        </Typography>
        <Typography sx={{ mb: 5 }}>
          Købsrådgivning handler om at sikre, at du som køber får den bedst
          mulige indsigt i den ejendom, du overvejer at investere i. Hos
          T-Consult gennemgår jeg nøje alle relevante dokumenter, foretager en
          teknisk vurdering af ejendommen og sikrer, at du har et klart billede
          af både styrker og udfordringer ved dit potentielle køb. Vores mål er
          at gøre købsprocessen tryg, overskuelig og gennemsigtig.
        </Typography>
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 1, md: 5 }}
          sx={{ flexGrow: 1 }}
        >
          <Grid sm={12} md={3}>
            {/* @ts-expect-error: Type '"h5"' is not assignable to type 'keyof TypographySystem | "inherit" | undefined' - But still works though... */}
            <Typography level="h5">Gennemgang af rapporter</Typography>
          </Grid>
          <Grid sm={12} md={9} sx={{ marginBottom: { xs: 4, sm: 4, md: 0 } }}>
            <Typography>
              Når du køber en ejendom, følger der ofte en række dokumenter med,
              som kan være svære at overskue uden teknisk indsigt. Jeg gennemgår
              tilstandsrapporten, elinstallationsrapporten, energimærket og
              ejendommens servitutter for at identificere eventuelle forhold,
              der kan påvirke din beslutning. Jeg fremhæver alt fra mindre
              bemærkninger til potentielt alvorlige fejl og mangler, så du har
              et fuldt oplyst grundlag.
            </Typography>
          </Grid>

          <Grid sm={12} md={3}>
            {/* @ts-expect-error: See previous reasoning */}
            <Typography level="h5">Rådgivning om forhandling</Typography>
          </Grid>
          <Grid sm={12} md={9} sx={{ marginBottom: { xs: 4, sm: 4, md: 0 } }}>
            <Typography>
              Når jeg har samlet al relevant information, rådgiver jeg dig om,
              hvordan du bedst forhandler prisen og vilkårene for dit køb. Hvis
              der er konstateret mangler eller forbedringsbehov, kan disse
              bruges som argumenter for en prisreduktion. Jeg står klar med
              konkrete anbefalinger og strategier, der sikrer dig det bedst
              mulige resultat i forhandlingen.
            </Typography>
          </Grid>

          <Grid sm={12} md={3}>
            {/* @ts-expect-error: See previous reasoning */}
            <Typography level="h5">Tilkøb af rapport</Typography>
          </Grid>
          <Grid sm={12} md={9}>
            <Typography>
              Med en detaljeret rapport fra T-Consult får I et klart overblik
              over ejendommens udgifter på kort og lang sigt, herunder
              vedligeholdelse og større poster som udskiftning af vinduer og
              tag. Rapporten kan bruges i forhandlinger om købsprisen og som
              dokumentation i dialogen med banken, så I handler ejendom på et
              oplyst grundlag med indsigt i fremtidige økonomiske forpligtelser.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Salgsrådgiving */}
      <Box sx={{ mb: 4, background: "#EFEFEF" }}>
        <Container sx={{ pt: 3, pb: 5 }}>
          <Typography level="h3" sx={{ mb: 2 }}>
            Salgsrådgivning
          </Typography>
          <Typography sx={{ mb: 4 }}>
            Overvejer I at sælge jeres bolig og ønsker den højest mulige
            salgspris? Med professionel salgsrådgivning fra T-Consult får I de
            bedste forudsætninger for et succesfuldt salg. En byggeteknisk
            gennemgang kan være en afgørende investering, som både optimerer
            boligens tilstand og styrker dens tiltrækningskraft for potentielle
            købere.
          </Typography>
          <Grid container sx={{ mb: 4 }}>
            <Grid sm={12} md={6}>
              <Box
                sx={{
                  backgroundImage: `url(${HouseKeys})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "40% 70%",
                  backgroundSize: "auto 110%",
                  height: "100%",
                  width: "95%",
                }}
              />
            </Grid>
            <Grid sm={12} md={6}>
              <Typography level="h4">
                Nedbringe antallet af K'er i tilstandsrapporten
              </Typography>
              <Typography sx={{ marginBottom: 4 }}>
                Når fejl og mangler i boligen udbedres inden udarbejdelsen af
                tilstandsrapporten, reduceres antallet af K'er, der angiver
                skadernes alvor. En rapport med færre K'er præsenterer
                ejendommen som værende i bedre stand, hvilket kan øge dens
                attraktivitet for købere, forbedre forhandlingspositionen og
                potentielt resultere i en højere salgspris.
              </Typography>
              <Typography level="h4">
                Vurdere boligen fra en købers perspektiv
              </Typography>
              <Typography>
                At se boligen gennem en købers øjne handler om at identificere
                de forhold, der kan påvirke købers beslutning, både positivt og
                negativt. Det inkluderer at vurdere boligens funktionalitet,
                stand og fremtidige udgifter, såsom behovet for renovering eller
                opgraderinger. Denne tilgang giver sælger et klart billede af,
                hvilke forbedringer der kan øge ejendommens tiltrækningskraft og
                gøre den mere attraktiv på markedet.
              </Typography>
            </Grid>
          </Grid>
          <Typography>
            Med vores rapport og anbefalinger står I bedre rustet i
            forhandlingerne med potentielle købere. En veldokumenteret og
            gennemarbejdet salgsstrategi skaber tillid og giver jer et stærkere
            udgangspunkt for at forhandle den højeste pris og de bedste vilkår.
          </Typography>
        </Container>
      </Box>

      {/* Tilstandsrapport */}
      <Container sx={{ pb: 5 }}>
        <Typography level="h3" sx={{ mb: 1 }}>
          Tilstandsrapport
        </Typography>
        <Typography sx={{ mb: 4 }}>
          En tilstandsrapport er en vigtig del af ejendomshandler, da den giver
          en detaljeret vurdering af boligens tekniske stand. Som selvstændig
          bygningsrådgiver tilbyder jeg professionel assistance i forbindelse
          med udarbejdelsen, forståelsen og anvendelsen af tilstandsrapporter.
          Uanset om du er køber, sælger eller ejer, kan en grundig
          tilstandsrapport hjælpe med at sikre en korrekt vurdering af
          ejendommens tilstand og fremtidige vedligeholdelsesbehov.
        </Typography>
        <Grid container rowSpacing={4} columnSpacing={4}>
          <Grid md={6}>
            {/* @ts-expect-error: See previous reasoning */}
            <Typography level="h5">
              Forklaring af tilstandsrapportens indhold
            </Typography>
            <Typography>
              Tilstandsrapporter kan være teknisk komplekse og svære at forstå.
              Jeg tilbyder en grundig gennemgang af rapporten, hvor jeg
              forklarer betydningen af hver kategori og hjælper med at vurdere,
              hvilke fund der kræver handling. Jeg sikrer, at du får et klart
              billede af boligens tilstand og eventuelle økonomiske
              konsekvenser.
            </Typography>
          </Grid>
          <Grid md={6}>
            {/* @ts-expect-error: See previous reasoning */}
            <Typography level="h5">
              Rådgivning om nødvendige reparationer
            </Typography>
            <Typography>
              Efter udarbejdelsen af tilstandsrapporten kan jeg give råd om,
              hvilke reparationer der bør prioriteres for at sikre ejendommens
              funktionalitet og markedsværdi. Jeg hjælper med at vurdere
              omkostningerne ved nødvendige udbedringer og sikrer, at du er godt
              forberedt på, hvad der skal gøres.
            </Typography>
          </Grid>
          <Grid md={6}>
            {/* @ts-expect-error: See previous reasoning */}
            <Typography level="h5">
              Styrkelse af forhandlingspositionen
            </Typography>
            <Typography>
              En professionelt udarbejdet tilstandsrapport kan være en stærk
              forhandlingsfaktor i en ejendomshandler. Jeg hjælper med at bruge
              rapportens fund til at forhandle bedre vilkår ved køb eller salg,
              herunder at justere prisforventningerne eller få nødvendige
              reparationer dækket af sælger eller køber.
            </Typography>
          </Grid>
          <Grid md={6}>
            {/* @ts-expect-error: See previous reasoning */}
            <Typography level="h5">Forebyggelse af tvister</Typography>
            <Typography>
              I tilfælde af tvister om boligens tilstand, kan en uafhængig
              tilstandsrapport hjælpe med at dokumentere de faktiske forhold.
              Jeg tilbyder en objektiv vurdering, der kan være med til at undgå
              uenigheder mellem køber og sælger eller ejendomsejere og lejere.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Sheet>
  );
}
