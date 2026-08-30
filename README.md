<div align="center">

# 🎓 Sanjivani College Student Portal

### A student-focused digital portal for FY Computer Engineering students.

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/LocalStorage-Browser--Based-6B7280?style=for-the-badge" alt="LocalStorage">
  <img src="https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify">
</p>

<p>
  <a href="https://sanjivanicollege.netlify.app/">
    <img src="https://img.shields.io/badge/🚀%20LIVE%20DEMO-Visit%20Website-2563EB?style=for-the-badge" alt="Live Demo">
  </a>

  <a href="https://github.com/PrathameshHon/SanjivaniCollege">
    <img src="https://img.shields.io/badge/💻%20SOURCE%20CODE-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="Source Code">
  </a>
</p>

</div>

---

# 🌐 Live Demo

<div align="center">

## 🚀 Try It Yourself

Experience the **Sanjivani College Student Portal** directly in your browser.

<br>

<a href="https://sanjivanicollege.netlify.app/">
  <img src="https://img.shields.io/badge/🚀%20OPEN%20LIVE%20WEBSITE-2563EB?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Open Live Website">
</a>

<br><br>

**Live Website:**
https://sanjivanicollege.netlify.app/

</div>

---

# 📸 Application Preview

<div align="center">

### 🔐 FY Computer Portal

<img src="![Uploading ChatGPT Image Aug 27, 2026, 01_55_47 PM.png…]()
" width="850" alt="FY Computer Portal">

<br><br>
</div>

> 📌 **Note:** Replace the screenshot paths above with your actual screenshot filenames.

---

# 📌 About The Project

**Sanjivani College Student Portal** is a lightweight web application designed to provide a simple digital interface for students of **Sanjivani College of Engineering**.

The current application provides a dedicated **FY Computer login portal**, where students can select their department and enter their roll number before accessing the student interface.

The project was developed as a practical implementation of **HTML, CSS and Vanilla JavaScript**, with browser-side storage used for maintaining application state and chat data.

> 🎓 Built as a student-focused project to explore how a college-specific digital portal can simplify everyday student interaction.

---

# ✨ Features

## 🔐 FY Computer Login

The application provides a dedicated login interface for FY Computer students.

### Features

* Department selection
* FY Computer department validation
* Roll-number input
* Roll-number format validation
* Roll-number range validation
* Client-side login verification
* Login state management
* Automatic navigation after successful login
* Error handling for invalid input

---

## 💬 Student Chat

The portal includes a browser-based chat interface.

### Features

* Send text messages
* Dynamically render messages
* Store chat history
* Restore messages after refresh
* Automatic scrolling
* Simple conversational UI

---

## 🖼️ Image Sharing

Students can also select and send images through the chat interface.

The application uses the browser's **FileReader API** to process selected images on the client side.

### Image Flow

```text
Select Image
     ↓
FileReader API
     ↓
Convert Image to Data URL
     ↓
Display Image
     ↓
Store in LocalStorage
```

---

## 💾 LocalStorage

The application uses the browser's **LocalStorage API** for client-side persistence.

Depending on the application flow, information such as:

* Login state
* Student information
* Chat messages
* Shared images

can be maintained locally within the browser.

---

# 🧠 Application Workflow

```text
                 ┌────────────────────────┐
                 │   Sanjivani College    │
                 │      Student Portal    │
                 └────────────┬───────────┘
                              │
                              ▼
                 ┌────────────────────────┐
                 │    Select Department   │
                 └────────────┬───────────┘
                              │
                              ▼
                 ┌────────────────────────┐
                 │      FY Computer       │
                 └────────────┬───────────┘
                              │
                              ▼
                 ┌────────────────────────┐
                 │    Enter Roll Number   │
                 └────────────┬───────────┘
                              │
                              ▼
                 ┌────────────────────────┐
                 │     Validate Input     │
                 └────────────┬───────────┘
                              │
                         ┌────┴────┐
                         │         │
                       Valid     Invalid
                         │         │
                         ▼         ▼
                  Student UI    Error Message
                         │
                         ▼
                 ┌────────────────────────┐
                 │      Chat System       │
                 └────────────┬───────────┘
                              │
                              ▼
                 ┌────────────────────────┐
                 │      LocalStorage      │
                 └────────────────────────┘
```

