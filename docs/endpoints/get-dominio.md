# Endpoint: `GET /dominio`

Recupera la lista de todos los dominios disponibles.

## Parámetros de URL
- No necesita parámetros.

## Ejemplo de Solicitud
```http
GET /dominio
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id": 1,
        "nombre_dominio": "Dominio1",
        "descripción": "Descripción del Dominio 1"
    },
    {
        "id": 2,
        "nombre_dominio": "Dominio2",
        "descripción": "Descripción del Dominio 2"
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
