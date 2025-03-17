import React from 'react';
import styles from './DataConfirmationModal.module.css';

const DataConfirmationModal = ({ show, onAccept, notAccept, dataForm }) => {

    if (!show) {
        return null;
    }
    return (
        <div className={styles.termsContainer}  >
            <div className={styles.modaltermsText}>
                <h2>CONFIRMAÇÃO</h2>
                <div className={styles.textContent} >
                    <div className={styles.itemContent}>
                        <p>Nome:</p>
                        <p>{dataForm[0].name}</p>
                    </div>
                    <div className={styles.itemContent}>
                        <p>E-mail:</p>
                        <p>{dataForm[0].email}</p>
                    </div>
                    {dataForm[0].linkedin && (
                        <div className={styles.itemContent}>
                            <p>Linkedin:</p>
                            <p>{dataForm[0].linkedin}</p>
                        </div>
                    )}
                    {dataForm[0].phone && (
                        <div className={styles.itemContent}>
                            <p>Telefone:</p>
                            <p>{dataForm[0].phone}</p>
                        </div>
                    )}
                    {(dataForm[0].whatsapp === "sim") && (
                        <div className={styles.itemContent}>
                            <p>WhatsApp:</p>
                            <p>{dataForm[0].phone}</p>
                        </div>
                    )}
                </div>
                <div className={styles.buttonContainer}>
                    <button
                        className={styles.inButton}
                        onClick={onAccept}
                    >
                        Confirmar
                    </button>
                    <button
                        className={styles.notAcceptButton}
                        onClick={notAccept}
                    >
                        Cancelar
                    </button>
                </div>
            </div>

        </div>
    )
}

export default DataConfirmationModal