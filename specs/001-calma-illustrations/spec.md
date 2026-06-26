# Feature Specification: Calma Story Illustrations

**Feature Branch**: `001-calma-illustrations`

**Created**: 2026-06-24

**Status**: Draft

**Input**: User description: "Implementar las ilustraciones de los cuentos en la Isla Calma y usar esta mejora como prueba real del flujo Spec Kit, analizando si mejora, empeora o no cambia el trabajo."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Leer Calma Con Ilustraciones Reales (Priority: P1)

Como alumno que llega al cuento de Calma, quiero ver una ilustración narrativa real en cada página para comprender mejor qué le ocurre a Vega y cómo practica la calma.

**Why this priority**: Es el valor principal de la mejora. Calma dejará de depender de iconos provisionales y se alineará con la línea visual ya aprobada para Empatía, Ternura, Admiración y Alegría.

**Independent Test**: Abrir el cuento de Calma y recorrer sus seis páginas. Cada página debe mostrar una imagen cuadrada narrativa, sin texto integrado, coherente con el fragmento leído.

**Acceptance Scenarios**:

1. **Given** el cuento de Calma está disponible, **When** el alumno abre la primera página, **Then** ve una ilustración de Vega frente a una bahía tranquila que representa el inicio del relato.
2. **Given** el alumno avanza página a página, **When** llega a cualquier página del cuento, **Then** la imagen corresponde al texto y no aparece una composición de iconos como recurso principal.
3. **Given** el alumno llega a la última página, **When** completa el cuento, **Then** el progreso y el flujo hacia la siguiente actividad funcionan igual que antes.

---

### User Story 2 - Mantener Continuidad Visual de Vega (Priority: P2)

Como docente o creador de contenido de EMOPLAY, quiero que Vega tenga rasgos estables en todas las ilustraciones para que el cuento parezca un álbum infantil coherente.

**Why this priority**: La guía visual de cuentos exige una ficha de personajes antes de renovar un cuento. La continuidad evita que cada página parezca de una historia distinta.

**Independent Test**: Revisar la ficha visual y las seis imágenes juntas. Vega debe conservar edad, pelo, ropa, accesorios y expresividad general en todo el cuento.

**Acceptance Scenarios**:

1. **Given** se revisan los recursos de Calma, **When** se comparan las seis escenas, **Then** Vega se reconoce como la misma niña en todas las páginas.
2. **Given** existe una carpeta de recursos de Calma, **When** se inspecciona, **Then** contiene una referencia visual de personaje reutilizable.

---

### User Story 3 - Evaluar Spec Kit en una Mejora Real (Priority: P3)

Como responsable del proyecto, quiero saber si Spec Kit ayuda en una mejora visual concreta para decidir si merece la pena usarlo en futuras islas.

**Why this priority**: La prueba debe medir el valor del método, no solo entregar imágenes.

**Independent Test**: Comparar el trabajo realizado con los artefactos generados: especificación, plan, tareas, resultado integrado y validación final.

**Acceptance Scenarios**:

1. **Given** la mejora está terminada, **When** se revisan los artefactos de Spec Kit, **Then** queda claro qué se decidió, qué archivos se tocaron y cómo se verificó.
2. **Given** se evalúa el flujo, **When** se compara con una edición directa, **Then** se identifican beneficios, fricciones y recomendación de uso futuro.

### Edge Cases

- Si una imagen no carga, el lector debe conservar su recurso de respaldo para no dejar la página vacía.
- Si una imagen generada incluye texto, marcas o elementos confusos, debe descartarse o regenerarse antes de integrarse.
- Si una escena se aleja del texto del cuento, debe corregirse antes de considerarla final.
- Si el cambio rompe el progreso del cuento, la navegación o el desbloqueo posterior, la mejora no se considera válida.
- Si el flujo Spec Kit genera documentación excesiva para el tamaño de la mejora, esa fricción debe registrarse en la evaluación.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: El cuento de Calma MUST mostrar una ilustración narrativa real para cada una de sus seis páginas.
- **FR-002**: Las ilustraciones MUST representar las escenas existentes del cuento sin cambiar el texto narrativo aprobado.
- **FR-003**: Las ilustraciones MUST seguir la guía visual de EMOPLAY: álbum infantil contemporáneo, aspecto de gouache y lápiz de color, colores luminosos, sin texto, sin logos y sin estilo vectorial plano, anime, 3D plástico ni realismo fotográfico.
- **FR-004**: La mejora MUST incluir una referencia visual de Vega para mantener continuidad de personaje.
- **FR-005**: Las imágenes MUST tener formato cuadrado y ser aptas para ordenador, tableta y móvil.
- **FR-006**: El lector de cuentos MUST conservar el flujo actual de navegación, finalización, progreso local y acceso a la siguiente actividad.
- **FR-007**: Los iconos o composiciones provisionales de Calma MAY remain as fallback, but MUST NOT be the primary visual when the image is available.
- **FR-008**: La prueba MUST leave a written assessment of Spec Kit's usefulness for this specific EMOPLAY workflow.

### Key Entities *(include if feature involves data)*

- **Vega**: Protagonista del cuento de Calma; niña de Primaria con rasgos visuales estables en las seis páginas.
- **Calma Story Image**: Ilustración cuadrada asociada a una página concreta del cuento.
- **Character Reference**: Imagen o ficha visual que fija la apariencia de Vega para futuras correcciones.
- **Spec Kit Assessment**: Evaluación final que compara el flujo Spec Kit con una edición directa.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Las 6 páginas del cuento de Calma muestran una imagen narrativa propia.
- **SC-002**: Los 7 recursos esperados de Calma existen: 1 referencia de personaje y 6 escenas.
- **SC-003**: Todas las imágenes integradas se cargan con respuesta correcta desde la app local.
- **SC-004**: La compilación de la app termina correctamente.
- **SC-005**: La revisión final identifica al menos 2 beneficios y 1 fricción o límite del flujo Spec Kit.
- **SC-006**: No se modifica el texto del cuento, el orden de desbloqueo, las recompensas, los retos ni el progreso guardado de Calma.

## Assumptions

- El texto actual de "La bahía que respiraba despacio" se mantiene sin reescritura.
- Vega será el único personaje principal con continuidad estricta; el grupo de clase puede aparecer de forma secundaria.
- Las imágenes se guardarán dentro de la carpeta de recursos del proyecto para que funcionen sin depender de enlaces externos.
- Esta prueba usa Spec Kit como soporte de planificación, no como sustituto del criterio visual humano.
