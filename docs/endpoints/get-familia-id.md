# Endpoint: `GET /Familia/{id}`

Obtiene información detallada sobre una familia específica mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la familia que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /Familia/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id": 1,
    "nombre_familia": "Familia1",
    "descripción": "Descripción de la Familia 1"
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:
```json
{
    "errno": 404,
    "error": "not_found",
    "error_description": "La familia especificada no fue encontrada"
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