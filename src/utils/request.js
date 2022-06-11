async function request(url, params) {
  const res = await fetch('https://conduit.productionready.io' + url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  return res.json();
}

export default request;
