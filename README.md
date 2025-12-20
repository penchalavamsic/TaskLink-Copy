## 📁 Frontend Folder Structure

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

