INSERT INTO users (username, auth_id, avatar) 
VALUES ($1, $2, $3)
RETURNING *;