const getMessage = (error) => {
  const { message } = error.response.data;
  if (message === undefined) {
    const { data } = error.response;
    const keys = Object.keys(data);
    const response = data[keys[0]];
    return response;
  }
  return message;
}

export default getMessage;
