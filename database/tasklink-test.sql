CREATE DATABASE IF NOT EXISTS tasklink_test;
USE tasklink_test;

-- ===========================
-- TABLE: users
-- ===========================

CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role ENUM('ADMIN', 'CLIENT', 'WORKER') NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    profile_picture_url VARCHAR(2083),
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ===========================
-- TABLE: worker_profiles
-- ===========================

CREATE TABLE worker_profiles (
    user_id BIGINT PRIMARY KEY,
    profession_title VARCHAR(150),
    bio TEXT,
    verification_status ENUM('PENDING', 'VERIFIED', 'REJECTED'),
    total_earnings DECIMAL(10,2) DEFAULT 0.00,
    average_rating DECIMAL(3,2) DEFAULT 0.00,
    FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) ENGINE=InnoDB;

-- ===========================
-- TABLE: categories
-- ===========================

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT
) ENGINE=InnoDB;

-- ===========================
-- TABLE: tasks
-- ===========================

CREATE TABLE tasks (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    client_id BIGINT NOT NULL,
    assigned_worker_id BIGINT,
    category_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    budget DECIMAL(10,2) NOT NULL,
    deadline DATETIME NOT NULL,
    status ENUM('OPEN', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED') NOT NULL DEFAULT 'OPEN',
    
    FOREIGN KEY (client_id) REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (assigned_worker_id) REFERENCES users(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE,

    FOREIGN KEY (category_id) REFERENCES categories(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) ENGINE=InnoDB;

-- ===========================
-- TABLE: bids
-- ===========================

CREATE TABLE bids (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    task_id BIGINT NOT NULL,
    worker_id BIGINT NOT NULL,
    bid_amount DECIMAL(10,2) NOT NULL,
    status ENUM('PENDING', 'ACCEPTED', 'REJECTED', 'CANCELLED') NOT NULL DEFAULT 'PENDING',

    FOREIGN KEY (task_id) REFERENCES tasks(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (worker_id) REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) ENGINE=InnoDB;

-- ===========================
-- TABLE: reviews
-- ===========================

CREATE TABLE reviews (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    task_id BIGINT NOT NULL,
    reviewer_id BIGINT NOT NULL,
    reviewee_id BIGINT NOT NULL,
    rating TINYINT NOT NULL,
    comment TEXT,

    FOREIGN KEY (task_id) REFERENCES tasks(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (reviewer_id) REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (reviewee_id) REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) ENGINE=InnoDB;

-- ===========================
-- TABLE: worker_documents
-- ===========================

CREATE TABLE worker_documents (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    worker_id BIGINT NOT NULL,
    document_name VARCHAR(255) NOT NULL,
    document_url VARCHAR(2083) NOT NULL,

    FOREIGN KEY (worker_id) REFERENCES worker_profiles(user_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) ENGINE=InnoDB;

-- ===========================
-- TABLE: skills
-- ===========================

CREATE TABLE skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

-- ===========================
-- TABLE: worker_skills
-- ===========================

CREATE TABLE worker_skills (
    worker_id BIGINT NOT NULL,
    skill_id INT NOT NULL,

    PRIMARY KEY(worker_id, skill_id),

    FOREIGN KEY (worker_id) REFERENCES worker_profiles(user_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (skill_id) REFERENCES skills(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) ENGINE=InnoDB;
select * from users;

