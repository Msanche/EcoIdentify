# Endpoint: `GET /Publicaciones/{id}`

Obtiene información detallada sobre una publicación específica mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la publicación que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /Publicaciones/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id": 1,
    "titulo": "Publicación 1",
    "contenido": "Contenido de la Publicación 1"
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:
```json
{
    "errno": 404,
    "error": "not_found",
    "error_description": "La publicación especificada no fue encontrada"
}
```

- Código 500 Internal Server Error:
```json
{
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
}
```