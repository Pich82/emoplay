# Auditoria del estado actual de Emoplay

## Ficha de la auditoria

- **Fecha y hora:** 29 de julio de 2026, 14:53:32 WEST (UTC+1).
- **Repositorio inspeccionado:** `C:\Users\oscar\OneDrive\Escritorio\APP EMOPLAY\emoplay`.
- **Rama local:** `master`.
- **Rama remota principal:** `origin/master`.
- **Commit local analizado:** `a624b5a71d907212950d8a2eba674a7df52e4f67`.
- **Commit remoto comprobado:** `1e685615dca13a5cf0450634f6b0f8dddd9c5a14`.
- **Estado de Git:** la rama local esta dos commits por delante del remoto y contiene, ademas, cambios sin commit de la isla Culpa.
- **Alcance:** auditoria de codigo, datos, experiencia, compilacion, pruebas, navegador, despliegue y riesgos. No se ha iniciado una refactorizacion general.

## Resumen ejecutivo

Emoplay es una beta web funcional construida con React y Vite. El codigo contiene exactamente
18 islas. Diecisiete tienen cuento, retos, ilustraciones, logros y recompensas; Amor existe como
destino final planificado, pero todavia no es jugable. Culpa esta implementada en el arbol de
trabajo actual, aunque aun no esta guardada en un commit.

La aplicacion funciona como experiencia individual en un navegador: bienvenida, inicio, mapa,
cuentos, dos minijuegos, retos, avatar, logros, recompensas, perfil, transferencia de progreso,
Diario Emo y panel docente local. No existe backend, base de datos, autenticacion, cuentas,
clases reales, alumnado sincronizado ni ranking entre estudiantes.

El proyecto compila y la prueba existente de transferencia pasa. Se comprobaron 104 recursos
locales, el recorrido inicio -> mapa -> isla -> cuento y las vistas de ordenador, tableta y movil.
No aparecieron errores de consola en las pantallas recorridas. La principal debilidad no es que
la beta "no arranque", sino que presenta como funciones escolares algunas soluciones locales y
provisionales que no ofrecen seguridad ni separacion real entre alumno y docente.

Las prioridades inmediatas son:

1. Guardar y sincronizar el trabajo local que todavia no esta en GitHub.
2. Corregir los riesgos de privacidad y el acceso docente provisional.
3. Eliminar Diario Emo mediante una migracion controlada.
4. Elegir el nuevo nombre antes de ampliar identidad, despliegue o documentacion.
5. Redisenar puntos y recompensas como progreso no competitivo.

## Ultima actualizacion comprobada

### Ultimo commit local

| Campo | Valor |
| --- | --- |
| Hash | `a624b5a71d907212950d8a2eba674a7df52e4f67` |
| Fecha | 29 de julio de 2026, 13:54:41 WEST |
| Mensaje | `feat: add Asco and Celos islands and plan Amor finale` |
| Alcance principal | Islas Asco y Celos, 14 ilustraciones, especificaciones 013 y 014, progresion, retos, recompensas y plan de Amor |
| Resumen | 34 archivos, 994 inserciones y 25 eliminaciones |

El commit anterior es `be6b11b feat: add Sorpresa and Afectividad islands`. Ambos commits estan
solo en el ordenador local. El remoto sigue en `1e68561 feat: add Confianza island and reserve
Amor finale`.

### Trabajo posterior sin commit

El arbol de trabajo incluye la implementacion completa de Culpa:

- cuento de seis paginas;
- ocho retos;
- seis ilustraciones y una referencia de personajes;
- logros y recompensas;
- ruta `Celos -> Culpa -> Amor`;
- especificacion `specs/015-culpa-island`.

Tambien modifica `PROGRESO_EMOPLAY.md`, la planificacion de Amor y varios catalogos de `src/data`.
La compilacion auditada incluye estos cambios, pero GitHub no contiene Culpa, Asco, Celos,
Sorpresa ni Afectividad en su estado actual.

## Arquitectura actual

### Tecnologias

