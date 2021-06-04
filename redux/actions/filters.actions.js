import * as types from './_types';


export function setFilters(filters) {
  return { type: types.SET_FILTERS, filters }
}

export function unsetFilters(filters) {
  return { type: types.UNSET_FILTERS, filters }
}

