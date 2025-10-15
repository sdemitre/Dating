class ScamDetectionApp {
    constructor() {
        this.currentScore = 0;
        this.totalPossibleScore = 50;
        this.init();
    }

    init() {
        this.bindEventListeners();
        this.updateDisplay();
    }

    bindEventListeners() {
        // Checkbox change events
        const checkboxes = document.querySelectorAll('.scam-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                this.handleCheckboxChange(e);
            });
        });

        // Button events
        document.getElementById('resetButton').addEventListener('click', () => {
            this.resetChecklist();
        });

        document.getElementById('shareButton').addEventListener('click', () => {
            this.shareResults();
        });
    }

    handleCheckboxChange(event) {
        const checkbox = event.target;
        const checklistItem = checkbox.closest('.checklist-item');
        const points = parseInt(checklistItem.dataset.points);

        if (checkbox.checked) {
            this.currentScore += points;
            checklistItem.classList.add('checked');
        } else {
            this.currentScore -= points;
            checklistItem.classList.remove('checked');
        }

        this.updateDisplay();
        this.showFeedback(checkbox.checked, points);
    }

    updateDisplay() {
        // Update score
        document.getElementById('currentScore').textContent = this.currentScore;

        // Update risk level
        const riskLevel = this.calculateRiskLevel();
        const riskBadge = document.querySelector('.risk-badge');
        
        // Remove all risk classes
        riskBadge.classList.remove('low', 'moderate', 'high', 'extreme');
        
        // Add appropriate risk class and update text
        riskBadge.classList.add(riskLevel.class);
        riskBadge.textContent = riskLevel.text;

        // Update risk assessment highlighting
        this.highlightCurrentRiskLevel(riskLevel.class);
    }

    calculateRiskLevel() {
        if (this.currentScore >= 13) {
            return { class: 'extreme', text: 'Extreme Risk' };
        } else if (this.currentScore >= 8) {
            return { class: 'high', text: 'High Risk' };
        } else if (this.currentScore >= 4) {
            return { class: 'moderate', text: 'Moderate Risk' };
        } else {
            return { class: 'low', text: 'Low Risk' };
        }
    }

    highlightCurrentRiskLevel(currentClass) {
        const riskItems = document.querySelectorAll('.risk-item');
        riskItems.forEach(item => {
            item.style.transform = '';
            item.style.boxShadow = '';
        });

        const currentRiskItem = document.querySelector(`.risk-item.${currentClass}`);
        if (currentRiskItem) {
            currentRiskItem.style.transform = 'scale(1.05)';
            currentRiskItem.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        }
    }

    showFeedback(isChecked, points) {
        if (isChecked && points >= 4) {
            this.showNotification('⚠️ High-risk indicator detected!', 'warning');
        } else if (this.currentScore >= 13) {
            this.showNotification('🚨 Extreme risk level reached - consider blocking immediately!', 'danger');
        } else if (this.currentScore >= 8) {
            this.showNotification('⚠️ High risk detected - proceed with extreme caution!', 'warning');
        }
    }

    showNotification(message, type) {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create new notification
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'danger' ? '#dc3545' : '#ffc107'};
            color: ${type === 'danger' ? 'white' : '#212529'};
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            max-width: 300px;
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);

        // Manual close button
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });
    }

    resetChecklist() {
        if (confirm('Are you sure you want to reset the checklist? This will clear all selections.')) {
            // Uncheck all checkboxes
            const checkboxes = document.querySelectorAll('.scam-checkbox');
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
                checkbox.closest('.checklist-item').classList.remove('checked');
            });

            // Reset score
            this.currentScore = 0;
            this.updateDisplay();

            this.showNotification('✅ Checklist reset successfully', 'success');
        }
    }

    shareResults() {
        const riskLevel = this.calculateRiskLevel();
        const shareText = `Dating Profile Scam Detection Results:
Score: ${this.currentScore}/${this.totalPossibleScore}
Risk Level: ${riskLevel.text}

Assessment: ${this.getAssessmentText(riskLevel.class)}

Check your dating profiles at: ${window.location.href}`;

        if (navigator.share) {
            // Use native sharing if available (mobile devices)
            navigator.share({
                title: 'Dating Profile Scam Detection Results',
                text: shareText
            });
        } else {
            // Fallback to clipboard
            navigator.clipboard.writeText(shareText).then(() => {
                this.showNotification('📋 Results copied to clipboard!', 'success');
            }).catch(() => {
                // Manual copy fallback
                this.showShareModal(shareText);
            });
        }
    }

    getAssessmentText(riskClass) {
        const assessments = {
            low: 'Proceed with normal caution. Continue getting to know this person while staying alert.',
            moderate: 'Increased vigilance needed. Look for additional verification and be cautious about sharing personal information.',
            high: 'Strong scam indicators present. Consider ending communication or demanding video verification.',
            extreme: 'Immediate blocking recommended. This profile shows multiple serious red flags indicating a likely scam.'
        };
        return assessments[riskClass];
    }

    showShareModal(text) {
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 2000; display: flex; align-items: center; justify-content: center;">
                <div style="background: white; padding: 30px; border-radius: 10px; max-width: 500px; width: 90%;">
                    <h3 style="margin-bottom: 15px;">Share Results</h3>
                    <textarea readonly style="width: 100%; height: 150px; padding: 10px; border: 1px solid #ccc; border-radius: 5px; resize: none;">${text}</textarea>
                    <div style="margin-top: 15px; text-align: right;">
                        <button id="copyBtn" style="background: #007bff; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px; cursor: pointer;">Copy Text</button>
                        <button id="closeBtn" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Close</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector('#copyBtn').addEventListener('click', () => {
            const textarea = modal.querySelector('textarea');
            textarea.select();
            document.execCommand('copy');
            this.showNotification('📋 Results copied to clipboard!', 'success');
        });

        modal.querySelector('#closeBtn').addEventListener('click', () => {
            modal.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ScamDetectionApp();
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .notification-close {
        background: none;
        border: none;
        color: inherit;
        font-size: 20px;
        cursor: pointer;
        margin-left: 15px;
        opacity: 0.7;
        transition: opacity 0.3s ease;
    }

    .notification-close:hover {
        opacity: 1;
    }
`;
document.head.appendChild(style);