| Area | Implementacion |
| --- | --- |
| Interfaz | React `19.2.7` y React DOM `19.2.7` |
| Construccion | Vite `8.0.16` y `@vitejs/plugin-react` `6.0.2` |
| Lenguaje | JavaScript y JSX, sin TypeScript |
| Estilos | Un archivo global de 9.521 lineas |
| Estado | `useState`, `useMemo`, `useEffect` y un hook propio de `localStorage` |
| Navegacion | Estado interno en `App.jsx`; no hay React Router ni URLs por pantalla |
| Datos | Objetos JavaScript en `src/data`; no se usan archivos JSON como catalogo principal |
| Pruebas | Un script Node para exportacion/importacion y comprobaciones ad hoc |
| Backend | Inexistente |
| Servicios externos | DiceBear para generar el SVG del avatar |
| Recursos | JPG locales, un MP3 local con atribucion y un favicon SVG |

Hay 53 archivos bajo `src`: 17 pantallas, 9 componentes, 22 modulos de datos, un hook, una
utilidad, `App.jsx`, `main.jsx` y `global.css`.

### Estructura relevante

```text
emoplay/
|-- public/
|   |-- audio/
|   |-- images/stories/
|   `-- favicon.svg
|-- scripts/
|   `-- verify-progress-transfer.mjs
|-- specs/
|   `-- 001 ... 015
|-- src/
|   |-- components/
|   |-- data/
|   |-- hooks/
|   |-- screens/
|   |-- styles/
|   |-- utils/
|   |-- App.jsx
|   `-- main.jsx
|-- index.html
|-- netlify.toml
|-- vercel.json
|-- vite.config.js
`-- package.json
```

### Pantallas y rutas reales

No hay rutas URL. `App.jsx` selecciona una pantalla mediante la variable `currentScreen`.
Actualizar la pagina conserva los datos, pero vuelve a Inicio o Bienvenida; los botones atras y
adelante del navegador no representan el recorrido interno.

| Pantalla | Estado |
| --- | --- |
| Bienvenida | Funcional |
| Inicio del alumno | Funcional |
| Mapa | Funcional |
| Detalle de isla | Funcional |
| Lector de cuento | Funcional |
| Retos por isla | Funcional |
| Centro de retos | Funcional |
| Minijuego de Calma | Funcional |
| Minijuego de Empatia | Funcional |
| Avatar | Funcional, con dependencia externa |
| Logros | Funcional |
| Recompensas | Funcional, con validacion docente solo declarativa |
| Perfil | Funcional |
| Exportar/importar progreso | Funcional y probado |
| Diario Emo | Funcional, pero decidido para eliminacion |
| Acceso docente | Provisional e inseguro |
| Panel docente | Vista local de una sola persona |
| `FutureSectionScreen` | Aparentemente inalcanzable y con textos antiguos |

## Inventario de las 18 islas

La ruta efectiva es:

`Ternura -> Admiracion -> Alegria -> Calma -> Miedo -> Enfado -> Tristeza -> Frustracion ->
Verguenza -> Empatia -> Gratitud -> Confianza -> Sorpresa -> Afectividad -> Asco -> Celos ->
Culpa -> Amor`.

En la tabla, "completa tecnicamente" significa que existen los datos y recursos necesarios para
jugarla. No significa que haya superado revision pedagogica, legal o pruebas con alumnado.

| Paso | Isla | Cuento | Retos | Ilustraciones | Minijuego | Estado real |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | Ternura | 6 paginas | 10 | 6 | No | Completa tecnicamente |
| 2 | Admiracion | 6 | 8 | 6 | No | Completa tecnicamente |
| 3 | Alegria | 6 | 8 | 6 | No | Completa tecnicamente |
| 4 | Calma | 6 | 8 | 6 | Si | Completa tecnicamente |
| 5 | Miedo | 6 | 8 | 6 | No | Completa tecnicamente |
| 6 | Enfado | 6 | 8 | 6 | No | Completa tecnicamente |
| 7 | Tristeza | 6 | 8 | 6 | No | Completa tecnicamente |
| 8 | Frustracion | 6 | 8 | 6 | No | Completa tecnicamente |
| 9 | Verguenza | 6 | 8 | 6 | No | Completa tecnicamente |
| 10 | Empatia | 6 | 8 | 6 | Si | Completa tecnicamente |
| 11 | Gratitud | 6 | 8 | 6 | No | Completa tecnicamente |
| 12 | Confianza | 6 | 8 | 6 | No | Completa tecnicamente |
| 13 | Sorpresa | 6 | 8 | 6 | No | Completa tecnicamente |
| 14 | Afectividad | 6 | 8 | 6 | No | Completa tecnicamente |
| 15 | Asco | 6 | 8 | 6 | No | Completa tecnicamente, solo local |
| 16 | Celos | 6 | 8 | 6 | No | Completa tecnicamente, solo local |
| 17 | Culpa | 6 | 8 | 6 | No | Completa tecnicamente, sin commit |
| 18 | Amor | 0 | 0 | 0 | No | Planificada, no jugable |

Los 102 recursos de escena enlazados existen y respondieron correctamente desde el servidor
local. `emotions.status` marca casi todas las islas como `locked`, pero ese campo no describe la
disponibilidad del contenido: el acceso real depende de `player.unlockedIslands`.

### Inconsistencias de contenido

El titulo mostrado en el detalle no coincide con el titulo del lector en Ternura, Admiracion,
Alegria, Empatia y Confianza. Por ejemplo, Ternura anuncia `El abrazo que encendio la playa` y
abre `El abrazo del oso Peluche`. Amor anuncia un cuento final, pero no tiene `storySets`.

## Flujo actual del juego

1. La persona escribe su nombre en Bienvenida.
2. Se crea `emoplay:player` y se abre Inicio.
3. Inicio muestra nivel, puntos, retos, islas, avatar y accesos secundarios.
4. El mapa abre Ternura y las islas incluidas en `unlockedIslands`.
5. El detalle de una isla conduce al cuento.
6. Al terminar la ultima pagina se guardan cuento, logro, 25 puntos y la siguiente isla.
7. En Calma y Empatia hay un minijuego opcional para la progresion general, pero obligatorio antes
   de sus retos; aporta 20 puntos una sola vez.
8. Los retos mezclan verdadero/falso y reflexion escrita. Las respuestas aportan puntos, racha,
   estrellas y porcentaje.
9. Al terminar se guarda un informe local y se activa el logro de retos.
10. Logros y puntos habilitan recompensas y objetos de avatar.

La siguiente isla se desbloquea al acabar el cuento, no al completar todos los retos. Por tanto,
los retos, el informe y el minijuego no forman parte del requisito general de avance, aunque la
interfaz presenta la isla como una ruta de actividades.

## Sistemas actuales

### Puntuacion

- Cuento: `+25`, una sola vez por isla.
- Minijuego: `+20`, una sola vez en Calma y Empatia.
- Respuesta correcta o reflexion: normalmente `+10` o `+15`.
- Respuesta incorrecta: penalizacion de `-5`, sin bajar de cero.
- Niveles personales: Explorador, Aventurero, Maestro y Sabio emocional.
- Los retos muestran puntos de sesion, racha, una a tres estrellas y porcentaje.

Los retos se pueden repetir y cada repeticion vuelve a sumar o restar puntos. El contador de retos
completados no se duplica, pero los puntos si. Esto permite acumular puntos indefinidamente
repitiendo respuestas conocidas y rompe el valor del progreso.

Las reflexiones se cuentan automaticamente como respuestas correctas. El porcentaje de acierto
mezcla preguntas objetivas con expresion personal, por lo que puede presentar la introspeccion
como algo evaluable y elevar artificialmente el resultado.

### Ranking

No existe ranking, tabla de posiciones ni comparacion entre estudiantes. La aplicacion solo conoce
un perfil local. Lo que debe revisarse es la capa de puntuacion individual:

- puntos acumulados;
- niveles jerarquicos;
- rachas;
- estrellas;
- porcentajes de acierto;
- penalizaciones;
- recompensas por umbral.

Eliminar `points` directamente romperia niveles, barras de progreso, parte del avatar, varias
recompensas, Inicio, Perfil, Mapa, Panel docente y los informes. Debe migrarse, no borrarse de una
vez.

### Logros y recompensas

- 53 logros de cuento, reto, minijuego y desbloqueo.
- 61 recompensas: 23 beneficios de aula y 38 elementos de avatar.
- Los puntos no se gastan; actuan como umbrales.
- El alumno reclama por si mismo los beneficios de aula. El texto exige validacion docente, pero
  no existe una aprobacion tecnica.
- Solo puede destacarse una recompensa equipable, aunque el armario usa ranuras propias.

### Desbloqueos

`islandUnlockOrder` define las 18 islas. Completar el cuento agrega la siguiente a
`unlockedIslands`. Las claves antiguas se siguen sincronizando para compatibilidad.

### Persistencia

| Dato | Clave o patron |
| --- | --- |
| Jugador y progreso principal | `emoplay:player` |
| Avatar DiceBear | `emoplay_avatarDiceBearConfig` |
| Diario | `emoplay:diaryEntries` |
| Copia previa a importar | `emoplay:progressImportBackup:last` |
| Informes | `informe_<isla>_<timestamp>` |
| Puntos antiguos | `emoplay_puntos` |
| Retos antiguos | `emoplay_retosCompletados` |
| Islas antiguas | `islasCompletadas` |
| Cuentos, retos y minijuegos antiguos | `cuento_*`, `reto_*`, `minijuego_*` |

La exportacion JSON tiene version, limites de tamano, normalizacion y copia previa. La lista de
compatibilidad antigua de `progressTransfer.js` omite Gratitud, Confianza y Sorpresa, mientras
`player.js` repite Afectividad. El formato moderno conserva esas islas mediante el objeto
`player`, pero una importacion basada solo en claves antiguas puede quedar incompleta o dejar
claves obsoletas.

## Avatar

El editor permite personalizar rasgos DiceBear, aleatorizar, restablecer, desbloquear opciones y
equipar objetos. La configuracion se guarda localmente.

El SVG se solicita a `https://api.dicebear.com/9.x/adventurer/svg`. Si falla, `AvatarPreview`
muestra un avatar local simple. La aplicacion no es totalmente offline y envia al servicio externo
el `seed` y la configuracion en la URL. Como el campo se llama "Nombre del avatar", una persona
podria introducir un nombre real que viajaria a ese tercero. Esto requiere revision de privacidad,
minimizacion y, preferiblemente, recursos locales para una version escolar.

