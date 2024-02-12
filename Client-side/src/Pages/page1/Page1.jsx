import React, { useEffect, useRef } from 'react'
import PageFourCard from '../../Components/PageFourCard/PageFourCards'
import PAGE_FOUR_DATA from '../../Components/PageFourCard/PAGE_FOUR_DATA.JS'
import PageSevenCard from '../../Components/PageSevenCard/PageSevenCard'
import PAGE_SEVEN_DATA from '../../Components/PageSevenCard/PAGE_SEVEN_DATA'
import page1_left from '../../Assets/Absolute/page1-left.png'
import page1_right from '../../Assets/Absolute/page1-right.png'
import page2_BLeft from '../../Assets/page2_BLeft.png'
import vector from '../../Assets/vector.png'
import big_circle from '../../Assets/big_circle.png'
import small_circle from '../../Assets/small_circle.png'
import page4_left from '../../Assets/Absolute/page4-left.png'
import page4_Bright from '../../Assets/Absolute/page4-Bright.png'
import page4_LBottom from '../../Assets/Absolute/page4-Lbottom.png'
import page4_MRight from '../../Assets/Absolute/page4-Mright.png'
import page4_headingUnderline from '../../Assets/headingUnderline-4.png'
import page4_pattern from '../../Assets/Pattern.png'
import page7_BLeft from '../../Assets/page7_BLeft.png'
import page7_BMid from '../../Assets/page7_BMid.png'
import page7_BRight from '../../Assets/page7_BRight.png'
import page7_TLeft from '../../Assets/page7_TLeft.png'
import page7_TRight from '../../Assets/page7_TRight.png'
import tick from '../../Assets/tick.png'
import page4_vector from '../../Assets/vector.png'
import page8_leftBox from '../../Assets/page8_leftBox.png'
import page8_leftCircle from '../../Assets/page8_leftCircle.png'
import page8_rightCircle from '../../Assets/page8_rightCircle.png'
import page8_rightTriangle from '../../Assets/page8_rightTriangle.png'
import page8_greenStair from '../../Assets/page8_greenStair.png'
import page8_left from '../../Assets/page8_left.png'
import page9_BRight_inside from '../../Assets/page9_BRight_inside.png'
import page9_TLeft_inside from '../../Assets/page9_TLeft_inside.png'
import page9_TRight_inside from '../../Assets/page9_TRight_inside.png'
import page9_TLeft from '../../Assets/page9_TLeft.png'
import page8_mid from '../../Assets/page8_mid.png'
import page10_BLeft from '../../Assets/page10_BLeft.png'
import page10_MBottom from '../../Assets/page10_MBottom.png'
import homeImg from '../../Assets/home.png'
import Navbar from '../../Components/Navbar/Navbar'
import { TiStarFullOutline } from "react-icons/ti";
import { FaCheckCircle } from "react-icons/fa";
import gsap from "gsap";
import PROCESS_CARD_DATA from '../../Components/ProcessCard/PROCESS_CARD_DATA'
import ProcessCard from '../../Components/ProcessCard/ProcessCard'

