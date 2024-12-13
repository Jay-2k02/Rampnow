package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strings"

	"github.com/golang-jwt/jwt/v4"
	_ "github.com/lib/pq"
	"github.com/rs/cors"
)

type User struct {
	ID        int    `json:"id"`
	Name      string `json:"name"`
	Email     string `json:"email"`
	Role      string `json:"role"`
	CreatedAt string `json:"created_at"`
	UpdatedAt string `json:"updated_at"`
}

const sharedSecret = "your_shared_secret_here"

// Function to parse and validate JWT
func validateJWT(tokenString string) (*jwt.Token, error) {
	// Parse the JWT token
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// Check if the token's signing method matches our expected method (HS256)
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		// Return the shared secret key to validate the token
		return []byte(sharedSecret), nil
	})
	if err != nil {
		return nil, fmt.Errorf("failed to parse JWT: %v", err)
	}
	return token, nil
}

func main() {
	// Database connection string (replace with your credentials)
	connStr := "user=postgres dbname=user_db sslmode=disable password=postgres"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal("Error opening database: ", err)
	}
	defer db.Close()

	// Verify database connection
	err = db.Ping()
	if err != nil {
		log.Fatal("Error connecting to the database: ", err)
	}
	fmt.Println("Successfully connected to the database")

	// Create a new HTTP multiplexer
	httpMux := http.NewServeMux()

	// Middleware for JWT Authentication
	httpMux.HandleFunc("/create-user", func(w http.ResponseWriter, r *http.Request) {
		// Check if the Authorization header is present
		authHeader := r.Header.Get("Authorization")
		if authHeader == "" {
			http.Error(w, "Authorization header is missing", http.StatusUnauthorized)
			return
		}

		// Extract the token from the header
		tokenString := strings.TrimPrefix(authHeader, "Bearer ")
		if tokenString == authHeader {
			http.Error(w, "Authorization header format is 'Bearer {token}'", http.StatusUnauthorized)
			return
		}

		// Validate the JWT token
		token, err := validateJWT(tokenString)
		if err != nil || !token.Valid {
			http.Error(w, "Invalid or expired token", http.StatusUnauthorized)
			return
		}

		// Parse the JSON body from the request
		var user User
		err = json.NewDecoder(r.Body).Decode(&user)
		if err != nil {
			http.Error(w, "Invalid JSON format", http.StatusBadRequest)
			return
		}

		// Insert the user into the PostgreSQL database
		_, err = db.Exec(
			"INSERT INTO user_data (name, email, role, created_at, updated_at) VALUES ($1, $2, $3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)",
			user.Name, user.Email, user.Role,
		)
		if err != nil {
			http.Error(w, fmt.Sprintf("Error inserting user: %v", err), http.StatusInternalServerError)
			return
		}

		// Send a success response
		w.WriteHeader(http.StatusCreated)
		w.Write([]byte("User created successfully"))
	})

	httpMux.HandleFunc("/get-users", func(w http.ResponseWriter, r *http.Request) {
		// Check if the Authorization header is present
		authHeader := r.Header.Get("Authorization")
		if authHeader == "" {
			http.Error(w, "Authorization header is missing", http.StatusUnauthorized)
			return
		}

		// Extract the token from the header
		tokenString := strings.TrimPrefix(authHeader, "Bearer ")
		if tokenString == authHeader {
			http.Error(w, "Authorization header format is 'Bearer {token}'", http.StatusUnauthorized)
			return
		}

		// Validate the JWT token
		token, err := validateJWT(tokenString)
		if err != nil || !token.Valid {
			http.Error(w, "Invalid or expired token", http.StatusUnauthorized)
			return
		}

		// Query to get all users
		rows, err := db.Query("SELECT id, name, email, role, created_at, updated_at FROM user_data")
		if err != nil {
			http.Error(w, fmt.Sprintf("Error fetching users: %v", err), http.StatusInternalServerError)
			return
		}
		defer rows.Close()

		// Prepare a slice to hold users
		var users []User

		// Loop through the results
		for rows.Next() {
			var user User
			err := rows.Scan(&user.ID, &user.Name, &user.Email, &user.Role, &user.CreatedAt, &user.UpdatedAt)
			if err != nil {
				http.Error(w, fmt.Sprintf("Error scanning user: %v", err), http.StatusInternalServerError)
				return
			}
			users = append(users, user)
		}

		// Return the users as JSON
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(users)
	})

	// Update user route (PUT)
	httpMux.HandleFunc("/update-user", func(w http.ResponseWriter, r *http.Request) {
		// Check if the Authorization header is present
		authHeader := r.Header.Get("Authorization")
		if authHeader == "" {
			http.Error(w, "Authorization header is missing", http.StatusUnauthorized)
			return
		}

		// Extract the token from the header
		tokenString := strings.TrimPrefix(authHeader, "Bearer ")
		if tokenString == authHeader {
			http.Error(w, "Authorization header format is 'Bearer {token}'", http.StatusUnauthorized)
			return
		}

		// Validate the JWT token
		token, err := validateJWT(tokenString)
		if err != nil || !token.Valid {
			http.Error(w, "Invalid or expired token", http.StatusUnauthorized)
			return
		}

		// Parse the user ID and data from the request
		var user User
		err = json.NewDecoder(r.Body).Decode(&user)
		if err != nil {
			http.Error(w, "Invalid JSON format", http.StatusBadRequest)
			return
		}

		// Update the user in the database
		_, err = db.Exec(
			"UPDATE user_data SET name = $1, email = $2, role = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4",
			user.Name, user.Email, user.Role, user.ID,
		)
		if err != nil {
			http.Error(w, fmt.Sprintf("Error updating user: %v", err), http.StatusInternalServerError)
			return
		}

		// Send a success response
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("User updated successfully"))
	})

	// Delete user route (DELETE)
	httpMux.HandleFunc("/delete-user", func(w http.ResponseWriter, r *http.Request) {
		// Check if the Authorization header is present
		authHeader := r.Header.Get("Authorization")
		if authHeader == "" {
			http.Error(w, "Authorization header is missing", http.StatusUnauthorized)
			return
		}

		// Extract the token from the header
		tokenString := strings.TrimPrefix(authHeader, "Bearer ")
		if tokenString == authHeader {
			http.Error(w, "Authorization header format is 'Bearer {token}'", http.StatusUnauthorized)
			return
		}

		// Validate the JWT token
		token, err := validateJWT(tokenString)
		if err != nil || !token.Valid {
			http.Error(w, "Invalid or expired token", http.StatusUnauthorized)
			return
		}

		// Get user ID from the URL
		userID := r.URL.Query().Get("id")
		if userID == "" {
			http.Error(w, "User ID is missing", http.StatusBadRequest)
			return
		}

		// Delete the user from the database
		_, err = db.Exec("DELETE FROM user_data WHERE id = $1", userID)
		if err != nil {
			http.Error(w, fmt.Sprintf("Error deleting user: %v", err), http.StatusInternalServerError)
			return
		}

		// Send a success response
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("User deleted successfully"))
	})

	// Create a CORS handler to allow all origins, methods, and headers
	corsHandler := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"}, // Allow all origins
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"*"}, // Allow all headers
		AllowCredentials: false,         // Disable credentials
	})

	// Wrap the HTTP multiplexer with the CORS handler
	handler := corsHandler.Handler(httpMux)

	// Start the server
	fmt.Println("Server is running on port 8080...")
	log.Fatal(http.ListenAndServe(":8080", handler))
}
