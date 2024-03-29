import styles from "./index.module.scss";

interface PriceSettingHeaderProps {
  index: number;
  sectionIndex: number;
  onRemoveClick: (index: number) => void;
}

export default function PriceSettingHeader({
  index,
  sectionIndex,
  onRemoveClick,
}: PriceSettingHeaderProps) {
  const handleRemoveClick = () => {
    onRemoveClick(sectionIndex);
  };

  return (
    <div className={styles.priceSettingHeader}>
      <h4 className={styles.priceSettingHeader__title}>價格設定 - {index}</h4>
      {index !== 1 && (
        <button
          className={styles.priceSettingHeader__removeButton}
          onClick={handleRemoveClick}
        >
          ✕ 移除
        </button>
      )}
    </div>
  );
}
