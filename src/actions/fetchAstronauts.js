export const fetchAstronauts = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_ASTRONAUTS' });
      fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(json => dispatch({ type: 'ADD_ASTRONAUTS', astronauts: json.people }));
    };
  }