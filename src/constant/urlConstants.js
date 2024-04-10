const baseEndpoint = "https://api.tvmaze.com"; // api main url

const urlConstants = {
  apiBaseUrl: baseEndpoint, // https://api.tvmaze.com
  fetchShowsUrl: `${baseEndpoint}/shows`, // https://api.tvmaze.com/shows
  seasonsCastEpisodesEmbed: `?embed[]=episodes&embed[]=cast&embed[]=seasons`,
  searchShowsUrl: `${baseEndpoint}/search/shows?q=`, // https://api.tvmaze.com/search/shows?q=
};

export default urlConstants;
