const getMessage = (error) => {
  let message;
  if (error.response.data.message === undefined) {
    const { data } = error.response;
    const keys = Object.keys(data);
    message = data[keys[0]];
  }
  else {
    message = error.response.data.message;
  }
  return message;
}

export default getMessage;
