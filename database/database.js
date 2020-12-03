const BASE_URL= 'http://localhost:5000/images/';
const database = [
    {
        id:1,
        fuente:'La Mañana Neuquén',
        titulo:'Coronavirus: el lunes abrió con 275 nuevos casos y Neuquén superó los 19 mil contagios',
        contenido:'El ministerio de Salud informó que 248 infectados en la capital provincial y 10 en Centenario.',
        imagen:`${BASE_URL}19-10-2020/01.jpg`,
        vinculo:'https://www.lmneuquen.com/coronavirus-el-lunes-abrio-275-nuevos-casos-y-neuquen-supero-los-19-mil-contagios-n740592',
        dia: 1
    },
    {
        id:2,
        fuente:'Clarín',
        titulo:'El Gobierno bonaerense no exigirá testeos de coronavirus para la temporada de verano: cuáles serán los requisitos',
        contenido:'También anunció que la temporada se extenderá desde el 1 de diciembre al 4 de abril. No habrá actividades artísticas y culturales en espacios cerrados.',
        imagen:`${BASE_URL}19-10-2020/02.jpg`,
        vinculo:'https://www.clarin.com/politica/gobierno-bonaerense-exigira-testeos-coronavirus-temporada-verano-requisitos_0_k2IMvq4HX.html',
        dia: 1
    },
    {
        id:3,
        fuente:'La Nación',
        titulo:'Detuvieron a cuatro mapuches por ocupar un campo y tener sitiada a una familia en Bariloche',
        contenido:'La Justicia de Río Negro ordenó el desalojo, que comenzó el jueves pasado.',
        imagen:`${BASE_URL}19-10-2020/03.jpg`,
        vinculo:'https://www.lanacion.com.ar/politica/buscan-desalojar-mapuches-tienen-cercada-familia-bariloche-nid2484096',
        dia: 1
    },
    {
        id:4,
        fuente:'La Mañana Neuquén',
        titulo:'La golpeó y la arrastró por el asfalto para robarle la bici en el centro',
        contenido:'Sucedió en Área Centro Sur a plena luz del día. La víctima terminó con importantes golpes y raspones. Afortunadamente, la ayudaron los vecinos.',
        imagen:`${BASE_URL}20-10-2020/01.jpg`,
        vinculo:'https://www.lmneuquen.com/la-golpeo-y-la-arrastro-el-asfalto-robarle-la-bici-el-centro-n740847',
        dia: 2
    },
    {
        id:5,
        fuente:'Clarín',
        titulo:'Con demoras, el Gobierno lanza el plan para comprar motos en 48 cuotas fijas',
        contenido:'El Nación financiará 34 modelos de hasta $200.000 a tasas subsidiadas. Guía de marcas, precios y cómo se solicita.',
        imagen:`${BASE_URL}20-10-2020/02.jpg`,
        vinculo:'https://www.clarin.com/economia/demoras-gobierno-lanza-plan-comprar-motos-48-cuotas-fijas_0_9vGzJpMa_.html',
        dia: 2
    },
    {
        id:6,
        fuente:'La Nación',
        titulo:'Alfonso Prat Gay: "Mientras no haya confianza, todas las medidas van a ser insuficientes"',
        contenido:'Alfonso Prat Gay, expresidente del Banco Central, se refirió hoy a la situación económica del país y aseguró: "Mientras no haya confianza, todas las medidas van a ser insuficientes".',
        imagen:`${BASE_URL}20-10-2020/03.jpg`,
        vinculo:'https://www.lanacion.com.ar/politica/alfonso-prat-gay-mientras-no-haya-confianza-nid2484825',
        dia: 2
    },
    {
        id:7,
        fuente:'La Mañana Neuquén',
        titulo:'Comercios en Neuquén: qué pasará a partir del lunes',
        contenido:'La idea es que los bares y restaurantes puedan funcionar hasta la medianoche. Se unificarán criterios, bajo un concepto de metrópoli, con Centenario, Plottier y la vecina Cipolletti',
        imagen:`${BASE_URL}21-10-2020/01.jpg`,
        vinculo:'https://www.lmneuquen.com/comercios-neuquen-que-pasara-partir-del-lunes-n741169',
        dia: 3
    },
    {
        id:8,
        fuente:'Clarín',
        titulo:'Coronavirus: tragamonedas y casinos están al final del plan de reaperturas y hay temor de los empleados',
        contenido:'Entre el Hipódromo y el casino de Puerto Madero hay unos 5.000 empleos directos. Por ahora no hubo despidos, pero saben que serán unos de los últimos en retomar la actividad presencial.',
        imagen:`${BASE_URL}21-10-2020/02.jpg`,
        vinculo:'https://www.clarin.com/ciudades/coronavirus-tragamonedas-casinos-final-plan-reaperturas-temor-empleados_0_1FhZf6_o2.html',
        dia: 3
    },
    {
        id:9,
        fuente:'La Nación',
        titulo:'Amazon: Jeff Bezos y las tres preguntas que se hace antes de contratar a nuevos empleados',
        contenido:'Hay tres preguntas que son clave en un proceso de selección de acuerdo a Jeff Bezos, el fundador y director ejecutivo de Amazon, la persona más rica del mundo, según el ranking Real Time Billionaires de la revista Forbes.',
        imagen:`${BASE_URL}21-10-2020/03.jpg`,
        vinculo:'https://www.lanacion.com.ar/sociedad/jeff-bezos-tres-preguntas-se-formula-antes-nid2485458',
        dia: 3
    },
    {
        id:10,
        fuente:'La Mañana Neuquén',
        titulo:'La trágica historia familiar de la mujer que murió en la guardia del hospital',
        contenido:'A fines de junio, uno de los hijos fue asesinado en el paraje Los Miches y, al poco tiempo, a ella le descubrieron cáncer. La mujer de 58 años murió el martes en el hospital.',
        imagen:`${BASE_URL}22-10-2020/01.jpg`,
        vinculo:'https://www.lmneuquen.com/la-tragica-historia-familiar-la-mujer-que-murio-la-guardia-del-hospital-n741448',
        dia: 4
    },
    {
        id:11,
        fuente:'Clarín',
        titulo:'Sebastián Estevanez: “Sentí una explosión y no podía apagar el fuego de mi cara”',
        contenido:'A dos meses del accidente doméstico que casi lo mata, el actor cuenta por primera vez qué le pasó y cuánto lo afectó. “Quedé muy sensible”, confiesa.',
        imagen:`${BASE_URL}22-10-2020/02.jpg`,
        vinculo:'https://www.clarin.com/fama/sebastian-estevanez-senti-explosion-podia-apagar-fuego-cara-_0_SnxY-0lLM.html',
        dia: 4
    },
    {
        id:12,
        fuente:'La Nación',
        titulo:'MasterChef Celebrity: Sofía Pachano tuvo un accidente con el fuego y casi se quema la cara',
        contenido:'Sofía Pachano: el apuro y un error de cálculo que podrían haber terminado mal',
        imagen:`${BASE_URL}22-10-2020/03.jpg`,
        vinculo:'https://www.lanacion.com.ar/espectaculos/television/masterchef-celebrity-sofia-pachano-tuvo-accidente-fuego-nid2485905',
        dia: 4
    },
    {
        id:13,
        fuente:'La Mañana Neuquén',
        titulo:'¿Qué es Among Us y cómo se juega?',
        contenido:'Te contamos todos los detalles del juego para celulares más famoso de esta cuarentena. También te enseñamos dónde descargarlo.',
        imagen:`${BASE_URL}23-10-2020/01.jpg`,
        vinculo:'https://www.lmneuquen.com/que-es-among-us-y-como-se-juega-n741843',
        dia: 5
    },
    {
        id:14,
        fuente:'Clarín',
        titulo:'La imagen de Alberto Fernández sigue en caída: cómo bajó en octubre, provincia por provincia',
        contenido:'Son datos de una consultora que lo viene midiendo desde mayo en todo el país. Pese a la baja, continúa mejor que Macri y Cristina.',
        imagen:`${BASE_URL}23-10-2020/02.jpg`,
        vinculo:'https://www.clarin.com/politica/imagen-alberto-fernandez-sigue-caida-octubre-provincia-provincia_0_KB5ps9b0t.html',
        dia: 5
    },
    {
        id:15,
        fuente:'La Nación',
        titulo:'Dólar turista hoy: a cuanto cotiza el viernes 23 de octubre',
        contenido:'Hoy, 23 de octubre, el dólar turista cotiza en promedio a $109,00. Este valor surge de agregarle un 30% al precio de la moneda estadounidense que en el mercado oficial, que ronda los $83,85',
        imagen:`${BASE_URL}23-10-2020/03.jpg`,
        vinculo:'https://www.lanacion.com.ar/economia/dolar/dolar-turista-hoy-a-cuanto-cotiza-el-viernes-23-de-octubre-nid2486955',
        dia: 5
    },
    {
        id:16,
        fuente:'La Mañana Neuquén',
        titulo:'Matan a balazos a un adolescente en una juntada clandestina',
        contenido:'El menor, de 15 años, fue asesinado de tres balazos por un grupo de jóvenes. Sus familiares quisieron cobrar venganza y fueron detenidos con un arma de fuego.',
        imagen:`${BASE_URL}24-10-2020/01.jpg`,
        vinculo:'https://www.lmneuquen.com/matan-balazos-un-adolescente-una-juntada-clandestina-n742012',
        dia: 6
    },
    {
        id:17,
        fuente:'Clarín',
        titulo:'Por la crisis y el Covid, el Gobierno analiza suspender las PASO del año próximo',
        contenido:'La idea generará revuelo en la oposición. La Rosada argumenta que se ahorrarían recursos, aunque podría especular electoralmente.',
        imagen:`${BASE_URL}24-10-2020/02.jpg`,
        vinculo:'https://www.clarin.com/politica/crisis-covid--gobierno-analiza-suspender-paso-ano-proximo_0_qOsmPBR-1.html',
        dia: 6
    },
    {
        id:18,
        fuente:'La Nación',
        titulo:'Juan Grabois denunció "privación ilegítima de la libertad" en el campo de Luis Miguel Etchevehere',
        contenido:'La foto que compartieron Proyecto Artigas y Juan Grabois para denunciar a Luis Miguel Etchevehere',
        imagen:`${BASE_URL}24-10-2020/03.jpg`,
        vinculo:'https://www.lanacion.com.ar/politica/juan-grabois-denuncio-privacion-ilegitima-libertad-campo-nid2488562',
        dia: 6
    },
    {
        id:19,
        fuente:'La Mañana Neuquén',
        titulo:'La familia Etchevehere no se presentó a la audiencia conciliatoria',
        contenido:'Mientras Luis Etchevehere recusó al juez Raúl Flores y la madre amenazó con entrar a la propiedad, la hermana denunció "patoterismo y apriete".',
        imagen:`${BASE_URL}25-10-2020/01.jpg`,
        vinculo:'https://www.lmneuquen.com/la-familia-etchevehere-no-se-presento-la-audiencia-conciliatoria-n742224',
        dia: 7
    },
    {
        id:20,
        fuente:'Clarín',
        titulo:'Guerra en el Cáucaso: Armenia y Azerbaiyán anunciaron un tercer “alto el fuego humanitario”',
        contenido:'Comenzará a las 8 de la mañana local de este lunes. Ambos países dijeron que el próximo jueves continuarán en Ginebra sus negociaciones sobre la guerra. Ya hubo dos intentos, pero no fueron cumplidos.',
        imagen:`${BASE_URL}25-10-2020/02.jpg`,
        vinculo:'https://www.clarin.com/mundo/guerra-caucaso-armenia-azerbaiyan-anunciaron-tercer-alto-fuego-humanitario-_0_rE09ZjI3i.html',
        dia: 7
    },
    {
        id:21,
        fuente:'La Nación',
        titulo:'Aníbal Fernández: "No me quieren en el Gobierno, alguien me baja el pulgar"',
        contenido:'El exjefe de Gabinete se mostró enigmático y ofendido por el rechazo a su intención de "ayudar" al Presidente',
        imagen:`${BASE_URL}25-10-2020/03.jpg`,
        vinculo:'https://www.lanacion.com.ar/politica/anibal-fernandez-nid2489442',
        dia: 7
    },
    {
        id:22,
        fuente:'La Mañana Neuquén',
        titulo:'Di Fonzo: "Estamos sorprendidos, era el que llevaba a nuestros hijos de excursión"',
        contenido:'El intendente de la Villa El Chocón manifestó su dolor por la muerte del profesor de educación física de la escuela local. Se postergaron los festejos por el aniversario de la localidad.',
        imagen:`${BASE_URL}26-10-2020/01.jpg`,
        vinculo:'https://www.lmneuquen.com/di-fonzo-estamos-sorprendidos-era-el-que-llevaba-nuestros-hijos-excursion-n742379#:~:text=Di%20Fonzo%20no%20sale%20de,llevaba%20nuestros%20hijos%20de%20excursi%C3%B3n%E2%80%9D.&text=El%20Choc%C3%B3n%3A%20los%20dos%20amigos,un%20accidente%20en%20el%20lago.',
        dia: 8
    },
    {
        id:23,
        fuente:'Clarín',
        titulo:'Por miedo a faltantes y a la devaluación, crecen las compras de fin de mes y se ven góndolas vacías en supermercados',
        contenido:'Desde las cadenas advierten que aún no hay riesgo de falta de stock, pero que está “desapareciendo la variedad”.',
        imagen:`${BASE_URL}26-10-2020/02.jpg`,
        vinculo:'https://www.clarin.com/sociedad/miedo-faltantes-devaluacion-crecen-compras-fin-mes-ven-gondolas-vacias-supermercados_0_rMjER7EM6.html',
        dia: 8
    },
    {
        id:24,
        fuente:'La Nación',
        titulo:'Caso D Alessio: el fiscal de Cámara de Mar del Plata pidió sobreseer a Carlos Stornelli y dijo que no hubo delito',
        contenido:'El fiscal federal Carlos Stornelli fue procesado por el juez de Dolores Alejo Ramos Padilla. El fiscal ante la Cámara de Mar del Plata pidió ahora su sobreseimiento',
        imagen:`${BASE_URL}26-10-2020/03.jpg`,
        vinculo:'https://www.lanacion.com.ar/politica/un-fiscal-pidio-sobreseer-stornelli-acusaciones-del-nid2490357',
        dia: 8
    },
    {
        id:25,
        fuente:'La Mañana Neuquén',
        titulo:'Neuquén tuvo su peor terremoto hace un siglo',
        contenido:'Se registró en la zona de El Huecú en 1920 y tuvo una intensidad de 7,3 grados en la escala de Richter.',
        imagen:`${BASE_URL}27-10-2020/01.jpg`,
        vinculo:'https://www.lmneuquen.com/neuquen-tuvo-su-peor-terremoto-hace-un-siglo-n742667',
        dia: 9
    },
    {
        id:26,
        fuente:'La Nación',
        titulo:'Dólar blue hoy: a cuánto cotiza el martes 27 de octubre',
        contenido:'El dólar blue cotiza este 27 de octubre a $175,00 para la compra y $181,00 para la venta, que lo posiciona 73,32 por ciento arriba del dólar oficial.',
        imagen:`${BASE_URL}27-10-2020/02.jpg`,
        vinculo:'https://www.lanacion.com.ar/economia/dolar/dolar-blue-hoy-a-cuanto-cotiza-el-martes-27-de-octubre-nid2490732',
        dia: 9
    },
    {
        id:27,
        fuente:'La Nación',
        titulo:'Barcelona-Real Madrid: el audio revelador que indica que el árbitro ignoró un detalle clave en el penal a Sergio Ramos en el clásico',
        contenido:'El árbitro español Juan Martínez Munuera (R) revisa el VAR por un posible durante el partido de fútbol de la Liga española entre Barcelona y Real Madrid',
        imagen:`${BASE_URL}27-10-2020/03.jpg`,
        vinculo:'https://www.lanacion.com.ar/deportes/futbol/barcelona-real-madrid-audio-penal-nid2491290',
        dia: 9
    },
    {
        id:28,
        fuente:'La Mañana Neuquén',
        titulo:'Renault ya prueba su nueva pickup en Argentina',
        contenido:'De la fábrica de Santa Isabel, Córdoba, ya salió el primer lote de pre series de la Alaskan.',
        imagen:`${BASE_URL}28-10-2020/01.jpg`,
        vinculo:'https://www.lmneuquen.com/renault-ya-prueba-su-nueva-pickup-argentina-n742870',
        dia: 10
    },
    {
        id:29,
        fuente:'Clarín',
        titulo:'Las 5 familias más ricas del mundo controlan una fortuna de 733.000 millones dólares, más de dos PBI de la Argentina',
        contenido:'La familia Walton, dueña de Walmart -la mayor red de supermercados-, está en el primer puesto con 215.000 millones de dólares.',
        imagen:`${BASE_URL}28-10-2020/02.jpg`,
        vinculo:'https://www.clarin.com/mundo/5-familias-ricas-mundo-controlan-fortuna-733000-millones-dolares--pbi-argentina_0_-Sd2PtIM7.html',
        dia: 10
    },
    {
        id:30,
        fuente:'La Nación',
        titulo:'Erdogan anuncia el boicot a productos franceses y escala el choque con Macron',
        contenido:'Los comerciantes queman una bandera nacional francesa durante una protesta tras los comentarios del presidente francés Emmanuel Macron sobre las caricaturas del profeta Mahoma, en Peshawar el 26 de octubre de 2020',
        imagen:`${BASE_URL}28-10-2020/03.jpg`,
        vinculo:'https://www.lanacion.com.ar/el-mundo/erdogan-anuncia-boicot-productos-franceses-escala-choque-nid2490435',
        dia: 10
    },
]
module.exports = database;