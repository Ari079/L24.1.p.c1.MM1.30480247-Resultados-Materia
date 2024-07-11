class Estudiante{
    constructor(cedula, nota){
        this.cedula = cedula,
        this.nota = nota
    }
}

class Procesos{
    constructor(){
        this.contadorAprobados = 0,
        this.contaddorReprobados = 0,
        this.acumuladorNotas = 0
    }
    procesarEstudiante(e){
        if(e.nota>=48){
            this.contadorAprobados++
        }else{
            this.contaddorReprobados++
        }        
        this.acumuladorNotas+=e.nota
    }
    notaPromedio(){
        return this.acumuladorNotas / (this.contadorAprobados + this.contaddorReprobados)
    }
}

let estudiante1 = new Estudiante(888, 60)
let estudiante2 = new Estudiante(777, 50)
let estudiante3 = new Estudiante(999, 40)
let estudiante4 = new Estudiante(333, 80)
let estudiante5 = new Estudiante(111, 30)
let estudiante6 = new Estudiante(333, 90)
let estudiante7 = new Estudiante(444, 48)
let estudiante8 = new Estudiante(222, 60)

let proceso = new Procesos()

proceso.procesarEstudiante(estudiante1)
proceso.procesarEstudiante(estudiante2)
proceso.procesarEstudiante(estudiante3)
proceso.procesarEstudiante(estudiante4)
proceso.procesarEstudiante(estudiante5)
proceso.procesarEstudiante(estudiante6)
proceso.procesarEstudiante(estudiante7)
proceso.procesarEstudiante(estudiante8)

let salida = document.getElementById('app')
salida.innerHTML = `

Cantidad de aprobados: ${proceso.contadorAprobados}<br>
Cantidad de reprobados: ${proceso.contaddorReprobados}<br>
Nota promedio de la sección: ${proceso.notaPromedio()}ptos

`