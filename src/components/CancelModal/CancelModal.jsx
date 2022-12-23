import styles from "./CancelModal.module.css";

const CancelModal = ({ closeCancelModal, handleDelete, tasks }) => {
  const { id } = tasks;
  return (
    <div className={styles.modalBackdrop}>
      <div
        className={styles.cancelModal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p className={styles.info}>Delete this Quest?</p>

        <div className={styles.options}>
          <button
            type="button"
            className={styles.cancel}
            onClick={() => closeCancelModal()}
          >
            CANCEL
          </button>
          <span>|</span>
          <button className={styles.delete} onClick={() => handleDelete(id)}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export { CancelModal };
