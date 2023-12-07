# Endpoint: `GET /especie`

Recupera la lista de todas las especies disponibles.

## Parámetros de URL
- No necesita parámetros.

## Ejemplo de Solicitud
```http
GET /especie
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id": 1,
        "nombre_especie": "Especie1",
        "descripción": "Descripción de la Especie 1"
    },
    {
        "id": 2,
        "nombre_especie": "Especie2",
        "descripción": "Descripción de la Especie 2"
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
