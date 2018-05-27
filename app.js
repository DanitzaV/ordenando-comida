
pedido();
function pedido() {
    switch (prompt('cual es tu pedido?')) {
        case 'ceviche':
            alert('que haces! no hay');
            break;
            
        case 'tacos al pastor':
            alert('tampoco!')
            break;

        case 'empanada chilena':
            alert('uy! se agoto')
            break;

        case 'hamburguesa':
            alert('hey! ese si, orden lista :D')
            break;
        default:
            alert('lo sentimos no encontramos ese plato')
           break;
    }

}

// fail switch
// switch (prompt('Que va a ordenar?')) {
    //     case 'ceviche':
    //         alert('Lo sentimos, se agoto');
    //         prompt('Que va a ordenar?');
             
    //     case 'tacos al pastor':
    //         alert('Lo sentimos, se agoto');
    //         prompt('Que va a ordenar?');
           
    //     case 'empanada chilenas':
    //         alert('se acaba de agotar');
    //         prompt('Que va a ordenar?');
           
    //     case 'Hamburguesa':
    //         alert('Tenemos hamburguesas :D!');
    //         break;
    
    //     default:
    //     alert('No tenemos ese plato en el menú o escribio mal ');
    //         break;
    // }
