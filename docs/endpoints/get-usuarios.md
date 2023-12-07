# Endpoint: `GET /usuarios`

Muestra información sobre todos los usuarios.

## Parámetros de URL
no necesita parametros 

## Ejemplo de Solicitud
```http
GET /usuario
```

## Respuesta Exitosa (Código 200 OK)
```json
    {
        "id": 1,
        "nombre": "JuanPerez",
        "fecha_nacimiento": "1990-05-15",
        "contrasena": "clave123",
        "correo": "juan.perez@example.com"
    },
    {
        "id": 2,
        "nombre": "MariaGomez",
        "fecha_nacimiento": "1985-08-22T00:00:00.000Z",
        "contrasena": "contraseña456",
        "correo": "maria.gomez@example.com"
    }
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