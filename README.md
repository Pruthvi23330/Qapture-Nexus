# Udyog Saarthi Connect Development

## 📌 Overview

**Udyog Saarthi Connect Development** is a web-based job portal designed to connect job seekers, especially persons with disabilities, with employment opportunities. The system includes both **Admin** and **User** interfaces with essential job management features.

---

## 🚀 Features

### 👨‍💼 Admin Module

* Secure Admin Login
* Post new job opportunities
* Edit and delete job listings
* View registered users and applicants
* Approve or reject applications
* Add rejection reasons
* Respond to user queries

---

### 👤 User Module

* User Registration with disability details
* Login and access dashboard
* View available jobs
* Apply for jobs
* Upload and manage resumes (PDF)
* Track application status
* Send feedback to admin
* View admin responses

---

## 🛠️ Technologies Used

* **Frontend:** HTML5, CSS3
* **Styling:** Tailwind CSS
* **Icons:** Remix Icons / Font Awesome
* **Scripting:** JavaScript
* **Storage:** Browser Local Storage

---

## ⚙️ System Architecture

* Fully **client-side application**
* No backend or database server used
* Data is stored using **Local Storage**
* Dynamic UI updates using JavaScript DOM

---

## 🔐 Admin Credentials

```
Email: admin.udyog@gmail.com
Password: admin@123
```

---

## 📂 Project Structure

```
📁 Udyog-Saarthi-Connect
│── admin_dashboard.html
│── login.html
│── registration.html
│── user_dashboard.html
│── styles (internal CSS)
│── scripts (JavaScript logic)
```

---

## 🔄 Workflow

### Admin Flow:

1. Login using admin credentials
2. Access dashboard
3. Post / edit / delete jobs
4. Review applications
5. Approve or reject candidates

### User Flow:

1. Register with personal details
2. Login to dashboard
3. View job listings
4. Apply for jobs
5. Track application status
6. Send feedback to admin

---

## 💾 Data Handling

* Uses **Local Storage (`saarthi_state`)**
* Stores:

  * User details
  * Job applications
  * Resume files (base64)
  * Feedback messages

---

## 📊 Application Status Stages

* Applied
* Under Review
* Decision Pending
* Offered / Rejected

---

## ⚠️ Limitations

* No backend/database integration
* Data stored only in browser (not persistent across devices)
* Basic authentication (not secure for production)

---

## 🔮 Future Enhancements

* Add backend (Node.js / Firebase)
* Secure authentication system
* Real-time notifications
* Advanced filtering for jobs
* Accessibility improvements (WCAG standards)

---

## 📖 Conclusion

Udyog Saarthi Connect provides a simple and accessible platform for job seekers and administrators. It demonstrates how a full workflow system can be built using only frontend technologies.

---
