$(async function () {
  console.log('Hello world');

  $('header').css('color', 'red');

  const fromDate = '2022-03-01';
  const toDate = '2022-03-31';

  const response = await fetch(
    `https://v3.football.api-sports.io/fixtures?team=541&season=2021&from=${fromDate}&to=${toDate}&timezone=Asia/Phnom_Penh`,
    {
      headers: {
        'x-apisports-key': 'cecd3586b04e7c5ec4f347e8b9278b36',
      },
    },
  );
  const data = await response.json();
  console.log(data);
  data.response.forEach(fixture => {
    const home = fixture.teams.home.name;
    const away = fixture.teams.away.name;
    const goals = `${fixture.goals.home} - ${fixture.goals.away}`;
    const html = `<p>${home} ${goals} ${away}</p>`;
    $('.fixtures').append(html);
  });
});
