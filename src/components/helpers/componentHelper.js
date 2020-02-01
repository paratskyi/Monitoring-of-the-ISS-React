export const astrosAtTheISS = (astros = []) => {
  return astros.map(astro => {
    if (astro.craft === 'ISS') return astro;
  });
};

export const latitude = props => {
  return +props.location.iss_position.latitude;
};

export const longitude = props => {
  return +props.location.iss_position.longitude;
};
