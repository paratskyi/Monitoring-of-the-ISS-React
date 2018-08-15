const initState = {location:[]};

export default function app(state = initState, action){
    
    switch(action.type){

        case 'SET_LOCATION':

        return{
            ...state,
            location: action.data, // [...action.data]
        };

        default: return state;
    }
}


