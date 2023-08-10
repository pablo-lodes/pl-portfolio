import React from 'react';
import { NavLink } from 'react-router-dom';

const LegalNotice = () => {
    return (
        <div className="legal-notice">
            <h2>Legal Notice</h2>
            <div className="legal-notice-content">
                <p className="legal-notice-section">Information according to § 5 TMG:</p>
                <p>Pablo Lodes</p>
                <p>Musterstraße 123</p>
                <p>12345 Musterstadt</p>
                <p>Contact:</p>
                <p>Phone: 01234 56789</p>
                <p>Email: pablo.lodes@example.com</p>

                <p className="legal-notice-section">Represented by:</p>
                <p>Pablo Lodes</p>

                <p className="legal-notice-section">VAT ID:</p>
                <p>VAT identification number according to §27a Value Added Tax Act: DE123456789</p>

                <p>
                    For further legal notices and privacy policies, please refer to our{' '}
                    <NavLink to="/privacy-policy" key="privacy-policy">Privacy Policy</NavLink>.
                </p>
            </div>
        </div>
    );
};

export default LegalNotice;