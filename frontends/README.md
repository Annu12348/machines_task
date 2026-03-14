1. Google Authentication (Register & Login)

This project supports Google OAuth 2.0 authentication using Passport.js.
Separate flows are implemented for Google Register and Google Login to ensure proper account handling.

2. Environment Variables

Add the following variables in your .env file:

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REGISTER_CALLBACK_URL=http://localhost:5000/api/admin/google/register/callback
GOOGLE_LOGIN_CALLBACK_URL=http://localhost:5000/api/admin/google/login/callback
FRONTEND_URL=http://localhost:5173

3. Google Cloud Console Configuration

Go to Google Cloud Console → OAuth Client ID
Add the following Authorized Redirect URIs:
http://localhost:5000/api/admin/google/register/callback
http://localhost:5000/api/admin/google/login/callback

4. Google Register Flow
1️⃣ User clicks Google Register
Frontend redirects user to backend:
GET /api/admin/google/register
Frontend code example:
window.location.href = "http://localhost:5000/api/admin/google/register";

2️⃣ Passport Google Strategy Triggered
Backend route:
/google/register
Passport authenticates user with Google using:
scope: ["profile", "email"]
3️⃣ Google Authentication
User selects a Google account and grants permission.
Google then redirects to:
/api/admin/google/register/callback

4️⃣ Passport Extracts Profile

Passport extracts user details:
name
email
googleId
profile image
These details are passed to the controller.

5️⃣ Register Service Execution

Service checks if admin already exists:
findAdminByEmail(email)
Cases handled:
Case 1 — Admin does not exist
New admin account created
provider = "google"
Case 2 — Admin already exists
Error: Admin already exists. Please login with Google.

6️⃣ JWT Token Generation

After successful registration:
JWT token generated
Payload includes:
admin id
role

7️⃣ Cookie Stored

Token stored in HTTP-only cookie:
res.cookie("token", token)
Security options:
httpOnly: true
sameSite: lax
maxAge: 1 day

8️⃣ Redirect to Frontend

User is redirected to:
http://localhost:5173
User is now authenticated.

5. Google Login Flow
1️⃣ User clicks Google Login
Frontend redirects to:
GET /api/admin/google/login
Example:
window.location.href = "http://localhost:5000/api/admin/google/login";

2️⃣ Passport Login Strategy Triggered

Backend route:
/google/login
Passport initiates Google authentication.

3️⃣ Google Authentication

User selects their Google account.
Google redirects to:
/api/admin/google/login/callback

4️⃣ Profile Data Retrieved

Passport extracts:
name
email
googleId
profile image

5️⃣ Login Service Execution

Service checks if admin exists:
findAdminByEmail(email)
Cases handled:
Case 1 — Admin exists with Google
Login successful
Case 2 — Admin not found
Error: Admin not found. Please register with Google first.
Case 3 — Admin exists with email/password
Error: Account exists with email/password login

6️⃣ JWT Token Generation

JWT token generated with:
admin id
role

7️⃣ Cookie Stored

Token stored in:
adminToken cookie
Security settings:
httpOnly: true
sameSite: lax
maxAge: 1 day

8️⃣ Redirect to Frontend

User redirected to:
http://localhost:5173/
User is successfully logged in.


6. Security Implementation
The following security practices are implemented:
HTTP-only cookies for token storage
JWT authentication
Google OAuth 2.0
Provider-based login validation
Email uniqueness check
Role-based token payload

7. Authentication Routes
Google Register
GET /api/admin/google/register
GET /api/admin/google/register/callback
Google Login
GET /api/admin/google/login
GET /api/admin/google/login/callback


8. Technologies Used

Node.js
Express.js
Passport.js
Google OAuth 2.0
JWT
MongoDB
React