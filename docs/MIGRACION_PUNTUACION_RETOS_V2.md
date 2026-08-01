# Migracion de puntuacion de retos v2

La version 2 del progreso incorpora `scoredChallengeIds`. Cada identificador valido del catalogo
puede modificar los puntos globales una sola vez. La comprobacion y el registro se realizan dentro
de la misma actualizacion funcional del estado del jugador.

## Regla de migracion

Al cargar progreso local o importar una copia anterior se consideran ya puntuados:

1. Los identificadores validos que ya aparezcan en `scoredChallengeIds`.
2. Los identificadores validos encontrados en las respuestas de informes locales guardados.
3. Todos los retos pertenecientes a una isla incluida en `completedChallengeIds`, tambien cuando
   esa finalizacion solo aparece en las claves legacy de una copia version 1.

Los identificadores que no existan en el catalogo actual se descartan. Si un progreso antiguo no
permite reconstruir una respuesta parcial, no se inventa ningun identificador y se conserva
literalmente su total de puntos. Nunca se recalculan, reducen ni reinician los puntos historicos.

Las copias nuevas se escriben como version 2. El importador acepta versiones 1 y 2; una copia de
version 1 se normaliza inmediatamente con las reglas anteriores y queda representada internamente
como version 2.
