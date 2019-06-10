import React, {Component} from 'react'
import './RightSidebar2.css'
import Seoul from './images/Seoul.jpg'
import Sanfransisco from './images/Sanfransisco.jpg'
import Autumn2 from './images/Autumn2.jpg'
import Vietnam from './images/Vietnam.jpg'
import Fire from './images/Fire.jpg'
import Woman from './images/Woman.jpg'
import Detroit from './images/Detroit.jpg'

class RightSidebar2 extends React.Component{
    render(){
        return(
            <div>
                <div className='right-sidebar2'>
                    <div className='section-title11'>
                        <a  href='#'><h4>تصاویر شگفت انگیز از سراسر جهان</h4></a>
                    </div>

                    <div className='post3'>
                        <div className='row2'>
                            <div className='section-post'>
                                <a href='#'><img src={Seoul}></img></a>
                                <div className='section-post-title'>
                                    <div><h3>تصاویر قدیمی از سئول</h3></div>
                                </div>
                                <div><span className='h3'>جریان زندگی روزمره در امپراطوری کره</span></div>
                            </div>
                        </div>
                    </div>

                    <div className='post3'>
                        <div className='row2'>
                            <div className='section-post'>
                                <a href='#'><img src={Sanfransisco}></img></a>
                                <div className='section-post-title'>
                                    <div><h3>عکس هایی از زمین لرزه سال ۱۹۰۶ سان فرانسیسکو  (۲)</h3></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='post3'>
                        <div className='row2'>
                            <div className='section-post'>
                                <a href='#'><img src={Autumn2}></img></a>
                                <div className='section-post-title'>
                                    <div><h3>عکس های فصل پاییز</h3></div>
                                </div>
                                <div><span className='h3'>تن پوش خزان بر قامت زمین</span></div>
                            </div>
                        </div>
                    </div>

                    <div className='post3'>
                        <div className='row2'>
                            <div className='section-post'>
                                <a href='#'><img src={Vietnam}></img></a>
                                <div className='section-post-title'>
                                    <div><h3>تصاویر جنگ داخلی ویتنام</h3></div>
                                </div>
                                <div><span className='h3'>ناامیدی در دستهای یک ملت</span></div>
                            </div>
                        </div>
                    </div>

                    <div className='post3'>
                        <div className='row2'>
                            <div className='section-post'>
                                <a href='#'><img src={Fire}></img></a>
                                <div className='section-post-title'>
                                    <div><h3>تصاویر آتش سوزی در جنگل های امریکا</h3></div>
                                </div>
                                <div><span className='h3'>نابودی طلای سبز</span></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default RightSidebar2