import React, { useState, useEffect, useRef } from 'react';
import styles from './Termsmodal.module.css';

const TermsModal = ({ show, onAccept }) => {
    const [scrollEndReached, setScrollEndReached] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        function handleScroll() {
            if (contentRef.current) {
                const scrollPosition = contentRef.current.scrollTop;
                const contentHeight = contentRef.current.scrollHeight;
                const containerHeight = contentRef.current.clientHeight;
                const bottomOffset = 20; // Espaço do fundo do modal

                if (scrollPosition + containerHeight >= contentHeight - bottomOffset) {
                    setScrollEndReached(true);
                } else {
                    setScrollEndReached(false);
                }
            }
        }

        function cleanup() {
            setScrollEndReached(false); // Reinicia o estado ao desmontar o modal
        }

        if (show) {
            contentRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (contentRef.current) {
                contentRef.current.removeEventListener('scroll', handleScroll);
            }
            cleanup();
        };
    }, [show]);

    if (!show) {
        return null;
    }
   return (
       <div className={styles.termsContainer}  >    
           <div className={styles.modaltermsText}>
                <h2>TERMOS E CONDIÇÕES</h2>
                <div className={styles.textContent} ref={contentRef}>
                   <h4>Termos e Condições de Uso para Inscrição de Voluntários na SouJunior</h4>
                   <p>Estes Termos e Condições de Uso regem a utilização do formulário de inscrição para voluntários no site da SouJunior, associação sem fins lucrativos, com sede na Quadra 604, conjunto 9, casa 2, Recanto das Emas, Distrito Federal, CEP 72640-409. Ao se inscrever como voluntário, você concorda em cumprir estes Termos. Leia atentamente todas as disposições antes de enviar sua inscrição.</p>

                   <h4>Elegibilidade e Uso Responsável:</h4>
                   <p className={styles.spacenumber}> 1. Você declara e garante que todas as informações fornecidas no formulário de inscrição são precisas e verdadeiras. <br />
                       2. Você concorda em utilizar o formulário de inscrição de forma responsável, respeitando todas as leis aplicáveis, as políticas internas da SouJunior e os direitos de terceiros.</p>

                   <h4>Informações do Voluntário:</h4>
                   <p className={styles.spacenumber}> 1. Ao se inscrever, você fornecerá informações pessoais, como nome, endereço de e-mail e outros dados relevantes. <br />
                       2. Você é responsável por garantir que todas as informações fornecidas sejam precisas e atualizadas.</p>

                   <h4>Conteúdo da Inscrição:</h4>
                   <p className={styles.spacenumber}>1. Ao enviar sua inscrição, você poderá fornecer informações adicionais e participar de interações relacionadas à sua candidatura. <br />
                       2. Você retém a propriedade de toda informação fornecida. No entanto, ao enviar ou publicar a informação por meio do formulário de inscrição, você concede à SouJunior uma licença não exclusiva, global, sublicenciável e gratuita para usar, reproduzir, modificar, adaptar, distribuir e exibir o Conteúdo da Inscrição, conforme necessário para processar sua inscrição e fornecer os serviços associados.</p>

                   <h4>Propriedade Intelectual:</h4>
                   <p className={styles.spacenumber}> 1. O formulário de inscrição e todo o conteúdo relacionado são propriedade da SouJunior e estão protegidos por leis de propriedade intelectual aplicáveis.<br />
                       2. Nada nestes Termos concede a você o direito de usar qualquer marca registrada, logotipo, nome de domínio ou outros recursos distintivos da SouJunior.</p>

                   <h4>Privacidade e Proteção de Dados:</h4>
                   <p className={styles.spacenumber}> 1. A SouJunior coleta e processa informações pessoais de acordo com sua Política de Privacidade. Ao utilizar o formulário de inscrição, você concorda com a coleta, uso e divulgação de suas informações pessoais de acordo com essa política. <br />
                       2. Empreendemos esforços razoáveis para proteger as informações pessoais dos inscritos, mas não podemos garantir a segurança completa dos dados transmitidos ou armazenados.</p>

                   <h4>Modificações dos Termos:</h4>
                   <p className={styles.spacenumber}> 1. Reservamo-nos o direito de modificar estes Termos a qualquer momento. As modificações entrarão em vigor após a publicação das versões atualizadas no site da SouJunior. <br />
                       2. É sua responsabilidade revisar regularmente estes Termos. O uso contínuo do formulário de inscrição após as modificações constitui sua aceitação dos Termos revisados.</p>

                   <h4>Disposições Gerais:</h4>
                   <p className={styles.spacenumber}> 1. Estes Termos constituem o acordo completo entre você e a SouJunior em relação ao uso do formulário de inscrição.<br />
                       2. Caso qualquer disposição destes Termos seja considerada inválida ou inexequível, as demais disposições permanecerão em pleno vigor e efeito. <br />
                       3. Estes Termos são regidos e interpretados de acordo com as leis do país em que a SouJunior está sediada, sem considerar os conflitos de disposições legais. </p>
                   <p>Ao utilizar o formulário de inscrição de voluntários da SouJunior, você concorda em cumprir estes Termos e Condições de Uso. Se você não concorda com esses termos, não utilize o formulário de inscrição. </p>
               </div>

               <div className={styles.buttonContainer}>
                   <div className={styles.buttonArea}>
                       <button
                           className={`${styles.inButton} ${!scrollEndReached && styles.disabled}`}
                           onClick={scrollEndReached ? onAccept : undefined}
                           disabled={!scrollEndReached}
                       >
                           Li e Concordo
                       </button>
                   </div>
               </div>
           </div>

       </div>
  )
}

export default TermsModal