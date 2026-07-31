# Hoja de ruta de profesionalizacion de Emoplay

## Principios de trabajo

- Mantener React y Vite mientras no aparezca una limitacion demostrable.
- No reconstruir desde cero.
- Conservar exactamente 18 islas.
- No añadir IA conversacional dirigida a menores.
- No usar diagnosticos, etiquetas psicologicas, azar, publicidad ni compras impulsivas.
- Hacer cambios pequeños, con commit propio, prueba y posibilidad de vuelta atras.
- Separar el prototipo local de cualquier promesa de plataforma escolar segura.
- Completar primero decisiones de producto, privacidad y pedagogia; despues construir backend.
- No publicar datos reales de menores durante el desarrollo.

## Puertas de decision

Antes de avanzar deben resolverse cuatro decisiones:

1. **Nombre:** elegir una de las candidaturas tras comprobacion formal.
2. **Publico inicial:** proponer como hipotesis 3.º y 4.º de Primaria, pero validarlo con docentes.
3. **Progresion:** elegir entre mochila personal, archipielago cooperativo o pasaporte de misiones.
4. **Datos:** decidir que informacion necesita realmente el panel y eliminar texto libre no
   imprescindible.

## Fase 1. Auditoria y estabilizacion

- **Objetivo:** fijar una fotografia fiable del producto y proteger el trabajo actual.
- **Tareas:** revisar la auditoria; guardar Culpa y documentacion en commits separados; subir los
  dos commits locales pendientes; comprobar arbol limpio; registrar version beta.
- **Modulos:** Git, `docs/`, `specs/015-culpa-island`, catalogos de `src/data`.
- **Dependencias:** ninguna.
- **Prioridad:** critica.
- **Dificultad:** baja.
- **Riesgos:** mezclar Culpa con la auditoria o perder archivos no versionados.
- **Terminada cuando:** `master` y `origin/master` apuntan al mismo commit, el arbol esta limpio y
  build/prueba pasan.

## Fase 2. Correccion de errores criticos

- **Objetivo:** eliminar fallos que distorsionan progreso, seguridad percibida y contenido.
- **Tareas:** impedir puntos repetibles; separar reflexion de acierto; corregir IDs legacy
  recientes; unificar titulos de cuentos; marcar el panel como prototipo y retirar cualquier
  promesa de proteccion; corregir solapes del boton Inicio.
- **Modulos:** `App.jsx`, `ChallengeRunnerScreen.jsx`, `player.js`, `progressTransfer.js`,
  `emotions.js`, `stories.js`, `AppShell.jsx`, `global.css`, panel docente.
- **Dependencias:** Fase 1.
- **Prioridad:** critica.
- **Dificultad:** media.
- **Riesgos:** alterar progreso existente o informes guardados.
- **Terminada cuando:** no se pueden cultivar puntos al rejugar, la migracion conserva progreso,
  los titulos coinciden y las vistas 390/768/1440 no tienen controles tapados.

## Fase 3. Nuevo nombre e identidad

- **Objetivo:** sustituir Emoplay por una marca diferenciada y defendible.
- **Tareas:** elegir nombre; buscar OEPM, EUIPO, tiendas, dominios y redes; decidir arquitectura de
  marca; preparar mapa de reemplazos; diseñar identidad minima y favicon propio.
- **Modulos:** `index.html`, `package*.json`, interfaz, informes, exportacion, Vite, documentacion,
  almacenamiento y recursos de marca.
- **Dependencias:** decision del usuario y comprobacion profesional de marca.
- **Prioridad:** alta.
- **Dificultad:** media.
- **Riesgos:** romper copias antiguas si se renombran claves sin migracion.
- **Terminada cuando:** nombre aprobado, dominios prioritarios controlados y plan de migracion de
  claves probado antes del reemplazo.

## Fase 4. Eliminacion de Diario Emo

- **Objetivo:** retirar por completo la funcion y sus datos sin dañar el progreso restante.
- **Tareas:** crear spec; quitar boton/ruta/pantalla; limpiar panel y estilos; pasar transferencia a
  version 2; aceptar copias v1 ignorando diario; purgar clave y copias locales; actualizar pruebas
  y documentacion.
- **Modulos:** `App.jsx`, `StudentHomeScreen.jsx`, `DiaryScreen.jsx`, `diary.js`,
  `TeacherPanelScreen.jsx`, `teacherPanel.js`, `progressTransfer.js`, prueba 007, `global.css`.
