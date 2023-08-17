const INITIAL_STATE = {
    cards: [
        {
            id: 1,
            name: 'By Air',
            Pic : '2.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Perferendis quis molestiae vitae eligendi at.",          
        },
        {
            id: 2,
            name: 'By Ship',
            Pic : '4.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",           
        },
        {
            id: 3,
            name: 'By Road',
            Pic : '3.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Perferendis quis molestiae vitae eligendi at.",           
        },
        {
            id: 4,
            name: 'Ware Housing',
            Pic : '1.jpg',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Perferendis quis molestiae vitae eligendi at.",
           
        },
        

    ],
    card : {},


}

const detailPageReducer = (state = INITIAL_STATE, action) => {


    switch(action.type){
        case "SERVICE_DETAIL_PAGE": 
        return {...state, card: state.cards.find(card => card.id === parseInt(action.id))}
        default: 
        return state;
    }
}
export {
    detailPageReducer,

}