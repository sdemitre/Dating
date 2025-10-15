# Dating Profile Scam Detection Checklist

A comprehensive web application that helps users systematically evaluate dating profiles and conversations to identify potential scams. This tool uses a systematic scoring system with risk levels to provide clear guidance on when to proceed with caution or block suspicious profiles.

![Dating Scam Detection](https://img.shields.io/badge/Purpose-Scam%20Detection-red) ![Version](https://img.shields.io/badge/Version-1.0.0-blue) ![License](https://img.shields.io/badge/License-MIT-green)

## 🎯 Features

### Systematic Scoring System
- **Point-based evaluation**: Each red flag has a specific point value based on severity
- **Financial requests** score highest (4-5 points) as the clearest scam indicators
- **Profile and behavioral red flags** range from 1-3 points for nuanced assessment

### Four Risk Levels
- **Low Risk (0-3 points)**: Proceed with normal caution
- **Moderate Risk (4-7 points)**: Increased vigilance needed
- **High Risk (8-12 points)**: Strong scam indicators present
- **Extreme Risk (13+ points)**: Immediate blocking recommended

### Organized Categories
- **Profile Red Flags**: Appearance, digital footprint, location inconsistencies
- **Conversation Red Flags**: Communication patterns, emotional manipulation, inconsistencies
- **Financial Red Flags**: Requests for money, gifts, or financial information

### Interactive Features
- **Real-time scoring**: Score updates as you check items
- **Visual feedback**: Risk level changes with color-coded indicators
- **Notifications**: Alerts for high-risk indicators
- **Results sharing**: Copy assessment results to clipboard
- **Reset functionality**: Clear checklist to start fresh

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required - runs entirely in the browser

### Installation & Usage

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/dating-scam-detection.git
   cd dating-scam-detection
   ```

2. **Open the application**:
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js
     npx http-server -p 8000
     ```

3. **Start evaluating profiles**:
   - Open a dating profile or conversation you want to assess
   - Go through each category systematically
   - Check boxes for any red flags that apply
   - Watch the risk level update in real-time
   - Follow the recommendations based on your score

## 📊 How It Works

### Scoring Breakdown

#### Profile Red Flags (1-3 points each)
- Professional model-quality photos (3 pts)
- Limited number of photos (2 pts)
- Stock/stolen images (3 pts)
- Recently created profile (2 pts)
- Minimal profile information (1 pt)
- Claims of travel/military deployment (2 pts)

#### Conversation Red Flags (2-3 points each)
- Immediate platform switching (2 pts)
- Quick emotional attachment (3 pts)
- Poor language/grammar (2 pts)
- Avoids calls/video chats (3 pts)
- Inconsistent stories (2 pts)
- Creates emergency situations (3 pts)

#### Financial Red Flags (3-5 points each) - CRITICAL
- Direct money requests (5 pts)
- Gift card/crypto requests (4 pts)
- Financial information requests (4 pts)
- Sending money/packages (3 pts)
- Travel money requests (4 pts)

### Risk Assessment Guidelines

- **0-3 points**: Continue with normal dating caution
- **4-7 points**: Increase vigilance, verify identity
- **8-12 points**: High probability of scam, consider ending contact
- **13+ points**: Almost certainly a scam, block immediately

## 🛡️ Security Tips

### Before Using This Tool
- Trust your instincts - if something feels wrong, it probably is
- Never send money, gift cards, or personal financial information
- Always verify identity through video calls before meeting

### After Assessment
- **Low/Moderate Risk**: Proceed cautiously, continue verification
- **High Risk**: Demand video verification or end communication
- **Extreme Risk**: Block profile and report to platform

### Additional Protection
- Use reverse image search on profile photos
- Google their name + "scam" or "fake profile"
- Ask specific questions about their claimed location
- Be wary of anyone who quickly professes love

## 🔧 Technical Details

### Built With
- **HTML5**: Semantic markup for accessibility
- **CSS3**: Modern styling with responsive design
- **Vanilla JavaScript**: No external dependencies
- **Font Awesome**: Icons for better UX

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 16+

### File Structure
```
dating-scam-detection/
├── index.html          # Main application file
├── styles.css          # Styling and responsive design
├── script.js           # Application logic and interactivity
├── README.md           # This documentation
└── .github/
    └── copilot-instructions.md
```

## 📱 Mobile Responsive

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Any device with a modern web browser

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contributions
- Additional red flag indicators
- Multi-language support
- Export results to PDF
- Integration with dating platforms
- Machine learning scam detection

## 📈 Statistics

Romance scams cost victims over $500 million annually according to the FTC. This tool aims to reduce those numbers by:
- Providing systematic evaluation methods
- Educating users about common scam tactics
- Encouraging verification before emotional investment

## ⚠️ Disclaimer

This tool is for educational purposes and should not be your only method of scam detection. Always:
- Trust your instincts
- Verify identity through video calls
- Never send money to someone you haven't met in person
- Report suspected scams to relevant authorities

## 📞 Support & Resources

### Emergency Contacts
- **FBI Internet Crime Complaint Center**: ic3.gov
- **FTC Scam Reporting**: reportfraud.ftc.gov
- **Local Law Enforcement**: For immediate threats

### Educational Resources
- [FTC Romance Scam Guide](https://consumer.ftc.gov/articles/what-you-need-know-about-romance-scams)
- [AARP Fraud Prevention](https://www.aarp.org/money/scams-fraud/)
- [BBB Scam Tracker](https://www.bbb.org/scamtracker)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Dating platform safety teams for inspiration
- Scam victims who shared their experiences
- Cybersecurity researchers studying romance fraud
- The open-source community for tools and resources

---

**Remember**: When in doubt, don't engage. Your safety and security are more important than any potential relationship.