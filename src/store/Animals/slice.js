import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  animalList: [],
};

export const getListAnimalApi = createAsyncThunk(
  "animal/getList",
  async (params) => {
    try {
      const response = await axios({
        url: "https://6534da22e1b6f4c59046fb97.mockapi.io/animal",
        method: "GET",
        params: {
          page: params.page || 1,
          limit: 10,
        },
      });
      return response.data;
    } catch (error) {
      console.log("error", error);
      throw Error("Api not found");
    }
  }
);

export const addAnimalApi = createAsyncThunk(
  "animal/add",
  async (formValue) => {
    try {
      const response = await axios({
        url: "https://6534da22e1b6f4c59046fb97.mockapi.io/animal",
        method: "POST",
        data: formValue,
      });
      console.log("response", response);
      return response.data;
    } catch {
      throw Error("Đã có lỗi xảy ra");
    }
  }
);

const AnimalSlice = createSlice({
  name: "animal",
  initialState,
  reducers: {
    setAnimalList: (state, { payload }) => {
      state.animalList = payload;
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getListAnimalApi.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getListAnimalApi.fulfilled, (state, { payload }) => {
        state.animalList = payload;
        state.isLoading = false;
      }),
      builder.addCase(getListAnimalApi.rejected, (state, action) => {
        state.isLoading = false;
      }),
      // ADD Animal
      builder.addCase(addAnimalApi.pending, (state) => {
        state.isLoading = true;
      }),
      builder.addCase(addAnimalApi.fulfilled, (state, { payload }) => {
        console.log("addAnimalApi fulfilled", payload);
        state.animalList.push(payload);
        state.isLoading = false;
      }),
      builder.addCase(addAnimalApi.rejected, (state, { payload }) => {
        console.log("addAnimalApi rejected", payload);
        state.isLoading = false;
      });
  },
});

export const { reducer: animalReducer } = AnimalSlice;
export const { setAnimalList, setLoading } = AnimalSlice.actions;
