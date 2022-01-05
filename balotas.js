var z;

for(var i = 0; i < 5; i++ )
{
  z = aleatorio(1, 43);
  document.write(" <br />  " + z +  " <br />  " );
}

function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

//numeros para el baloto
var a;

for(var i = 0; i < 1; i++ )
{

  a = aleatorio1(1, 16);
  //document.write(";" + a);
  document.write( "<br/> super balota " + a + "<br/> ");
}

function aleatorio1(min, max)
{
  var resultado1;
  resultado1 = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado1;
}
