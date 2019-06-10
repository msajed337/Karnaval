import React,{Component} from 'react'
import './CenterPost.css'
import NASA from './images/NASA.jpg'
import MoonSaint from './images/MoonSaint.jpg'

class CenterPost extends React.Component{
    render(){
        return(
            <div>
                <div className='main-div'>
                    <div className='theiaStickySidebar'>
                        <div>
                            <div className='card-post'>
                                    <div className='card-content'>
                                        <div className='center-post'>
                                            <div className='section-tag-post'>
                                                <a href='#'>سفر های فضایی</a>
                                            </div>
                                        </div>
                                        <div className='center-post'>
                                            <div className='section-title-post'>
                                                <a href='#'><h2>ویدیو دیدنی ناسا از زمین</h2></a>
                                            </div>
                                            <div className='section-post-picture'>
                                                <a href='#'><img src={NASA}></img></a>
                                            </div>
                                            <div className='row2'>
                                                <div className='text-content'>
                                                    <div className='post-abstract'>
                                                        <p>کره زمین دیدنی های زیادی را در خود جای داده است و ما در سفرهای کارناوالی مان، 
                                                            اقصی نقاط آن را به تماشا می نشینیم؛ اما این بار می خواهیم با دیدن ویدیو دیدنی ناسا از زمین ، 
                                                            سفری مجازی به فراتر از اتمسفر کره زمین داشته باشیم. این فیلم ناسا از کره زمین، می تواند گوشه هایی 
                                                            از زیبایی های زمین و عظمت خلقت را به ما یادآور شود؛ 
                                                            پس برای سفر به فضا ما با همراه شوید.
                                                             این بار زمین را آن طور می بینیم که فضانوردان به تماشایش می نشینند...
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='post-button'>
                                                    <div className='section-next-btn'>
                                                        <a href='#'>محو تماشا شوید</a>
                                                    </div>
                                                    <div className='next-btn-line'></div>
                                                </div>
                                                <div className='post-detail'>
                                                    <div className='post-date'>
                                                        <div className='meta-comment'>
                                                            <p>
                                                            ۱۳:۰۰ 
                                                            <i className='fa fa-clock-o'></i>
                                                            </p>
                                                            <p>
                                                            ۲۶ اردیبهشت ۱۳۹۸ 
                                                            <i className='fa fa-calendar'></i>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='main-div'>
                    <div className='theiaStickySidebar'>
                        <div>
                            <div className='card-post'>
                                    <div className='card-content'>
                                        <div className='center-post'>
                                            <div className='section-tag-post'>
                                                <a href='#'>گشت و گذار</a>
                                            </div>
                                        </div>
                                        <div className='center-post'>
                                            <div className='section-title-post'>
                                                <a href='#'><h2>ویدیویی از جزیره مون سن میشل در فرانسه</h2></a>
                                            </div>
                                            <div className='section-post-picture'>
                                                <a href='#'><img src={MoonSaint}></img></a>
                                            </div>
                                            <div className='row2'>
                                                <div className='text-content'>
                                                    <div className='post-abstract'>
                                                        <p>این بار می خواهیم به تماشای یکی از زیباترین و رویایی ترین جاذبه های کشور فرانسه برویم. 
                                                            با تماشای ویدیویی از جزیره مون سن میشل، سفری مجازی به این جزیره خواهیم داشت و گشتی در اطراف آن می زنیم. 
                                                            شاید بسیاری از شما تصاویر این جزیره و قصری که در آن جای گرفته است را دیده باشید و شاید هم برای تان سوال باشد که جزیره مون سن میشل کجاست 
                                                            و متعلق به کدام برهه از تاریخ است. با ما همراه باشید تا بیشتر از این جزیره بدانیم و سپس به تماشای چشم انداز جزر و مد آب در این منطقه بنشینیم. 
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='post-button'>
                                                    <div className='section-next-btn'>
                                                        <a href='#'>محو تماشا شوید</a>
                                                    </div>
                                                    <div className='next-btn-line'></div>
                                                </div>
                                                <div className='post-detail'>
                                                    <div className='post-date'>
                                                        <div className='meta-comment'>
                                                            <p>
                                                            ۱۳:۰۰ 
                                                            <i className='fa fa-clock-o'></i>
                                                            </p>
                                                            <p>
                                                            ۲۵ اردیبهشت ۱۳۹۸ 
                                                            <i className='fa fa-calendar'></i>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
        )
    }
}
export default CenterPost