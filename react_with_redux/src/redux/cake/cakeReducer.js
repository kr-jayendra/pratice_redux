const { BUY_CAKE } = require("./cakeType")

const initalState = {
    numOfCakes : 10
}

export const cakeRedcer = (state,action) => {
    switch(action.type){
        case  BUY_CAKE : 
            return {
                ...state,
                numOfCakes : state.numOfCakes + 1
    

            } 

        default :
            return state
    }

}

