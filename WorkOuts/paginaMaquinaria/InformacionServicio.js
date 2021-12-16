let informacion = {
    //"table" almacena las semanas del mes escogido
    "table": [
        {
            "calId": 9267,//Id de la semana
            "calAno": 2021,//Año 
            "calNumero": 49,//Número de semana
            "calFechaI": "06/12/2021",//Fecha en la cual inicia la semana
            "calFechaF": "12/12/2021",//Fecha el la cual finaliza la semana
            "calTipo": "S"//Tipo de registro(En este caso "S" corresponde a "Semana")
        },
        {
            "calId": 9268,
            "calAno": 2021,
            "calNumero": 50,
            "calFechaI": "13/12/2021",
            "calFechaF": "19/12/2021",
            "calTipo": "S"
        },
        {
            "calId": 9269,
            "calAno": 2021,
            "calNumero": 51,
            "calFechaI": "20/12/2021",
            "calFechaF": "26/12/2021",
            "calTipo": "S"
        }
    ],

    //"table 1"  almacena los días correspondientes al mes escogido// Permitirá estructurar el calendario
    "table1": [
        {
            "fecha": "01/12/2021",//Fecha o día
            "infoEquipo": null,//almacena un arreglo con la información de los equipos que tienen información para este día ("15/12/2021" tiene información) está información debe ser casteada para usarla JSON.parse()
            /*
            Este es un Ejemplo de la estructura de "infoEquipo" ya casteado
                [
                    {
                        "EquipoMaq": 71,  //Corresponde a el id del activo fijo
                        "Equipo": 6898728, //Corresponde al código del insumo de alquiler(A la final es el id del Producto/Actividad que es mostrado en la parte izquierda del panel)
                        "Estado": "I",  //Corresponde a la sigla de el estado de bitácora
                        "EstadoDesc": "Instalación/Desmovilización" //Corresponde a la descripción del estado de bitacora(Descibe la sigla del dato anterior)
                    },
                    {
                        "EquipoMaq": 1080,
                        "Equipo": 6899138,
                        "Estado": "I",
                        "EstadoDesc": "Instalación/Desmovilización"}

                ]

            */
            
            "festivo": false,//Valor booleano (true: el día es festivo, false: no lo és)
            "diaDesc": "Miércoles"//Descripción que corresponde al día de la semana
        },
        {
            "fecha": "02/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Jueves"
        },
        {
            "fecha": "03/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Viernes"
        },
        {
            "fecha": "04/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Sábado"
        },
        {
            "fecha": "05/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Domingo"
        },
        {
            "fecha": "06/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Lunes"
        },
        {
            "fecha": "07/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Martes"
        },
        {
            "fecha": "08/12/2021",
            "infoEquipo": null,
            "festivo": true,
            "diaDesc": "Miércoles"
        },
        {
            "fecha": "09/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Jueves"
        },
        {
            "fecha": "10/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Viernes"
        },
        {
            "fecha": "11/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Sábado"
        },
        {
            "fecha": "12/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Domingo"
        },
        {
            "fecha": "13/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Lunes"
        },
        {
            "fecha": "14/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Martes"
        },
        {
            "fecha": "15/12/2021",
            "infoEquipo": "[{\"EquipoMaq\":71, \"Equipo\":6898728, \"Estado\":\"I\", \"EstadoDesc\":\"Instalación/Desmovilización\"},{\"EquipoMaq\":1080, \"Equipo\":6899138, \"Estado\":\"I\", \"EstadoDesc\":\"Instalación/Desmovilización\"},{\"EquipoMaq\":1112, \"Equipo\":384, \"Estado\":\"I\", \"EstadoDesc\":\"Instalación/Desmovilización\"},{\"EquipoMaq\":1157, \"Equipo\":589, \"Estado\":\"I\", \"EstadoDesc\":\"Instalación/Desmovilización\"},{\"EquipoMaq\":1160, \"Equipo\":942, \"Estado\":\"I\", \"EstadoDesc\":\"Instalación/Desmovilización\"},{\"EquipoMaq\":1161, \"Equipo\":690015499, \"Estado\":\"I\", \"EstadoDesc\":\"Instalación/Desmovilización\"}]",
            "festivo": false,
            "diaDesc": "Miércoles"
        },
        {
            "fecha": "16/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Jueves"
        },
        {
            "fecha": "17/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Viernes"
        },
        {
            "fecha": "18/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Sábado"
        },
        {
            "fecha": "19/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Domingo"
        },
        {
            "fecha": "20/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Lunes"
        },
        {
            "fecha": "21/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Martes"
        },
        {
            "fecha": "22/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Miércoles"
        },
        {
            "fecha": "23/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Jueves"
        },
        {
            "fecha": "24/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Viernes"
        },
        {
            "fecha": "25/12/2021",
            "infoEquipo": null,
            "festivo": true,
            "diaDesc": "Sábado"
        },
        {
            "fecha": "26/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Domingo"
        },
        {
            "fecha": "27/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Lunes"
        },
        {
            "fecha": "28/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Martes"
        },
        {
            "fecha": "29/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Miércoles"
        },
        {
            "fecha": "30/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Jueves"
        },
        {
            "fecha": "31/12/2021",
            "infoEquipo": null,
            "festivo": false,
            "diaDesc": "Viernes"
        }
    ],
    //Por último "table2" almacena un arreglo con los equipos y su respectivo valor correspondiente a tarifas PGR y RI (Información que corresponderá a la mostrada en la parte iquierda del panel)
    "table2": [
        {
            "proCod": 384,//id del Equipo
            "equipo": "384 - Caja para Herramienta",//Descripción del equipo(Producto/Actividad)
            "pgr": 32500,//Valor correspondiente a la tarifa por PGR
            "ri": 50000//Valor correspondiente a la tarifa por RI(Renta interna)
        },
        {
            "proCod": 589,
            "equipo": "589 - CINCEL12",
            "pgr": 32500,
            "ri": 50000
        },
        {
            "proCod": 942,
            "equipo": "942 - Espejo de vigilancia de 40 cm c/ instalación",
            "pgr": 32500,
            "ri": 50000
        },
        {
            "proCod": 6898728,
            "equipo": "6898728 - ANDAMIO COLGANTE / CABLE DE 30 M (PAR)",
            "pgr": 32500,
            "ri": 50000
        },
        {
            "proCod": 6899138,
            "equipo": "6899138 - CEPILLO DE ALAMBRE",
            "pgr": 32500,
            "ri": 50000
        },
        {
            "proCod": 690015499,
            "equipo": "690015499 - Motoniveladora CAT",
            "pgr": 32500,
            "ri": 50000
        }
    ]
}