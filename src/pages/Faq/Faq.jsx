import { useState } from 'react'
import fq from './Faq.module.css'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'
import Banner from '../../components/Banner/Banner'

export default function Faq() {
    const [senderAnswer, setSenderAnswer] = useState(false)
    const [deliveryAnswer, setDeliveryAnswer] = useState(false)
    // const [quesNo, setQuesNo] = useState(false)

    const senderToggle = (index) => {
        if (senderAnswer === index) {
            return setSenderAnswer(null)
        }
        setSenderAnswer(index)
    }

    const deliveryToggle = (index) => {
        if (deliveryAnswer === index) {
            return setDeliveryAnswer(null)
        }
        setDeliveryAnswer(index)
    }


    return (
        <IconContext.Provider value={{ color: '#000', size: '16px' }}>

            <Banner title="Frequently Asked Questions" id="faq" />

            <div className={fq.faq}>
                <div className={fq.sender__section}>
                    <h3 className={fq.section__head}>FAQs for Senders</h3>

                    {SenderFaqs.map((faq, index) => {
                        return (
                            <div className={fq.ctn}  key={index}>
                                <div className={fq.question} onClick={() => senderToggle(index)} >
                                    <h5 className={fq.question__text}>{faq.qtn}</h5>
                                    <span>{senderAnswer === index ? <FiMinus /> : <FiPlus />}</span>
                                </div>
                                {senderAnswer === index ?
                                    <p className={fq.answer}>{faq.ans}</p> : null
                                }
                            </div>
                        )
                    })}
                </div>

                <div className={fq.delp__section}>
                    <h3 className={fq.section__head}>FAQs for Delivery Personnels</h3>

                    {DeliveryFaqs.map((item, index) => {
                        return (
                            <div className={fq.ctn} key={index}>
                                <div className={fq.question} onClick={() => deliveryToggle(index)} >
                                    <h5 className={fq.question__text}>{item.qtn}</h5>
                                    <span>{deliveryAnswer === index ? <FiMinus /> : <FiPlus />}</span>
                                </div>
                                {deliveryAnswer === index ?
                                    <p className={fq.answer}>{item.ans}</p> : null
                                }
                            </div>
                        )
                    })}
                </div>
            </div>

        </IconContext.Provider>

    )
}

const SenderFaqs = [
    {
        qtn: "How quickly can I get a delivery personnel ?",
        ans: "Our goal is to get you paired with a deliivery personnel available 15km within your location within 5minutes of request and we are working with many logistic companies and delivery personnels to fulfil this mission.",
    },
    {
        qtn: "Do I pay at pick up or delivery ?",
        ans: "Payment is made on the app before any transaction is initiated.",
    },
    {
        qtn: "What if I cancel the delivery request",
        ans: "We understand this can occur once in a while but with valid reasons. However, if the cancellations are excessive, we may restrict your use of our platform.",
    },
    {
        qtn: "Does Log-X collect money for delivery ?",
        ans: "Yes, we do collect a little commission for every transaction. The power to negotiate fees and terms with the logistics company or delivery personnel is in your hands when delivery outside your city. While we use distance to calculate the price you pay for delivery within your city.",
    },

]

const DeliveryFaqs = [
    {
        qtn: "Who can onboard as a delivery personnel ?",
        ans: "Anybody can be onboarded as a delivery personnel once you pass the verification process.",
    },
    {
        qtn: "Is there another App for delivery personnel onboarding ?",
        ans: "No. Senders and delivery personnel use the same Log-x app for registration and onboarding.",
    },
    {
        qtn: "Do I need to have a vehicle to be onboarded as a delivery personnel ?",
        ans: "No. Anyone can be onboarded as a delivery personnel especially for short distance and intra state.",
    },
    {
        qtn: "What type of vehicle can be onboarded for delivery on the Log-X App ?",
        ans: "Any, as long as it can be used for delivery. These include bicycle, bikes, cars, trucks and others.",
    },
    {
        qtn: "How does the delivery personnel get orders ?",
        ans: 'The delivery personnel only needs to stay online on the "Log-x App" and accept requests from Customers. The delivery personnel will always get notified for every request within 15km from your location.',
    }, 
    {
        qtn: "How does the delivery personnel get orders ?",
        ans: "It is absolutely free.",
    },
    {
        qtn: "Can I onboard more than one vehicle ?",
        ans: "Yes, you can onboard one or more Vehicle but every rider must have a phone for live tracking.",
    },
    {
        qtn: "Will I lose my Vehicle ownership to Log-X ?",
        ans: "No, we do not take over your Vehicle, you simply place your Vehicle on our platform to get you more orders to fulfil to make more money. You do not also need to rebrand your Vehicle to our name.",
    },
    {
        qtn: "I have dispatch vehicles, can you get me riders ?",
        ans: "Yes, we can get you riders. Please reach out to us via contact@logtechx.com",
    },
    {
        qtn: "I am a rider but I have no dispatch vehicle. Can you help ?",
        ans: "Yes, we can connect you to our partner companies that own vehicles and are looking for riders. Please send a mail to contact@logtechx.com",
    },

]