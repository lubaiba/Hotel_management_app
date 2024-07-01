import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Rooms } from "../models/rooms";

export interface Roomstate{
    rooms:Rooms[];
    inProgress:boolean;
    error?:any;
}

const initialState:Roomstate = {
    rooms:[],
    inProgress:false,
    error:null
}

export const fetchRooms = createAsyncThunk(
    "rooms/fetchRooms",
    async () => {
      const response = await fetch("/api/roomsandrates");
      const data = await response.json();
      return data.data;
    }
  );
  
export const roomSlice = createSlice({
    name:"rooms",
    initialState:initialState,
    reducers:{
        setRooms(state,action) {
            state.rooms=action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRooms.pending, (state, action) => {
          state.inProgress = true;
          state.rooms = [];
        });
        builder.addCase(fetchRooms.fulfilled, (state, action) => {
          state.inProgress = false;
          state.rooms = action.payload;
        });
        builder.addCase(fetchRooms.rejected, (state, action) => {
          state.error = action.error; 
          state.inProgress = false;
        });
    }
});

export const { setRooms } = roomSlice.actions;

export default roomSlice.reducer;