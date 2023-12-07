# Endpoint: `GET /Clase/{id}`

Permite obtener información detallada sobre una clase específica mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la clase que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /Clase/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id": 1,
    "nombre": "ClaseA",
    "descripcion": "Descripción de la Clase A",
    "phylas": [
        {
            "id": 1,
            "nombre": "PhylaX",
            "descripcion": "Descripción del Phyla X"
        },
        {
            "id": 2,
            "nombre": "PhylaY",
            "descripcion": "Descripción del Phyla Y"
        }
    ]
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "La clase especificada no fue encontrada"
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
