let pregunta = prompt('Eres mayor de edad?: ');
  switch (pregunta) 
    {
        case 'si'.toLocaleLowerCase().trim():
        document.write('Eres mayor de edad');
        break;  
        case 'no':
        document.write('Eres menor de edad');
        break;
        default:
        document.write('Respuesta no valida');
        break;
    }