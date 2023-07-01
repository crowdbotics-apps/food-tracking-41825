import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_appuser_list = createAsyncThunk(
  "appUsers/api_v1_appuser_list",
  async payload => {
    const response = await apiService.api_v1_appuser_list(payload)
    return response.data
  }
)
export const api_v1_appuser_create = createAsyncThunk(
  "appUsers/api_v1_appuser_create",
  async payload => {
    const response = await apiService.api_v1_appuser_create(payload)
    return response.data
  }
)
export const api_v1_appuser_retrieve = createAsyncThunk(
  "appUsers/api_v1_appuser_retrieve",
  async payload => {
    const response = await apiService.api_v1_appuser_retrieve(payload)
    return response.data
  }
)
export const api_v1_appuser_update = createAsyncThunk(
  "appUsers/api_v1_appuser_update",
  async payload => {
    const response = await apiService.api_v1_appuser_update(payload)
    return response.data
  }
)
export const api_v1_appuser_partial_update = createAsyncThunk(
  "appUsers/api_v1_appuser_partial_update",
  async payload => {
    const response = await apiService.api_v1_appuser_partial_update(payload)
    return response.data
  }
)
export const api_v1_appuser_destroy = createAsyncThunk(
  "appUsers/api_v1_appuser_destroy",
  async payload => {
    const response = await apiService.api_v1_appuser_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const appUsersSlice = createSlice({
  name: "appUsers",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_appuser_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_appuser_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_appuser_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_appuser_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_appuser_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_appuser_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_appuser_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_appuser_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_appuser_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_appuser_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_appuser_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_appuser_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_appuser_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_appuser_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_appuser_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_appuser_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_appuser_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_appuser_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_appuser_list,
  api_v1_appuser_create,
  api_v1_appuser_retrieve,
  api_v1_appuser_update,
  api_v1_appuser_partial_update,
  api_v1_appuser_destroy,
  slice: appUsersSlice
}
