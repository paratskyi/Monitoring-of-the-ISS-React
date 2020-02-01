export const dataHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'LOADING_DATA_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
};

export const astros = (state = [], action) => {
  switch (action.type) {
    case 'LOADING_ASTROS_FETCH_SUCCESS':
      return action.astros;

    default:
      return state;
  }
};

export const location = (state = [], action) => {
  switch (action.type) {
    case 'LOADING_LOCATION_FETCH_SUCCESS':
      return action.location;

    default:
      return state;
  }
};