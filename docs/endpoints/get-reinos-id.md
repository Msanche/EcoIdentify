
# Endpoint: `GET /Reinos/{id}`

Obtiene información detallada sobre un reino específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del reino que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /Reinos/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id": 1,
    "nombre_reinos": "Reino1",
    "descripción": "Descripción del Reino 1"
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:
```json
{
    "errno": 404,
    "error": "not_found",
    "error_description": "El reino especificado no fue encontrado"
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