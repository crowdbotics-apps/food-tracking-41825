import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_foodcategory_list = createAsyncThunk(
  "foodCategories/api_v1_foodcategory_list",
  async payload => {
    const response = await apiService.api_v1_foodcategory_list(payload)
    return response.data
  }
)
export const api_v1_foodcategory_create = createAsyncThunk(
  "foodCategories/api_v1_foodcategory_create",
  async payload => {
    const response = await apiService.api_v1_foodcategory_create(payload)
    return response.data
  }
)
export const api_v1_foodcategory_retrieve = createAsyncThunk(
  "foodCategories/api_v1_foodcategory_retrieve",
  async payload => {
    const response = await apiService.api_v1_foodcategory_retrieve(payload)
    return response.data
  }
)
export const api_v1_foodcategory_update = createAsyncThunk(
  "foodCategories/api_v1_foodcategory_update",
  async payload => {
    const response = await apiService.api_v1_foodcategory_update(payload)
    return response.data
  }
)
export const api_v1_foodcategory_partial_update = createAsyncThunk(
  "foodCategories/api_v1_foodcategory_partial_update",
  async payload => {
    const response = await apiService.api_v1_foodcategory_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_foodcategory_destroy = createAsyncThunk(
  "foodCategories/api_v1_foodcategory_destroy",
  async payload => {
    const response = await apiService.api_v1_foodcategory_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const foodCategoriesSlice = createSlice({
  name: "foodCategories",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_foodcategory_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_foodcategory_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_foodcategory_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_foodcategory_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_foodcategory_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_foodcategory_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_foodcategory_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_foodcategory_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_foodcategory_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_foodcategory_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_foodcategory_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_foodcategory_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_foodcategory_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_foodcategory_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_foodcategory_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_foodcategory_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_foodcategory_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_foodcategory_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_foodcategory_list,
  api_v1_foodcategory_create,
  api_v1_foodcategory_retrieve,
  api_v1_foodcategory_update,
  api_v1_foodcategory_partial_update,
  api_v1_foodcategory_destroy,
  slice: foodCategoriesSlice
}