## Panel docente, clases y alumnado

El panel es una vista local del mismo navegador. Muestra un unico jugador, puntos, nivel, progreso,
logros, informes y Diario Emo.

No existen:

- cuentas docentes;
- contrasenas seguras;
- sesiones;
- roles;
- clases reales;
- codigos de clase;
- altas de alumnado;
- sincronizacion;
- listado de alumnos;
- permisos;
- auditoria de accesos.

El unico codigo es `EMO2026`, escrito literalmente en `src/data/teacherAccess.js` y descargado al
navegador. Solo evita entradas accidentales. No protege los datos.

## Diario Emo

Diario Emo esta completamente implementado, no abandonado:

- boton destacado en Inicio;
- ruta interna `diary`;
- `DiaryScreen.jsx`;
- catalogo y normalizacion en `data/diary.js`;
- aproximadamente 300 lineas de pantalla y un bloque amplio de CSS;
- clave `emoplay:diaryEntries`;
- resumen y entradas en Panel docente;
- inclusion en exportacion/importacion;
- prueba de transferencia;
- textos en `navigation.js`, especificaciones y documentacion.

Almacena emocion, intensidad, nota libre y fecha. Estos datos pueden revelar informacion sensible
de menores. Se guardan sin cifrar, pueden exportarse y quedan visibles para cualquiera con acceso
al navegador o al codigo docente.

