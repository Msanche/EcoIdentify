# Endpoint: `GET /Phyla`

Recupera la lista de todos los phyla disponibles.

## Parámetros de URL
- No necesita parámetros.

## Ejemplo de Solicitud
```http
GET /Phyla
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id": 1,
        "nombre_phyla": "Phylum1",
        "descripción": "Descripción del Phylum 1"
    },
    {
        "id": 2,
        "nombre_phyla": "Phylum2",
        "descripción": "Descripción del Phylum 2"
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
