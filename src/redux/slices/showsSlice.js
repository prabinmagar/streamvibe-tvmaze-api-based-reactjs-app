import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import showsService from "../services/showsService";
import errorConstants from "../../constant/errorConstants";

// error handling utils
const handleErrorResponse = (error, thunkAPI) => {
  if (error.response) {
    const { status, data } = error.response;
    let code = null;
    if (status === 404) {
      code = errorConstants.ERR_404;
    } else if (status === 429) {
      code = errorConstants.ERR_429;
    }

    return thunkAPI.rejectWithValue({
      code,
      message: data.message || "Server Error",
    });
  } else if (error.request) {
    return thunkAPI.rejectWithValue({
      code: error.code,
      message: "Network Error",
    });
  }

  return thunkAPI.rejectWithValue({
    code: "ERR_GENERIC",
    message: "Error",
  });
};

export const fetchAllShows = createAsyncThunk(
  "shows/fetch/all",
  async (_, thunkAPI) => {
    try {
      return await showsService.fetchAllShows();
    } catch (error) {
      return handleErrorResponse(error, thunkAPI);
    }
  }
);

export const fetchSearchResults = createAsyncThunk(
  "shows/fetch/search",
  async (query, thunkAPI) => {
    try {
      return await showsService.fetchSearchResults(query);
    } catch (error) {
      return handleErrorResponse(error, thunkAPI);
    }
  }
);

export const fetchSingleShow = createAsyncThunk(
  "shows/fetch/single",
  async (showId, thunkAPI) => {
    try {
      thunkAPI.dispatch(showsSlice.actions.resetSingleShow());
      return await showsService.fetchSingleShow(showId);
    } catch (error) {
      return handleErrorResponse(error, thunkAPI);
    }
  }
);

const initialState = {
  shows: [],
  searchResults: [],
  singleShow: null,
  isLoading: {
    fetchAllShows: false,
    fetchSearchResults: false,
    fetchSingleShow: false,
  },
  isError: {
    fetchAllShows: false,
    fetchSearchResults: false,
    fetchSingleShow: false,
  },
  isSuccess: {
    fetchAllShows: false,
    fetchSearchResults: false,
    fetchSingleShow: false,
  },
  error: null,
};

const showsSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    resetSearchResults: (state) => {
      state.searchResults = [];
    },
    resetSingleShow: (state) => {
      state.singleShow = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllShows.pending, (state) => {
        state.isLoading.fetchAllShows = true;
        state.isSuccess.fetchAllShows = false;
        state.isError.fetchAllShows = false;
      })
      .addCase(fetchAllShows.fulfilled, (state, action) => {
        state.shows = action.payload;
        state.isLoading.fetchAllShows = false;
        state.isSuccess.fetchAllShows = true;
        state.isError.fetchAllShows = false;
      })
      .addCase(fetchAllShows.rejected, (state, action) => {
        state.isLoading.fetchAllShows = false;
        state.isError.fetchAllShows = true;
        state.isSuccess.fetchAllShows = false;
        state.error = action.payload;
      })
      .addCase(fetchSingleShow.pending, (state) => {
        state.isLoading.fetchSingleShow = true;
        state.isSuccess.fetchSingleShow = false;
        state.isError.fetchSingleShow = false;
      })
      .addCase(fetchSingleShow.fulfilled, (state, action) => {
        state.singleShow = action.payload;
        state.isLoading.fetchSingleShow = false;
        state.isSuccess.fetchSingleShow = true;
        state.isError.fetchSingleShow = false;
      })
      .addCase(fetchSingleShow.rejected, (state, action) => {
        state.isLoading.fetchSingleShow = false;
        state.isError.fetchSingleShow = true;
        state.isSuccess.fetchSingleShow = false;
        state.error = action.payload;
      })
      .addCase(fetchSearchResults.pending, (state) => {
        state.isLoading.fetchSearchResults = true;
        state.isSuccess.fetchSearchResults = false;
        state.isError.fetchSearchResults = false;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.isLoading.fetchSearchResults = false;
        state.isSuccess.fetchSearchResults = true;
        state.isError.fetchSearchResults = false;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.isLoading.fetchSearchResults = false;
        state.isError.fetchSearchResults = true;
        state.isSuccess.fetchSearchResults = false;
        state.error = action.payload;
      });
  },
});

export const { resetSearchResults } = showsSlice.actions;
export default showsSlice.reducer;
