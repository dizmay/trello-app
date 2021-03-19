export const selectUserBoards = (state) => state.board.boards;

export const selectBoardUsers = (state) => state.board.boardUsers;

export const selectIsLoading = (state) => state.board.isLoading;

export const selectError = (state) => state.board.error;

export const selectIsError = (state) => state.board.isError;