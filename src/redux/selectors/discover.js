const Selector = {
  discover: (state) => state.discover,
  data: (state) => state.discover.data,
  loading: (state) => state.discover.loading,
  error: (state) => state.discover.error,
  page: (state) => state.discover.page,
  totalPages: (state) => state.discover.total_pages,
};

export default Selector;
