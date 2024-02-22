import React, { useState } from 'react';
import './SignInModal.css';

function SignInModal({ closeModal }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        console.log('Přihlášení:', { username, password });
        closeModal();
    };

    return (
        <div className="modal-backdrop" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Přihlásit se</h2>
                <input
                    type="text"
                    className="input"

                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Uživatelské jméno"
                />
                <input
                    type="password"
                    className="input"

                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Heslo"
                />
                <button className="button" onClick={handleSignIn}>Přihlásit se</button>
                <button className="close-button" onClick={closeModal}>&times;</button>
            </div>
        </div>
    );
}

export default SignInModal;
