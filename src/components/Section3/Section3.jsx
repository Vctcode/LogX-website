// Styles
import s3 from './Section3.module.css';

// Images
import illustration1 from '../../assets/ils1.svg';
import illustration2 from '../../assets/ils2.svg';
import illustration3 from '../../assets/ils3.svg';

export default function SectionThree() {
    return (
        <div className={s3.sectionThree}>
            {Data.map((item, index) => {
                return (
                    <div key={index} className={s3.ctn}>
                        <div className={s3.imgBox}>
                            <img src={item.img} alt="illustrator" className={s3.img} />
                        </div>

                        <div className={s3.textBox}>
                            <h4 className={s3.cardHeader}>{item.cardHeader}</h4>
                            <p className={s3.cardContent}>{item.cardContent}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const Data = [
    {
        img: illustration1,
        cardHeader: "Header One to Content",
        cardContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quis, consequuntur quaerat id iusto sit! Voluptas, officiis tempora!"
    },
    {
        img: illustration2,
        cardHeader: "Header Two to Content",
        cardContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quis, consequuntur quaerat id iusto sit! Voluptas, officiis tempora!"
    },
    {
        img: illustration3,
        cardHeader: "Header Three to Content",
        cardContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quis, consequuntur quaerat id iusto sit! Voluptas, officiis tempora!"
    }

]
