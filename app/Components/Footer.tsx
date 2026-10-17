
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer id='contato' className="bg-gray-900 text-gray-300 py-8 px-6 border-t border-gray-800">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Identificação / Copyright */}
                <div className="text-center md:text-left">
                    <p className="text-(--colorMain) font-semibold text-lg">
                        {`</> `}
                        <span className='text-white'>Gabriel </span>
                        Gomes
                    </p>
                    <p className="text-sm text-gray-400">© 2026</p>
                </div>

                {/* Contatos e Redes */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm">

                    {/* E-mail */}
                    <a
                        href="mailto:contatogabriel1104@gmail.com"
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <FontAwesomeIcon icon={faEnvelope} className="text-blue-400" />
                        <span>contatogabriel1104@gmail.com</span>
                    </a>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/5511953822219"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} className="text-green-400" />
                        <span>(11) 95382-2219</span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/gabriel-ds-gomes/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} className="text-blue-500 text-base" />
                        <span>LinkedIn</span>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/MestreJoker"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <FontAwesomeIcon icon={faGithub} className="text-white text-base" />
                        <span>GitHub</span>
                    </a>

                </div>
            </div>
        </footer>
    );
}