### Plan de eliminacion sin romper progreso

1. Crear commit y copia remota antes de eliminar.
2. Retirar boton, ruta, import y props de `App.jsx`, Inicio y Panel docente.
3. Eliminar `DiaryScreen.jsx` y `data/diary.js`.
4. Eliminar funciones de diario en `data/teacherPanel.js`.
5. Crear version 2 del formato de transferencia sin `diaryEntries`.
6. Mantener lectura compatible de copias version 1, pero ignorar el diario al restaurar.
7. Ejecutar una migracion unica que borre `emoplay:diaryEntries` y sanee la copia local previa si
   contiene entradas.
8. Adaptar `verify-progress-transfer.mjs` y la especificacion 007.
9. Eliminar estilos y referencias documentales antiguas.
10. Comprobar navegacion, panel, exportacion/importacion y build.

Las reflexiones abiertas de los retos no pertenecen tecnicamente al Diario y seguirian dentro de
los informes. Deben revisarse como un riesgo de privacidad separado.

## Tres alternativas no competitivas

### A. Mochila de herramientas emocionales - recomendada para el siguiente prototipo

- **Mecanica:** cada isla aporta una herramienta concreta: pausa, pedir ayuda, poner un limite,
  comprobar hechos o reparar.
- **Recompensa:** tarjeta ilustrada y acceso a una historia o practica; no hay puntos ni nivel.
- **Desbloqueo:** completar el cuento y una practica esencial, sin exigir acierto perfecto.
- **Efecto en clase:** el docente elige herramientas para rutinas colectivas sin publicar datos
  individuales.
