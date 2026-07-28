# Especificacion: Exportar e importar progreso

**Feature**: `007-progress-transfer`  
**Creada**: 2026-07-28  
**Estado**: Completada

## Objetivo

Permitir que una persona mueva el progreso de EMOPLAY entre ordenadores, tablets o moviles sin servidor externo. La copia debe viajar como archivo JSON, restaurar jugador, avatar, diario y datos locales compatibles, y proteger al usuario frente a archivos corruptos o incompatibles.

## Alcance

- Anadir exportacion de progreso desde la app.
- Anadir importacion de progreso con validacion previa y confirmacion.
- Crear copia de seguridad local antes de sobrescribir datos.
- Sincronizar claves principales y legacy de `localStorage`.
- No alterar cuentos, retos, islas ni recursos visuales.

## Datos incluidos

- `emoplay:player`
- `emoplay_avatarDiceBearConfig`
- `emoplay:diaryEntries`
- Informes locales de retos con prefijo `informe_`
- Compatibilidad legacy: cuentos, retos, minijuegos, puntos e islas completadas

## Criterios de aceptacion

1. El usuario puede descargar una copia JSON desde `Mi perfil`.
2. El usuario puede seleccionar una copia JSON y ver un resumen antes de restaurarla.
3. La app rechaza archivos vacios, corruptos, demasiado grandes o no pertenecientes a EMOPLAY.
4. Al confirmar la importacion se guarda una copia local previa bajo `emoplay:progressImportBackup:last`.
5. La restauracion actualiza jugador, avatar, diario, informes y claves legacy coherentes.
6. La app compila correctamente y existe una comprobacion automatizada proporcional del modulo.

## Limites

- No se anade sincronizacion en nube.
- No se crean cuentas de alumno.
- No se modifica contenido de islas.
