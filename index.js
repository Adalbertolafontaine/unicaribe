let cuerpo = document.getElementById("cuerpo");

const materrias = [
  {
    codigo: "ADE-101",
    asignatura: "ADMINISTRACION I",
    creditos: 3,
    cuatrimestre: 1,
  },
  {
    codigo: "FGC-102",
    asignatura: "MÉTODO DEL TRABAJO ACADÉMICO",
    creditos: 2,
    cuatrimestre: 1,
  },
  {
    codigo: "FGC-101",
    asignatura: "ORIENTACIÓN ACADÉMICA INSTITUCIONAL",
    creditos: 2,
    cuatrimestre: 1,
  },
  {
    codigo: "FGC-103",
    asignatura: "METODOLOGÍA DE LA INVESTIGACIÓN",
    creditos: 3,
    cuatrimestre: 1,
  },
  {
    codigo: "FGC-104",
    asignatura: "LENGUA ESPAÑOLA I",
    creditos: 3,
    pre: "FGC-102",
    cuatrimestre: 2,
  },
  {
    codigo: "ING-101",
    asignatura: "INTRODUCCIÓN A LA INGENIERÍA",
    creditos: 3,
    cuatrimestre: 2,
  },
  {
    codigo: "FGC-106",
    asignatura: "TECNOLOGÍA DE LA INFORMACIÓN Y COMUNICACIÓN I",
    creditos: 3,
    cuatrimestre: 2,
  },
  {
    codigo: "FGC-105",
    asignatura: "MATEMÁTICA BÁSICA I",
    creditos: 3,
    pre: "FGC-102",
    cuatrimestre: 2,
  },
  {
    codigo: "DMF-209",
    asignatura: "FISICA I",
    creditos: 4,
    pre: "FGC-105",
    cuatrimestre: 3,
  },
  {
    codigo: "MTI-200",
    asignatura: "MATEMÁTICA II",
    creditos: 4,
    pre: "FGC-105",
    cuatrimestre: 3,
  },
  {
    codigo: "FGC-107",
    asignatura: "HISTORIA SOCIAL DOMINICANA",
    creditos: 3,
    pre: "FGC-102",
    cuatrimestre: 3,
  },
  {
    codigo: "FGC-108",
    asignatura: "INGLÉS I",
    creditos: 3,
    pre: "FGC-102",
    cuatrimestre: 3,
  },
  {
    codigo: "QUI-400",
    asignatura: "QUÍMICA I",
    creditos: 3,
    pre: "FGC-105",
    cuatrimestre: 3,
  },
  {
    codigo: "FGC-110",
    asignatura: "DESARROLLO SOSTENIBLE Y GESTIÓN DE RIESGOS",
    creditos: 2,
    pre: "FGC-102",
    cuatrimestre: 4,
  },
  {
    codigo: "FGC-109",
    asignatura: "FILOSOFÍA",
    creditos: 2,
    pre: "FGC-102",
    cuatrimestre: 4,
  },
  {
    codigo: "MTI-300",
    asignatura: "MATEMÁTICA III",
    creditos: 4,
    pre: "MTI-200",
    cuatrimestre: 4,
  },
  {
    codigo: "DMF-210",
    asignatura: "FISICA II",
    creditos: 4,
    pre: "DMF-209",
    cuatrimestre: 4,
  },
  {
    codigo: "INF-215",
    asignatura: "INGENIERÍA ECONÓMICA",
    creditos: 3,
    pre: "MTI-200",
    cuatrimestre: 5,
  },
  {
    codigo: "MAT-241",
    asignatura: "ESTADISTICA I",
    creditos: 3,
    pre: "FGC-105",
    cuatrimestre: 5,
  },
  {
    codigo: "ING-102",
    asignatura: "CIENCIA E INGENIERÍA DE MATERIALES",
    creditos: 4,
    pre: "QUI-400",
    cuatrimestre: 5,
  },
  {
    codigo: "ING-103",
    asignatura: "CÁLCULO INTEGRAL",
    creditos: 4,
    pre: "MTI-300",
    cuatrimestre: 5,
  },
  {
    codigo: "MAT-242",
    asignatura: "ESTADISTICA II",
    creditos: 3,
    pre: "MAT-241",
    cuatrimestre: 6,
  },
  {
    codigo: "INF-222",
    asignatura: "SISTEMA OPERATIVO I",
    creditos: 3,
    pre: "FGC-106",
    cuatrimestre: 6,
  },
  {
    codigo: "INF-221",
    asignatura: "INTRODUCCIÓN A LA PROGRAMACIÓN",
    creditos: 3,
    pre: "FGC-106",
    cuatrimestre: 6,
  },
  {
    codigo: "ING-105",
    asignatura: "TALLER DE MECÁNICA DE HARDWARE",
    creditos: 3,
    pre: "FGC-106",
    cuatrimestre: 6,
  },
  {
    codigo: "ING-104",
    asignatura: "CÁLCULO VECTORIAL",
    creditos: 4,
    pre: "ING-103",
    cuatrimestre: 6,
  },
  {
    codigo: "TIC-408",
    asignatura: "SEGURIDAD DE LA INFORMACIÓN",
    creditos: 3,
    pre: "FGC-106",
    cuatrimestre: 7,
  },
  {
    codigo: "IND-101",
    asignatura: "CIENCIA DE LOS DATOS",
    creditos: 3,
    cuatrimestre: 7,
  },
  {
    codigo: "INF-437",
    asignatura: "REDES INFORMÁTICAS",
    creditos: 3,
    pre: "FGC-106",
    cuatrimestre: 7,
  },
  {
    codigo: "ISW-301",
    asignatura: "TALLER DE PROGRAMACIÓN I",
    creditos: 5,
    pre: "INF-221",
    cuatrimestre: 7,
  },
  {
    codigo: "ISW-321",
    asignatura: "TALLER DE BASES DE DATOS I",
    creditos: 4,
    pre: "INF-221",
    cuatrimestre: 8,
  },
  {
    codigo: "TIC-402",
    asignatura: "ETICA EN TECNOLOGÍA",
    creditos: 2,
    cuatrimestre: 8,
  },
  {
    codigo: "IND-404",
    asignatura: "ELECTIVA I",
    creditos: 3,
    pre: "7MO. CUAT.",
    cuatrimestre: 8,
  },
  {
    codigo: "IND-314",
    asignatura: "TEORIA DE LA INFORMACIÓN",
    creditos: 3,
    pre: "IND-101",
    cuatrimestre: 8,
  },
  {
    codigo: "IND-324",
    asignatura: "SEÑALES Y SISTEMAS",
    creditos: 3,
    pre: "IND-314",
    cuatrimestre: 9,
  },
  {
    codigo: "IND-325",
    asignatura: "BÚSQUEDA Y ANALISIS DE LA INFORMACIÓN",
    creditos: 3,
    pre: "IND-314",
    cuatrimestre: 9,
  },
  {
    codigo: "IND-334",
    asignatura: "ESTADÍSTICAS APLICADA A LA CIENCIA DE DATOS",
    creditos: 3,
    pre: "MAT-242",
    cuatrimestre: 9,
  },
  {
    codigo: "IND-332",
    asignatura: "HERRAMIENTAS DE ANÁLISIS DE DATOS I",
    creditos: 4,
    pre: "IND-101",
    cuatrimestre: 9,
  },
  {
    codigo: "IND-335",
    asignatura: "INGENÍERIA DE DATOS I",
    creditos: 4,
    pre: "IND-314",
    cuatrimestre: 9,
  },
  {
    codigo: "IND-405",
    asignatura: "ELECTIVA II",
    creditos: 3,
    pre: "9NO. C.",
    cuatrimestre: 10,
  },
  {
    codigo: "IND-333",
    asignatura: "TRATAMIENTO DE AUDIO, VIDEO Y VISIÓN ARTIFICIAL",
    creditos: 4,
    pre: "IND-324",
    cuatrimestre: 10,
  },
  {
    codigo: "IND-412",
    asignatura: "HERRAMIENTAS DE ANÁLISIS DE DATOS II",
    creditos: 4,
    pre: "IND-332",
    cuatrimestre: 10,
  },
  {
    codigo: "IND-401",
    asignatura: "PROYECTO DE DATOS E IO - I",
    creditos: 5,
    pre: "IND-335",
    cuatrimestre: 10,
  },
  {
    codigo: "IND-403",
    asignatura: "PASANTÍA - PRÁCTICA DE INGENIERÍA DE DATOS E IO 8 IND-335",
    creditos: 0,
    cuatrimestre: 10,
  },
  {
    codigo: "FGC-111",
    asignatura: "SEMINARIO DE GRADO",
    creditos: 3,
    pre: "FGC-103",
    cuatrimestre: 11,
  },
  {
    codigo: "IND-413",
    asignatura: "INGENÍERIA DE DATOS II",
    creditos: 4,
    pre: "IND-335",
    cuatrimestre: 11,
  },
  {
    codigo: "IND-431",
    asignatura: "VISUALIZACIÓN DE DATOS",
    creditos: 4,
    pre: "IND-325",
    cuatrimestre: 11,
  },
  {
    codigo: "IND-414",
    asignatura: "INGENIERÍA DE BIG DATA",
    creditos: 4,
    pre: "ISW-321",
    cuatrimestre: 11,
  },
  {
    codigo: "IND-402",
    asignatura: "PROYECTO DE DATOS E IO - II",
    creditos: 5,
    pre: "IND-401",
    cuatrimestre: 11,
  },
  {
    codigo: "IND-432",
    asignatura: "INTELIGENCIA DE NEGOCIOS",
    creditos: 3,
    pre: "IND-413",
    cuatrimestre: 12,
  },
  {
    codigo: "IND-421",
    asignatura: "APLICACIONES E INFRAESTRUCTURA DE BIG DATA",
    creditos: 4,
    pre: "IND-414",
    cuatrimestre: 12,
  },
  {
    codigo: "IND-423",
    asignatura: "MINERÍA DE DATOS",
    creditos: 4,
    pre: "ISW-321",
    cuatrimestre: 12,
  },
  {
    codigo: "IND-600",
    asignatura:
      "PROYECTO INTEGRADOR DE DATOS E IO: TRABAJO DE GRADO 6 FGC-111,IND-402",
    creditos: 0,
    cuatrimestre: 12,
  },
];

cuerpo.innerHTML = "";
for (let i = 1; i < 13; i++) {
  cuerpo.innerHTML += `<div class ="col-12 mb-3"><h4>Cuatrimestre ${i}</h4><div id="cuatrimestre-${i}" class="row"></div></div><hr>`;
}

for (const i of materrias) {
  let c = i.cuatrimestre;
  let pre = "";
  let credito = i.creditos ? `<p class="card-text">CR: ${i.creditos}</p>` : "";
  let color = ''
  if (i.pre) {
    pre = `<p class="card-text">Pre: ${i.pre}</p>`
    color = 'bg-danger-subtle'
  }
  
  

  document.getElementById(
    `cuatrimestre-${c}`
  ).innerHTML += `<div class="col-6" id="${i.codigo}"><div class="card ${color} mb-2"><div class="card-body"><h5 class="card-title">${i.asignatura}</h5><div class="row"><div class="col-6">${credito}</div><div class="col-6">${pre}</div></div></div></div></div>`;
}
