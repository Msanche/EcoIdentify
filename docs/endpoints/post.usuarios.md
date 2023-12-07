# Endpoint: `POST /usuarios`

Permite obtener información detallada sobre todos los usuarios.

## Parámetros de URL
- No necesita parámetros.

## Ejemplo de Solicitud
```http
POST /usuarios
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id": 3,
    "nombre": "NuevoUsuario",
    "fecha_nacimiento": "1995-10-20",
    "contrasena": "nuevaclave789",
    "correo": "nuevo.usuario@example.com"
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

