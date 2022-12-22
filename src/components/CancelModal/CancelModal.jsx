import styles from "./CancelModal.module.css";

const CancelModal = ({
  children,
  shownCancelModal,
  closeCancelModal,
  deleteQuest,
}) => {
  return shownCancelModal ? (
    <div className={styles.modalBackdrop}>
      <div
        className={styles.cancelModal}
        onClick={(e) => {
          // e.stopPropagation();
        }}
      >
        <p className={styles.info}>Delete this Quest?</p>

        <div className={styles.options}>
          <button className={styles.cancel} onClick={closeCancelModal}>
            CANCEL
          </button>
          <span>|</span>
          <button className={styles.delete} onClick={deleteQuest}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export { CancelModal };
