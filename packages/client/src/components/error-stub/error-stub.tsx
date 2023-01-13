import { HeroBomb } from '../hero-bomb/hero-bomb'

import styles from './error-stub.module.css'

export const ErrorStub = () => {
  return (
    <div className={styles.errorStub}>
      <p className={styles.errorStubText}>
        <span className={styles.errorStubTextDanger}>БАААБАААХ!</span> И ВСЁ
        СЛОМАЛОСЬ!
      </p>
      <HeroBomb />
      <p className={styles.errorStubText}>НО МЫ УЖЕ ЧИНИМ!</p>
    </div>
  )
}
