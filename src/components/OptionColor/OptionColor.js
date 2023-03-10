import shortid from 'shortid';
import clsx from 'clsx';
import styles from './OptionColor.module.scss';

const OptionColor = props => {

    const prepareColorClassName = color => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
      }

    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors?.map(color => <li key={shortid()}>
                <button type="button" className={clsx(prepareColorClassName(color),
                props.currentColor === color && styles.active)}
                onClick={() => props.setCurrentColor(color)}></button></li>)}
            </ul>
          </div>
    )
}

export default OptionColor;