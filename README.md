# RTHILAA High School V2 :

A modern, responsive website for RTHILAA High School built with HTML5, CSS3, and JavaScript. The website showcases the school's academic programs, faculty, student activities, and provides comprehensive information for prospective students and families.

## 🎯 Live Demo : 

🔗 [Rthilaa High School](https://rth-high-school.netlify.app/)

We would appreciate it if you decide to use this project. Please include credit when using it. Thank you! 🙏

## ✨ Features :

- **Fully Responsive Design**: Optimized for desktop, tablet, and mobile devices with three breakpoints
- **Modern UI/UX**: Clean, professional design with smooth AOS animations and CSS transitions
- **Interactive Elements**: Dynamic content loading, hover effects, and smooth scrolling
- **Dark Mode Support**: Toggle between light and dark themes with persistent user preference
- **Accessibility Features**: Semantic HTML, keyboard navigation, and screen reader support
- **Performance Optimized**: Efficient CSS/JS, lazy-loaded animations, and optimized images
- **Cross-Browser Compatible**: Works on Chrome, Firefox, Safari, Edge, and mobile browsers

## 🏗️ Website Sections :

### 🏠 **Hero Section**
- Animated typing effect for main heading
- Floating text animation
- Call-to-action buttons with pulse effects
- Fixed background parallax

### ℹ️ **About Us**
- School mission, achievements, and community stats
- Interactive campus facilities overview
- Animated statistics and feature highlights
- Image gallery with hover effects

### 📚 **Academic Programs**
- STEM, Arts, Humanities, and Athletics programs
- Advanced Placement (AP) program showcase
- Interactive statistics display with count-up animations
- Flip card animations for program categories

### 🎯 **Student Activities**
- 40+ clubs and organizations
- 15 varsity sports programs
- Performing arts showcase
- Image galleries with smooth transitions

### 📅 **Events Calendar**
- Upcoming school events with expandable listings
- Date/time formatting and event details
- "View All Events" toggle functionality
- Responsive event cards

### 👩‍🏫 **Faculty Directory**
- Faculty profiles with photos and specializations
- Department-wise organization
- Expandable directory with smooth animations
- Hover effects on faculty cards

### 💬 **Student Testimonials**
- Student reviews with star ratings
- Photo galleries showcasing student life
- Expandable testimonials section
- Interactive rating system

### 📧 **Newsletter Signup**
- Email subscription form with validation
- Privacy-focused messaging
- Responsive form design

### 📞 **Contact Section**
- Contact form with client-side validation
- School location and contact information
- Social media integration
- Interactive contact cards

## 🛠️ Technologies & Libraries :

### Core Technologies 
- **HTML5**: Semantic markup, accessibility features
- **CSS3**: 
  - Flexbox and CSS Grid layouts
  - CSS custom properties (variables)
  - Keyframe animations and transitions
  - Media queries for responsive design
- **JavaScript (ES6+)**:
  - DOM manipulation and event handling
  - Dynamic content loading
  - Local storage for dark mode preference
  - Smooth scrolling functionality

### External Libraries
- **[AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)** - Scroll-triggered animations
- **[Font Awesome 6.7.2](https://fontawesome.com/)** - Icon library
- **[Google Fonts](https://fonts.google.com/)** - Roboto and Work Sans typography

## 📁 Project Structure :

```
rthilaa-high-school/
├── index.html              # Main HTML file
├── style.css               # Main stylesheet with dark mode support
├── script.js               # JavaScript functionality
├── README.md               # Project documentation
└── IMG/                    # Image assets directory
    ├── ecole.jpg           # Hero section background
    ├── about.jpg           # About section image
    ├── academics.jpg       # Academic programs image
    ├── clubs.jpg           # Student clubs image
    ├── Athletics.jpg       # Sports activities image
    ├── Arts.jpg            # Performing arts image
    ├── [faculty-photos]/   # Faculty member portraits
    └── [student-photos]/   # Student testimonial photos
```

## 🚀 Quick Start :

### Option 1: Direct Download
1. Download or clone the repository
2. Open `index.html` directly in your web browser

### Option 2: Local Development Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

## 🎨 Customization Guide :

### Color Scheme
The website uses CSS custom properties for easy theming:

```css
:root {
  --primary-blue: #2563eb;
  --secondary-blue: #1d4ed8;
  --background-gray: #f9fafb;
  --text-gray: #4b5563;
  --success-green: #10b981;
  --warning-yellow: #f59e0b;
}
```

### Content Updates
- **School Information**: Update text content in `index.html`
- **Images**: Replace files in the `IMG/` directory (maintain aspect ratios)
- **Contact Details**: Modify contact section and footer information
- **Social Media**: Update social media links in contact and footer sections
- **Events**: Update the events section with current school events

### Styling Modifications
- **Animations**: Customize AOS settings in `script.js`
- **Responsive Breakpoints**: Modify media queries in `style.css`
- **Typography**: Update Google Fonts imports and CSS font families
- **Layout**: Adjust CSS Grid and Flexbox properties

## 📱 Responsive Design :

### Breakpoints
- **Desktop**: 950px and above
- **Tablet**: 481px - 949px
- **Mobile**: 480px and below

### Mobile Features
- Hamburger navigation menu
- Touch-friendly buttons and forms
- Optimized image sizes
- Collapsible content sections

## ♿ Accessibility Features :

- Semantic HTML5 structure
- Alt text for all images
- Keyboard navigation support
- High contrast color schemes
- Screen reader friendly markup
- Focus indicators for interactive elements
- ARIA labels for complex components

## ⚡ Performance Features :

- Optimized CSS with efficient selectors
- Lazy-loaded animations with AOS
- Compressed and optimized images
- Minimal external dependencies
- Efficient JavaScript with event delegation
- CSS and JS minification ready

## 🌙 Dark Mode Implementation :

The website includes a comprehensive dark mode feature:

- **Toggle Buttons**: Desktop header and mobile floating button
- **Persistent Preference**: Uses localStorage to remember user choice
- **Smooth Transitions**: All elements transition smoothly between modes
- **Complete Coverage**: All sections and components support dark mode

## 🧪 JavaScript Features :

### Core Functionality
- **Mobile Menu**: Hamburger navigation with smooth transitions
- **Expandable Sections**: Events, Faculty, and Reviews sections
- **Scroll to Top**: Smooth scrolling functionality
- **Form Handling**: Client-side form validation
- **Dark Mode**: Theme toggle with localStorage persistence
- **AOS Integration**: Scroll animations with responsive settings

### Event Handlers
- Window scroll events for buttons visibility
- Click handlers for expandable content
- Form submission handling
- Responsive navigation toggle

## 🌐 Browser Support :

### Desktop Browsers
- Chrome 70+ (recommended)
- Firefox 65+
- Safari 12+
- Edge 79+

### Mobile Browsers
- iOS Safari 12+
- Chrome Mobile 70+
- Samsung Internet 10+

## 📈 SEO Optimization :

- Semantic HTML structure
- Meta tags for description and viewport
- Proper heading hierarchy (H1-H4)
- Alt text for images
- Clean URL structure
- Fast loading times

## 🤝 Contributing :

### Development Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Test across different devices and browsers
4. Ensure accessibility standards are met
5. Commit changes with descriptive messages
6. Push to your branch and create a Pull Request

### Code Standards
- Use semantic HTML5 elements
- Follow BEM methodology for CSS classes
- Write descriptive JavaScript comments
- Maintain consistent indentation (2 spaces)
- Test responsive design on multiple devices

## 📝 License :

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer :

**Developed by:** [ANASS EL HARAZI](https://www.instagram.com/a.elharazi/)

### Skills Demonstrated
- Responsive Web Design
- CSS Grid & Flexbox
- JavaScript DOM Manipulation
- Cross-browser Compatibility
- Performance Optimization
- Accessibility Implementation

## 📞 Contact & Support :

### School Contact
- **Institution**: RTHILAA High School
- **Email**: info@rthilaahigh.edu
- **Phone**: (123) 456-7890
- **Address**: 123 Street, City, Country

### Developer Contact 
- **Portfolio**: [ANASS EL HARAZI](https://www.instagram.com/a.elharazi/)
- **Social**: [@a.elharazi](https://www.instagram.com/a.elharazi/)

## 🔄 Version History :

- **v1.0.0** - Initial release with core functionality
- **Current** - Enhanced responsive design, dark mode, and accessibility features

## 📚 Additional Resources :

- [AOS Animation Library Documentation](https://michalsnik.github.io/aos/)
- [Font Awesome Icon Reference](https://fontawesome.com/icons)
- [CSS Grid Complete Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**© 2025 RTHILAA High School. All rights reserved.**

*Built with ❤️ by [ANASS EL HARAZI](https://www.instagram.com/a.elharazi/)*