- **Dependencias:** Fases 1 y 2; commit de seguridad previo.
- **Prioridad:** alta.
- **Dificultad:** media.
- **Riesgos:** dejar notas en backups o rechazar copias antiguas.
- **Terminada cuando:** no hay ruta, UI, dato, estilo ni exportacion de diario; una copia v1 valida
  restaura el resto; busqueda global y pruebas no encuentran referencias activas.

## Fase 5. Definicion del publico inicial

- **Objetivo:** acotar edad, contexto y necesidades para evitar un producto pedagogicamente difuso.
- **Tareas:** entrevistar docentes; comparar comprension entre cursos; definir lectura autonoma o
  guiada; establecer duracion de sesion y necesidades de apoyo; redactar principios pedagogicos.
- **Modulos:** documentacion de producto, guia visual, cuentos, retos e informes.
- **Dependencias:** auditoria; acceso a 3-5 docentes.
- **Prioridad:** alta.
- **Dificultad:** media.
- **Riesgos:** elegir edad por intuicion o probar con datos personales reales.
- **Terminada cuando:** existe una ficha aprobada de usuario inicial, contexto, objetivos,
  exclusion y criterios de lenguaje.

## Fase 6. Simplificacion de navegacion y pantallas

- **Objetivo:** reducir carga cognitiva y hacer evidente la accion principal.
- **Tareas:** inventariar accesos; retirar duplicados; definir navegacion con historial; compactar
  cabecera y tarjetas; resolver boton Inicio; mantener Perfil accesible.
- **Modulos:** `App.jsx`, `AppShell.jsx`, Inicio, Mapa, Perfil, CSS; posible router ligero.
- **Dependencias:** Fases 3-5.
- **Prioridad:** alta.
- **Dificultad:** media.
- **Riesgos:** perder accesos secundarios o romper restauracion de pantalla.
- **Terminada cuando:** una prueba de tareas permite empezar/continuar isla y abrir perfil sin
  ayuda en ordenador, tableta y movil.

## Fase 7. Definicion del bucle principal

- **Objetivo:** decidir que significa jugar y completar una isla.
- **Tareas:** fijar secuencia cuento-practica-cierre; decidir requisitos de desbloqueo; definir
  rejuego; diferenciar aprendizaje de evaluacion; prototipar una isla representativa.
- **Modulos:** detalle de isla, lector, retos, minijuegos, `islandProgression.js`, guia de aventura.
- **Dependencias:** publico inicial y navegacion.
- **Prioridad:** alta.
- **Dificultad:** media.
- **Riesgos:** hacer sesiones demasiado largas o bloquear por "aciertos".
- **Terminada cuando:** el bucle cabe en el tiempo escolar definido y tiene criterio de final claro,
  sin puntuacion obligatoria.

## Fase 8. Progresion no competitiva

- **Objetivo:** sustituir puntos, rachas, estrellas y niveles por la alternativa elegida.
- **Tareas:** mapear dependencias; diseñar modelo nuevo; migrar progreso; cambiar recompensas,
  avatar, informes e Inicio; retirar penalizaciones; probar rejuego.
- **Modulos:** `progress.js`, `player.js`, `rewards.js`, `achievements.js`, retos, Perfil, Panel,
  Inicio y Mapa.
- **Dependencias:** eleccion explicita entre las tres alternativas y Fase 7.
- **Prioridad:** alta.
- **Dificultad:** alta.
- **Riesgos:** perder motivacion, crear competencia encubierta o invalidar progreso.
- **Terminada cuando:** ninguna pantalla compara rendimiento ni premia velocidad/acierto y el
  progreso previo se convierte de forma comprensible.

## Fase 9. Reorganizacion de las 18 islas

- **Objetivo:** convertir el conjunto en una secuencia pedagogica coherente, incluido el final Amor.
- **Tareas:** revisar orden; agrupar competencias; comprobar prerrequisitos; terminar Amor como
  experiencia final; evitar jerarquizar emociones; mantener IDs estables.
- **Modulos:** `emotions.js`, `islandProgression.js`, Mapa, Amor spec 010, guia de aventura.
- **Dependencias:** Fases 5, 7 y 8.
- **Prioridad:** media-alta.
- **Dificultad:** alta.
- **Riesgos:** romper progreso o presentar emociones como positivas/negativas.
- **Terminada cuando:** las 18 islas tienen proposito, prerrequisito y cierre documentados y una
  migracion conserva el avance.

## Fase 10. Revision pedagogica de cuentos y actividades

