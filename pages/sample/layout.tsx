import { Card, Grid, styled } from '@mui/material';

const Item = styled(Card)({
  height: 56,
  display: 'grid',
  placeContent: 'center'
});

const Layout = (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
  );
};

export default Layout;
