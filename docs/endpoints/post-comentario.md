# Endpoint: `POST /comentario`

Crea un nuevo comentario.

## Parámetros de URL
- No necesita parámetros.

## Ejemplo de Solicitud
```http
POST /comentario
```

## Cuerpo de la Solicitud
```json
{
    "comentario": "Nuevo comentario",
    "id_publicacion": 456,
    "id_usuario": 789
}
```
## Respuesta Exitosa (Código 200 OK)
```json
{
"id": 3,
"comentario": "Nuevo comentario",
"id_publicacion": 456,
"id_usuario": 789
}
```

## Respuestas de Errores Posibles
- Código 500 Internal Server Error:
```json
{
"errno": 500,
"error": "internal_error",
"error_description": "Ocurrió un problema para procesar la solicitud"
}
```