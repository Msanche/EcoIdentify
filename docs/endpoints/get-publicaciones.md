# Endpoint: `GET /Publicaciones`

Recupera la lista de todas las publicaciones disponibles.

## Parámetros de URL
- No necesita parámetros.

## Ejemplo de Solicitud
```http
GET /Publicaciones
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id": 1,
        "titulo": "Publicación 1",
        "contenido": "Contenido de la Publicación 1"
    },
    {
        "id": 2,
        "titulo": "Publicación 2",
        "contenido": "Contenido de la Publicación 2"
    }
]
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

