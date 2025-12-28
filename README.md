## Frontend Folder Structure

```bash
src/
│
├── assets/                          # Images, icons, static files
│   └── avatar_placeholder.png      
│
├── components/                      # Reusable UI components
│   ├── Sidebar.jsx
│   ├── Header.jsx
│   ├── StatCard.jsx
│   ├── QuickActions.jsx
│   ├── TaskCard.jsx
│   └── Button.jsx
│
├── context/                         # Global state (Theme, Auth, etc.)
│   └── ThemeContext.jsx            
│
├── modules/                         # Role-based architecture
│   │
│   ├── authentication/              # Login & Signup
│   │   ├── Login.jsx
│   │   └── SignUp.jsx
│   │
│   ├── user/                        # User Module
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx        
│   │   │   ├── MyTasks.jsx          
│   │   │   ├── PostTask.jsx         
│   │   │   ├── TaskDetail.jsx       
│   │   │   ├── Profile.jsx          
│   │   │   └── Reviews.jsx          
│   │   └── UserLayout.jsx
│   │
│   ├── worker/                      # Worker Module
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx        
│   │   │   ├── BrowseTasks.jsx      
│   │   │   ├── MyBids.jsx           
│   │   │   ├── TaskDetail.jsx       
│   │   │   └── Profile.jsx          
│   │   └── WorkerLayout.jsx
│   │
│   └── admin/                       # Admin Module
│       ├── pages/
│       │   ├── Dashboard.jsx        
│       │   ├── ManageTasks.jsx      
│       │   ├── ManageUsers.jsx      
│       │   ├── WorkerVerification.jsx
│       │   └── AdminProfile.jsx     
│       └── AdminLayout.jsx
│
├── utils/                            # Helper functions
│   └── formatDate.js
│
├── styles/                           # Global project-wide styles
│   ├── global.css                  
│   └── theme.css                   
│
├── App.jsx                           # Root App component
├── main.jsx                          # Entry point for React
└── index.css                         # Base styles
```

## Backend Folder Structure

```bash
backend/                                # Backend project root
├── mvnw                                # Maven wrapper (run Maven without installing)
├── mvnw.cmd                            # Maven wrapper for Windows
├── pom.xml                             # Maven dependencies + project build config
├── HELP.md                             # Auto-generated help file
│
├── src/                                # All source code (main + tests)
│   ├── main/                           # Main application code (runs in production)
│   │   ├── java/                       # Java source files
│   │   │   └── com/
│   │   │       └── tasklink/
│   │   │           └── backend/
│   │   │               ├── config/     # Application configuration (CORS, Security)
│   │   │               │   ├── WebConfig.java
│   │   │               │   └── SecurityConfig.java
│   │   │               │
│   │   │               ├── controller/ # API endpoints (request handling)
│   │   │               │   ├── auth/   # Login, signup, JWT auth
│   │   │               │   │   ├── AuthController.java
│   │   │               │   │   └── JwtController.java
│   │   │               │   │
│   │   │               │   ├── user/   # Controllers for users
│   │   │               │   │   ├── UserController.java
│   │   │               │   │   ├── TaskController.java
│   │   │               │   │   └── ReviewController.java
│   │   │               │   │
│   │   │               │   ├── worker/ # Controllers for workers & bidding
│   │   │               │   │   ├── WorkerController.java
│   │   │               │   │   ├── BidController.java
│   │   │               │   │   └── ProfileController.java
│   │   │               │   │
│   │   │               │   └── admin/  # Admin panel APIs
│   │   │               │       ├── AdminController.java
│   │   │               │       ├── ManageUserController.java
│   │   │               │       └── ManageTaskController.java
│   │   │               │
│   │   │               ├── model/      # Entity models (database tables as classes)
│   │   │               │   ├── User.java
│   │   │               │   ├── Worker.java
│   │   │               │   ├── Task.java
│   │   │               │   ├── Bid.java
│   │   │               │   └── Review.java
│   │   │               │
│   │   │               ├── repository/ # Database access layer (JPA interface)
│   │   │               │   ├── UserRepository.java
│   │   │               │   ├── WorkerRepository.java
│   │   │               │   ├── TaskRepository.java
│   │   │               │   ├── BidRepository.java
│   │   │               │   └── ReviewRepository.java
│   │   │               │
│   │   │               ├── service/    # Business logic (between controller & repo)
│   │   │               │   ├── UserService.java
│   │   │               │   ├── WorkerService.java
│   │   │               │   ├── TaskService.java
│   │   │               │   ├── BidService.java
│   │   │               │   └── ReviewService.java
│   │   │               │
│   │   │               ├── dto/        # Request/response objects sent through API
│   │   │               │   ├── AuthRequest.java
│   │   │               │   ├── AuthResponse.java
│   │   │               │   └── UserDTO.java
│   │   │               │
│   │   │               ├── exception/  # Custom exceptions + centralized error handling
│   │   │               │   ├── GlobalExceptionHandler.java
│   │   │               │   └── ResourceNotFoundException.java
│   │   │               │
│   │   │               └── TaskLinkBackendApplication.java  # Main Spring Boot starter
│   │   │
│   │   └── resources/                  # Configuration & resource files
│   │       ├── application.properties  # Database + Spring Boot settings
│   │       ├── static/                 # Static assets (images/js/css) if needed
│   │       └── templates/              # HTML templates (if using Thymeleaf)
│   │
│   └── test/                           # Automated tests
│       └── java/
│           └── com/
│               └── tasklink/
│                   └── backend/
│                       └── TaskLinkBackendApplicationTests.java
│
└── target/                             # Build output (generated on compile)

```

