/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const TAG_TICK = createActionName('TAG_TICK');
export const TAG_UNTICK = createActionName('TAG_UNTICK');
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const tagTick = payload => ({ payload, type: TAG_TICK });
export const tagUntick = payload => ({ payload, type: TAG_UNTICK });
export const changeDuration = payload => ({ payload, type: CHANGE_DURATION });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case TAG_TICK:
      return {
        ...statePart,
        ///???
      };
    case TAG_UNTICK:
      return {
        ...statePart,
        ///???
      };
    case CHANGE_DURATION:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          ///???
        },
      };
    default:
      return statePart;
  }
}
