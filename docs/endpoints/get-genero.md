# Endpoint: `GET /Genero`

Recupera la lista de todos los géneros disponibles.

## Parámetros de URL
- No necesita parámetros.

## Ejemplo de Solicitud
```http
GET /Genero
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id": 1,
        "nombre_genero": "Genero1",
        "descripción": "Descripción del Género 1"
    },
    {
        "id": 2,
        "nombre_genero": "Genero2",
        "descripción": "Descripción del Género 2"
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

