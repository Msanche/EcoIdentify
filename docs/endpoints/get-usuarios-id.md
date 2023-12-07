# Endpoint: `GET /usuarios/{id}`

Permite obtener información detallada sobre un usuario específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del usuario que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /usuario/123
```

## Respuesta Exitosa (Código 200 OK)
```json
{
        "id": 1,
        "nombre": "JuanPerez",
        "fecha_nacimiento": "1990-05-15",
        "contrasena": "clave123",
        "correo": "juan.perez@example.com"
    }
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el usuario."
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

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un usuario en específico.