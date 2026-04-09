# Velvet Crumbs - Premium Handcrafted Cakes Brisbane

A modern, responsive website for Velvet Crumbs, a premium cake shop based in Brisbane, Australia. Features custom cake designs, an interactive menu, customer testimonials, and a contact form for cake orders.

## 🎂 Features

- **Hero Section**: Eye-catching landing section with call-to-action buttons
- **About Section**: Brand story and company information
- **Featured Cakes**: Showcase of signature cake collections
- **Interactive Menu**: Filterable cake catalog with categories (Birthday, Wedding, Cupcakes, Celebration)
- **Why Choose Us**: Highlights of key services and benefits
- **Customer Testimonials**: Real reviews from Brisbane customers
- **Contact Form**: Order enquiry form with validation
- **Location & Hours**: Studio information, contact details, and Google Maps integration
- **Dark Mode Toggle**: Theme switcher with persistent localStorage
- **Mobile Responsive**: Fully responsive design for all devices
- **Smooth Animations**: Scroll reveal animations and transitions throughout

## 📁 Project Structure

```
Cake/
├── index.html          # Main HTML file with all page content
├── styles.css          # Complete styling and responsive design
├── script.js           # JavaScript functionality and interactions
├── README.md          # Project documentation
└── .gitignore         # Git ignore rules for version control
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Grid, Flexbox, animations, and CSS variables for theming
- **Vanilla JavaScript**: DOM manipulation, form validation, dark mode toggle, category filtering
- **Google Fonts**: Cormorant Garamond and Poppins typefaces
- **Unsplash Images**: High-quality cake and business photography

## 🚀 Getting Started

### Prerequisites
- A web browser (Chrome, Firefox, Safari, Edge)
- Optional: Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kcheng8/Cake.git
   cd Cake
   ```

2. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     ```
   - Then visit `http://localhost:8000`

## 💻 Usage

### Dark Mode
Click the toggle slider in the top-right header to switch between light and dark themes. Your preference is saved locally.

### Filtering Cakes
Use the category buttons in the Menu section to filter cakes by type:
- All Cakes
- Birthday Cakes
- Wedding Cakes
- Cupcakes
- Celebration Cakes

### Contact Form
Fill out the enquiry form with:
- Full name
- Email address
- Phone number
- Preferred date
- Event type
- Cake type preference
- Optional special requests

Form validates all fields before submission and displays success/error messages.

## 📋 Features Breakdown

### Form Validation
- Required field checking
- Email format validation
- Phone number format validation
- Date validation (no past dates)
- Real-time error feedback

### Scroll Animations
- Fade-in effects on page load
- Scroll reveal animations for cards
- Smooth transitions on hover
- Multi-step animation delays for staggered effects

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px (tablets) and 480px (mobile)
- Flexible grids and collapsible navigation
- Optimized image loading

## 🎨 Color Scheme

**Light Mode:**
- Primary Cream: #fef5f0
- Primary Pink: #f4d4cc
- Primary Beige: #e8d5c4
- Primary Brown: #8b6f47
- Accent Gold: #d4a574

**Dark Mode:**
- Auto-adjusting colors for better readability
- Maintained brand identity with adjusted contrast

## 📱 Responsive Breakpoints

- **Desktop**: Full layout at 1200px max-width
- **Tablet**: 768px - Adjusted grid columns and spacing
- **Mobile**: 480px - Single column layout, stackable buttons

## 🔧 Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

## 📸 Content Sections

1. **Header & Navigation** - Sticky navigation with theme toggle and mobile menu
2. **Hero** - Full-screen intro with CTA buttons
3. **About** - Company story and values
4. **Featured Cakes** - Top 3 signature collections
5. **Menu** - Complete cake catalog with filtering
6. **Why Choose Us** - 6 key service highlights
7. **Testimonials** - Customer reviews and ratings
8. **Contact Form** - Enquiry submission form
9. **Location** - Studio details and embedded map
10. **Footer** - Links, social media, and copyright

## 📝 Form Submissions

Currently, the contact form validates data locally and displays success/error messages. To actually send emails, you can integrate:
- Formspree.io
- Netlify Forms
- EmailJS
- Custom backend API

## 📄 License

This project is open source. Feel free to use and modify for your own cake business website.

## 👨‍💼 About Velvet Crumbs

**Velvet Crumbs** is a premium cake shop based in South Brisbane, Queensland, specializing in:
- Custom designed cakes
- Wedding cakes
- Birthday cakes
- Celebration cakes
- Cupcakes and treats

**Contact:**
- Phone: (07) 3156 8234
- Email: hello@velvetcrumbs.com.au
- Address: South Brisbane, QLD 4101

## 🤝 Contributing

To contribute improvements:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📞 Support

For issues or questions about the website, contact: hello@velvetcrumbs.com.au