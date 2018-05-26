const pregunta = prompt('Que va a ordenar?');


switch (pregunta) {
    case 'ceviche':
        alert('Lo sentimos, se agoto');
        pregunta;
         
    case 'tacos al pastor':
        alert('Lo sentimos, se agoto');
        pregunta;

    case 'empanada chilenas':
        alert('Lo sentimos, se agoto');
        pregunta;

    case 'Hamburguesa':
        alert('Tenemos hamburguesas :D!');
        break;

    default:
    alert('No tenemos ese plato en el menú o escribio mal ');
        break;
}