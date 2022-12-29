import ReactPlayer from 'react-player/youtube'

// Styles
import dm from './Demo.module.css'
import Banner from '../../components/Banner/Banner'

export default function Demo() {
    return (
        <div className={dm.section}>

            <Banner title="Demo" />            


            <h2>Learn how it works</h2>

            <div className={dm.box__ctn}>
                <div className={dm.box}>
                    <ReactPlayer url={'https://youtu.be/fICUicBTAg0'}  volume={1} controls={true} width={550} />
                    <h4>
                        How to use app as a delivery personnel
                    </h4>
                </div>

                <div className={dm.box}>
                <ReactPlayer url={'https://youtu.be/palsrtNIFM4'}  volume={1} controls={true} width={550} />
                    <h4>
                        How to send packages as a vendor using Log-x app
                    </h4>
                </div>
            </div>


            <div className={dm.mobilebox__ctn}>
                <div className={dm.box}>
                    <ReactPlayer url={'https://youtu.be/fICUicBTAg0'}  volume={1} controls={true} width={370} height={280} />
                    <h4>
                        How to use app as a delivery personnel
                    </h4>
                </div>

                <div className={dm.box}>
                <ReactPlayer url={'https://youtu.be/palsrtNIFM4'}  volume={1} controls={true} width={370} height={280} />
                    <h4>
                        How to send packages as a vendor using Log-x app
                    </h4>
                </div>
            </div>
        </div >
    )
}