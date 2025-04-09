# 🪪 Smart Student ID Generator

A fully responsive and feature-rich Student ID Card generation tool built with **ReactJS**. Developed as part of the **Unity Internship Assignment**, this application captures student data through a dynamic form and generates visually styled ID cards with QR code integration, live previews, and downloadable PNG outputs.

Live Demo 👉 [Replit/Lovable Project Link] _(https://student-id-card-generator.vercel.app)_

---

## 🎯 Objective

Build a mini version of Unity’s Student ID Card module that showcases:

- Frontend integration ability
- UI polish and design clarity
- Logic implementation and component organization
- QR code and download functionality
- Template switching and persistent storage

---

## 🚀 Features

### 📝 Student Data Form

- Name (text input)
- Roll Number (text input)
- Class & Division (dropdown)
- Allergies (multi-select with chips)
- Photo Upload with Preview (file input)
- Rack Number (text input)
- Bus Route Number (dropdown)
- Submit Button to generate ID

### 🪪 Smart ID Card Preview

Once the form is submitted:

- Preview card is generated with all student details
- Allergies shown as chips (only if present)
- Live uploaded student photo
- Rack number and Bus Route displayed
- QR Code generated using `qrcode.react` with student JSON data
- “Download as PNG” button using `html-to-image`

### 🎨 Template Switching

- Dropdown to toggle between **two unique card designs**
- Responsive and styled using **Tailwind CSS**

### 📏 Persistent Data (Bonus)

- Saves generated cards to **localStorage**
- Lists past cards with preview
- Enables downloading older cards anytime

---

## 🪠 Tech Stack

| Tech/Library       | Purpose                                  |
| ------------------ | ---------------------------------------- |
| React 18+          | Frontend framework                       |
| Tailwind CSS       | Utility-first styling                    |
| qrcode.react       | QR code generation                       |
| html-to-image      | Convert card preview to downloadable PNG |
| localStorage API   | Store previously created cards           |
| @lovable/replit/v0 | Hosting the project as required          |

---

## 📸 Screenshots

> 📌 Generated ID Cards, Form UI, and Template Switching Demo

![Dashboard](https://res.cloudinary.com/dq8b6vgab/image/upload/v1744193406/Screenshot_2025-04-09_153836_oltjr6.png)
![Form View](https://res.cloudinary.com/dq8b6vgab/image/upload/v1744193406/Screenshot_2025-04-09_153802_fb6kfk.png)
![ID Card Preview - Template 1](https://res.cloudinary.com/dq8b6vgab/image/upload/v1744193405/Screenshot_2025-04-09_153856_eqeoa9.png)
![ID Card Preview - Template 2](https://res.cloudinary.com/dq8b6vgab/image/upload/v1744193405/Screenshot_2025-04-09_153903_dqui85.png)

---

## 💡 Thought Process

The goal was to emulate Unity's product-level development approach while keeping the interface user-friendly and engaging. My strategy was to:

- Use React state and conditional rendering to maintain seamless form-to-preview flow
- Encapsulate the preview logic into template components to enable scalable switching
- Preserve data for future sessions using `localStorage`
- Optimize design using TailwindCSS utility classes
- Use `html-to-image` to enable simple, one-click downloads of the generated ID card

Edge cases like empty fields, image upload validation, or missing selections were also handled for a smooth user experience.

---

## 📈 Future Enhancements

- 🗂️ Add option to export all cards as a zip
- 🧠 Add card search/filtering on stored entries
- 🌐 Option to upload to cloud or sync with database
- 🎨 Add more design templates

---

## 👨‍💻 Author

Developed by **Sanket Hanjari Rathod**

- Portfolio: [https://sanketrathod.in](https://sanketrathod.in)
- LinkedIn: [https://www.linkedin.com/in/sanketrathod757](https://www.linkedin.com/in/sanketrathod757)
- GitHub: [https://github.com/sanketrathod07](https://github.com/sanketrathod07)
