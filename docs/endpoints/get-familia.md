# Endpoint: `GET /Familia`

Recupera la lista de todas las familias disponibles.

## Parámetros de URL
- No necesita parámetros.

## Ejemplo de Solicitud
```http
GET /Familia
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id": 1,
        "nombre_familia": "Familia1",
        "descripción": "Descripción de la Familia 1"
    },
    {
        "id": 2,
        "nombre_familia": "Familia2",
        "descripción": "Descripción de la Familia 2"
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