---

# 🛠️ Tech Stack

| Technology            | Usage                   |
| --------------------- | ----------------------- |
| 🟧 **HTML5**          | Structure and content   |
| 🔵 **CSS3**           | Styling and UI design   |
| 🟨 **JavaScript**     | Application logic       |
| 💾 **LocalStorage**   | Client-side persistence |
| 📁 **FileReader API** | Image processing        |
| 🌐 **Netlify**        | Website deployment      |
| 🐙 **GitHub**         | Source-code management  |

---

# 📂 Project Structure

```text
SanjivaniCollege/
│
├── index.html
│   └── FY Computer login portal
│
├── SAMPLE.HTML
│   └── Student-facing page
│
├── SAMPLE1.HTML
│   └── Main student interface
│
├── style.css
│   └── Main application styles
│
├── login.css
│   └── Login page styles
│
├── chat.css
│   └── Chat interface styles
│
├── script.js
│   └── Chat functionality and local storage
│
├── script1.js
│   └── Student interface functionality
│
├── SU LOGO.png
│   └── Sanjivani University logo
│
├── 0.jpg
├── 000 (2).jpg
├── 360_F_864564895_VdC0Ee8ufXbwwZfKOZCJ8VPn1fKkO3gC.jpg
│   └── Project assets
│
└── README.md
    └── Project documentation
```

---

# 🚀 Getting Started

## Prerequisites

The project is a frontend application, so there is no backend setup required.

You need:

* A modern web browser
* VS Code
* Live Server extension *(recommended)*

---

## 1. Clone the Repository

```bash
git clone https://github.com/PrathameshHon/SanjivaniCollege.git
```

---

## 2. Open the Project

```bash
cd SanjivaniCollege
```

Open the folder in **Visual Studio Code**.

---

## 3. Run the Website

Open:

```text
index.html
```

You can either open it directly in your browser or use **Live Server** from VS Code.

---

# 🔑 Login Flow

The login system follows a simple validation workflow:

```text
Department Selection
        ↓
FY Computer
        ↓
Roll Number
        ↓
Input Validation
        ↓
Roll Number Verification
        ↓
Login State
        ↓
Student Interface
```

The live website currently exposes the FY COMP login interface with a department selector, roll-number field and login button.

---

# 💬 Chat Architecture

The chat system works entirely on the client side.

```text
              USER
                │
                ▼
        ┌───────────────┐
        │ Enter Message │
        └───────┬───────┘
                │
                ▼
        ┌───────────────┐
        │  JavaScript   │
        └───────┬───────┘
                │
        ┌───────┴────────┐
        │                │
        ▼                ▼
 Display Message    LocalStorage
                         │
                         ▼
                  Persist History
```

---

# 🖼️ Image Processing

Images selected by the user are processed within the browser.

```text
User Selects Image
        ↓
    FileReader
        ↓
   Data URL
        ↓
   JavaScript
        ↓
 Display in Chat
        ↓
   LocalStorage
```

No external image server is required for the current implementation.

---

# 🔒 Security & Limitations

This project is currently designed as an **academic frontend project**.

The login system should **not be treated as production-grade authentication**, because the current validation and state management happen on the client side.

For a production version, the application could be upgraded with:

* Backend authentication
* Secure password hashing
* Database-backed student accounts
* Server-side validation
* Secure session management
* HTTP-only cookies
* Role-based access control
* Server-side image storage
* API-based messaging
* HTTPS-only security policies

---

# 🎯 Project Objectives

## 01 — Student Accessibility

Create a simple interface where students can access college-specific functionality.

## 02 — Simple User Experience

Keep the interface straightforward and easy to navigate.

