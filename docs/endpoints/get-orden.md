# Endpoint: `GET /Orden`

Recupera la lista de todas las órdenes disponibles.

## Parámetros de URL
- No necesita parámetros.

## Ejemplo de Solicitud
```http
GET /Orden
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id": 1,
        "nombre_orden": "Orden1",
        "descripción": "Descripción de la Orden 1"
    },
    {
        "id": 2,
        "nombre_orden": "Orden2",
        "descripción": "Descripción de la Orden 2"
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


