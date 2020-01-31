export const astrosAtTheISS = (astros = []) => {
  return astros.map(astro => {
    if (astro.craft === 'ISS') return astro
  })
}