## 03 — Practical Development

Apply frontend development concepts through a real student-oriented project.

## 04 — Expandable Architecture

Build a foundation that can later be expanded into a larger student management platform.

---

# 🚧 Future Improvements

The project can be extended into a complete student ecosystem.

### 🔐 Authentication

* [ ] Student registration
* [ ] Backend authentication
* [ ] Secure password management
* [ ] Student profile system
* [ ] Admin authentication

### 📚 Academic Features

* [ ] Attendance tracker
* [ ] Academic timetable
* [ ] Exam timetable
* [ ] Results section
* [ ] Notes and study materials
* [ ] Assignment tracker
* [ ] Academic performance dashboard

### 💬 Communication

* [ ] Real-time messaging
* [ ] WebSocket integration
* [ ] Group chats
* [ ] Faculty communication
* [ ] College announcements

### ☁️ Infrastructure

* [ ] Database integration
* [ ] Cloud image storage
* [ ] REST API
* [ ] Backend deployment
* [ ] Progressive Web App
* [ ] Improved mobile experience

---

# 📸 Screenshots

You can maintain your screenshots inside a dedicated folder:

```text
screenshots/
│
├── login.png
├── dashboard.png
├── chat.png
└── mobile.png
```

Then add them to the README:

<div align="center">

### 🔐 Login

<img src="screenshots/login.png" width="800" alt="Login Screenshot">

<br><br>

### 🏠 Student Portal

<img src="screenshots/dashboard.png" width="800" alt="Dashboard Screenshot">

<br><br>

### 💬 Chat

<img src="screenshots/chat.png" width="800" alt="Chat Screenshot">

<br><br>

### 📱 Mobile

<img src="screenshots/mobile.png" width="500" alt="Mobile Screenshot">

</div>

---

# 🌐 Deployment

The project is currently deployed using **Netlify**.

### Live Website

<a href="https://sanjivanicollege.netlify.app/">
https://sanjivanicollege.netlify.app/
</a>

### Source Code

<a href="https://github.com/PrathameshHon/SanjivaniCollege">
https://github.com/PrathameshHon/SanjivaniCollege
</a>

---

# 🤝 Contributing

Contributions, suggestions and improvements are welcome.

### Fork the repository

Create your own fork of this project.

### Create a feature branch

```bash
git checkout -b feature/your-feature
```

### Make your changes

Implement your feature or improvement.

### Commit

```bash
git add .
git commit -m "Add: your feature"
```

### Push

```bash
git push origin feature/your-feature
```

Then create a Pull Request.

---

# 👨‍💻 Developer

<div align="center">

## Prathamesh Hon

**Computer Engineering Student**

**Sanjivani College of Engineering, Kopargaon**

<br>

<a href="https://github.com/PrathameshHon">
  <img src="https://img.shields.io/badge/GitHub-PrathameshHon-181717?style=for-the-badge&logo=github&logoColor=white">
</a>

<a href="https://github.com/PrathameshHon/SanjivaniCollege">
  <img src="https://img.shields.io/badge/Repository-SanjivaniCollege-181717?style=for-the-badge&logo=github&logoColor=white">
</a>

</div>

---

# 📄 License

This project is intended primarily for **academic, educational and learning purposes**.

---

<div align="center">

# 🎓 Sanjivani College Student Portal

### HTML • CSS • JavaScript • LocalStorage • Netlify

Built with ❤️ for student developers.

<br>

<a href="https://sanjivanicollege.netlify.app/">
  <img src="https://img.shields.io/badge/🚀%20Visit%20Live%20Website-2563EB?style=for-the-badge" alt="Live Website">
</a>

<a href="https://github.com/PrathameshHon/SanjivaniCollege">
  <img src="https://img.shields.io/badge/⭐%20Star%20Repository-181717?style=for-the-badge&logo=github&logoColor=white" alt="Star Repository">
</a>

<br><br>

**Made at Sanjivani College of Engineering, Kopargaon 🎓**

</div>
