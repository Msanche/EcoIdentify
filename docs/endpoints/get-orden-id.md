# Endpoint: `GET /Orden/{id}`

Obtiene información detallada sobre una orden específica mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la orden que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /Orden/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id": 1,
    "nombre_orden": "Orden1",
    "descripción": "Descripción de la Orden 1"
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:
```json
{
    "errno": 404,
    "error": "not_found",
    "error_description": "La orden especificada no fue encontrada"
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