const INITIAL_STATE = {
    cards: [
        {
            id: 1,
            name: 'By Air',
            Pic : '1.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
            animateCard_1: 'fade-down-right',
            animateCard_2: 'fade-down'
        },
        {
            id: 2,
            name: 'By Ship',
            Pic : '2.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
            animateCard_1: 'zoom-in',
            animateCard_2: 'fade-up'
        },
        {
            id: 3,
            name: 'By Road',
            Pic : '3.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
            animateCard_1: 'fade-down-left',
            animateCard_2: 'zoom-in-down'
        },
        {
            id: 4,
            name: 'Ware Housing',
            Pic : '4.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
            animateCard_1: 'fade-down-left',
            animateCard_2: 'zoom-in-down'
        },
        

    ],
    card : {},


}

const detailPageReducer = (state = INITIAL_STATE, action) => {


    switch(action.type){
        case "SERVICE_DETAI_PAGE": 
        return {...state, card: state.cards.find(card => card.id === parseInt(action.id))}
        default: 
        return state;
    }
}
export {
    detailPageReducer,

}