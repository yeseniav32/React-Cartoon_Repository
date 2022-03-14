import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Jalopy",
        price: "2000.00",
        description: "Kachow",
        cost_of_production: 450.00,
        make: 'Make',
        model: 'Model'
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload},
        chooseCostOfProduction: (state, action) => { state.cost_of_production = action.payload},
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, choosePrice, chooseDescription, chooseCostOfProduction, chooseMake, chooseModel} = rootSlice.actions;