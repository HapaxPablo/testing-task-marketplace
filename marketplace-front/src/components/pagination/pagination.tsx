import { memo } from 'react'
import styles from './pagination.module.scss'
type PaginationProps = {
    onNextPageClick: () => void;
    onPrevPageClick: () => void;
    disable: {
        left: boolean;
        right: boolean;
    };
    nav?: {
        current: number;
        total: number;
    };
};

const Pagination = memo(function Pagination(props: PaginationProps) {

    const { disable, onNextPageClick, onPrevPageClick, nav } = props

    const handleNextPageClick = () => {
        onNextPageClick();
    };
    const handlePrevPageClick = () => {
        onPrevPageClick();
    };

    return (
        <div className={styles.paginator}>
            <button
                className={styles.arrow}
                type="button"
                onClick={handlePrevPageClick}
                disabled={disable.left}
            >
                {'<'}
            </button>
            {nav && (
                <span className={styles.navigation} >
                    {nav.current} / {nav.total}
                </span>
            )}
            <button
                className={styles.arrow}
                type="button"
                onClick={handleNextPageClick}
                disabled={disable.right}
            >
                {'>'}
            </button>
        </div>
    );
})

export default Pagination