export function fetchAstronauts(){
    const astronauts = fetch('http://api.open-notify.org/astros.json')
    return {
        type: 'ADD_ASTRONAUTS',
        astronauts
    }
}