export function terminListReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_TERMIN':
            return [ ...state, { ...action.payload }].sort(function(a,b) {
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return a.date - b.date;
              });
        case 'REMOVE_TERMIN':
            return state.filter(termin => termin.id !== action.payload.id);
        case 'LOAD_TERMINI':
            return action.payload.map(termin => ({...termin}));
        default:
            return state;
    }
}