let empleados = [];
let sumaSalarios = 0;
let x =0;
let sumaHoras=0;
document.getElementById("tabla-empleados").style.display = "none";
		function guardarEmpleado() {
			let empleado = {};
			empleado.nombre = document.getElementById("nombre").value;
			empleado.edad = document.getElementById("edad").value;
                        empleado.dpi = document.getElementById("dpi").value;
			empleado.salario = document.getElementById("salario").value;
			empleado.horas = document.getElementById("horas").value;
			empleados.push(empleado);
			document.getElementById("nombre").value = "";
			document.getElementById("edad").value = "";
                        document.getElementById("dpi").value = "";
			document.getElementById("salario").value = "";
			document.getElementById("horas").value = "";
		}
                
                function calcularBoletodeOrnato () {
			guardarEmpleado();
			for (let i = 0; i < empleados.length; i++) {
				empleados[i].salario = parseFloat(empleados[i].salario;
                                if (empleados[i].salario <= 500.00) {
                                    empleados[i].boleto = "Monto de Q4.00. Con multa Q8.00 ";
                                } else if (empleados[i].salario >= 500.01 && empleados[i].salario <= 1000.00) {
                                    empleados[i].boleto = "Monto de Q10.00. Con multa Q20.00 ";
                                } else if (empleados[i].salario >= 1000.01 && empleados[i].salario < 3000.00) {
                                    empleados[i].boleto = "Monto de Q15.00. Con multa Q30.00";
                                } else if (empleados[i].salario >= 3000.01 && empleados[i].salario < 6000.00) {
                                    empleados[i].boleto = "Monto de Q50.00. Con multa Q100.00 ";
                                } else if (empleados[i].salario >= 6000.01 && empleados[i].salario < 9000.00) {
                                    empleados[i].boleto = "Monto de Q75.00. Con multa Q150.00 ";
                                } else if (empleados[i].salario >= 9000.01 && empleados[i].salario < 12000.00) {
                                    empleados[i].boleto = "Monto de Q100.00. Con multa Q200.00 ";
                                } else if (empleados[i].salario >= 12000.01) {
                                    empleados[i].boleto = "Monto de Q150.00. Con multa Q300.00 ";
                                }
			}
                }
    

		function mostrarEmpleado() {
			calcularBoletodeOrnato ();
                       let tabla = document.getElementById("tabla-empleados");
tabla.innerHTML = "<tr><th>Empleado</th><th>Nombre</th><th>Edad</th><th>DPI</th><th>Salario mensual</th><th>Salario total</th><th>Horas extras</th><th>Boleto de ornato</th></tr>";
  sumaHoras = 0;
  sumaSalarios = 0;
  for (let i = 0; i < empleados.length; i++) {
    let total = parseFloat (empleados[i].salario - (empleados[i].salario * 0.0483) + 250);
    let row = tabla.insertRow(-1);
    let empleadoCell = row.insertCell(0);
    let nombreCell = row.insertCell(1);
    let edadCell = row.insertCell(2);
    let dpiCell = row.insertCell(3);
    let salarioCell = row.insertCell(4);
    let totalCell = row.insertCell(5);
    let horasCell = row.insertCell(6);
    let boletoCell = row.insertCell(7);
    empleadoCell.innerHTML = "Empleado " + (i + 1);
    nombreCell.innerHTML = empleados[i].nombre;
    edadCell.innerHTML = empleados[i].edad;
    dpiCell.innerHTML = empleados[i].dpi;
    salarioCell.innerHTML = "Q" + empleados[i].salario;
    totalCell.innerHTML = "Q" + total;
    horasCell.innerHTML = empleados[i].horas;
    boletoCell.innerHTML = empleados[i].boleto;
    sumaSalarios += parseFloat(total);
    sumaHoras += parseInt(empleados[i].horas);
    x += 1;
  }
  document.getElementById("tabla-empleados").style.display = "block";
  let prom = parseFloat(sumaSalarios / x);
  }
  function totales(){
  mostrarEmpleado()
  let totales = "La suma de los salarios totales es de: Q" + sumaSalarios + "\n" +
    "EL promedio de salarios totales es de: Q" + prom + "\n" +
    "La suma de horas extras es: " + sumaHoras;
  alert (totales);
  }



