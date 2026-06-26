# Plan de implementacion: Ilustraciones del cuento de Miedo

**Feature**: `002-miedo-illustrations` | **Fecha**: 2026-06-26 | **Especificacion**: [spec.md](./spec.md)

## Resumen

Se añadira una referencia estable de Leo y seis ilustraciones cuadradas para `La linterna de la cueva suave`. La integracion reutiliza el lector de cuentos actual: solo se añaden recursos estaticos y sus rutas `imageSrc`; los iconos existentes quedan como respaldo.

## Contexto tecnico

- **Stack**: React 19 y Vite 8, sin dependencias nuevas.
- **Recursos**: JPG en `public/images/stories/miedo/`, objetivo 900 x 900 px y peso practico para carga local.
- **Datos**: rutas en `src/data/storyIllustrations.js`.
- **Validacion**: compilacion, comprobacion de recursos locales, recorrido real del cuento y revision de continuidad.
- **Alcance protegido**: no cambiar `stories.js`, progreso, retos, recompensas, minijuegos, almacenamiento local ni panel docente.

## Comprobacion de la constitucion

- **Seguridad educativa y privacidad**: se representa un miedo cotidiano y manejable; no se tratan datos personales.
- **Experiencia de juego**: se sustituye la solucion provisional por arte narrativo sin cambiar pantallas ni controles.
- **Progreso existente**: no se modifica ningun dato persistente.
- **Modelo de aprendizaje**: el miedo se presenta como señal de cuidado y oportunidad para pedir apoyo.
- **Calidad visual**: se seguira la guia visual del proyecto y se revisara cada imagen antes de integrarla.
- **Arquitectura actual**: se reutilizan la carpeta de recursos y el modelo `storyIllustrations` existentes.
- **Diseño adaptable**: las imagenes siguen el contrato cuadrado que el lector ya adapta a escritorio, tableta y movil.

## Estructura afectada

```text
public/images/stories/miedo/
├── personajes-referencia.jpg
├── pagina-1-niebla-del-camino.jpg
├── pagina-2-linterna-pequena.jpg
├── pagina-3-cuerpo-avisa.jpg
├── pagina-4-pedir-ayuda.jpg
├── pagina-5-plan-seguro.jpg
└── pagina-6-camino-iluminado.jpg

src/data/storyIllustrations.js
specs/002-miedo-illustrations/
```

## Estrategia

1. Fijar la apariencia de Leo y los elementos recurrentes de la historia.
2. Generar una referencia y una escena por pagina con el mismo estilo editorial infantil.
3. Revisar las siete imagenes como secuencia para descartar discontinuidades, texto o un tono demasiado intenso.
4. Optimizar los recursos y asociar las rutas a los registros ya existentes.
5. Validar compilacion, carga de archivos y recorrido completo en la app.
6. Registrar el resultado en Git como un hito separado y reversible.