export default function page1() {
    const star = useRef();
    const page4Pattern = useRef();
    const vectors2 = useRef();
    const small_circle2 = useRef();
    const big_circle2 = useRef();
    const vector4 = useRef();
    const tickPage4 = useRef();

    useEffect(() => {
        gsap.to(tickPage4.current, {
            opacity: .65,
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: 'power1.inOut',
        })
    })

    useEffect(() => {
        gsap.to(vectors2.current, {
            scale: 1.4,
            duration: 3,
            delay: 1,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
        })
    }, [])

    useEffect(() => {
        gsap.to(big_circle2.current, {
            rotate: 360,
            repeat: -1,
            ease: "none",
            duration: 10
        })
    }, [])

    useEffect(() => {
        gsap.to(small_circle2.current, {
            rotate: -360,
            repeat: -1,
            ease: "none",
            duration: 10
        })
    }, [])

    useEffect(() => {
        gsap.to(vector4.current, {
            scale: 1.4,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
        })
    }, [])

    useEffect(() => {
        gsap.to(page4Pattern.current, {
            rotate: 360,
            repeat: -1,
            ease: "none",
            duration: 20
        })
    })

    useEffect(() => {
        gsap.to(star.current, {
            rotate: "360",
            repeat: -1,
            ease: "none",
            duration: 5
        })
    }, [])

    return (
        <>
            <div className="home">
                <div className="page1">
                    <img src={page1_left} id='page1_left' alt="" />
                    <img src={page1_right} id='page1_right' alt="" />
                    <Navbar />
                    <div className="content">
                        <section>
                            <div className="left">
                                <div className="page1-star">
                                    <div className="star-home" ref={star}><TiStarFullOutline /></div>
                                    <h5>DIGITAL MARKETING AGENCY</h5>
                                </div>
                                <h1>Best Digital Marketing Agency</h1>
                                <p>Boost your digital success with The Ali Marketing, the SEO-savvy experts delivering tailored strategies to skyrocket your online visibility and drive remarkable business growth.</p>
                                <button className="button">
                                    <span>Get Started </span>
                                </button>
                            </div>
                            <div className="right">
                                <img src={homeImg} alt="" />
                            </div>
                        </section>
                    </div>
                </div>
                <div className="page2">
                    <img src={page2_BLeft} id='page2_BLeft' alt="" />
                    <img src={vector} id='vector' ref={vectors2} alt="" />
                    <div className="circles">
                        <img src={big_circle} id='big_circle' ref={big_circle2} alt="" />
                        <img src={small_circle} id='small_circle' ref={small_circle2} alt="" />
                    </div>
                    <h1>Our Process</h1>
                    <div className="processPage">
                        {
                            PROCESS_CARD_DATA.map((val) => {
                                return (
                                    <ProcessCard
                                        heading={val.heading}
                                        para={val.para}
                                        img={val.img}
                                    />
                                )
                            })
                        }
                    </div>
                    <button>Learn More</button>
                </div>
                {/* <div className="page3">
                    <div className="main">
                        <h1>Take your business to the next level</h1>
                        <p>You’ll be receiving a fully customized breakdown of how you can change your business and implement some of the secrets that we have used to generate hundreds of thousands of dollars in profit, both for ourselves and for our clients.<br /> <br />

                            Firstly we’ll evaluate your business and use our advanced tools to asses your website & where you’ve been going wrong all this time, as well as also develop a strategic blueprint to dramatically skyrocket your sales, both consistently and efficiently<br /><br />

                            We’ll help you reveal where your dream clients have been hiding all along and how you can easily persuade them to become loyal customers and subscribers. We will delve right into the depths of your industry, even by using our tools to find out the exact keywords and demographics that your competition has been targeting, to see what works best for you and your business<br /><br />

                            By combining all of this with our Santa’s bag of endless goodies, we’ll be able to exponentially increase your traffic, your leads and most importantly, your sales. Take the leap of faith and become the LEADER of your industry!<br /><br />

                        </p>
                    </div>
                </div> */}
                <div className="page4">
                    <img src={page4_left} id='page4_left' alt="" />
                    <img src={page4_Bright} id='page4_Bright' alt="" />
                    <img src={page4_LBottom} id='page4_LBottom' alt="" />
                    <img src={page4_MRight} id='page4_MRight' alt="" />
                    <img src={vector} id='vector4' ref={vector4} alt="" />
                    <div className="checkTick" id='checkTick'>
                        <img src={page4_pattern} id='page4_pattern' ref={page4Pattern} alt="" />
                        <img src={tick} ref={tickPage4} id='tick' alt="" />
                    </div>
                    <div className="head">
                        <h1>What we’ll do for you <span> <img src={page4_headingUnderline} alt="" /></span> </h1>
                        <p> thousandsof products and offer continuous addition and monthly campaign optimization.</p>
                    </div>
                    <div className="content">
                        {
                            PAGE_FOUR_DATA.map((val) => {
                                return (
                                    <PageFourCard
                                        img={val.img}
                                        head={val.heading}
                                        para={val.para}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                {/* <div className="page5">
                    <div className="main">
                        <div className="left">
                            <h1>Content Creation</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <button>Learn More</button>
                        </div>
                        <div className="right">
                            <img src={page5Right} alt="" />
                        </div>
                    </div>
                </div> */}
                <div className="page6">
                </div>
                <div className="page7">
                    <img src={page7_BLeft} id='page7_BLeft' alt="" />
                    <img src={page7_BMid} id='page7_BMid' alt="" />
                    <img src={page7_BRight} id='page7_BRight' alt="" />
                    <img src={page7_TLeft} id='page7_TLeft' alt="" />
                    <img src={page7_TRight} id='page7_TRight' alt="" />
                    <div className="main">
                        <div className="left">
                            <h4>WHY CHOOSE US</h4>
                            <h1>One-stop digital marketing services</h1>
                            <p>Supercharge your online presence with our Digital Marketing Agency. We excel in SEO, Social Media Marketing, and content creation. Dominate search rankings, engage customers, and drive targeted traffic. Partner with us for unparalleled digital success..</p>
                            <button>Get Started</button>
                        </div>
                        <div className="right">
                            <div className="page7Card">
                                {
                                    PAGE_SEVEN_DATA.map((a) => {
                                        return (
                                            <PageSevenCard
                                                img={a.img}
                                                head={a.head}
                                                para={a.para}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page10">
                    <img src={page10_BLeft} id='page10_BLeft' alt="" />
                    <img src={page10_MBottom} id='page10_MBottom' alt="" />
                    <div className="main">
                        <div className="head">
                            <div className="left">
                                <h1>Plans & Pricing</h1>
                                <p>Whether your time-saving automation needs are large or small, we’re here to help you scale.</p>
                            </div>
                            <div className="right">
                                <button>MONTHLY</button>
                                <button>YEARLY</button>
                            </div>
                        </div>
                        <div className="content">
                            <div className="CMain">
                                <div className="first">
                                    <h1>$19 <span> /month</span> </h1>
                                    <h3>Starter</h3>
                                    <p>Unleash the power of automation.</p>
                                    <li> <FaCheckCircle /> Multi-step Zaps</li>
                                    <li> <FaCheckCircle /> 3 Premium Apps</li>
                                    <li> <FaCheckCircle /> 2 Users team</li>
                                    <li>     .</li>
                                    <li>     .</li>
                                    <li>     .</li>
                                    <button>Choose plan</button>
                                </div>
                                <div className="second">
                                    <h1>$54 <span> /month</span> </h1>
                                    <h3>Professional</h3>
                                    <p>Advanced tools to take your work to the next level.</p>
                                    <li> <FaCheckCircle /> Multi-step Zaps</li>
                                    <li> <FaCheckCircle /> Unlimited Premium Apps</li>
                                    <li> <FaCheckCircle /> 50 Users team</li>
                                    <li> <FaCheckCircle /> Shared Workspace</li>
                                    <li>     .</li>
                                    <li>     .</li>
                                    <button>Choose plan</button>
                                </div>
                                <div className="third">
                                    <h5>MOST POPULAR</h5>
                                    <h1>$89 <span> /month</span> </h1>
                                    <h3>Company</h3>
                                    <p>Automation plus enterprise-grade features.</p>
                                    <li> <FaCheckCircle /> Multi-step Zaps</li>
                                    <li> <FaCheckCircle /> Unlimited Premium</li>
                                    <li> <FaCheckCircle /> Unlimited Users Team</li>
                                    <li> <FaCheckCircle /> Advanced Admin</li>
                                    <li> <FaCheckCircle /> Custom Data Retention</li>
                                    <li>     .</li>
                                    <button>Choose plan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page8">
                    <img src={page8_left} id='page8_left' alt="" />
                    <img src={page8_mid} id='page8_mid' alt="" />
                    <div className="main">
                        <img src={page8_leftBox} id='page8_leftBox' alt="" />
                        <img src={page8_leftCircle} id='page8_leftCircle' alt="" />
                        <img src={page8_rightCircle} id='page8_rightCircle' alt="" />
                        <img src={page8_rightTriangle} id='page8_rightTriangle' alt="" />
                        <h1>Subscribe to our newsletter</h1>
                        <p>ign up to our newsletter to get our blogs which include strategies, tips and tactics to generate millions</p>
                        <div className="inputs">
                            <input type="text" placeholder='First name' />
                            <input type="text" placeholder='Email address' />
                            <button>Subscribe Now</button>
                        </div>
                    </div>
                </div>
                <div className="page9">
                    <img src={page9_TLeft} id='page9_TLeft' alt="" />
                    <div className="main">
                        <h1>Let us know how we can help</h1>
                        <div className="content">
                            <img src={page9_BRight_inside} id='page9_BRight_inside' alt="" />
                            <img src={page9_TLeft_inside} id='page9_TLeft_inside' alt="" />
                            <img src={page9_TRight_inside} id='page9_TRight_inside' alt="" />
                            <div className="CMain">
                                <h1>Subscribe Newsletter</h1>
                                <input type="text" placeholder='First Name' />
                                <input type="text" placeholder='Last Name' />
                                <input type="text" />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
