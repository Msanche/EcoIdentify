# Endpoint: `GET /Fotos/{id}`

Obtiene información detallada sobre una foto específica mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la foto que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /Fotos/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id": 1,
    "imagen": "Contenido de la imagen codificado en base64"
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:
```json
{
    "errno": 404,
    "error": "not_found",
    "error_description": "La foto especificada no fue encontrada"
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
