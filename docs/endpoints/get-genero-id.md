# Endpoint: `GET /Genero/{id}`

Obtiene información detallada sobre un género específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del género que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /Genero/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id": 1,
    "nombre_genero": "Genero1",
    "descripción": "Descripción del Género 1"
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:
```json
{
    "errno": 404,
    "error": "not_found",
    "error_description": "El género especificado no fue encontrado"
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