- **Riesgo pedagogico:** convertir la coleccion en otra carrera si se muestra un total prominente.
- **Dificultad tecnica:** media; reutiliza islas, logros, avatar y progreso, pero migra dependencias
  de puntos.

### B. Archipielago cooperativo de aula

- **Mecanica:** la clase restaura un faro, jardin o puente mediante misiones cooperativas.
- **Recompensa:** cambio visual comun y una experiencia breve para toda la clase.
- **Desbloqueo:** validacion docente de acciones grupales; no se suman puntuaciones individuales.
- **Efecto en clase:** refuerza ayuda mutua y da sentido colectivo a los logros.
- **Riesgo pedagogico:** presion grupal o culpabilizacion de quien no participa; nunca debe mostrar
  quien "falta".
- **Dificultad tecnica:** alta para una version real, porque necesita clases, permisos y backend.

### C. Pasaporte de misiones elegidas

- **Mecanica:** cada alumno elige una mision entre varias maneras equivalentes de practicar.
- **Recompensa:** sello narrativo, objeto de avatar o beneficio colectivo acordado.
- **Desbloqueo:** evidencia simple o confirmacion docente; se premia el intento y la estrategia,
  no la velocidad ni el porcentaje.
- **Efecto en clase:** permite adaptar tareas y conversar sobre herramientas usadas.
- **Riesgo pedagogico:** carga de validacion para el docente y diferencias de criterio.
- **Dificultad tecnica:** media-alta; requiere redisenar informes y recompensas, aunque puede
  pilotarse localmente.

La opcion A es la transicion mas segura. La opcion B puede añadirse cuando existan clases reales y
proteccion de datos. La opcion C es util si la prueba con docentes confirma que pueden validar
misiones sin aumentar demasiado su trabajo.

## Responsive y accesibilidad

### Comprobacion visual

| Vista | Resultado |
| --- | --- |
| 1440 x 900 | Sin desbordamiento horizontal; Inicio mide 1.136 px de alto |
| 768 x 1024 | Sin desbordamiento; Inicio mide 1.738 px y usa espacio vertical de forma ineficiente |
| 390 x 844 | Sin desbordamiento; Inicio 1.886 px, Perfil 2.231 px y Mapa 2.491 px |

La transferencia de progreso es accesible en movil y sus botones miden 311 x 44 px. Sin embargo,
el boton fijo `Inicio` puede superponerse a campos o contenido durante el desplazamiento; se
observo sobre el formulario de Perfil. El boton de marca superior mide 38 px de alto, por debajo de
la recomendacion tactil habitual de 44 px.

Aspectos positivos:

- `lang="es"` y meta viewport;
- estados de foco visibles;
- formularios principales con `label`;
- textos alternativos en avatar y cuentos;
- botones con nombres accesibles en la navegacion principal;
- no se detectaron errores de consola en el recorrido auditado.

Problemas:

- no hay regla `prefers-reduced-motion` pese a varias animaciones infinitas;
- el grupo visual con `role="tablist"` no asigna `role="tab"` ni `aria-selected` a sus botones;
- algunos emojis decorativos pueden anunciarse sin contexto;
- el boton fijo puede ocultar controles;
- las pantallas son excesivamente largas en movil y tableta;
- no hay prueba automatizada de contraste, teclado o lector de pantalla;
- no existe enlace de salto al contenido.

## Backend, datos y despliegue

No hay backend ni base de datos. No se encontraron llamadas a API propias, Firebase, Supabase,
Express, GraphQL o WebSocket. Todo el progreso vive en el navegador.

El proyecto tiene configuracion estatica para Netlify y Vercel, y una guia de publicacion manual.
El servidor local respondio con HTTP 200. No hay flujo de despliegue continuo ni `.github/workflows`.