- **Objetivo:** asegurar claridad, seguridad emocional y utilidad para el curso elegido.
- **Tareas:** rubrica por isla; revision de vocabulario; eliminar moralizacion; revisar ayudas
  adultas y limites; separar preguntas objetivas de reflexion; pilotar lectura.
- **Modulos:** `stories.js`, `challenges.js`, reflexiones finales, guias y specs.
- **Dependencias:** publico y secuencia definidos.
- **Prioridad:** alta.
- **Dificultad:** alta.
- **Riesgos:** convertir contenido educativo en consejo psicologico o evaluacion emocional.
- **Terminada cuando:** cada isla esta aprobada por al menos un especialista y un docente con
  cambios trazables.

## Fase 11. Originalidad y derechos

- **Objetivo:** demostrar que textos, actividades, imagenes, audio y marca se pueden usar.
- **Tareas:** matriz frente a referencias; historial de autoria; inventario de activos/licencias;
  revisar DiceBear y favicon; sustituir recursos dudosos; conservar atribuciones.
- **Modulos:** todos los contenidos y `public/`, guia visual y documentacion legal.
- **Dependencias:** Fases 3 y 10.
- **Prioridad:** alta.
- **Dificultad:** media-alta.
- **Riesgos:** similitud no detectada o falta de derechos de recursos generados.
- **Terminada cuando:** cada activo tiene origen/licencia y una revision independiente no encuentra
  copia sustancial.

## Fase 12. Mejora visual, responsive y accesibilidad

- **Objetivo:** conseguir una interfaz consistente y utilizable segun WCAG 2.2 AA.
- **Tareas:** dividir CSS; reducir altura; añadir movimiento reducido; corregir tabs; revisar
  contraste, foco, teclado, lector de pantalla y objetivos tactiles; probar Safari/Chrome reales.
- **Modulos:** componentes, pantallas y `global.css`.
- **Dependencias:** navegacion y marca estabilizadas.
- **Prioridad:** alta.
- **Dificultad:** alta.
- **Riesgos:** pulir pantallas que despues cambien o introducir regresiones visuales.
- **Terminada cuando:** matriz de dispositivos y auditoria automatica/manual sin fallos AA
  bloqueantes.

## Fase 13. Panel docente y uso real en aula

- **Objetivo:** definir un panel util antes de construirlo como sistema multiusuario.
- **Tareas:** entrevistas; priorizar indicadores; eliminar inferencias automaticas; diseñar
  consentimiento y visibilidad; prototipo sin datos reales; flujo de aprobacion de misiones.
- **Modulos:** acceso y panel docente, informes, recompensas y documentacion.
- **Dependencias:** Fases 5, 7, 8, 10 y 12.
- **Prioridad:** media-alta.
- **Dificultad:** alta.
- **Riesgos:** vigilancia excesiva, etiquetado o carga administrativa.
- **Terminada cuando:** docentes completan tareas clave y cada dato mostrado tiene una finalidad
  pedagogica y base de acceso definida.

## Fase 14. Sistema de progreso y recompensas

- **Objetivo:** consolidar el modelo elegido con beneficios justos y sostenibles.
- **Tareas:** definir estados; recompensas personales/colectivas; aprobacion docente; rejuego;
  migracion; mensajes de feedback; evitar recuentos comparables.
- **Modulos:** jugador, logros, recompensas, avatar, mapa, perfil e informes.
- **Dependencias:** Fases 8 y 13.
- **Prioridad:** media-alta.
- **Dificultad:** alta.
- **Riesgos:** competencia encubierta o recompensas incompatibles con normas del centro.
- **Terminada cuando:** reglas documentadas, pruebas de migracion y validacion docente sin
  incentivos competitivos.

## Fase 15. Arquitectura de backend y base de datos

- **Objetivo:** diseñar sincronizacion segura solo cuando los requisitos sean estables.
- **Tareas:** modelo de dominios; evaluacion relacional; API; autenticacion; roles; centros y
  clases; separacion por tenant; exportacion/borrado; plan offline y migracion desde JSON.
- **Modulos:** nueva capa de servidor, persistencia cliente y panel.
- **Dependencias:** Fases 5, 13 y 14.
- **Prioridad:** media.
- **Dificultad:** muy alta.
- **Riesgos:** sobrearquitectura, fugas entre centros y dependencia de proveedor.
- **Terminada cuando:** decision arquitectonica revisada, modelo de amenazas, prototipo sin datos
  reales y pruebas de aislamiento.

## Fase 16. Privacidad, seguridad y proteccion de menores

