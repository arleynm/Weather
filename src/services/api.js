const KEY = 'ecd7066bb3e346b1ad8230441222607';

const fetchData = async(city) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();

    return data;
};

export default fetchData;