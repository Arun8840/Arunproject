import { pageService } from "@/service/pageServices"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

interface AppState {
  isLoading: string | any
  pageItems: []
  isDark: boolean
}

const initialState: AppState = {
  isLoading: null,
  pageItems: [],
  isDark: false,
}

//todo Thunk to load the components asynchronously
export const fetchAndSet_Pagecontent = createAsyncThunk(
  "portfolio/page-contents",
  async (_, { rejectWithValue }) => {
    try {
      const res = await pageService?.loadPageContents()
      return res?.data
    } catch (error: any) {
      console.error("Error loading page contents:", error)
      return rejectWithValue(error.message)
    }
  }
)

const pageSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    change_darkmode: (state, action) => {
      let isDark = action?.payload
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAndSet_Pagecontent.pending, (state) => {
        state.isLoading = "Loading..." // Indicate loading state
      })
      .addCase(fetchAndSet_Pagecontent.fulfilled, (state, action) => {
        state.isLoading = action.payload // Store loaded components
      })
      .addCase(fetchAndSet_Pagecontent.rejected, (state, action) => {
        state.isLoading = `Error: ${action.payload}` // Handle errors
      })
  },
})

export const { change_darkmode } = pageSlice.actions
export default pageSlice.reducer
