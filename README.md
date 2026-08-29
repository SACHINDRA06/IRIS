# AharaX Wellness Website

A modern, professional, and user-friendly website for **AharaX Wellness**, a nutrition and diet consultation startup specializing in personalized care for women, PCOS management, weight loss, and clinical nutrition.

## 🚀 Live Demo Features
- **Design System**: Premium wellness-themed palette (Sage Green, Beige, White).
- **Core Pages**: Home, About Us, Services (10+ clinical programs), Diet Plans, Blog, and Contact.
- **Interactive Elements**: Scroll animations, responsive navigation, and floating WhatsApp support.
- **Ready for Booking**: Fully functional contact and booking forms with pre-selection logic.

## 🛠️ Technology Stack
- **Frontend**: HTML5, Vanilla CSS, Modern JavaScript.
- **Icons**: Lucide Icons.
- **Fonts**: Google Fonts (Outfit & Inter).

## 📦 Deployment & Integration Guide

### 1. GitHub for File Management
1. Initialize a git repository: `git init`
2. Add all files: `git add .`
3. Commit: `git commit -m "Initial launch of AharaX Wellness website"`
4. Push to your GitHub repository.

### 2. Supabase for Database (Booking & Blog)
The project is "Supabase-ready". In `main.js`, you will find instructions to:
1. Create a table named `bookings` with columns: `first_name`, `last_name`, `email`, `phone`, `service`, `message`.
2. Replace the placeholder keys in `main.js` with your Supabase URL and Anon Key.

### 3. Vercel for Storage (Prescriptions & Reports)
Use **Vercel Blob** or **Supabase Storage** to store client lab reports and diet plan PDFs. 
- Access these via the [Vercel Dashboard](https://vercel.com/dashboard).

### 4. Netlify for Hosting
1. Connect your GitHub repository to **Netlify**.
2. Set the build command to `none` (this is a static site).
3. Set the publish directory to `./`.
4. Your site will be live at a custom `.netlify.app` domain!

## 📞 Support & Customization
- **Email**: consult.aharaxwellness@gmail.com
- **WhatsApp**: +91 78069 77057

---
*Built with care for AharaX Wellness.*
