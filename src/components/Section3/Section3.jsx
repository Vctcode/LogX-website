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
        cardHeader: "Time bound inclusion",
        cardContent: "Set a deadline for package delivery as a vendor. If we fail to meet-up, we will refund you your cost. That's a promise!"
    },
    {
        img: illustration2,
        cardHeader: "Real-Time tracking",
        cardContent: "It's your package. You deserve to know where it is at every point in time until its delivered."
    },
    {
        img: illustration3,
        cardHeader: "Decentralization",
        cardContent: "Connect with freelancers, vehicle owners, local dispatchers. Let them compete to get your packages delivered for you."
    }

]
