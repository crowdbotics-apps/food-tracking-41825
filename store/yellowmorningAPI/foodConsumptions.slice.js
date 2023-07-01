import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const api_v1_foodconsumption_list = createAsyncThunk("foodConsumptions/api_v1_foodconsumption_list", async payload => {
  const response = await apiService.api_v1_foodconsumption_list(payload);
  return response.data;
});
export const api_v1_foodconsumption_create = createAsyncThunk("foodConsumptions/api_v1_foodconsumption_create", async payload => {
  const response = await apiService.api_v1_foodconsumption_create(payload);
  return response.data;
});
export const api_v1_foodconsumption_retrieve = createAsyncThunk("foodConsumptions/api_v1_foodconsumption_retrieve", async payload => {
  const response = await apiService.api_v1_foodconsumption_retrieve(payload);
  return response.data;
});
export const api_v1_foodconsumption_update = createAsyncThunk("foodConsumptions/api_v1_foodconsumption_update", async payload => {
  const response = await apiService.api_v1_foodconsumption_update(payload);
  return response.data;
});
export const api_v1_foodconsumption_partial_update = createAsyncThunk("foodConsumptions/api_v1_foodconsumption_partial_update", async payload => {
  const response = await apiService.api_v1_foodconsumption_partial_update(payload);
  return response.data;
});
export const api_v1_foodconsumption_destroy = createAsyncThunk("foodConsumptions/api_v1_foodconsumption_destroy", async payload => {
  const response = await apiService.api_v1_foodconsumption_destroy(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const foodConsumptionsSlice = createSlice({
  name: "foodConsumptions",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_foodconsumption_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_foodconsumption_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [api_v1_foodconsumption_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_foodconsumption_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_foodconsumption_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [api_v1_foodconsumption_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_foodconsumption_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_foodconsumption_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [api_v1_foodconsumption_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_foodconsumption_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_foodconsumption_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    },
    [api_v1_foodconsumption_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_foodconsumption_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_foodconsumption_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    },
    [api_v1_foodconsumption_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_foodconsumption_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_foodconsumption_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(record => record.id !== action.meta.arg?.id);
        state.api.loading = "idle";
      }
    },
    [api_v1_foodconsumption_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  api_v1_foodconsumption_list,
  api_v1_foodconsumption_create,
  api_v1_foodconsumption_retrieve,
  api_v1_foodconsumption_update,
  api_v1_foodconsumption_partial_update,
  api_v1_foodconsumption_destroy,
  slice: foodConsumptionsSlice
};