- **Objetivo:** convertir privacidad y seguridad en requisitos verificables.
- **Tareas:** minimizacion; consentimiento; retencion; borrado; cifrado; gestion de secretos;
  politicas; contratos con encargados; DPIA si procede; respuesta a incidentes; pentest.
- **Modulos:** frontend, backend, avatar, exportacion, informes y documentacion legal.
- **Dependencias:** arquitectura de backend y asesoramiento especializado.
- **Prioridad:** critica antes de piloto con datos reales.
- **Dificultad:** muy alta.
- **Riesgos:** incumplimiento legal o daño a menores.
- **Terminada cuando:** revision legal/seguridad aprobada, pruebas de permisos y procedimientos de
  derechos y borrado ensayados.

## Fase 17. Pruebas con docentes y alumnado

- **Objetivo:** validar comprension, utilidad, tiempo y seguridad en contexto.
- **Tareas:** protocolo etico; consentimiento; tareas observables; grupos pequeños; accesibilidad;
  recogida minima; analisis y priorizacion.
- **Modulos:** producto completo y materiales de investigacion.
- **Dependencias:** Fases 10, 12, 13 y 16.
- **Prioridad:** alta.
- **Dificultad:** alta.
- **Riesgos:** sesgo de muestra, exposicion de datos o interpretar emociones.
- **Terminada cuando:** informe anonimizado con problemas, evidencias y decisiones de producto.

## Fase 18. Modelo de monetizacion

- **Objetivo:** financiar el producto sin explotar atencion ni datos infantiles.
- **Tareas:** comparar licencia de centro, suscripcion docente, compra institucional y patrocinio
  etico; calcular soporte; definir version piloto; descartar publicidad e impulsos.
- **Modulos:** modelo de negocio, terminos, facturacion futura; no la experiencia infantil.
- **Dependencias:** evidencia de valor de Fase 17.
- **Prioridad:** media.
- **Dificultad:** media.
- **Riesgos:** diseñar para pago antes que para aprendizaje o crear desigualdad.
- **Terminada cuando:** existe una hipotesis sostenible con precios y costes validada con centros.

## Fase 19. Version piloto profesional

- **Objetivo:** preparar una version limitada, estable y soportable para centros seleccionados.
- **Tareas:** congelar alcance; observabilidad; soporte; copias; formacion docente; terminos;
  onboarding; plan de incidencias; pruebas de carga y recuperacion.
- **Modulos:** aplicacion, backend, despliegue, documentacion y soporte.
- **Dependencias:** Fases 15-18.
- **Prioridad:** alta al llegar a esta etapa.
- **Dificultad:** muy alta.
- **Riesgos:** ampliar alcance durante el piloto o no poder atender incidencias.
- **Terminada cuando:** centros piloto formados, indicadores definidos, recuperacion probada y
  criterios de parada establecidos.

## Fase 20. Lanzamiento

- **Objetivo:** abrir el producto con calidad, soporte y mejora responsable.
- **Tareas:** cerrar hallazgos del piloto; auditoria final; capacidad; accesibilidad; privacidad;
  comunicacion; soporte; analitica minimizada; ciclo de versiones.
- **Modulos:** plataforma completa y operaciones.
- **Dependencias:** piloto profesional exitoso.
- **Prioridad:** final.
- **Dificultad:** muy alta.
- **Riesgos:** escalar fallos, prometer resultados pedagogicos no demostrados o perder control de
  datos.
- **Terminada cuando:** checklist de lanzamiento firmado, riesgos aceptados, soporte activo y
  metricas centradas en uso seguro, no en adiccion.

## Proximos cinco hitos

1. Sincronizar Culpa, los dos commits locales y estos documentos con GitHub.
2. Corregir cultivo de puntos, compatibilidad legacy, titulos y solapes moviles.
3. Elegir y comprobar legalmente el nuevo nombre.
4. Eliminar Diario Emo con migracion y prueba de copias version 1.
5. Validar el tramo inicial de Primaria con docentes antes de rediseñar el bucle.

## Regla de cierre para cada cambio

Todo cambio de estas fases debe incluir:

1. especificacion ligera cuando afecte comportamiento o datos;
2. copia o commit previo;
3. cambio de alcance pequeno;
4. `git diff --check`;
5. pruebas especificas;
6. `npm run test:progress-transfer`;
7. `npm run build`;
8. revision responsive proporcional;
9. commit independiente;
10. push y comprobacion de sincronizacion cuando el usuario lo autorice.