- `https://pich82.github.io/emoplay/` respondio 404 durante la auditoria.
- La URL de Lovable respondio 200 y conserva el identificador de proyecto, pero no se pudo
  demostrar que su contenido coincida con este repositorio.
- No se ha verificado una URL publica que sirva la version local actual.
- No hay manifest PWA ni service worker.

## Nombre Emoplay e identidad

El cambio de nombre esta justificado: Fundacion Orange mantiene una aplicacion educativa llamada
[EmoPLAY en Google Play](https://play.google.com/store/apps/details?id=com.orange.emoplay), con
mas de 100.000 descargas, y tambien existe
[emoPLAY en App Store](https://apps.apple.com/es/app/emoplay/id1250041224). Opera en un campo
muy proximo: aprendizaje social y emocional infantil.

El nombre actual aparece en 38 archivos de codigo y documentacion, ademas de:

- interfaz y botones;
- `index.html`, titulo, descripcion y Open Graph;
- `package.json` y `package-lock.json`;
- claves de `localStorage`;
- sobre de exportacion y nombre del JSON;
- variables de Vite;
- scripts, especificaciones y guias;
- informes descargables;
- semilla predeterminada del avatar.

No hay rutas URL con el nombre. No existe manifest. El logotipo visible es texto y CSS; el
`favicon.svg` es un rayo generico cuya procedencia de marca no esta documentada.

### Candidatos

La disponibilidad es una comprobacion preliminar realizada el 29 de julio de 2026 mediante
busqueda web, tiendas y coincidencias de dominio indexadas. No sustituye una busqueda formal en
el [Localizador de la OEPM](https://consultas2.oepm.es/LocalizadorWeb/index.jsp), EUIPO, dominios
y redes sociales, ni asesoramiento juridico.

| Orden | Nombre | Significado y concepto | Lema posible | Ventajas | Inconvenientes o confusion | Disponibilidad preliminar |
| ---: | --- | --- | --- | --- | --- | --- |
| 1 | **Almarumbo** | Alma + rumbo; una travesia para aprender a orientarse por dentro | `Encuentra herramientas para cada travesia` | Distintivo, sonoro, adulto y compatible con el mapa | "Alma" puede sonar espiritual si la identidad no se concreta | Sin coincidencia exacta relevante, app o dominio indexado encontrada |
| 2 | **Sientavia** | Sentir + via; cada emocion abre un camino | `Cada emocion muestra una via` | Facil de relacionar con el producto y pronunciable | La escritura con o sin tilde debe fijarse | Sin coincidencia exacta relevante, app o dominio indexado encontrada |
| 3 | **Lazosfera** | Mundo de vinculos, cuidado y convivencia | `Explora, comprende, conecta` | Buena identidad visual y utilidad escolar | Puede parecer centrado solo en relaciones | Sin coincidencia exacta relevante, app o dominio indexado encontrada |
| 4 | **AnimaRuta** | Animo/vida + ruta; viaje interior sin usar "emo" | `Tu ruta para crecer por dentro` | Profesional y conectado con la aventura | "Anima" tiene sentidos espirituales y de animacion | Sin coincidencia exacta relevante, app o dominio indexado encontrada |
| 5 | **MapaRaiz** | Mapa para reconocer lo que sentimos y crecer con base | `Conocerte para seguir creciendo` | Une mapa, crecimiento y aula | Dos palabras comunes; marca algo menos defendible | Sin coincidencia exacta educativa encontrada |
| 6 | Travesia Clara | Aprender a orientarse en situaciones emocionales | `Pasos claros para lo que sientes` | Comprensible para familias y centros | Menos distintivo y algo largo | Sin app educativa exacta encontrada; existen coincidencias geograficas |
| 7 | Isla Nexo | Cada isla crea conexiones con uno mismo y con otros | `Conecta lo que sientes` | Encaja con el mapa actual | "Isla" limita futuras extensiones y "Nexo" es muy usado | Sin producto exacto encontrado, pero terminos muy genericos |
| 8 | Brujula Viva | Orientacion y aprendizaje que cambia con la experiencia | `Aprender a orientarse por dentro` | Metafora clara para Primaria | Muchas iniciativas educativas usan "Brujula" o "Viva" | Espacio de marca saturado; recomendacion baja |
| 9 | Brujulia | Nombre inventado a partir de brujula | `Tu aventura tiene norte` | Memorable y jugueton | Puede asociarse con brujeria y ya es titulo musical | Coincidencias musicales; no recomendable |
| 10 | Crecivia | Crecer + via | `Una via para crecer` | Sonoro y profesional | Ya existe una empresa digital con ese nombre | Conflicto activo y dominio ocupado; descartar |
| 11 | Luminave | Luz + nave; viaje guiado | `Navega con tus propias luces` | Visual y narrativo | Ya existe una aplicacion web de iluminacion | Conflicto tecnologico; descartar |
| 12 | Vivalma | Vida + alma | `Crecer con todo lo que sientes` | Calido y facil de recordar | Palabra portuguesa y servicios/libros existentes | Varias coincidencias y dominio activo; descartar |
| 13 | Sentirama | Panorama de emociones | `Amplia tu forma de sentir` | Explica el campo de forma inmediata | Existe una plataforma de expresion emocional | Conflicto directo en el mismo ambito; descartar |
| 14 | Sentiverso | Universo de experiencias emocionales | `Un universo para sentir y convivir` | Muy visual | Ya es un proyecto educativo emocional reciente | Conflicto directo; descartar |
| 15 | Rumbo Interior | Orientacion personal | `Tu faro para seguir creciendo` | Claro para adultos y docentes | Marca generica y demasiado asociada al desarrollo personal | Web activa y marca española vigente en clase 41; descartar |

Los cinco recomendados son una lista de trabajo, no una autorizacion de uso. Antes de elegir deben
comprobarse variantes foneticas, clases 9, 16, 41 y 42, dominios `.es` y `.com`, tiendas y redes.

## Propiedad intelectual

No se encontro la palabra `Emocionario`, referencias a sus autores ni indicios literales de
adaptacion en el repositorio. Los cuentos usan personajes, escenas y titulos propios. Esto es una
señal positiva, pero no certifica originalidad.

Riesgos pendientes:

- no existe una matriz comparativa independiente de textos y estructura frente a obras de
  referencia;
- no hay inventario de autoria, fecha, prompt o licencia de cada ilustracion;
- el favicon no tiene procedencia documentada;
- el avatar depende de los terminos y licencia de DiceBear;
- el audio de mar si incluye autor, fuente y licencia CC BY 3.0, y la atribucion aparece en la
  pantalla.

Se necesita revision pedagogica y de propiedad intelectual por una persona distinta de quien creo
el contenido, conservando evidencias de autoria.

## Problemas por prioridad

### Criticos

1. **Trabajo no respaldado:** dos commits y Culpa no estan en GitHub.
2. **Proteccion docente ficticia:** el codigo `EMO2026` esta en el cliente y no hay autenticacion.
3. **Datos sensibles de menores:** Diario y reflexiones libres se guardan y exportan sin cifrado.
4. **Conflicto de nombre:** existe un producto educativo EmoPLAY consolidado.

### Importantes

1. Amor no es jugable y la experiencia final esta incompleta.
2. Los retos repetidos permiten acumular puntos indefinidamente.
3. Las reflexiones personales se convierten en "aciertos", porcentaje y puntos.
4. Las islas se desbloquean solo con el cuento, no con la ruta completa.
5. Los beneficios de aula no tienen aprobacion docente real.
6. La compatibilidad antigua de transferencia no conoce tres islas recientes.
7. Cinco detalles de isla muestran un titulo distinto del lector.
8. El boton fijo Inicio puede tapar controles en movil.
9. DiceBear recibe el seed del avatar mediante una URL externa.
10. No hay pruebas funcionales de islas, lint ni pruebas de accesibilidad.

### Secundarios

1. `global.css` y varios catalogos son demasiado grandes para mantenerse con seguridad.
2. `FutureSectionScreen` parece codigo muerto y `navigation.js` conserva textos antiguos.
3. `player.js` repite Afectividad en listas de compatibilidad.
4. El archivo vacio `I` esta versionado en la raiz.
5. La navegacion no usa historial ni enlaces profundos.
6. No hay PWA, modo offline completo ni pipeline de despliegue.

## Deuda tecnica

- `App.jsx` concentra navegacion, importacion, recompensas y progreso.
- `challenges.js` supera 1.600 lineas; `rewards.js` y `stories.js` rondan 1.000.
- `global.css` tiene 9.521 lineas y media queries acumuladas.
- Los IDs de islas se repiten manualmente en varios modulos.
- Conviven un modelo moderno y muchas claves legacy.
- No hay esquema formal de datos, TypeScript ni validacion compartida.
- No hay router, capa de dominio, servicio de persistencia ni pruebas por modulo.
- Los estados `locked` de contenido y el progreso del jugador expresan conceptos distintos con
  nombres parecidos.

## Riesgos pedagogicos

- penalizar respuestas incorrectas puede desalentar el ensayo;
- rachas, estrellas, niveles y "Maestro/Sabio" pueden convertir el aprendizaje en rendimiento;
- las reflexiones no deberian tener una respuesta correcta;
- beneficios de aula ligados al rendimiento pueden crear desigualdad o negociacion conflictiva;
- porcentajes mezclan conocimiento y expresion personal;
- no esta definido el tramo inicial: la guia visual habla de 6 a 10 años, mientras algunos
  conceptos requieren facilitacion adulta;
- el panel presenta inferencias automaticas como "fortalezas" y "desarrollo" sin validacion
  pedagogica;
- una unica secuencia obligatoria no contempla ritmos o necesidades diversas.

## Riesgos de privacidad

- nombre, clase, progreso, respuestas y diario sin cifrar en `localStorage`;
- acceso docente sin seguridad;
- JSON exportable con datos personales y reflexiones;
- informes TXT descargables;
- dependencia externa del avatar;
- sin politica de privacidad, consentimiento, retencion, borrado o minimizacion;
- sin separacion entre datos del alumno y del docente;
- sin modelo de roles, registro de accesos o recuperacion segura.

## Elementos antiguos o abandonados

- `FutureSectionScreen.jsx` y descripciones futuras de secciones ya implementadas;
- referencias al Diario en `navigation.js` y documentacion;
- claves `reto_demo_*`;
- listas legacy duplicadas o incompletas;
- archivo raiz `I`;
- favicon generico;
- documentos de publicacion que todavia hablan de "si mas adelante subes el proyecto a GitHub",
  aunque el remoto ya existe.

## Intencion frente a realidad

| Lo que parece prometer | Lo que funciona hoy |
| --- | --- |
| Panel docente protegido | Vista local con codigo visible en el bundle |
| Clases y alumnado | Solo un campo de texto `className` |
| Progreso escolar | Progreso individual manipulable desde el navegador |
| Ranking | No existe; hay puntuacion personal intensa |
| Beneficios validados | El alumno los reclama; la validacion es solo un texto |
| Ruta completa de isla | El cuento basta para abrir la siguiente |
| Transferencia total | Funciona para el modelo moderno; compatibilidad legacy incompleta |
| Aplicacion terminada | 17 islas jugables y Amor planificada |
| Version compartida | GitHub esta atrasado y no hay demo publica actual verificada |

## Verificaciones ejecutadas

- `npm ls --depth=0`: dependencias instaladas y coherentes.
- `npm run test:progress-transfer`: superada.
- `npm run build`: superada con 62 modulos.
- Integridad de islas: 18 IDs, 17 conjuntos jugables y Amor planificada.
- Recursos HTTP: 104 comprobados, sin fallos.
- Navegador: Inicio, Perfil, Mapa, Ternura y lector de cuento.
- Consola: sin errores ni avisos en el recorrido.
- Viewports: 1440 x 900, 768 x 1024 y 390 x 844.
- Git remoto: `origin/master` comprobado mediante lectura remota.

No hay script de lint. No se recorrieron manualmente las 102 paginas ni los 138 retos; la
comprobacion de ese conjunto fue estructural y de recursos, no una validacion pedagogica
exhaustiva.

## Primera accion concreta recomendada

Antes de eliminar Diario o cambiar puntos, revisar el diff de Culpa y crear dos commits separados:

1. `feat: add Culpa island and unlock Amor finale`
2. `docs: add current-state audit and professionalization roadmap`

Despues, subir ambos a `origin/master` y verificar que local y remoto apuntan al mismo commit. Esa
copia segura convierte las siguientes eliminaciones en cambios pequeños y reversibles.
