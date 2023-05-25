// Remova os comentários a medida que for implementando as funções
const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = (term) => {
  fetch(`http://api.weatherapi.com/v1/search.json?key=${TOKEN}&q=${term}&aqi=no`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      if (data.length === 0) {
        window.alert('Nenhuma cidade encontrada');
      }
    });
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
