# Endpoint: `GET /Fotos`

Recupera la lista de todas las fotos disponibles.

## Parámetros de URL
- No necesita parámetros.

## Ejemplo de Solicitud
```http
GET /Fotos
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id": 1,
        "imagen": "Contenido de la imagen codificado en base64"
    },
    {
        "id": 2,
        "imagen": "Contenido de la imagen codificado en base64"
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

