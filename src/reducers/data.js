export function dataHasErrored(state = false, action) {
  switch (action.type) {
    case 'LOADING_DATA_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
}

export function dataIsLoading(state = false, action) {
  switch (action.type) {
    case 'DATA_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export function astros(state = [], action) {
  switch (action.type) {
    case 'LOADING_ASTROS_FETCH_SUCCESS':
      return action.astros;

    default:
      return state;
  }
}

export function location(state = [], action) {
  switch (action.type) {
    case 'LOADING_LOCATION_FETCH_SUCCESS':
      return action.location;

    default:
      return state;
  }
}