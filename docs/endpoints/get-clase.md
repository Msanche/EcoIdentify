# Endpoint: `GET /Clase`

Permite recuperar la lista de todas las clases disponibles.

## Parámetros de URL
- No necesita parámetros.

## Ejemplo de Solicitud
```http
GET /Clase
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id": 1,
        "nombre": "ClaseA",
        "descripcion": "Descripción de la Clase A"
    },
    {
        "id": 2,
        "nombre": "ClaseB",
        "descripcion": "Descripción de la Clase B"
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
