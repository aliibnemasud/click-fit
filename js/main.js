/* const makeRequest = async (url, method) => {
  const result = await $.ajax({
    url: url,
    method: method,
  });
  return result;
};

const getData = () => {
  makeRequest("http://numbersapi.com/1/30/date?json", "GET")
  .then((res) =>    
    $('#text').text(res.text)   
  );
};


getData() */

const fetchData = () => {
    fetch('http://numbersapi.com/1/30/date?json')
    .then(res => res.json())
    .then(data => {
        $('#text').text(data.text) 
        $('#year').text(data.year) 
        $('#number').text(data.number) 
        $('#type').text(data.type) 
    })
}


fetchData()
