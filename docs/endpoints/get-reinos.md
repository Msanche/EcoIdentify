# Endpoint: `GET /Reinos`

Recupera la lista de todos los reinos disponibles.

## Parámetros de URL
- No necesita parámetros.

## Ejemplo de Solicitud
```http
GET /Reinos
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id": 1,
        "nombre_reinos": "Reino1",
        "descripción": "Descripción del Reino 1"
    },
    {
        "id": 2,
        "nombre_reinos": "Reino2",
        "descripción": "Descripción del Reino 2"
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

