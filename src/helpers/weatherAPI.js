// Remova os comentários a medida que for implementando as funções
export const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = (term) => {
  return fetch(`http://api.weatherapi.com/v1/search.json?key=${TOKEN}&q=${term}&aqi=no`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        window.alert('Nenhuma cidade encontrada');
      }
      return data;
    });
};

export const getWeatherByCity = (cityURL) => {
  return fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const { location, current } = data;
      return { location, current };
    });
};
