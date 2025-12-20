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
backend/
│
├── src/
│   ├── main/
│   │   ├── java/com/yourapp/
│   │   │   ├── config/                     # Configuration classes
│   │   │   │   ├── WebConfig.java          # CORS, static resources
│   │   │   │   └── SecurityConfig.java     # JWT/Security setup (optional)
│   │   │   │
│   │   │   ├── controller/                 # REST controllers (API endpoints)
│   │   │   │   ├── auth/                   # Authentication (Login, Signup)
│   │   │   │   │   ├── AuthController.java
│   │   │   │   │   └── JwtController.java  # (optional)
│   │   │   │   │
│   │   │   │   ├── user/                   # User-related endpoints
│   │   │   │   │   ├── UserController.java
│   │   │   │   │   ├── TaskController.java
│   │   │   │   │   └── ReviewController.java
│   │   │   │   │
│   │   │   │   ├── worker/                 # Worker-related endpoints
│   │   │   │   │   ├── WorkerController.java
│   │   │   │   │   ├── BidController.java
│   │   │   │   │   └── ProfileController.java
│   │   │   │   │
│   │   │   │   └── admin/                  # Admin panel endpoints
│   │   │   │       ├── AdminController.java
│   │   │   │       ├── ManageUserController.java
│   │   │   │       └── ManageTaskController.java
│   │   │   │
│   │   │   ├── model/                      # Entity classes (JPA)
│   │   │   │   ├── User.java
│   │   │   │   ├── Worker.java
│   │   │   │   ├── Task.java
│   │   │   │   ├── Bid.java
│   │   │   │   └── Review.java
│   │   │   │
│   │   │   ├── repository/                 # JPA repositories
│   │   │   │   ├── UserRepository.java
│   │   │   │   ├── WorkerRepository.java
│   │   │   │   ├── TaskRepository.java
│   │   │   │   ├── BidRepository.java
│   │   │   │   └── ReviewRepository.java
│   │   │   │
│   │   │   ├── service/                    # Business logic layer
│   │   │   │   ├── UserService.java
│   │   │   │   ├── WorkerService.java
│   │   │   │   ├── TaskService.java
│   │   │   │   ├── BidService.java
│   │   │   │   └── ReviewService.java
│   │   │   │
│   │   │   ├── dto/                        # Data Transfer Objects (API request/response)
│   │   │   │   ├── AuthRequest.java
│   │   │   │   ├── AuthResponse.java
│   │   │   │   └── UserDTO.java
│   │   │   │
│   │   │   ├── exception/                  # Centralized error handling
│   │   │   │   ├── GlobalExceptionHandler.java
│   │   │   │   └── ResourceNotFoundException.java
│   │   │   │
│   │   │   └── YourAppApplication.java     # Main Spring Boot class
│   │   │
│   │   └── resources/
│   │       ├── application.properties      # DB + app configuration
│   │       └── data.sql                    # (Optional) Seed data
│   │
│   └── test/                               # Unit & integration testing
│
└── pom.xml                                 # Maven dependencies
```

