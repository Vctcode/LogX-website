import styles from './Section2.module.css'

export default function SectionTwo() {
    return (
        <div className={styles.section__two}>
            <div className={styles.section__text}>
                <h2 className={styles.title}>Log<span>X</span></h2>

                <p className={styles.summary}>What we are doing will be summarized here in a captivating caption not more than a 25 words in one sentence.</p>
            </div>

            <div className={styles.card__ctn}>
                <div className={styles.card}>
                    <div className={styles.card__img}></div>
                    <div className={styles.card__bgtext}>A text goes here</div>
                    <div className={styles.card__smltext}>This part explains shortly the text above</div>
                </div>

                <div className={styles.card}>
                    <div className={styles.card__img}></div>
                    <div className={styles.card__bgtext}>A text goes here</div>
                    <div className={styles.card__smltext}>This part explains shortly the text above</div>
                </div>

                <div className={styles.card}>
                    <div className={styles.card__img}></div>
                    <div className={styles.card__bgtext}>A text goes here</div>
                    <div className={styles.card__smltext}>This part explains shortly the text above</div>
                </div>
            </div>
        </div>
    )
}