const initState = {astros:[]};

export default function appAmount (state = initState, action){
    
    switch(action.type){

        case 'SET_ASTROS':

        return{
            ...state,
            astros: action.data, // [...action.data]
        };

        default: return state;
    }
}