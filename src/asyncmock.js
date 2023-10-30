export const talleres = [
    { id: "1", nombre: "Taller básico: PRESUPUESTOS", fecha: "Comienza en Enero 2024", descripcion: "El Taller consta de 8 encuentros online los días Miércoles y Viernes de 18:00hs a 19:30hs.", descripcion1: "Aprenderemos a realizar el presupuesto para una vivienda pequeña, aplicando funciones de Excel y logrando que el archivo sirva como una plantilla para otros proyectos.", descripcion2: "Comenzamos desde cero con la estructura del programa, aprendemos a usar tablas, gráficos, diseño de páginas y presentamos el archivo listo para imprimir o exportar.", precio: 5000, moneda: "pesos", stock: 5, img: "../img/taller-basico-presupuestos.jpg" },
    { id: "2", nombre: "Taller intermedio: PLANIFICACIÓN DE OBRA", fecha: "Comienza en Marzo 2024", descripcion: "El Taller se encuentra en construcción.", precio: 5000, moneda: "pesos", stock: 15, img: "../img/taller-intermedio-planificacion.jpg" },
    { id: "3", nombre: "Taller avanzado: EVALUACIÓN Y CONTROL DE OBRA", fecha: "Comienza en Julio 2024", descripcion: "El Taller se encuentra en construcción.", precio: 5000, moneda: "pesos", stock: 10, img: "../img/taller-avanzado-evaluacion.jpg" }
]

export const getTalleres = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(talleres)
        }, 1000)
    })
}

export const getUnTaller = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const unTaller = talleres.find(taller => taller.id === id)
            resolve(unTaller)
        }, 1000)
    })
}