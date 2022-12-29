import bn from "./Banner.module.css"

export default function Banner(props) {
    return (
        <div className={bn.banner}>
                <h2>{props.title}</h2>
            </div>
    )
}