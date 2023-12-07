# Endpoint: `POST /Publicaciones`

Crea una nueva publicación.

## Parámetros de URL
- No necesita parámetros.

## Ejemplo de Solicitud
```http
POST /Publicaciones
```

## Cuerpo de la Solicitud
```json
{
    "titulo": "Nuevo Post",
    "contenido": "Contenido del nuevo post"
}
```
## Respuesta Exitosa (Código 200 OK)
```json
{
"id": 3,
"titulo": "Nuevo Post",
"contenido": "Contenido del nuevo post"
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