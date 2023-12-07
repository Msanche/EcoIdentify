# Endpoint: `GET /comentario/{id}`

Obtiene información detallada sobre un comentario específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del comentario que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /comentario/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id": 1,
    "comentario": "Este es un comentario",
    "id_publicacion": 123,
    "id_usuario": 456
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:
  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "El comentario especificado no fue encontrado"
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
