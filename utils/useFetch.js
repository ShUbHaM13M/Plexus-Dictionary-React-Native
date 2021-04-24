const token = '7023392a7c2c489dc12eb8f3fe4d2e7dd11dfbee';

export default async function (word) {
  const res = await fetch(`https://owlbot.info/api/v4/dictionary/${word}`, {
    method: 'get',
    timeout: 5000,
    headers: {
      Authorization: `Token ${token}`,
      Accept: 'application/json',
    },
  });

  const data = await res.json();

  return data;
}
