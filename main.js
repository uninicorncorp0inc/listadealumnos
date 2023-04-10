nombre_alumno_array = [];
function submit()
{
   var ver_alumno_array = [];
   for(var j=1; j<= 4; j++)
   {
    var nombre_alumno = document.getElementById("nombre_alumno"+j).value;
    console.log(nombre_alumno);
    nombre_alumno_array.push(nombre_alumno);
   } 
   console.log(nombre_alumno_array);
   
   var longitud_nombre_alumnos_array = nombre_alumno_array.length;
   console.log(longitud_nombre_alumnos_array);

   for (var k = 0; k < longitud_nombre_alumnos_array; k++)
   {
       ver_alumno_array.push("<h4>NOMBRE - "+ nombre_alumno_array[k] + "</h4>");
       console.log(ver_alumno_array);
   }

   console.log(ver_alumno_array);
   document.getElementById("ver_nombre_con_comas").innerHTML = ver_alumno_array;

   var remover_comas = ver_alumno_array.join(" ");
   console.log(remover_comas);
   document.getElementById("ver_nombre_sin_comas").innerHTML = remover_comas;


   document.getElementById("botón_enviar").style.display = "none";
   document.getElementById("botón_ordenar").style.display = "inline-block";

   function sorting()
{
    nombre_alumno_array.sort();
    console.log(nombre_alumno_array);

    var display_student_array_sorting = [];

    var longitud_nombre_alumnos_array = nombre_alumno_array.length;
    console.log(longitud_nombre_alumnos_array);

    for (var k = 0; k < longitud_nombre_alumnos_array; k++)
    {
        display_student_array_sorting.push("<h4>NOMBRE - " + nombre_alumno_array[k] + "</h4>");
        console.log(display_student_array_sorting);
    }

    var remover_comas = display_student_array_sorting.join(" ");
    console.log(remover_comas);

    document.getElementById("ver_nombre_sin_comas").innerHTML = remover_comas;
}


//Actividad adicional
function new_update()
{
    document.getElementById("ver_nombre_sin_comas").innerHTML = "<h1>" + nombre_alumno_array +"</h1>";
}



}