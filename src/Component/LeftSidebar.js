import React,{Component} from 'react'
import './LeftSidebar.css'
import Poland from './images/Poland.jpg'
import Spain from './images/Spain.jpg'
import Kyrgyzstan from './images/Kyrgyzstan.jpg'
import Autumn from './images/Autumn.jpg'
import Plants from './images/Plants.jpg'
import Khoozestan from './images/Khoozestan.jpg'
import Samurai from './images/Samurai.jpg'
import Pekan from './images/Pekan.jpg'
import Russian from './images/Russian.jpg'
import Rome from './images/Rome.jpg'
import Belgrade from './images/Belgrade.jpg'
import Snowboard from './images/Snowboard.jpg'
import Parkor from './images/Parkor.jpg'
import motor from './images/motor.jpg'
import Rope from './images/Rope.jpg'
import Parkor2 from './images/Parkor2.jpg'
import Scotland from './images/Scotland.jpg'
import Wave from './images/Wave.jpg'

class LeftSidebar extends React.Component{
    render(){
        return(
            <div className='side-bar1'>
                <div className='section-title'>
                    <h4>HD لمس طبیعت با کیفیت</h4>
                </div>

                <div className='post'>
                    <div><img src={Poland} className='section-image'></img></div>
                    <div className='img-title'><h3>طبیعت گردی در لهستان</h3></div>
                </div>

                <div className='post'>
                    <div><img src={Spain} className='section-image'></img></div>
                    <div className='img-title'><h3>بر فراز آتشفشانی در اسپانیا</h3></div>
                </div>

                <div className='post'>
                    <div><img src={Kyrgyzstan} className='section-image'></img></div>
                    <div className='img-title'><h3>طبیعت گردی در قرقیزستان</h3></div>
                </div>

                <div className='post'>
                    <div><img src={Autumn} className='section-image'></img></div>
                    <div className='img-title'><h3>تماشای جلوه پاییزی طبیعت</h3></div>
                </div>

                <div className='post'>
                    <div><img src={Plants} className='section-image'></img></div>
                    <div className='img-title'><h3>دنیای شگفت انگیز گیاهان گوشت خوار</h3></div>
                </div>

                <div className='post'>
                    <div><img src={Khoozestan} className='section-image'></img></div>
                    <div className='img-title'><h3>سفر به طبیعت خوزستان</h3></div>
                </div>
                <div className='section-title'>
                    <h4>هزینه های سفر</h4>
                </div>

                <div className='post'>
                    <div><img src={Samurai} className='section-image'></img></div>
                    <div className='img-title'><h3>هزینه های سفر به سامورایی</h3></div>
                </div>

                <div className='post'>
                    <div><img src={Pekan} className='section-image'></img></div>
                    <div className='img-title'><h3>هزینه های سفر به پکن</h3></div>
                </div>

                <div className='post'>
                    <div><img src={Russian} className='section-image'></img></div>
                    <div className='img-title'><h3>هزینه های سفر به کازان روسیه</h3></div>
                </div>

                <div className='post'>
                    <div><img src={Rome} className='section-image'></img></div>
                    <div className='img-title'><h3>هزینه های سفر به رم</h3></div>
                </div>
                
                <div className='post'>
                    <div><img src={Belgrade} className='section-image'></img></div>
                    <div className='img-title'><h3>هزینه های سفر به بلگراد</h3></div>
                </div>
                
                <div className='section-title'>
                    <h4>ویدیو های هیجان انگیز</h4>
                </div>

                <div className='post'>
                    <div><img src={Snowboard} className='section-image'></img></div>
                    <div className='img-title'><h3>اسنو برد در فصل زمستان</h3></div>
                </div>

                <div className='post'>
                    <div><img src={Parkor} className='section-image'></img></div>
                    <div className='img-title'><h3>ویدیوی هیجانی از پارکور</h3></div>
                </div>

                <div className='post'>
                    <div><img src={motor} className='section-image'></img></div>
                    <div className='img-title'><h3>مسابقه موتور سواری</h3></div>
                </div>

                <div className='post'>
                    <div><img src={Rope} className='section-image'></img></div>
                    <div className='img-title'><h3>راپ سوئینگ در ارتفاعات</h3></div>
                </div>

                <div className='post'>
                    <div><img src={Parkor2} className='section-image'></img></div>
                    <div className='img-title'><h3>کلیپ هیجانی از پارکور</h3></div>
                </div>

                <div className='post'>
                    <div><img src={Scotland} className='section-image'></img></div>
                    <div className='img-title'><h3>تماشای زیبایی های اسکاتلند</h3></div>
                </div>

                <div className='post'>
                    <div><img src={Wave} className='section-image'></img></div>
                    <div className='img-title'><h3>موج سواری</h3></div>
                </div>
            </div>
        )
    }
}
export default LeftSidebar