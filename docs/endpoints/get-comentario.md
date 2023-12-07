# Endpoint: `GET /comentario`

Recupera la lista de todos los comentarios disponibles.

## Parámetros de URL
- No necesita parámetros.

## Ejemplo de Solicitud
```http
GET /comentario
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id": 1,
        "comentario": "Este es un comentario",
        "id_publicacion": 123,
        "id_usuario": 456
    },
    {
        "id": 2,
        "comentario": "Otro comentario interesante",
        "id_publicacion": 789,
        "id_usuario": 101
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
